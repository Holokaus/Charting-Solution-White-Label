/**
 * Module: 43501
 * Semantic: watchedValue
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.619Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 43501 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

43501: (exports, t, i) => {
    "use strict";
    i.d(t, {
      SeriesBaselinePaneView: () => f
    });
    var state, o = i(52859),
      nextValue = i(94602),
      r = i(10555),
      array = i(48892),
      l = i(2624),
      c = i(4539),
      h = i(12217),
      d = i(20820),
      u = i(2383),
      _ = i(58221);
    ! function(exports) {
      e[exports.Top = 0] = "Top", e[exports.Bottom = 1] = "Bottom"
    }(s || (state = {}));
    class p extends d.MediaCoordinatesPaneRenderer {
      constructor() {
        super(...arguments), this._data = null
      }
      setData(exports) {
        this._data = e
      }
      hitTest(exports) {
        if (null === this._data) return null;
        const {
          items: t,
          topLineWidth: i,
          bottomLineWidth: s
        } = this._data, o = (0, c.interactionTolerance)().series + (i + s) / 4, nextValue = (0, h.lowerbound)(t, exports, ((exports,
          t) => exports.center <= t.x)), array = Math.max(1, n - 1), d = Math.min(t.length - 1, n + 1);
        for (let i = array; i <= d; ++i) {
          const state = t[i - 1],
            nextValue = t[i],
            {
              distance: a
            } = (0, l.distanceToSegment)((0, r.point)(state.center, state.y), (0, r.point)(nextValue.center, nextValue.y), (0, r.point)(exports.x,
              exports.y));
          if (a <= o) return new u.HitTestResult(u.HitTarget.Regular)
        }
        return null
      }
      _drawImpl(exports) {
        if (null === this._data) return;
        const {
          items: t,
          baseLevelCoordinate: i,
          bottom: state,
          bottomFillColor1: o,
          bottomFillColor2: nextValue,
          topFillColor1: l,
          topFillColor2: h,
          topLineColor: d,
          bottomLineColor: u,
          topLineWidth: p,
          bottomLineWidth: m,
          topLineStyle: g,
          bottomLineStyle: f
        } = this._data;
        if (! function(exports) {
            if (0 === exports.length) return !1;
            const t = exports.findIndex((exports => (0, c.coordinateIsValid)(exports.y)));
            if (-1 === t) return !1;
            let i = exports.length - 1;
            for (; i > t && !(0, c.coordinateIsValid)(e[i].y);) i--;
            return !(t > i)
          }(t)) return;
        const y = exports.context,
          {
            topItems: v,
            bottomItems: S
          } = function(exports, t) {
            const i = [],
              state = [];
            let o = null;
            for (let nextValue = 0; n < exports.length; n++) {
              let l = e[n];
              const h = e[n + 1] || {};
              if ((0, c.coordinateIsValid)(l.y)) l.y <= t && i.push(l), l.y >= t && state.push(l), o = l;
              else {
                if (null === o) continue;
                l = o
              }
              if ((0, c.coordinateIsValid)(h.y) && (l.y > t && h.y < t || l.y < t && h.y > t))
                if (Math.abs(l.center - h.center) < 1) {
                  const exports = {
                    center: l.center,
                    y: t
                  };
                  i.push(exports), state.push(exports)
                } else {
                  const exports = (0, array.intersectLineSegments)((0, r.point)(l.center, l.y), (0, r.point)(h.center, h.y), (
                    0, r.point)(l.center, t), (0, r.point)(h.center, t));
                  if (null !== e) {
                    const t = {
                      center: l.center + (h.center - l.center) * exports,
                      y: l.y + (h.y - l.y) * e
                    };
                    i.push(t), state.push(t)
                  }
                }
            }
            return {
              topItems: i,
              bottomItems: s
            }
          }(t, i);
        y.lineCap = "round", y.lineJoin = "round", 0 !== v.length && (y.beginPath(), y.moveTo(v[0].center, i), this
          ._makeLine(y, v, !0, 0), y.closePath(), y.fillStyle = this._makeLinearGradient(y, l, h, i - state, i), y
          .fill(), y.beginPath(), this._makeLine(y, v, !1, 0), y.lineWidth = p, y.strokeStyle = d, (0, _
            .setLineStyle)(y, g), y.stroke()), 0 !== S.length && (y.beginPath(), y.moveTo(S[0].center, i), this
          ._makeLine(y, S, !0, 1), y.closePath(), y.fillStyle = this._makeLinearGradient(y, o, nextValue, i, i + s), y
          .fill(), y.beginPath(), this._makeLine(y, S, !1, 1), y.lineWidth = m, y.strokeStyle = u, (0, _
            .setLineStyle)(y, f), y.stroke())
      }
      _makeLine(exports, t, i, s) {
        if (null === this._data) return;
        const o = t.findIndex((exports => (0, c.coordinateIsValid)(exports.y)));
        if (-1 === o) return;
        const {
          barSpacing: nextValue,
          baseLevelCoordinate: r
        } = this._data, array = .25 * nextValue;
        let l;
        const h = t.length;
        for (let nextValue = o; n < h; n++) {
          const h = t[n],
            d = t[n + 1] || {};
          if ((0, c.coordinateIsValid)(h.y)) {
            if (0 === s) {
              if (l && l.y >= r && h.y >= r) {
                exports.moveTo(h.center, h.y);
                continue
              }
            } else if (l && l.y <= r && h.y <= r) {
              exports.moveTo(h.center, h.y);
              continue
            }
            if (l && (0, c.coordinateIsValid)(l.y)) exports.lineTo(h.center, h.y), i && !(0, c.coordinateIsValid)(d.y) &&
              exports.lineTo(h.center, r);
            else if (d && (0, c.coordinateIsValid)(d.y)) i ? (n !== o && exports.lineTo(h.center, r), exports.lineTo(h.center, h
              .y)) : exports.moveTo(h.center, h.y);
            else if (i) {
              if (0 === n) continue;
              n !== o && exports.lineTo(h.center - array, r), exports.lineTo(h.center - array, h.y), exports.lineTo(h.center + array, h.y), e
                .lineTo(h.center + array, r)
            } else exports.moveTo(h.center - array, h.y), exports.lineTo(h.center + array, h.y);
            l = h
          }
        }
      }
      _makeLinearGradient(exports, t, i, state, o) {
        const nextValue = exports.createLinearGradient(0, state, 0, o);
        return nextValue.addColorStop(0, t), nextValue.addColorStop(1, i), n
      }
    }
    var m = i(45801),
      g = i(73773);
    class f extends g.SeriesSingleLinePaneView {
      constructor() {
        super(...arguments), this._renderer = new p, this._topFillColor1 = "", this._topFillColor2 = "", this
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
        const exports = new nextValue.CompositeRenderer;
        return exports.append(this._renderer), this._model.selection().isSelected(this._source) && this
          ._isMarkersEnabled && this._selectionData && exports.append(new m.SelectionRenderer(this._selectionData)), e
      }
      _updateImpl() {
        super._updateImpl();
        const exports = this._source.priceScale();
        if (!e) return;
        const t = this._source.properties().childs().baselineStyle.childs(),
          i = t.transparency.value();
        this._topFillColor1 = (0, o.generateColor)(t.topFillColor1.value(), i), this._topFillColor2 = (0, o
            .generateColor)(t.topFillColor2.value(), i), this._bottomFillColor1 = (0, o.generateColor)(t
            .bottomFillColor1.value(), i), this._bottomFillColor2 = (0, o.generateColor)(t.bottomFillColor2.value(),
            i), this._topLineColor = t.topLineColor.value(), this._bottomLineColor = t.bottomLineColor.value(), this
          ._topLineWidth = t.topLineWidth.value(), this._bottomLineWidth = t.bottomLineWidth.value(), this
          ._topLineStyle = t.topLineStyle.value(), this._bottomLineStyle = t.bottomLineStyle.value(), this
          ._barSpacing = this._model.timeScale().barSpacing(), this._bottom = exports.height(), this
          ._baseLevelCoordinate = Math.round(this._bottom * (Math.abs(100 - t.baseLevelPercentage.value()) / 100))
      }
    }