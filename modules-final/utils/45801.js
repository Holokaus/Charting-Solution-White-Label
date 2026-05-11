/**
 * Module 45801 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

45801: (lineToolManager_e, lineToolManager_t, lineToolManager_i) => {
    "use strict";
    lineToolManager_i.lineToolManager_d(lineToolManager_t, {
      SelectionRenderer: () => lineToolManager_d
    });
    var lineToolManager_s = lineToolManager_i(10555),
      lineToolManager_o = lineToolManager_i(6453),
      lineToolManager_n = lineToolManager_i(58978),
      lineToolManager_r = lineToolManager_i(2383),
      lineToolManager_a = lineToolManager_i(43838),
      lineToolManager_l = lineToolManager_i(10307);
    const lineToolManager_c = lineToolManager_n.colorsPalette["color-tv-blue-600"];
    var lineToolManager_h;
    ! function(lineToolManager_e) {
      lineToolManager_e[lineToolManager_e.Radius = 4] = "Radius", lineToolManager_e[lineToolManager_e.Tolerance = 2] = "Tolerance"
    }(lineToolManager_h || (lineToolManager_h = {}));
    class lineToolManager_d extends lineToolManager_l.BitmapCoordinatesPaneRenderer {
      constructor(lineToolManager_e) {
        super(), this._data = lineToolManager_e || null
      }
      setData(lineToolManager_e) {
        this._data = lineToolManager_e
      }
      hitTest(lineToolManager_e) {
        if (!this._data || !this._data.visible) return null;
        for (let lineToolManager_t = 0; lineToolManager_t < this._data.points.length; lineToolManager_t++) {
          const lineToolManager_i = this._data.points[lineToolManager_t];
          if (lineToolManager_i.point.subtract(lineToolManager_e).length() <= 6) return lineToolManager_i.hitTestResult ? lineToolManager_i.hitTestResult : new lineToolManager_r.HitTestResult(this
            ._data.hittestResult, {
              pointIndex: lineToolManager_i.pointIndex,
              cursorType: lineToolManager_i.cursorType ?? lineToolManager_a.PaneCursorType.Default,
              ownerSourceId: this._data.ownerSourceId
            })
        }
        return null
      }
      doesIntersectWithBox(lineToolManager_e) {
        return !!this._data && this._data.points.some((lineToolManager_t => (0, lineToolManager_o.pointInBox)(lineToolManager_t.point, lineToolManager_e)))
      }
      _drawImpl(lineToolManager_e) {
        if (null === this._data || !this._data.visible) return;
        const {
          points: lineToolManager_t,
          bgColors: lineToolManager_i,
          vertOffset: lineToolManager_o = 0
        } = this._data;
        for (let lineToolManager_r = 0; lineToolManager_r < lineToolManager_t.length; ++lineToolManager_r) {
          const {
            point: lineToolManager_a,
            lineWidth: lineToolManager_l
          } = lineToolManager_t[lineToolManager_r];
          (lineToolManager_n = lineToolManager_a, Number.isFinite(lineToolManager_n.lineToolManager_x) && Number.isFinite(lineToolManager_n.lineToolManager_y)) && this._drawMarker(lineToolManager_e, lineToolManager_a.add((0, lineToolManager_s.point)(0, lineToolManager_o)),
            this._data, lineToolManager_i[lineToolManager_r], lineToolManager_l)
        }
        var lineToolManager_n
      }
      _drawMarker(lineToolManager_e, lineToolManager_t, lineToolManager_i, lineToolManager_o, lineToolManager_n = 1) {
        const {
          context: lineToolManager_r,
          horizontalPixelRatio: lineToolManager_a,
          verticalPixelRatio: lineToolManager_l
        } = lineToolManager_e, {
          color: lineToolManager_h = lineToolManager_c,
          withOutline: lineToolManager_d = !0
        } = lineToolManager_i, _ = Math.max(1, Math.floor(lineToolManager_a)) % 2 / 2, lineToolManager_p = (0, lineToolManager_s.point)(Math.round(lineToolManager_t.lineToolManager_x * lineToolManager_a) + _, Math.round(lineToolManager_t.lineToolManager_y *
          lineToolManager_l) + _), lineToolManager_m = lineToolManager_u(lineToolManager_p, Math.round(4 * lineToolManager_a));
        lineToolManager_r.fillStyle = lineToolManager_o, lineToolManager_r.fill(lineToolManager_d ? lineToolManager_u(lineToolManager_p, Math.round(5 * lineToolManager_a) + _) : lineToolManager_m), lineToolManager_r.fillStyle = lineToolManager_h, lineToolManager_m.addPath(lineToolManager_u(lineToolManager_p, Math.floor((
          4 - lineToolManager_n) * lineToolManager_a))), lineToolManager_r.fill(lineToolManager_m, "evenodd")
      }
    }

    function lineToolManager_u(lineToolManager_e, lineToolManager_t) {
      const lineToolManager_i = new Path2D;
      return lineToolManager_i.arc(lineToolManager_e.lineToolManager_x, lineToolManager_e.lineToolManager_y, lineToolManager_t, 0, 2 * Math.PI, !0), lineToolManager_i
    }
}
