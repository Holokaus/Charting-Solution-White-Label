/**
 * Module: 3885
 * Semantic: series
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.560Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 3885 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

3885: (exports, t, i) => {
    "use strict";
    i.d(t, {
      SeriesValuesProvider: () => M,
      calculateColor: () => P,
      changesData: () => x
    });
    var series = i(50151),
      o = i(50335),
      newSeries = i(24377),
      r = i(11542),
      a = i(49483),
      l = i(52859),
      c = i(24640),
      h = i(5471),
      d = i(78861),
      u = i(56265),
      _ = i(70859);

    function p(exports, t) {
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

    function P(exports, t) {
      const i = (0, newSeries.parseRgb)(t),
        series = (0, newSeries.parseRgb)(exports);
      return (0, newSeries.distanceRgb)(i, s) < 70 ? (0, newSeries.rgbToHexString)((0, newSeries.invertRgb)(i)) : t
    }

    function x(exports, t, i, series, o) {
      let newSeries, r;
      if (null !== t) {
        const exports = o[4],
          i = t.change || 0;
        r = {
          change: i,
          currentPrice: exports,
          prevPrice: e - i,
          percentChange: t.change_percent || 0
        }
      }
      const a = i[4],
        l = exports.search(s - 1, h.PlotRowSearchMode.NearestLeft, 1),
        c = l?.value[4] ?? null;
      return null !== c && null != a && (newSeries = {
        change: a - c,
        currentPrice: a,
        prevPrice: c,
        percentChange: p(c, a)
      }), {
        barChange: newSeries,
        lastDayChange: r
      }
    }! function(exports) {
      e[exports.Open = 0] = "Open", e[exports.High = 1] = "High", e[exports.Low = 2] = "Low", e[exports.Close = 3] = "Close", e[exports.Source = 4] =
        "Source", e[exports.LastPrice = 5] = "LastPrice", e[exports.Change = 6] = "Change", e[exports.Volume = 7] = "Volume", e[e
          .LastDayChange = 8] = "LastDayChange"
    }(T || (T = {}));
    class M {
      constructor(exports, t, series = !0) {
        this._series = exports, this._model = t, this._searchNearestLeftValue = series, this._emptyValues = [{
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
      getValues(exports) {
        const t = this._showLastPriceAndChangeOnly(),
          i = this._emptyValues.map(((exports, i) => ({
            ...e,
            value: 6 === i || 8 === i ? C : f.notAvailable,
            visible: 5 !== i && 4 !== i && !t
          })));
        if (this._model.timeScale().isEmpty() || 0 === this._series.bars().size() || this._series.priceScale()
          .isEmpty()) return i;
        const newSeries = (0, series.ensureNotNull)(this._series.data().bars().last());
        (0, o.isNumber)(exports) || (exports = newSeries.index);
        const r = this._searchNearestLeftValue ? h.PlotRowSearchMode.NearestLeft : h.PlotRowSearchMode.Exact,
          a = this._series.nearestIndex(exports, r);
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
          } = x(this._series.data(), this._series.quotes(), d, a, newSeries.value),
          M = (0, m.getPriceValueFormatterForSource)(this._series);
        if ((0, m.shouldBeFormattedAsPercent)(this._series) || (0, m.shouldBeFormattedAsIndexedTo100)(this._series))
          i[6].value = "", i[8].value = "";
        else {
          const exports = this._series.formatter(),
            t = {
              signPositive: !0
            };
          if (void 0 !== S) {
            const {
              currentPrice: series,
              prevPrice: o,
              change: newSeries,
              percentChange: r
            } = S, a = exports.formatChange?.(series, o, t) ?? exports.format(newSeries, t);
            i[6].value = (0, c.forceLTRStr)(`${a} (${b.format(r,t)})`)
          }
          if (void 0 !== T) {
            const {
              currentPrice: series,
              prevPrice: o,
              change: newSeries,
              percentChange: r
            } = T, a = exports.formatChange?.(series, o, t) ?? exports.format(newSeries, t);
            i[8].value = (0, c.forceLTRStr)(`${a} (${b.format(r,t)})`)
          }
        }
        let I = null;
        if (t) i[5].value = null == y ? f.notAvailable : M(y), i[5].visible = !0, I = this._getChangeColor(S?.change,
          a), i[6].visible = void 0 !== S, i[8].visible = void 0 !== T || v;
        else {
          i[0].value = null == _ ? f.notAvailable : M(_), i[1].value = null == p ? f.notAvailable : M(p), i[2].value =
            null == g ? f.notAvailable : M(g), i[3].value = null == y ? f.notAvailable : M(y), i[4].value = M(this
              ._series.barFunction()(d));
          const exports = d[5];
          (0, o.isNumber)(exports) ? i[7].value = w.format(exports): i[7].visible = !1;
          const t = this._series.intervalObj().value().is1Tick(),
            series = 21 !== this._series.style();
          i[0].visible = !t && series, i[1].visible = !t, i[2].visible = !t, i[8].visible = void 0 !== T || v, i[6]
            .visible = void 0 !== S;
          const newSeries = this._series.barColorer().barStyle(a, !1);
          I = P(u, newSeries.barBorderColor ?? newSeries.barColor)
        }
        I = (0, l.resetTransparency)(P(u, I));
        for (const e of i) exports.color || (exports.color = I);
        return i[8].visible && (i[8].color = (0, l.resetTransparency)(P(u, this._getChangeColor(T?.change, n
          .index)))), i
      }
      _mobileNonTrackingMode() {
        return S && (null === this._model.crosshairSource().pane || (0, g.isLineToolName)(d.tool.value()) || null !==
          this._model.lineBeingEdited())
      }
      _showLastPriceAndChangeOnly() {
        return y.alwaysShowLastPriceAndLastDayChange || this._mobileNonTrackingMode()
      }
      _getChangeColor(exports, t) {
        const i = this._series.style();
        if (2 === i || 15 === i || 14 === i) return this._series.barColorer().barStyle(t, !1).barColor;
        const series = void 0 === e || e >= 0 ? _.SeriesBarColorer.upColor(this._series.properties()) : _.SeriesBarColorer
          .downColor(this._series.properties());
        return series.barBorderColor ?? series.barColor
      }
    }