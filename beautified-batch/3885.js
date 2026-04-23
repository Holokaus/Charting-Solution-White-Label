/**
 * Module 3885 - Auto-beautified from TradingView webpack bundle
 *
 * @module 3885
 * @date 2026-04-23
 * @size 4939 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 5471, 11542, 11946, 16610, 17161, 24261, 24377, 24640, 37276, 49483, 50151, 50335, 51408, 52859, 53660, 56265, 63815, 63903, 65318, 70859, 78254, 78861
 *
 * Exports:
 *   - SeriesValuesProvider (internal: M)
 *   - calculateColor (internal: P)
 *   - changesData (internal: x)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  SeriesValuesProvider: () => M,
  calculateColor: () => P,
  changesData: () => x
});
var s = i(50151),
  o = i(50335),
  n = i(24377),
  r = i(11542),
  a = i(49483),
  l = i(52859),
  c = i(24640),
  h = i(5471),
  d = i(78861),
  u = i(56265),
  _ = i(70859);

function p(e, t) {
  return 100 * (t - e) / Math.abs(e || 1)
}
var m = i(63903),
  g = i(11946),
  f = i(53660),
  y = i(17161);
const v = y.lastDayChangeAvailable || y.alwaysShowLastPriceAndLastDayChange,
  S = a.CheckMobile.any(),
  b = (0, u.getPercentageFormatter)(),
  w = (0, u.getVolumeFormatter)(2),
  C = `${f.notAvailable} (${f.notAvailable}%)`;
var T;

function P(e, t) {
  const i = (0, n.parseRgb)(t),
    s = (0, n.parseRgb)(e);
  return (0, n.distanceRgb)(i, s) < 70 ? (0, n.rgbToHexString)((0, n.invertRgb)(i)) : t
}

function x(e, t, i, s, o) {
  let n, r;
  if (null !== t) {
    const e = o[4],
      i = t.change || 0;
    r = {
      change: i,
      currentPrice: e,
      prevPrice: e - i,
      percentChange: t.change_percent || 0
    }
  }
  const a = i[4],
    l = e.search(s - 1, h.PlotRowSearchMode.NearestLeft, 1),
    c = l?.value[4] ?? null;
  return null !== c && null != a && (n = {
    change: a - c,
    currentPrice: a,
    prevPrice: c,
    percentChange: p(c, a)
  }), {
    barChange: n,
    lastDayChange: r
  }
}! function(e) {
  e[e.Open = 0] = "Open", e[e.High = 1] = "High", e[e.Low = 2] = "Low", e[e.Close = 3] = "Close", e[e.Source = 4] = "Source", e[e.LastPrice = 5] = "LastPrice", e[e.Change = 6] = "Change", e[e.Volume = 7] = "Volume", e[e.LastDayChange = 8] = "LastDayChange"
}(T || (T = {}));
class M {
  constructor(e, t, s = !0) {
    this._series = e, this._model = t, this._searchNearestLeftValue = s, this._emptyValues = [{
      title: r.t(null, void 0, i(16610)),
      visible: !1,
      value: "",
      index: 0,
      orderIndex: 0,
      id: "open"
    }, {
      title: r.t(null, void 0, i(78254)),
      visible: !1,
      value: "",
      index: 1,
      orderIndex: 1,
      id: "high"
    }, {
      title: r.t(null, void 0, i(65318)),
      visible: !1,
      value: "",
      index: 2,
      orderIndex: 2,
      id: "low"
    }, {
      title: r.t(null, {
        context: "input"
      }, i(51408)),
      visible: !1,
      value: "",
      index: 3,
      orderIndex: 3,
      id: "close"
    }, {
      title: "",
      visible: !1,
      value: "",
      index: 4,
      orderIndex: 4,
      id: "source"
    }, {
      title: "",
      visible: !1,
      value: "",
      index: 5,
      orderIndex: 5,
      id: "lastPrice"
    }, {
      title: r.t(null, void 0, i(37276)),
      visible: !1,
      value: "",
      index: 6,
      orderIndex: 6,
      id: "change"
    }, {
      title: r.t(null, {
        context: "study"
      }, i(24261)),
      visible: !1,
      value: "",
      index: 7,
      orderIndex: 7,
      id: "volume"
    }, {
      title: r.t(null, void 0, i(63815)),
      visible: !1,
      value: "",
      index: 8,
      orderIndex: 8,
      id: "lastDayChange"
    }]
  }
  getItems() {
    return this._emptyValues
  }
  getValues(e) {
    const t = this._showLastPriceAndChangeOnly(),
      i = this._emptyValues.map(((e, i) => ({
        ...e,
        value: 6 === i || 8 === i ? C : f.notAvailable,
        visible: 5 !== i && 4 !== i && !t
      })));
    if (this._model.timeScale().isEmpty() || 0 === this._series.bars().size() || this._series.priceScale().isEmpty()) return i;
    const n = (0, s.ensureNotNull)(this._series.data().bars().last());
    (0, o.isNumber)(e) || (e = n.index);
    const r = this._searchNearestLeftValue ? h.PlotRowSearchMode.NearestLeft : h.PlotRowSearchMode.Exact,
      a = this._series.nearestIndex(e, r);
    if (void 0 === a) return i;
    const d = this._series.data().valueAt(a),
      u = this._model.backgroundTopColor().value();
    if (null === d) return i;
    const _ = d[1],
      p = d[2],
      g = d[3],
      y = d[4],
      {
        barChange: S,
        lastDayChange: T
      } = x(this._series.data(), this._series.quotes(), d, a, n.value),
      M = (0, m.getPriceValueFormatterForSource)(this._series);
    if ((0, m.shouldBeFormattedAsPercent)(this._series) || (0, m.shouldBeFormattedAsIndexedTo100)(this._series)) i[6].value = "", i[8].value = "";
    else {
      const e = this._series.formatter(),
        t = {
          signPositive: !0
        };
      if (void 0 !== S) {
        const {
          currentPrice: s,
          prevPrice: o,
          change: n,
          percentChange: r
        } = S, a = e.formatChange?.(s, o, t) ?? e.format(n, t);
        i[6].value = (0, c.forceLTRStr)(`${a} (${b.format(r,t)})`)
      }
      if (void 0 !== T) {
        const {
          currentPrice: s,
          prevPrice: o,
          change: n,
          percentChange: r
        } = T, a = e.formatChange?.(s, o, t) ?? e.format(n, t);
        i[8].value = (0, c.forceLTRStr)(`${a} (${b.format(r,t)})`)
      }
    }
    let I = null;
    if (t) i[5].value = null == y ? f.notAvailable : M(y), i[5].visible = !0, I = this._getChangeColor(S?.change, a), i[6].visible = void 0 !== S, i[8].visible = void 0 !== T || v;
    else {
      i[0].value = null == _ ? f.notAvailable : M(_), i[1].value = null == p ? f.notAvailable : M(p), i[2].value = null == g ? f.notAvailable : M(g), i[3].value = null == y ? f.notAvailable : M(y), i[4].value = M(this._series.barFunction()(d));
      const e = d[5];
      (0, o.isNumber)(e) ? i[7].value = w.format(e): i[7].visible = !1;
      const t = this._series.intervalObj().value().is1Tick(),
        s = 21 !== this._series.style();
      i[0].visible = !t && s, i[1].visible = !t, i[2].visible = !t, i[8].visible = void 0 !== T || v, i[6].visible = void 0 !== S;
      const n = this._series.barColorer().barStyle(a, !1);
      I = P(u, n.barBorderColor ?? n.barColor)
    }
    I = (0, l.resetTransparency)(P(u, I));
    for (const e of i) e.color || (e.color = I);
    return i[8].visible && (i[8].color = (0, l.resetTransparency)(P(u, this._getChangeColor(T?.change, n.index)))), i
  }
  _mobileNonTrackingMode() {
    return S && (null === this._model.crosshairSource().pane || (0, g.isLineToolName)(d.tool.value()) || null !== this._model.lineBeingEdited())
  }
  _showLastPriceAndChangeOnly() {
    return y.alwaysShowLastPriceAndLastDayChange || this._mobileNonTrackingMode()
  }
  _getChangeColor(e, t) {
    const i = this._series.style();
    if (2 === i || 15 === i || 14 === i) return this._series.barColorer().barStyle(t, !1).barColor;
    const s = void 0 === e || e >= 0 ? _.SeriesBarColorer.upColor(this._series.properties()) : _.SeriesBarColorer.downColor(this._series.properties());
    return s.barBorderColor ?? s.barColor
  }
