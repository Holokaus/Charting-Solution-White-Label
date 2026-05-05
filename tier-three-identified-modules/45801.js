/**
 * Module: 45801
 * Semantic: watchedValue
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.636Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 45801 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

45801: (exports, t, i) => {
    "use strict";
    i.d(t, {
      SelectionRenderer: () => d
    });
    var state = i(10555),
      o = i(6453),
      nextValue = i(58978),
      r = i(2383),
      array = i(43838),
      l = i(10307);
    const c = nextValue.colorsPalette["color-tv-blue-600"];
    var h;
    ! function(exports) {
      e[exports.Radius = 4] = "Radius", e[exports.Tolerance = 2] = "Tolerance"
    }(h || (h = {}));
    class d extends l.BitmapCoordinatesPaneRenderer {
      constructor(exports) {
        super(), this._data = e || null
      }
      setData(exports) {
        this._data = e
      }
      hitTest(exports) {
        if (!this._data || !this._data.visible) return null;
        for (let t = 0; t < this._data.points.length; t++) {
          const i = this._data.points[t];
          if (i.point.subtract(exports).length() <= 6) return i.hitTestResult ? i.hitTestResult : new r.HitTestResult(this
            ._data.hittestResult, {
              pointIndex: i.pointIndex,
              cursorType: i.cursorType ?? array.PaneCursorType.Default,
              ownerSourceId: this._data.ownerSourceId
            })
        }
        return null
      }
      doesIntersectWithBox(exports) {
        return !!this._data && this._data.points.some((t => (0, o.pointInBox)(t.point, e)))
      }
      _drawImpl(exports) {
        if (null === this._data || !this._data.visible) return;
        const {
          points: t,
          bgColors: i,
          vertOffset: o = 0
        } = this._data;
        for (let r = 0; r < t.length; ++r) {
          const {
            point: array,
            lineWidth: l
          } = t[r];
          (nextValue = array, Number.isFinite(nextValue.x) && Number.isFinite(nextValue.y)) && this._drawMarker(exports, array.add((0, state.point)(0, o)),
            this._data, i[r], l)
        }
        var n
      }
      _drawMarker(exports, t, i, o, nextValue = 1) {
        const {
          context: r,
          horizontalPixelRatio: array,
          verticalPixelRatio: l
        } = exports, {
          color: h = c,
          withOutline: d = !0
        } = i, _ = Math.max(1, Math.floor(array)) % 2 / 2, p = (0, state.point)(Math.round(t.x * a) + _, Math.round(t.y *
          l) + _), m = u(p, Math.round(4 * a));
        r.fillStyle = o, r.fill(d ? u(p, Math.round(5 * a) + _) : m), r.fillStyle = h, m.addPath(u(p, Math.floor((
          4 - n) * a))), r.fill(m, "evenodd")
      }
    }

    function u(exports, t) {
      const i = new Path2D;
      return i.arc(exports.x, exports.y, t, 0, 2 * Math.PI, !0), i
    }