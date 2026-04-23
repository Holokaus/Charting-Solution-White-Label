/**
 * Module 43501 - Auto-beautified from TradingView webpack bundle
 *
 * @module 43501
 * @date 2026-04-23
 * @size 5584 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 2383, 2624, 4539, 10555, 12217, 20820, 45801, 48892, 52859, 58221, 73773, 94602
 *
 * Exports:
 *   - SeriesBaselinePaneView (internal: f)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  SeriesBaselinePaneView: () => f
});
var s, o = i(52859),
  n = i(94602),
  r = i(10555),
  a = i(48892),
  l = i(2624),
  c = i(4539),
  h = i(12217),
  d = i(20820),
  u = i(2383),
  _ = i(58221);
! function(e) {
  e[e.Top = 0] = "Top", e[e.Bottom = 1] = "Bottom"
}(s || (s = {}));
class p extends d.MediaCoordinatesPaneRenderer {
  constructor() {
    super(...arguments), this._data = null
  }
  setData(e) {
    this._data = e
  }
  hitTest(e) {
    if (null === this._data) return null;
    const {
      items: t,
      topLineWidth: i,
      bottomLineWidth: s
    } = this._data, o = (0, c.interactionTolerance)().series + (i + s) / 4, n = (0, h.lowerbound)(t, e, ((e, t) => e.center <= t.x)), a = Math.max(1, n - 1), d = Math.min(t.length - 1, n + 1);
    for (let i = a; i <= d; ++i) {
      const s = t[i - 1],
        n = t[i],
        {
          distance: a
        } = (0, l.distanceToSegment)((0, r.point)(s.center, s.y), (0, r.point)(n.center, n.y), (0, r.point)(e.x, e.y));
      if (a <= o) return new u.HitTestResult(u.HitTarget.Regular)
    }
    return null
  }
  _drawImpl(e) {
    if (null === this._data) return;
    const {
      items: t,
      baseLevelCoordinate: i,
      bottom: s,
      bottomFillColor1: o,
      bottomFillColor2: n,
      topFillColor1: l,
      topFillColor2: h,
      topLineColor: d,
      bottomLineColor: u,
      topLineWidth: p,
      bottomLineWidth: m,
      topLineStyle: g,
      bottomLineStyle: f
    } = this._data;
    if (! function(e) {
        if (0 === e.length) return !1;
        const t = e.findIndex((e => (0, c.coordinateIsValid)(e.y)));
        if (-1 === t) return !1;
        let i = e.length - 1;
        for (; i > t && !(0, c.coordinateIsValid)(e[i].y);) i--;
        return !(t > i)
      }(t)) return;
    const y = e.context,
      {
        topItems: v,
        bottomItems: S
      } = function(e, t) {
        const i = [],
          s = [];
        let o = null;
        for (let n = 0; n < e.length; n++) {
          let l = e[n];
          const h = e[n + 1] || {};
          if ((0, c.coordinateIsValid)(l.y)) l.y <= t && i.push(l), l.y >= t && s.push(l), o = l;
          else {
            if (null === o) continue;
            l = o
          }
          if ((0, c.coordinateIsValid)(h.y) && (l.y > t && h.y < t || l.y < t && h.y > t))
            if (Math.abs(l.center - h.center) < 1) {
              const e = {
                center: l.center,
                y: t
              };
              i.push(e), s.push(e)
            } else {
              const e = (0, a.intersectLineSegments)((0, r.point)(l.center, l.y), (0, r.point)(h.center, h.y), (0, r.point)(l.center, t), (0, r.point)(h.center, t));
              if (null !== e) {
                const t = {
                  center: l.center + (h.center - l.center) * e,
                  y: l.y + (h.y - l.y) * e
                };
                i.push(t), s.push(t)
              }
            }
        }
        return {
          topItems: i,
          bottomItems: s
        }
      }(t, i);
    y.lineCap = "round", y.lineJoin = "round", 0 !== v.length && (y.beginPath(), y.moveTo(v[0].center, i), this._makeLine(y, v, !0, 0), y.closePath(), y.fillStyle = this._makeLinearGradient(y, l, h, i - s, i), y.fill(), y.beginPath(), this._makeLine(y, v, !1, 0), y.lineWidth = p, y.strokeStyle = d, (0, _.setLineStyle)(y, g), y.stroke()), 0 !== S.length && (y.beginPath(), y.moveTo(S[0].center, i), this._makeLine(y, S, !0, 1), y.closePath(), y.fillStyle = this._makeLinearGradient(y, o, n, i, i + s), y.fill(), y.beginPath(), this._makeLine(y, S, !1, 1), y.lineWidth = m, y.strokeStyle = u, (0, _.setLineStyle)(y, f), y.stroke())
  }
  _makeLine(e, t, i, s) {
    if (null === this._data) return;
    const o = t.findIndex((e => (0, c.coordinateIsValid)(e.y)));
    if (-1 === o) return;
    const {
      barSpacing: n,
      baseLevelCoordinate: r
    } = this._data, a = .25 * n;
    let l;
    const h = t.length;
    for (let n = o; n < h; n++) {
      const h = t[n],
        d = t[n + 1] || {};
      if ((0, c.coordinateIsValid)(h.y)) {
        if (0 === s) {
          if (l && l.y >= r && h.y >= r) {
            e.moveTo(h.center, h.y);
            continue
          }
        } else if (l && l.y <= r && h.y <= r) {
          e.moveTo(h.center, h.y);
          continue
        }
        if (l && (0, c.coordinateIsValid)(l.y)) e.lineTo(h.center, h.y), i && !(0, c.coordinateIsValid)(d.y) && e.lineTo(h.center, r);
        else if (d && (0, c.coordinateIsValid)(d.y)) i ? (n !== o && e.lineTo(h.center, r), e.lineTo(h.center, h.y)) : e.moveTo(h.center, h.y);
        else if (i) {
          if (0 === n) continue;
          n !== o && e.lineTo(h.center - a, r), e.lineTo(h.center - a, h.y), e.lineTo(h.center + a, h.y), e.lineTo(h.center + a, r)
        } else e.moveTo(h.center - a, h.y), e.lineTo(h.center + a, h.y);
        l = h
      }
    }
  }
  _makeLinearGradient(e, t, i, s, o) {
    const n = e.createLinearGradient(0, s, 0, o);
    return n.addColorStop(0, t), n.addColorStop(1, i), n
  }
}
var m = i(45801),
  g = i(73773);
class f extends g.SeriesSingleLinePaneView {
    constructor() {
      super(...arguments), this._renderer = new p, this._topFillColor1 = "", this._topFillColor2 = "", this._bottomFillColor1 = "", this._bottomFillColor2 = "", this._topLineColor = "", this._bottomLineColor = "", this._topLineWidth = 0, this._bottomLineWidth = 0, this._topLineStyle = 0, this._bottomLineStyle = 0, this._barSpacing = 0, this._bottom = 0, this._baseLevelCoordinate = 0
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
      const e = new n.CompositeRenderer;
      return e.append(this._renderer), this._model.selection().isSelected(this._source) && this._isMarkersEnabled && this._selectionData && e.append(new m.SelectionRenderer(this._selectionData)), e
    }
    _updateImpl() {
      super._updateImpl();
      const e = this._source.priceScale();
      if (!e) return;
      const t = this._source.properties().childs().baselineStyle.childs(),
        i = t.transparency.value();
      this._topFillColor1 = (0, o.generateColor)(t.topFillColor1.value(), i), this._topFillColor2 = (0, o.generateColor)(t.topFillColor2.value(), i), this._bottomFillColor1 = (0, o.generateColor)(t.bottomFillColor1.value(), i), this._bottomFillColor2 = (0, o.generateColor)(t.bottomFillColor2.value(), i), this._topLineColor = t.topLineColor.value(), this._bottomLineColor = t.bottomLineColor.value(), this._topLineWidth = t.topLineWidth.value(), this._bottomLineWidth = t.bottomLineWidth.value(), this._topLineStyle = t.topLineStyle.value(), this._bottomLineStyle = t.bottomLineStyle.value(), this._barSpacing = this._model.timeScale().barSpacing(), this._bottom = e.height(), this._baseLevelCoordinate = Math.round(this._bottom * (Math.abs(100 - t.baseLevelPercentage.value()) / 100))
    }
