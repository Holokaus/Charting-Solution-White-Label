/**
 * Module 79268 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

79268: (bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, bitmapCoordinatesPane_i) => {
    "use strict";
    bitmapCoordinatesPane_i.bitmapCoordinatesPane_d(bitmapCoordinatesPane_t, {
      PaneRendererLine: () => bitmapCoordinatesPane_g,
      PaneRendererLineItemsIterator: () => bitmapCoordinatesPane_m,
      isValidPoint: () => bitmapCoordinatesPane_p
    });
    var bitmapCoordinatesPane_s = bitmapCoordinatesPane_i(50151),
      bitmapCoordinatesPane_o = bitmapCoordinatesPane_i(10555),
      bitmapCoordinatesPane_n = bitmapCoordinatesPane_i(2624),
      bitmapCoordinatesPane_r = bitmapCoordinatesPane_i(2383),
      bitmapCoordinatesPane_a = bitmapCoordinatesPane_i(4539),
      bitmapCoordinatesPane_l = bitmapCoordinatesPane_i(58221),
      bitmapCoordinatesPane_c = bitmapCoordinatesPane_i(10307),
      bitmapCoordinatesPane_h = bitmapCoordinatesPane_i(4699),
      bitmapCoordinatesPane_d = bitmapCoordinatesPane_i(12217),
      bitmapCoordinatesPane_u = bitmapCoordinatesPane_i(85565);
    const _ = {
      bitmapCoordinatesPane_y: NaN
    };

    function bitmapCoordinatesPane_p(bitmapCoordinatesPane_e) {
      return null !== bitmapCoordinatesPane_e && !isNaN(bitmapCoordinatesPane_e.bitmapCoordinatesPane_y)
    }
    class bitmapCoordinatesPane_m {
      constructor(bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, bitmapCoordinatesPane_i, bitmapCoordinatesPane_o) {
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
          }, bitmapCoordinatesPane_e.length && ((0, bitmapCoordinatesPane_s.assert)(bitmapCoordinatesPane_t <= bitmapCoordinatesPane_i, "First index must be less or equal to last index"), (0, bitmapCoordinatesPane_s.assert)(bitmapCoordinatesPane_t <
            bitmapCoordinatesPane_e.length, "First index must be less then array length"), (0, bitmapCoordinatesPane_s.assert)(bitmapCoordinatesPane_i <= bitmapCoordinatesPane_e.length,
            "Last index must be less or equal to array length")), this._items = bitmapCoordinatesPane_e, this._firstIndexWithRange = bitmapCoordinatesPane_t, this
          ._lastIndexWithRange = bitmapCoordinatesPane_i, this._skipHoles = bitmapCoordinatesPane_o
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
        } while (bitmapCoordinatesPane_e && this._skipHoles && !bitmapCoordinatesPane_p(this._preallocatedVariable.value));
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
        } while (bitmapCoordinatesPane_e && this._skipHoles && !bitmapCoordinatesPane_p(this._calculatedNext.value));
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
    class bitmapCoordinatesPane_g extends bitmapCoordinatesPane_c.BitmapCoordinatesPaneRenderer {
      constructor(bitmapCoordinatesPane_e) {
        super(), this._data = bitmapCoordinatesPane_e
      }
      hitTest(bitmapCoordinatesPane_e) {
        const bitmapCoordinatesPane_t = (0, bitmapCoordinatesPane_a.interactionTolerance)().series + this._data.lineWidth / 2;
        let bitmapCoordinatesPane_i = this._data.visibleItemsRange?.startItemIndex ?? 0,
          bitmapCoordinatesPane_s = (this._data.visibleItemsRange?.endItemIndex ?? this._data.items.length) - 1;
        for (; bitmapCoordinatesPane_s - bitmapCoordinatesPane_i > 2;) {
          const bitmapCoordinatesPane_t = Math.round((bitmapCoordinatesPane_s + bitmapCoordinatesPane_i) / 2);
          this._data.items[bitmapCoordinatesPane_t].center <= bitmapCoordinatesPane_e.bitmapCoordinatesPane_x ? bitmapCoordinatesPane_i = bitmapCoordinatesPane_t : bitmapCoordinatesPane_s = bitmapCoordinatesPane_t
        }
        bitmapCoordinatesPane_i = Math.max(1, bitmapCoordinatesPane_i - 1), bitmapCoordinatesPane_s = Math.min(this._data.items.length - 1, bitmapCoordinatesPane_s + 1);
        for (let bitmapCoordinatesPane_a = bitmapCoordinatesPane_i; bitmapCoordinatesPane_a <= bitmapCoordinatesPane_s; ++bitmapCoordinatesPane_a) {
          const bitmapCoordinatesPane_i = this._data.items[bitmapCoordinatesPane_a - 1],
            bitmapCoordinatesPane_s = this._data.items[bitmapCoordinatesPane_a],
            bitmapCoordinatesPane_l = bitmapCoordinatesPane_i.center,
            bitmapCoordinatesPane_c = bitmapCoordinatesPane_s.center;
          if ((0, bitmapCoordinatesPane_n.distanceToSegment)(new bitmapCoordinatesPane_o.Point(bitmapCoordinatesPane_l, bitmapCoordinatesPane_i.bitmapCoordinatesPane_y), new bitmapCoordinatesPane_o.Point(bitmapCoordinatesPane_c, bitmapCoordinatesPane_s.bitmapCoordinatesPane_y), new bitmapCoordinatesPane_o.Point(bitmapCoordinatesPane_e.bitmapCoordinatesPane_x, bitmapCoordinatesPane_e.bitmapCoordinatesPane_y)).distance <=
            bitmapCoordinatesPane_t) return this._data.hittest ? this._data.hittest : new bitmapCoordinatesPane_r.HitTestResult(bitmapCoordinatesPane_r.HitTarget.Regular)
        }
        return null
      }
      _drawImpl(bitmapCoordinatesPane_e) {
        const {
          context: bitmapCoordinatesPane_t,
          horizontalPixelRatio: bitmapCoordinatesPane_i,
          verticalPixelRatio: bitmapCoordinatesPane_s
        } = bitmapCoordinatesPane_e;
        bitmapCoordinatesPane_t.scale(bitmapCoordinatesPane_i, bitmapCoordinatesPane_s), bitmapCoordinatesPane_t.lineCap = "round", bitmapCoordinatesPane_t.lineJoin = "round", (0, bitmapCoordinatesPane_h.applyColor)(bitmapCoordinatesPane_e, this._data.lineColor, 0, 3),
          bitmapCoordinatesPane_t.lineWidth = this._data.lineWidth, (0, bitmapCoordinatesPane_l.setLineStyle)(bitmapCoordinatesPane_t, this._data.lineStyle), (0, bitmapCoordinatesPane_a.setValidLineStyle)
          (bitmapCoordinatesPane_t, this._data.lineStyle), this._data.simpleMode ? this._drawSimpleMode(bitmapCoordinatesPane_e) : this._drawLines(bitmapCoordinatesPane_t)
      }
      _drawSimpleMode(bitmapCoordinatesPane_e) {
        const {
          context: bitmapCoordinatesPane_t,
          horizontalPixelRatio: bitmapCoordinatesPane_i,
          verticalPixelRatio: bitmapCoordinatesPane_s
        } = bitmapCoordinatesPane_e;
        bitmapCoordinatesPane_t.beginPath(), this._walkLine(bitmapCoordinatesPane_t, this._data.items, !1, NaN), bitmapCoordinatesPane_t.stroke();
        const bitmapCoordinatesPane_o = this._data.lineWidth + 2;
        if (this._data.withMarkers && 2 * bitmapCoordinatesPane_o < this._data.barSpacing) {
          bitmapCoordinatesPane_t.scale(1 / bitmapCoordinatesPane_i, 1 / bitmapCoordinatesPane_s), (0, bitmapCoordinatesPane_h.applyColor)(bitmapCoordinatesPane_e, this._data.lineColor, 1, 2);
          const bitmapCoordinatesPane_n = Math.max(1, Math.floor(bitmapCoordinatesPane_i)) % 2 / 2,
            bitmapCoordinatesPane_r = bitmapCoordinatesPane_o * bitmapCoordinatesPane_s + bitmapCoordinatesPane_n,
            bitmapCoordinatesPane_a = 2 * Math.PI;
          bitmapCoordinatesPane_t.beginPath();
          const bitmapCoordinatesPane_l = this._data.visibleItemsRange?.startItemIndex ?? 0;
          for (let bitmapCoordinatesPane_e = (this._data.visibleItemsRange?.endItemIndex ?? this._data.items.length) - 1 + 1; bitmapCoordinatesPane_e-- >= bitmapCoordinatesPane_l;) {
            const bitmapCoordinatesPane_o = this._data.items[bitmapCoordinatesPane_e];
            if (bitmapCoordinatesPane_o) {
              const bitmapCoordinatesPane_e = Math.round(bitmapCoordinatesPane_o.center * bitmapCoordinatesPane_i) + bitmapCoordinatesPane_n,
                bitmapCoordinatesPane_l = bitmapCoordinatesPane_o.bitmapCoordinatesPane_y * bitmapCoordinatesPane_s;
              bitmapCoordinatesPane_t.moveTo(bitmapCoordinatesPane_e, bitmapCoordinatesPane_l), bitmapCoordinatesPane_t.arc(bitmapCoordinatesPane_e, bitmapCoordinatesPane_l, bitmapCoordinatesPane_r, 0, bitmapCoordinatesPane_a)
            }
          }
          bitmapCoordinatesPane_t.fill()
        }
      }
      _walkLine(bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, bitmapCoordinatesPane_i, bitmapCoordinatesPane_s, bitmapCoordinatesPane_o, bitmapCoordinatesPane_n, bitmapCoordinatesPane_r) {
        if (!bitmapCoordinatesPane_t) return {
          distance: 0,
          dashPattern: []
        };
        const bitmapCoordinatesPane_a = .25 * this._data.barSpacing;
        let bitmapCoordinatesPane_l, bitmapCoordinatesPane_c, bitmapCoordinatesPane_h = null;
        const _ = bitmapCoordinatesPane_o ? 0 : this._data.visibleItemsRange?.startItemIndex ?? 0,
          bitmapCoordinatesPane_g = bitmapCoordinatesPane_o ? bitmapCoordinatesPane_t.length : Math.min(this._data.visibleItemsRange?.endItemIndex ?? bitmapCoordinatesPane_t.length, bitmapCoordinatesPane_t.length);
        if (_ > bitmapCoordinatesPane_g || _ >= bitmapCoordinatesPane_t.length) return {
          distance: 0,
          dashPattern: []
        };
        if (!bitmapCoordinatesPane_n) {
          const {
            distance: bitmapCoordinatesPane_n,
            dashPattern: bitmapCoordinatesPane_a
          } = this._walkLine(bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, bitmapCoordinatesPane_i, bitmapCoordinatesPane_s, bitmapCoordinatesPane_o, !0, bitmapCoordinatesPane_r), bitmapCoordinatesPane_l = (0, bitmapCoordinatesPane_d.sum)(bitmapCoordinatesPane_a);
          if (bitmapCoordinatesPane_l > 0) {
            const bitmapCoordinatesPane_t = bitmapCoordinatesPane_n % bitmapCoordinatesPane_l;
            bitmapCoordinatesPane_e.lineDashOffset = bitmapCoordinatesPane_l - bitmapCoordinatesPane_t - bitmapCoordinatesPane_a[1]
          }
        }
        const bitmapCoordinatesPane_f = new bitmapCoordinatesPane_u.SmartDashCanvas(bitmapCoordinatesPane_e, !!bitmapCoordinatesPane_n, bitmapCoordinatesPane_r),
          bitmapCoordinatesPane_y = new bitmapCoordinatesPane_m(bitmapCoordinatesPane_t, _, bitmapCoordinatesPane_g, this._data.skipHoles);
        for (; bitmapCoordinatesPane_y.next();) {
          if (bitmapCoordinatesPane_l = bitmapCoordinatesPane_y.currentValue(), bitmapCoordinatesPane_c = bitmapCoordinatesPane_y.nextValue(), bitmapCoordinatesPane_p(bitmapCoordinatesPane_l)) {
            const bitmapCoordinatesPane_e = Math.round(bitmapCoordinatesPane_l.center);
            bitmapCoordinatesPane_h && bitmapCoordinatesPane_p(bitmapCoordinatesPane_h) ? (bitmapCoordinatesPane_f.lineTo(bitmapCoordinatesPane_e, bitmapCoordinatesPane_l.bitmapCoordinatesPane_y), bitmapCoordinatesPane_i && !bitmapCoordinatesPane_p(bitmapCoordinatesPane_c) && bitmapCoordinatesPane_f.lineTo(bitmapCoordinatesPane_e, bitmapCoordinatesPane_s)) : bitmapCoordinatesPane_c && bitmapCoordinatesPane_p(bitmapCoordinatesPane_c) ? bitmapCoordinatesPane_i ? (bitmapCoordinatesPane_y.atStart() || bitmapCoordinatesPane_f.lineTo(
              bitmapCoordinatesPane_e, bitmapCoordinatesPane_s), bitmapCoordinatesPane_f.lineTo(bitmapCoordinatesPane_e, bitmapCoordinatesPane_l.bitmapCoordinatesPane_y)) : bitmapCoordinatesPane_f.moveTo(bitmapCoordinatesPane_e, bitmapCoordinatesPane_l.bitmapCoordinatesPane_y) : bitmapCoordinatesPane_i ? (bitmapCoordinatesPane_y.atStart() || bitmapCoordinatesPane_f.lineTo(bitmapCoordinatesPane_e - bitmapCoordinatesPane_a, bitmapCoordinatesPane_s), bitmapCoordinatesPane_f.lineTo(bitmapCoordinatesPane_e -
              bitmapCoordinatesPane_a, bitmapCoordinatesPane_l.bitmapCoordinatesPane_y), bitmapCoordinatesPane_f.lineTo(bitmapCoordinatesPane_e + bitmapCoordinatesPane_a, bitmapCoordinatesPane_l.bitmapCoordinatesPane_y), bitmapCoordinatesPane_f.lineTo(bitmapCoordinatesPane_e + bitmapCoordinatesPane_a, bitmapCoordinatesPane_s)) : (bitmapCoordinatesPane_f.moveTo(bitmapCoordinatesPane_e - bitmapCoordinatesPane_a, bitmapCoordinatesPane_l.bitmapCoordinatesPane_y), bitmapCoordinatesPane_f.lineTo(bitmapCoordinatesPane_e + bitmapCoordinatesPane_a, bitmapCoordinatesPane_l.bitmapCoordinatesPane_y))
          }
          bitmapCoordinatesPane_h = bitmapCoordinatesPane_l
        }
        return {
          distance: bitmapCoordinatesPane_f.lastSegmentDistance(),
          dashPattern: bitmapCoordinatesPane_f.lastSegmentDashPattern()
        }
      }
      _drawLines(bitmapCoordinatesPane_e, bitmapCoordinatesPane_t) {
        if (!this._data.items.length || 0 === this._data.lineWidth) return {
          distance: 0,
          dashPattern: []
        };
        let bitmapCoordinatesPane_i, bitmapCoordinatesPane_s, bitmapCoordinatesPane_o = null;
        const bitmapCoordinatesPane_n = .25 * this._data.barSpacing,
          bitmapCoordinatesPane_r = new bitmapCoordinatesPane_u.SmartDashCanvas(bitmapCoordinatesPane_e, !!bitmapCoordinatesPane_t);
        let bitmapCoordinatesPane_a = 0;
        if (!bitmapCoordinatesPane_t) {
          const {
            distance: bitmapCoordinatesPane_t,
            dashPattern: bitmapCoordinatesPane_i
          } = this._drawLines(bitmapCoordinatesPane_e, !0), bitmapCoordinatesPane_s = (0, bitmapCoordinatesPane_d.sum)(bitmapCoordinatesPane_i);
          if (bitmapCoordinatesPane_s > 0) {
            const bitmapCoordinatesPane_o = bitmapCoordinatesPane_t % bitmapCoordinatesPane_s;
            bitmapCoordinatesPane_e.lineDashOffset = bitmapCoordinatesPane_a = bitmapCoordinatesPane_s - bitmapCoordinatesPane_o - bitmapCoordinatesPane_i[1]
          }
        }
        bitmapCoordinatesPane_r.beginPath();
        const bitmapCoordinatesPane_l = this._data.visibleItemsRange?.startItemIndex ?? 0,
          bitmapCoordinatesPane_c = this._data.visibleItemsRange?.endItemIndex ?? this._data.items.length;
        if (bitmapCoordinatesPane_l > bitmapCoordinatesPane_c || bitmapCoordinatesPane_l >= this._data.items.length) return {
          distance: 0,
          dashPattern: []
        };
        const bitmapCoordinatesPane_h = this._data.items[bitmapCoordinatesPane_l];
        bitmapCoordinatesPane_h && bitmapCoordinatesPane_r.moveTo(bitmapCoordinatesPane_h.center, bitmapCoordinatesPane_h.bitmapCoordinatesPane_y);
        let _, bitmapCoordinatesPane_g = bitmapCoordinatesPane_e.strokeStyle,
          bitmapCoordinatesPane_f = bitmapCoordinatesPane_e.lineWidth;
        const bitmapCoordinatesPane_y = new bitmapCoordinatesPane_m(this._data.items, bitmapCoordinatesPane_l, bitmapCoordinatesPane_c, this._data.skipHoles);
        for (; bitmapCoordinatesPane_y.next();) {
          let bitmapCoordinatesPane_l, bitmapCoordinatesPane_c, bitmapCoordinatesPane_h;
          bitmapCoordinatesPane_o = bitmapCoordinatesPane_y.prevValue(), bitmapCoordinatesPane_i = bitmapCoordinatesPane_y.currentValue(), bitmapCoordinatesPane_s = bitmapCoordinatesPane_y.nextValue();
          let bitmapCoordinatesPane_u = !1,
            bitmapCoordinatesPane_m = !1,
            bitmapCoordinatesPane_w = !1;
          if (bitmapCoordinatesPane_p(bitmapCoordinatesPane_i) && (bitmapCoordinatesPane_i.style && !this._data.forceLineColor ? (bitmapCoordinatesPane_l = bitmapCoordinatesPane_i.style.color, bitmapCoordinatesPane_c = bitmapCoordinatesPane_i.style.width, bitmapCoordinatesPane_h = bitmapCoordinatesPane_i.style
                .style) : (bitmapCoordinatesPane_l = this._data.lineColor, bitmapCoordinatesPane_c = this._data.lineWidth, bitmapCoordinatesPane_h = this._data.lineStyle), this._data
              .ignorePaletteLineWidth && (bitmapCoordinatesPane_c = this._data.lineWidth), bitmapCoordinatesPane_m = bitmapCoordinatesPane_h !== _, bitmapCoordinatesPane_w = bitmapCoordinatesPane_c !== bitmapCoordinatesPane_f, bitmapCoordinatesPane_u = bitmapCoordinatesPane_l !== bitmapCoordinatesPane_g || bitmapCoordinatesPane_m || bitmapCoordinatesPane_w
              ), bitmapCoordinatesPane_u) {
            if (bitmapCoordinatesPane_g = bitmapCoordinatesPane_l, bitmapCoordinatesPane_f = bitmapCoordinatesPane_c, _ = bitmapCoordinatesPane_h, bitmapCoordinatesPane_r.stroke(), bitmapCoordinatesPane_r.beginPath(), !bitmapCoordinatesPane_t) {
              bitmapCoordinatesPane_r.setStrokeStyle(bitmapCoordinatesPane_l);
              const bitmapCoordinatesPane_t = bitmapCoordinatesPane_r.lastSegmentDistance(),
                bitmapCoordinatesPane_i = bitmapCoordinatesPane_r.lastSegmentDashPattern(),
                bitmapCoordinatesPane_s = (0, bitmapCoordinatesPane_d.sum)(bitmapCoordinatesPane_i);
              if (bitmapCoordinatesPane_s > 0) {
                const bitmapCoordinatesPane_i = bitmapCoordinatesPane_t % bitmapCoordinatesPane_s;
                bitmapCoordinatesPane_e.lineDashOffset = bitmapCoordinatesPane_i + bitmapCoordinatesPane_a
              }
            }
            if (bitmapCoordinatesPane_r.setLineWidth(bitmapCoordinatesPane_c), bitmapCoordinatesPane_r.setLineStyle(bitmapCoordinatesPane_h), bitmapCoordinatesPane_p(bitmapCoordinatesPane_o)) bitmapCoordinatesPane_r.moveTo(bitmapCoordinatesPane_o.center, bitmapCoordinatesPane_o.bitmapCoordinatesPane_y);
            else {
              const bitmapCoordinatesPane_e = bitmapCoordinatesPane_i;
              bitmapCoordinatesPane_r.moveTo(bitmapCoordinatesPane_e.center, bitmapCoordinatesPane_e.bitmapCoordinatesPane_y)
            }
          }
          bitmapCoordinatesPane_v = bitmapCoordinatesPane_o, bitmapCoordinatesPane_b = bitmapCoordinatesPane_s, bitmapCoordinatesPane_p(S = bitmapCoordinatesPane_i) && (bitmapCoordinatesPane_p(bitmapCoordinatesPane_v) ? bitmapCoordinatesPane_r.lineTo(S.center, S.bitmapCoordinatesPane_y) : bitmapCoordinatesPane_b && bitmapCoordinatesPane_p(bitmapCoordinatesPane_b) ? bitmapCoordinatesPane_r.moveTo(S.center, S.bitmapCoordinatesPane_y) : (bitmapCoordinatesPane_r
            .moveTo(S.center - bitmapCoordinatesPane_n, S.bitmapCoordinatesPane_y), bitmapCoordinatesPane_r.lineTo(S.center + bitmapCoordinatesPane_n, S.bitmapCoordinatesPane_y)))
        }
        var bitmapCoordinatesPane_v, S, bitmapCoordinatesPane_b;
        return bitmapCoordinatesPane_r.stroke(), {
          distance: bitmapCoordinatesPane_r.lastSegmentDistance(),
          dashPattern: bitmapCoordinatesPane_r.lastSegmentDashPattern()
        }
      }
    }