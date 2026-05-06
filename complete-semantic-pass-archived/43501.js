/**
 * Module 43501 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

43501: (lineToolManager_e, lineToolManager_t, lineToolManager_i) => {
    "use strict";
    lineToolManager_i.lineToolManager_d(lineToolManager_t, {
      SeriesBaselinePaneView: () => lineToolManager_f
    });
    var lineToolManager_s, lineToolManager_o = lineToolManager_i(52859),
      lineToolManager_n = lineToolManager_i(94602),
      lineToolManager_r = lineToolManager_i(10555),
      lineToolManager_a = lineToolManager_i(48892),
      lineToolManager_l = lineToolManager_i(2624),
      lineToolManager_c = lineToolManager_i(4539),
      lineToolManager_h = lineToolManager_i(12217),
      lineToolManager_d = lineToolManager_i(20820),
      lineToolManager_u = lineToolManager_i(2383),
      _ = lineToolManager_i(58221);
    ! function(lineToolManager_e) {
      lineToolManager_e[lineToolManager_e.Top = 0] = "Top", lineToolManager_e[lineToolManager_e.Bottom = 1] = "Bottom"
    }(lineToolManager_s || (lineToolManager_s = {}));
    class lineToolManager_p extends lineToolManager_d.MediaCoordinatesPaneRenderer {
      constructor() {
        super(...arguments), this._data = null
      }
      setData(lineToolManager_e) {
        this._data = lineToolManager_e
      }
      hitTest(lineToolManager_e) {
        if (null === this._data) return null;
        const {
          items: lineToolManager_t,
          topLineWidth: lineToolManager_i,
          bottomLineWidth: lineToolManager_s
        } = this._data, lineToolManager_o = (0, lineToolManager_c.interactionTolerance)().series + (lineToolManager_i + lineToolManager_s) / 4, lineToolManager_n = (0, lineToolManager_h.lowerbound)(lineToolManager_t, lineToolManager_e, ((lineToolManager_e,
          lineToolManager_t) => lineToolManager_e.center <= lineToolManager_t.lineToolManager_x)), lineToolManager_a = Math.max(1, lineToolManager_n - 1), lineToolManager_d = Math.min(lineToolManager_t.length - 1, lineToolManager_n + 1);
        for (let lineToolManager_i = lineToolManager_a; lineToolManager_i <= lineToolManager_d; ++lineToolManager_i) {
          const lineToolManager_s = lineToolManager_t[lineToolManager_i - 1],
            lineToolManager_n = lineToolManager_t[lineToolManager_i],
            {
              distance: lineToolManager_a
            } = (0, lineToolManager_l.distanceToSegment)((0, lineToolManager_r.point)(lineToolManager_s.center, lineToolManager_s.lineToolManager_y), (0, lineToolManager_r.point)(lineToolManager_n.center, lineToolManager_n.lineToolManager_y), (0, lineToolManager_r.point)(lineToolManager_e.lineToolManager_x,
              lineToolManager_e.lineToolManager_y));
          if (lineToolManager_a <= lineToolManager_o) return new lineToolManager_u.HitTestResult(lineToolManager_u.HitTarget.Regular)
        }
        return null
      }
      _drawImpl(lineToolManager_e) {
        if (null === this._data) return;
        const {
          items: lineToolManager_t,
          baseLevelCoordinate: lineToolManager_i,
          bottom: lineToolManager_s,
          bottomFillColor1: lineToolManager_o,
          bottomFillColor2: lineToolManager_n,
          topFillColor1: lineToolManager_l,
          topFillColor2: lineToolManager_h,
          topLineColor: lineToolManager_d,
          bottomLineColor: lineToolManager_u,
          topLineWidth: lineToolManager_p,
          bottomLineWidth: lineToolManager_m,
          topLineStyle: lineToolManager_g,
          bottomLineStyle: lineToolManager_f
        } = this._data;
        if (! function(lineToolManager_e) {
            if (0 === lineToolManager_e.length) return !1;
            const lineToolManager_t = lineToolManager_e.findIndex((lineToolManager_e => (0, lineToolManager_c.coordinateIsValid)(lineToolManager_e.lineToolManager_y)));
            if (-1 === lineToolManager_t) return !1;
            let lineToolManager_i = lineToolManager_e.length - 1;
            for (; lineToolManager_i > lineToolManager_t && !(0, lineToolManager_c.coordinateIsValid)(lineToolManager_e[lineToolManager_i].lineToolManager_y);) lineToolManager_i--;
            return !(lineToolManager_t > lineToolManager_i)
          }(lineToolManager_t)) return;
        const lineToolManager_y = lineToolManager_e.context,
          {
            topItems: lineToolManager_v,
            bottomItems: S
          } = function(lineToolManager_e, lineToolManager_t) {
            const lineToolManager_i = [],
              lineToolManager_s = [];
            let lineToolManager_o = null;
            for (let lineToolManager_n = 0; lineToolManager_n < lineToolManager_e.length; lineToolManager_n++) {
              let lineToolManager_l = lineToolManager_e[lineToolManager_n];
              const lineToolManager_h = lineToolManager_e[lineToolManager_n + 1] || {};
              if ((0, lineToolManager_c.coordinateIsValid)(lineToolManager_l.lineToolManager_y)) lineToolManager_l.lineToolManager_y <= lineToolManager_t && lineToolManager_i.push(lineToolManager_l), lineToolManager_l.lineToolManager_y >= lineToolManager_t && lineToolManager_s.push(lineToolManager_l), lineToolManager_o = lineToolManager_l;
              else {
                if (null === lineToolManager_o) continue;
                lineToolManager_l = lineToolManager_o
              }
              if ((0, lineToolManager_c.coordinateIsValid)(lineToolManager_h.lineToolManager_y) && (lineToolManager_l.lineToolManager_y > lineToolManager_t && lineToolManager_h.lineToolManager_y < lineToolManager_t || lineToolManager_l.lineToolManager_y < lineToolManager_t && lineToolManager_h.lineToolManager_y > lineToolManager_t))
                if (Math.abs(lineToolManager_l.center - lineToolManager_h.center) < 1) {
                  const lineToolManager_e = {
                    center: lineToolManager_l.center,
                    lineToolManager_y: lineToolManager_t
                  };
                  lineToolManager_i.push(lineToolManager_e), lineToolManager_s.push(lineToolManager_e)
                } else {
                  const lineToolManager_e = (0, lineToolManager_a.intersectLineSegments)((0, lineToolManager_r.point)(lineToolManager_l.center, lineToolManager_l.lineToolManager_y), (0, lineToolManager_r.point)(lineToolManager_h.center, lineToolManager_h.lineToolManager_y), (
                    0, lineToolManager_r.point)(lineToolManager_l.center, lineToolManager_t), (0, lineToolManager_r.point)(lineToolManager_h.center, lineToolManager_t));
                  if (null !== lineToolManager_e) {
                    const lineToolManager_t = {
                      center: lineToolManager_l.center + (lineToolManager_h.center - lineToolManager_l.center) * lineToolManager_e,
                      lineToolManager_y: lineToolManager_l.lineToolManager_y + (lineToolManager_h.lineToolManager_y - lineToolManager_l.lineToolManager_y) * lineToolManager_e
                    };
                    lineToolManager_i.push(lineToolManager_t), lineToolManager_s.push(lineToolManager_t)
                  }
                }
            }
            return {
              topItems: lineToolManager_i,
              bottomItems: lineToolManager_s
            }
          }(lineToolManager_t, lineToolManager_i);
        lineToolManager_y.lineCap = "round", lineToolManager_y.lineJoin = "round", 0 !== lineToolManager_v.length && (lineToolManager_y.beginPath(), lineToolManager_y.moveTo(lineToolManager_v[0].center, lineToolManager_i), this
          ._makeLine(lineToolManager_y, lineToolManager_v, !0, 0), lineToolManager_y.closePath(), lineToolManager_y.fillStyle = this._makeLinearGradient(lineToolManager_y, lineToolManager_l, lineToolManager_h, lineToolManager_i - lineToolManager_s, lineToolManager_i), lineToolManager_y
          .fill(), lineToolManager_y.beginPath(), this._makeLine(lineToolManager_y, lineToolManager_v, !1, 0), lineToolManager_y.lineWidth = lineToolManager_p, lineToolManager_y.strokeStyle = lineToolManager_d, (0, _
            .setLineStyle)(lineToolManager_y, lineToolManager_g), lineToolManager_y.stroke()), 0 !== S.length && (lineToolManager_y.beginPath(), lineToolManager_y.moveTo(S[0].center, lineToolManager_i), this
          ._makeLine(lineToolManager_y, S, !0, 1), lineToolManager_y.closePath(), lineToolManager_y.fillStyle = this._makeLinearGradient(lineToolManager_y, lineToolManager_o, lineToolManager_n, lineToolManager_i, lineToolManager_i + lineToolManager_s), lineToolManager_y
          .fill(), lineToolManager_y.beginPath(), this._makeLine(lineToolManager_y, S, !1, 1), lineToolManager_y.lineWidth = lineToolManager_m, lineToolManager_y.strokeStyle = lineToolManager_u, (0, _
            .setLineStyle)(lineToolManager_y, lineToolManager_f), lineToolManager_y.stroke())
      }
      _makeLine(lineToolManager_e, lineToolManager_t, lineToolManager_i, lineToolManager_s) {
        if (null === this._data) return;
        const lineToolManager_o = lineToolManager_t.findIndex((lineToolManager_e => (0, lineToolManager_c.coordinateIsValid)(lineToolManager_e.lineToolManager_y)));
        if (-1 === lineToolManager_o) return;
        const {
          barSpacing: lineToolManager_n,
          baseLevelCoordinate: lineToolManager_r
        } = this._data, lineToolManager_a = .25 * lineToolManager_n;
        let lineToolManager_l;
        const lineToolManager_h = lineToolManager_t.length;
        for (let lineToolManager_n = lineToolManager_o; lineToolManager_n < lineToolManager_h; lineToolManager_n++) {
          const lineToolManager_h = lineToolManager_t[lineToolManager_n],
            lineToolManager_d = lineToolManager_t[lineToolManager_n + 1] || {};
          if ((0, lineToolManager_c.coordinateIsValid)(lineToolManager_h.lineToolManager_y)) {
            if (0 === lineToolManager_s) {
              if (lineToolManager_l && lineToolManager_l.lineToolManager_y >= lineToolManager_r && lineToolManager_h.lineToolManager_y >= lineToolManager_r) {
                lineToolManager_e.moveTo(lineToolManager_h.center, lineToolManager_h.lineToolManager_y);
                continue
              }
            } else if (lineToolManager_l && lineToolManager_l.lineToolManager_y <= lineToolManager_r && lineToolManager_h.lineToolManager_y <= lineToolManager_r) {
              lineToolManager_e.moveTo(lineToolManager_h.center, lineToolManager_h.lineToolManager_y);
              continue
            }
            if (lineToolManager_l && (0, lineToolManager_c.coordinateIsValid)(lineToolManager_l.lineToolManager_y)) lineToolManager_e.lineTo(lineToolManager_h.center, lineToolManager_h.lineToolManager_y), lineToolManager_i && !(0, lineToolManager_c.coordinateIsValid)(lineToolManager_d.lineToolManager_y) &&
              lineToolManager_e.lineTo(lineToolManager_h.center, lineToolManager_r);
            else if (lineToolManager_d && (0, lineToolManager_c.coordinateIsValid)(lineToolManager_d.lineToolManager_y)) lineToolManager_i ? (lineToolManager_n !== lineToolManager_o && lineToolManager_e.lineTo(lineToolManager_h.center, lineToolManager_r), lineToolManager_e.lineTo(lineToolManager_h.center, lineToolManager_h
              .lineToolManager_y)) : lineToolManager_e.moveTo(lineToolManager_h.center, lineToolManager_h.lineToolManager_y);
            else if (lineToolManager_i) {
              if (0 === lineToolManager_n) continue;
              lineToolManager_n !== lineToolManager_o && lineToolManager_e.lineTo(lineToolManager_h.center - lineToolManager_a, lineToolManager_r), lineToolManager_e.lineTo(lineToolManager_h.center - lineToolManager_a, lineToolManager_h.lineToolManager_y), lineToolManager_e.lineTo(lineToolManager_h.center + lineToolManager_a, lineToolManager_h.lineToolManager_y), lineToolManager_e
                .lineTo(lineToolManager_h.center + lineToolManager_a, lineToolManager_r)
            } else lineToolManager_e.moveTo(lineToolManager_h.center - lineToolManager_a, lineToolManager_h.lineToolManager_y), lineToolManager_e.lineTo(lineToolManager_h.center + lineToolManager_a, lineToolManager_h.lineToolManager_y);
            lineToolManager_l = lineToolManager_h
          }
        }
      }
      _makeLinearGradient(lineToolManager_e, lineToolManager_t, lineToolManager_i, lineToolManager_s, lineToolManager_o) {
        const lineToolManager_n = lineToolManager_e.createLinearGradient(0, lineToolManager_s, 0, lineToolManager_o);
        return lineToolManager_n.addColorStop(0, lineToolManager_t), lineToolManager_n.addColorStop(1, lineToolManager_i), lineToolManager_n
      }
    }
    var lineToolManager_m = lineToolManager_i(45801),
      lineToolManager_g = lineToolManager_i(73773);
    class lineToolManager_f extends lineToolManager_g.SeriesSingleLinePaneView {
      constructor() {
        super(...arguments), this._renderer = new lineToolManager_p, this._topFillColor1 = "", this._topFillColor2 = "", this
          ._bottomFillColor1 = "", this._bottomFillColor2 = "", this._topLineColor = "", this._bottomLineColor = "",
          this._topLineWidth = 0, this._bottomLineWidth = 0, this._topLineStyle = 0, this._bottomLineStyle = 0, this
          ._barSpacing = 0, this._bottom = 0, this._baseLevelCoordinate = 0
      }
      renderer() {
        this._invalidated && (this._updateImpl(), this._invalidated = !1), this._renderer.setData({
          items: this._items,
          topFillColor1: this._topFillColor1,
          topFillColor2: this._topFillColor2,
          bottomFillColor1: this._bottomFillColor1,
          bottomFillColor2: this._bottomFillColor2,
          topLineColor: this._topLineColor,
          bottomLineColor: this._bottomLineColor,
          topLineWidth: this._topLineWidth,
          bottomLineWidth: this._bottomLineWidth,
          topLineStyle: this._topLineStyle,
          bottomLineStyle: this._bottomLineStyle,
          barSpacing: this._barSpacing,
          baseLevelCoordinate: this._baseLevelCoordinate,
          bottom: this._bottom
        });
        const lineToolManager_e = new lineToolManager_n.CompositeRenderer;
        return lineToolManager_e.append(this._renderer), this._model.selection().isSelected(this._source) && this
          ._isMarkersEnabled && this._selectionData && lineToolManager_e.append(new lineToolManager_m.SelectionRenderer(this._selectionData)), lineToolManager_e
      }
      _updateImpl() {
        super._updateImpl();
        const lineToolManager_e = this._source.priceScale();
        if (!lineToolManager_e) return;
        const lineToolManager_t = this._source.properties().childs().baselineStyle.childs(),
          lineToolManager_i = lineToolManager_t.transparency.value();
        this._topFillColor1 = (0, lineToolManager_o.generateColor)(lineToolManager_t.topFillColor1.value(), lineToolManager_i), this._topFillColor2 = (0, lineToolManager_o
            .generateColor)(lineToolManager_t.topFillColor2.value(), lineToolManager_i), this._bottomFillColor1 = (0, lineToolManager_o.generateColor)(lineToolManager_t
            .bottomFillColor1.value(), lineToolManager_i), this._bottomFillColor2 = (0, lineToolManager_o.generateColor)(lineToolManager_t.bottomFillColor2.value(),
            lineToolManager_i), this._topLineColor = lineToolManager_t.topLineColor.value(), this._bottomLineColor = lineToolManager_t.bottomLineColor.value(), this
          ._topLineWidth = lineToolManager_t.topLineWidth.value(), this._bottomLineWidth = lineToolManager_t.bottomLineWidth.value(), this
          ._topLineStyle = lineToolManager_t.topLineStyle.value(), this._bottomLineStyle = lineToolManager_t.bottomLineStyle.value(), this
          ._barSpacing = this._model.timeScale().barSpacing(), this._bottom = lineToolManager_e.height(), this
          ._baseLevelCoordinate = Math.round(this._bottom * (Math.abs(100 - lineToolManager_t.baseLevelPercentage.value()) / 100))
      }
    }