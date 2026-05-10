/**
 * Module 79268 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

79268: (bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, i) => {
    "use strict";
    i.d(bitmapCoordinatesPane_t, {
      PaneRendererLine: () => g,
      PaneRendererLineItemsIterator: () => m,
      isValidPoint: () => p
    });
    var bitmapCoordinatesPane_s = i(50151),
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

    function p(bitmapCoordinatesPane_e) {
      return null !== bitmapCoordinatesPane_e && !isNaN(bitmapCoordinatesPane_e.y)
    }
    class m {
      constructor(bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, i, o) {
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
          }, bitmapCoordinatesPane_e.length && ((0, bitmapCoordinatesPane_s.assert)(bitmapCoordinatesPane_t <= i, "First index must be less or equal to last index"), (0, bitmapCoordinatesPane_s.assert)(bitmapCoordinatesPane_t <
            bitmapCoordinatesPane_e.length, "First index must be less then array length"), (0, bitmapCoordinatesPane_s.assert)(i <= bitmapCoordinatesPane_e.length,
            "Last index must be less or equal to array length")), this._items = bitmapCoordinatesPane_e, this._firstIndexWithRange = bitmapCoordinatesPane_t, this
          ._lastIndexWithRange = i, this._skipHoles = o
      }
      next() {
        if (0 === this._items.length) return !1;
        if (null !== this._calculatedNext.index) return null !== this._calculatedNext.value && (this._calculatedPrev =
          this._calculatedCurrent, this._calculatedCurrent = this._calculatedNext, this._calculatedNext = {
            index: null,
            currentBreakProcessed: !1,
            value: null
          }, !0);
        let bitmapCoordinatesPane_e;
        this._preallocatedVariable = {
          ...this._calculatedCurrent
        };
        do {
          null === this._preallocatedVariable.index ? (this._preallocatedVariable.index = this._firstIndexWithRange,
            this._preallocatedVariable.currentBreakProcessed = !1, bitmapCoordinatesPane_e = this._preallocatedVariable.index < this
            ._lastIndexWithRange) : (this._incrementPointer(this._preallocatedVariable), bitmapCoordinatesPane_e = this._isValidPointer(
            this._preallocatedVariable)), bitmapCoordinatesPane_e && this._calcVaue(this._preallocatedVariable)
        } while (bitmapCoordinatesPane_e && this._skipHoles && !p(this._preallocatedVariable.value));
        return bitmapCoordinatesPane_e && (this._calculatedPrev = this._calculatedCurrent, this._calculatedCurrent = this
          ._preallocatedVariable, this._calculatedNext = {
            index: null,
            currentBreakProcessed: !1,
            value: null
          }), bitmapCoordinatesPane_e
      }
      prevValue() {
        return this._calculatedPrev.value
      }
      currentValue() {
        return (0, bitmapCoordinatesPane_s.ensureNotNull)(this._calculatedCurrent.value)
      }
      currentValueIsLast() {
        return (0, bitmapCoordinatesPane_s.ensureNotNull)(this._calculatedCurrent.index) === this._items.length - 1
      }
      currentValueIsFirst() {
        return 0 === (0, bitmapCoordinatesPane_s.ensureNotNull)(this._calculatedCurrent.index)
      }
      nextValue() {
        if (null !== this._calculatedNext.index) return this._calculatedNext.value;
        let bitmapCoordinatesPane_e;
        this._calculatedNext = {
          ...this._calculatedCurrent,
          value: null
        };
        do {
          this._incrementPointer(this._calculatedNext), bitmapCoordinatesPane_e = this._isValidPointer(this._calculatedNext), bitmapCoordinatesPane_e ? this
            ._calcVaue(this._calculatedNext) : this._calculatedNext.value = null
        } while (bitmapCoordinatesPane_e && this._skipHoles && !p(this._calculatedNext.value));
        return this._calculatedNext.value
      }
      atStart() {
        return this._calculatedCurrent.index === this._firstIndexWithRange && !this._calculatedCurrent
          .currentBreakProcessed
      }
      atEnd() {
        const bitmapCoordinatesPane_e = (0, bitmapCoordinatesPane_s.ensureNotNull)(this._calculatedCurrent.index);
        return bitmapCoordinatesPane_e < this._lastIndexWithRange && (this._calculatedCurrent.currentBreakProcessed || !this
          ._needBreakBefore(bitmapCoordinatesPane_e))
      }
      _needBreakBefore(bitmapCoordinatesPane_e) {
        return !!this._items[bitmapCoordinatesPane_e].breakBefore && !this._skipHoles
      }
      _calcVaue(bitmapCoordinatesPane_e) {
        const bitmapCoordinatesPane_t = (0, bitmapCoordinatesPane_s.ensureNotNull)(bitmapCoordinatesPane_e.index);
        this._needBreakBefore(bitmapCoordinatesPane_t) && !bitmapCoordinatesPane_e.currentBreakProcessed ? bitmapCoordinatesPane_e.value = _ : bitmapCoordinatesPane_e.value = this._items[bitmapCoordinatesPane_t]
      }
      _incrementPointer(bitmapCoordinatesPane_e) {
        const bitmapCoordinatesPane_t = (0, bitmapCoordinatesPane_s.ensureNotNull)(bitmapCoordinatesPane_e.index);
        this._needBreakBefore(bitmapCoordinatesPane_t) && !this._calculatedCurrent.currentBreakProcessed ? bitmapCoordinatesPane_e.currentBreakProcessed = !0 : (bitmapCoordinatesPane_e
          .index = bitmapCoordinatesPane_t + 1, bitmapCoordinatesPane_e.currentBreakProcessed = !1)
      }
      _isValidPointer(bitmapCoordinatesPane_e) {
        const bitmapCoordinatesPane_t = (0, bitmapCoordinatesPane_s.ensureNotNull)(bitmapCoordinatesPane_e.index);
        return bitmapCoordinatesPane_t < this._lastIndexWithRange || bitmapCoordinatesPane_t === this._lastIndexWithRange - 1 && this._needBreakBefore(bitmapCoordinatesPane_t) && bitmapCoordinatesPane_e
          .currentBreakProcessed
      }
    }
    class g extends c.BitmapCoordinatesPaneRenderer {
      constructor(bitmapCoordinatesPane_e) {
        super(), this._data = bitmapCoordinatesPane_e
      }
      hitTest(bitmapCoordinatesPane_e) {
        const bitmapCoordinatesPane_t = (0, a.interactionTolerance)().series + this._data.lineWidth / 2;
        let i = this._data.visibleItemsRange?.startItemIndex ?? 0,
          bitmapCoordinatesPane_s = (this._data.visibleItemsRange?.endItemIndex ?? this._data.items.length) - 1;
        for (; bitmapCoordinatesPane_s - i > 2;) {
          const bitmapCoordinatesPane_t = Math.round((bitmapCoordinatesPane_s + i) / 2);
          this._data.items[bitmapCoordinatesPane_t].center <= bitmapCoordinatesPane_e.x ? i = bitmapCoordinatesPane_t : bitmapCoordinatesPane_s = bitmapCoordinatesPane_t
        }
        i = Math.max(1, i - 1), bitmapCoordinatesPane_s = Math.min(this._data.items.length - 1, bitmapCoordinatesPane_s + 1);
        for (let a = i; a <= bitmapCoordinatesPane_s; ++a) {
          const i = this._data.items[a - 1],
            bitmapCoordinatesPane_s = this._data.items[a],
            l = i.center,
            c = bitmapCoordinatesPane_s.center;
          if ((0, n.distanceToSegment)(new o.Point(l, i.y), new o.Point(c, bitmapCoordinatesPane_s.y), new o.Point(bitmapCoordinatesPane_e.x, bitmapCoordinatesPane_e.y)).distance <=
            bitmapCoordinatesPane_t) return this._data.hittest ? this._data.hittest : new r.HitTestResult(r.HitTarget.Regular)
        }
        return null
      }
      _drawImpl(bitmapCoordinatesPane_e) {
        const {
          context: bitmapCoordinatesPane_t,
          horizontalPixelRatio: i,
          verticalPixelRatio: bitmapCoordinatesPane_s
        } = bitmapCoordinatesPane_e;
        bitmapCoordinatesPane_t.scale(i, bitmapCoordinatesPane_s), bitmapCoordinatesPane_t.lineCap = "round", bitmapCoordinatesPane_t.lineJoin = "round", (0, h.applyColor)(bitmapCoordinatesPane_e, this._data.lineColor, 0, 3),
          bitmapCoordinatesPane_t.lineWidth = this._data.lineWidth, (0, l.setLineStyle)(bitmapCoordinatesPane_t, this._data.lineStyle), (0, a.setValidLineStyle)
          (bitmapCoordinatesPane_t, this._data.lineStyle), this._data.simpleMode ? this._drawSimpleMode(bitmapCoordinatesPane_e) : this._drawLines(bitmapCoordinatesPane_t)
      }
      _drawSimpleMode(bitmapCoordinatesPane_e) {
        const {
          context: bitmapCoordinatesPane_t,
          horizontalPixelRatio: i,
          verticalPixelRatio: bitmapCoordinatesPane_s
        } = bitmapCoordinatesPane_e;
        bitmapCoordinatesPane_t.beginPath(), this._walkLine(bitmapCoordinatesPane_t, this._data.items, !1, NaN), bitmapCoordinatesPane_t.stroke();
        const o = this._data.lineWidth + 2;
        if (this._data.withMarkers && 2 * o < this._data.barSpacing) {
          bitmapCoordinatesPane_t.scale(1 / i, 1 / bitmapCoordinatesPane_s), (0, h.applyColor)(bitmapCoordinatesPane_e, this._data.lineColor, 1, 2);
          const n = Math.max(1, Math.floor(i)) % 2 / 2,
            r = o * bitmapCoordinatesPane_s + n,
            a = 2 * Math.PI;
          bitmapCoordinatesPane_t.beginPath();
          const l = this._data.visibleItemsRange?.startItemIndex ?? 0;
          for (let bitmapCoordinatesPane_e = (this._data.visibleItemsRange?.endItemIndex ?? this._data.items.length) - 1 + 1; bitmapCoordinatesPane_e-- >= l;) {
            const o = this._data.items[bitmapCoordinatesPane_e];
            if (o) {
              const bitmapCoordinatesPane_e = Math.round(o.center * i) + n,
                l = o.y * bitmapCoordinatesPane_s;
              bitmapCoordinatesPane_t.moveTo(bitmapCoordinatesPane_e, l), bitmapCoordinatesPane_t.arc(bitmapCoordinatesPane_e, l, r, 0, a)
            }
          }
          bitmapCoordinatesPane_t.fill()
        }
      }
      _walkLine(bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, i, bitmapCoordinatesPane_s, o, n, r) {
        if (!bitmapCoordinatesPane_t) return {
          distance: 0,
          dashPattern: []
        };
        const a = .25 * this._data.barSpacing;
        let l, c, h = null;
        const _ = o ? 0 : this._data.visibleItemsRange?.startItemIndex ?? 0,
          g = o ? bitmapCoordinatesPane_t.length : Math.min(this._data.visibleItemsRange?.endItemIndex ?? bitmapCoordinatesPane_t.length, bitmapCoordinatesPane_t.length);
        if (_ > g || _ >= bitmapCoordinatesPane_t.length) return {
          distance: 0,
          dashPattern: []
        };
        if (!n) {
          const {
            distance: n,
            dashPattern: a
          } = this._walkLine(bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, i, bitmapCoordinatesPane_s, o, !0, r), l = (0, d.sum)(a);
          if (l > 0) {
            const bitmapCoordinatesPane_t = n % l;
            bitmapCoordinatesPane_e.lineDashOffset = l - bitmapCoordinatesPane_t - a[1]
          }
        }
        const f = new u.SmartDashCanvas(bitmapCoordinatesPane_e, !!n, r),
          y = new m(bitmapCoordinatesPane_t, _, g, this._data.skipHoles);
        for (; y.next();) {
          if (l = y.currentValue(), c = y.nextValue(), p(l)) {
            const bitmapCoordinatesPane_e = Math.round(l.center);
            h && p(h) ? (f.lineTo(bitmapCoordinatesPane_e, l.y), i && !p(c) && f.lineTo(bitmapCoordinatesPane_e, bitmapCoordinatesPane_s)) : c && p(c) ? i ? (y.atStart() || f.lineTo(
              bitmapCoordinatesPane_e, bitmapCoordinatesPane_s), f.lineTo(bitmapCoordinatesPane_e, l.y)) : f.moveTo(bitmapCoordinatesPane_e, l.y) : i ? (y.atStart() || f.lineTo(bitmapCoordinatesPane_e - a, bitmapCoordinatesPane_s), f.lineTo(bitmapCoordinatesPane_e -
              a, l.y), f.lineTo(bitmapCoordinatesPane_e + a, l.y), f.lineTo(bitmapCoordinatesPane_e + a, bitmapCoordinatesPane_s)) : (f.moveTo(bitmapCoordinatesPane_e - a, l.y), f.lineTo(bitmapCoordinatesPane_e + a, l.y))
          }
          h = l
        }
        return {
          distance: f.lastSegmentDistance(),
          dashPattern: f.lastSegmentDashPattern()
        }
      }
      _drawLines(bitmapCoordinatesPane_e, bitmapCoordinatesPane_t) {
        if (!this._data.items.length || 0 === this._data.lineWidth) return {
          distance: 0,
          dashPattern: []
        };
        let i, bitmapCoordinatesPane_s, o = null;
        const n = .25 * this._data.barSpacing,
          r = new u.SmartDashCanvas(bitmapCoordinatesPane_e, !!bitmapCoordinatesPane_t);
        let a = 0;
        if (!bitmapCoordinatesPane_t) {
          const {
            distance: bitmapCoordinatesPane_t,
            dashPattern: i
          } = this._drawLines(bitmapCoordinatesPane_e, !0), bitmapCoordinatesPane_s = (0, d.sum)(i);
          if (bitmapCoordinatesPane_s > 0) {
            const o = bitmapCoordinatesPane_t % bitmapCoordinatesPane_s;
            bitmapCoordinatesPane_e.lineDashOffset = a = bitmapCoordinatesPane_s - o - i[1]
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
        let _, g = bitmapCoordinatesPane_e.strokeStyle,
          f = bitmapCoordinatesPane_e.lineWidth;
        const y = new m(this._data.items, l, c, this._data.skipHoles);
        for (; y.next();) {
          let l, c, h;
          o = y.prevValue(), i = y.currentValue(), bitmapCoordinatesPane_s = y.nextValue();
          let u = !1,
            m = !1,
            w = !1;
          if (p(i) && (i.style && !this._data.forceLineColor ? (l = i.style.color, c = i.style.width, h = i.style
                .style) : (l = this._data.lineColor, c = this._data.lineWidth, h = this._data.lineStyle), this._data
              .ignorePaletteLineWidth && (c = this._data.lineWidth), m = h !== _, w = c !== f, u = l !== g || m || w
              ), u) {
            if (g = l, f = c, _ = h, r.stroke(), r.beginPath(), !bitmapCoordinatesPane_t) {
              r.setStrokeStyle(l);
              const bitmapCoordinatesPane_t = r.lastSegmentDistance(),
                i = r.lastSegmentDashPattern(),
                bitmapCoordinatesPane_s = (0, d.sum)(i);
              if (bitmapCoordinatesPane_s > 0) {
                const i = bitmapCoordinatesPane_t % bitmapCoordinatesPane_s;
                bitmapCoordinatesPane_e.lineDashOffset = i + a
              }
            }
            if (r.setLineWidth(c), r.setLineStyle(h), p(o)) r.moveTo(o.center, o.y);
            else {
              const bitmapCoordinatesPane_e = i;
              r.moveTo(bitmapCoordinatesPane_e.center, bitmapCoordinatesPane_e.y)
            }
          }
          v = o, b = bitmapCoordinatesPane_s, p(S = i) && (p(v) ? r.lineTo(S.center, S.y) : b && p(b) ? r.moveTo(S.center, S.y) : (r
            .moveTo(S.center - n, S.y), r.lineTo(S.center + n, S.y)))
        }
        var v, S, b;
        return r.stroke(), {
          distance: r.lastSegmentDistance(),
          dashPattern: r.lastSegmentDashPattern()
        }
      }
    }
}
