/**
 * Module 3885 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

3885: (watchedValue_e, watchedValue_t, i) => {
    "use strict";
    i.d(watchedValue_t, {
      SeriesValuesProvider: () => M,
      calculateColor: () => P,
      changesData: () => x
    });
    var watchedValue_s = i(50151),
      o = i(50335),
      watchedValue_n = i(24377),
      r = i(11542),
      watchedValue_a = i(49483),
      l = i(52859),
      c = i(24640),
      h = i(5471),
      d = i(78861),
      u = i(56265),
      _ = i(70859);

    function p(watchedValue_e, watchedValue_t) {
      return 100 * (watchedValue_t - watchedValue_e) / Math.abs(watchedValue_e || 1)
    }
    var m = i(63903),
      g = i(11946),
      f = i(53660),
      y = i(17161);
    const v = y.lastDayChangeAvailable || y.alwaysShowLastPriceAndLastDayChange,
      S = watchedValue_a.CheckMobile.any(),
      b = (0, u.getPercentageFormatter)(),
      w = (0, u.getVolumeFormatter)(2),
      C = `${f.notAvailable} (${f.notAvailable}%)`;
    var T;

    function P(watchedValue_e, watchedValue_t) {
      const i = (0, watchedValue_n.parseRgb)(watchedValue_t),
        watchedValue_s = (0, watchedValue_n.parseRgb)(watchedValue_e);
      return (0, watchedValue_n.distanceRgb)(i, watchedValue_s) < 70 ? (0, watchedValue_n.rgbToHexString)((0, watchedValue_n.invertRgb)(i)) : watchedValue_t
    }

    function x(watchedValue_e, watchedValue_t, i, watchedValue_s, o) {
      let watchedValue_n, r;
      if (null !== watchedValue_t) {
        const watchedValue_e = o[4],
          i = watchedValue_t.change || 0;
        r = {
          change: i,
          currentPrice: watchedValue_e,
          prevPrice: watchedValue_e - i,
          percentChange: watchedValue_t.change_percent || 0
        }
      }
      const watchedValue_a = i[4],
        l = watchedValue_e.search(watchedValue_s - 1, h.PlotRowSearchMode.NearestLeft, 1),
        c = l?.value[4] ?? null;
      return null !== c && null != watchedValue_a && (watchedValue_n = {
        change: watchedValue_a - c,
        currentPrice: watchedValue_a,
        prevPrice: c,
        percentChange: p(c, watchedValue_a)
      }), {
        barChange: watchedValue_n,
        lastDayChange: r
      }
    }! function(watchedValue_e) {
      watchedValue_e[watchedValue_e.Open = 0] = "Open", watchedValue_e[watchedValue_e.High = 1] = "High", watchedValue_e[watchedValue_e.Low = 2] = "Low", watchedValue_e[watchedValue_e.Close = 3] = "Close", watchedValue_e[watchedValue_e.Source = 4] =
        "Source", watchedValue_e[watchedValue_e.LastPrice = 5] = "LastPrice", watchedValue_e[watchedValue_e.Change = 6] = "Change", watchedValue_e[watchedValue_e.Volume = 7] = "Volume", watchedValue_e[watchedValue_e
          .LastDayChange = 8] = "LastDayChange"
    }(T || (T = {}));
    class M {
      constructor(watchedValue_e, watchedValue_t, watchedValue_s = !0) {
        this._series = watchedValue_e, this._model = watchedValue_t, this._searchNearestLeftValue = watchedValue_s, this._emptyValues = [{
          title: r.watchedValue_t(null, void 0, i(16610)),
          visible: !1,
          value: "",
          index: 0,
          orderIndex: 0,
          id: "open"
        }, {
          title: r.watchedValue_t(null, void 0, i(78254)),
          visible: !1,
          value: "",
          index: 1,
          orderIndex: 1,
          id: "high"
        }, {
          title: r.watchedValue_t(null, void 0, i(65318)),
          visible: !1,
          value: "",
          index: 2,
          orderIndex: 2,
          id: "low"
        }, {
          title: r.watchedValue_t(null, {
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
          title: r.watchedValue_t(null, void 0, i(37276)),
          visible: !1,
          value: "",
          index: 6,
          orderIndex: 6,
          id: "change"
        }, {
          title: r.watchedValue_t(null, {
            context: "study"
          }, i(24261)),
          visible: !1,
          value: "",
          index: 7,
          orderIndex: 7,
          id: "volume"
        }, {
          title: r.watchedValue_t(null, void 0, i(63815)),
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
      getValues(watchedValue_e) {
        const watchedValue_t = this._showLastPriceAndChangeOnly(),
          i = this._emptyValues.map(((watchedValue_e, i) => ({
            ...watchedValue_e,
            value: 6 === i || 8 === i ? C : f.notAvailable,
            visible: 5 !== i && 4 !== i && !watchedValue_t
          })));
        if (this._model.timeScale().isEmpty() || 0 === this._series.bars().size() || this._series.priceScale()
          .isEmpty()) return i;
        const watchedValue_n = (0, watchedValue_s.ensureNotNull)(this._series.data().bars().last());
        (0, o.isNumber)(watchedValue_e) || (watchedValue_e = watchedValue_n.index);
        const r = this._searchNearestLeftValue ? h.PlotRowSearchMode.NearestLeft : h.PlotRowSearchMode.Exact,
          watchedValue_a = this._series.nearestIndex(watchedValue_e, r);
        if (void 0 === watchedValue_a) return i;
        const d = this._series.data().valueAt(watchedValue_a),
          u = this._model.backgroundTopColor().value();
        if (null === d) return i;
        const _ = d[1],
          p = d[2],
          g = d[3],
          y = d[4],
          {
            barChange: S,
            lastDayChange: T
          } = x(this._series.data(), this._series.quotes(), d, watchedValue_a, watchedValue_n.value),
          M = (0, m.getPriceValueFormatterForSource)(this._series);
        if ((0, m.shouldBeFormattedAsPercent)(this._series) || (0, m.shouldBeFormattedAsIndexedTo100)(this._series))
          i[6].value = "", i[8].value = "";
        else {
          const watchedValue_e = this._series.formatter(),
            watchedValue_t = {
              signPositive: !0
            };
          if (void 0 !== S) {
            const {
              currentPrice: watchedValue_s,
              prevPrice: o,
              change: watchedValue_n,
              percentChange: r
            } = S, watchedValue_a = watchedValue_e.formatChange?.(watchedValue_s, o, watchedValue_t) ?? watchedValue_e.format(watchedValue_n, watchedValue_t);
            i[6].value = (0, c.forceLTRStr)(`${watchedValue_a} (${b.format(r,watchedValue_t)})`)
          }
          if (void 0 !== T) {
            const {
              currentPrice: watchedValue_s,
              prevPrice: o,
              change: watchedValue_n,
              percentChange: r
            } = T, watchedValue_a = watchedValue_e.formatChange?.(watchedValue_s, o, watchedValue_t) ?? watchedValue_e.format(watchedValue_n, watchedValue_t);
            i[8].value = (0, c.forceLTRStr)(`${watchedValue_a} (${b.format(r,watchedValue_t)})`)
          }
        }
        let I = null;
        if (watchedValue_t) i[5].value = null == y ? f.notAvailable : M(y), i[5].visible = !0, I = this._getChangeColor(S?.change,
          watchedValue_a), i[6].visible = void 0 !== S, i[8].visible = void 0 !== T || v;
        else {
          i[0].value = null == _ ? f.notAvailable : M(_), i[1].value = null == p ? f.notAvailable : M(p), i[2].value =
            null == g ? f.notAvailable : M(g), i[3].value = null == y ? f.notAvailable : M(y), i[4].value = M(this
              ._series.barFunction()(d));
          const watchedValue_e = d[5];
          (0, o.isNumber)(watchedValue_e) ? i[7].value = w.format(watchedValue_e): i[7].visible = !1;
          const watchedValue_t = this._series.intervalObj().value().is1Tick(),
            watchedValue_s = 21 !== this._series.style();
          i[0].visible = !watchedValue_t && watchedValue_s, i[1].visible = !watchedValue_t, i[2].visible = !watchedValue_t, i[8].visible = void 0 !== T || v, i[6]
            .visible = void 0 !== S;
          const watchedValue_n = this._series.barColorer().barStyle(watchedValue_a, !1);
          I = P(u, watchedValue_n.barBorderColor ?? watchedValue_n.barColor)
        }
        I = (0, l.resetTransparency)(P(u, I));
        for (const watchedValue_e of i) watchedValue_e.color || (watchedValue_e.color = I);
        return i[8].visible && (i[8].color = (0, l.resetTransparency)(P(u, this._getChangeColor(T?.change, watchedValue_n
          .index)))), i
      }
      _mobileNonTrackingMode() {
        return S && (null === this._model.crosshairSource().pane || (0, g.isLineToolName)(d.tool.value()) || null !==
          this._model.lineBeingEdited())
      }
      _showLastPriceAndChangeOnly() {
        return y.alwaysShowLastPriceAndLastDayChange || this._mobileNonTrackingMode()
      }
      _getChangeColor(watchedValue_e, watchedValue_t) {
        const i = this._series.style();
        if (2 === i || 15 === i || 14 === i) return this._series.barColorer().barStyle(watchedValue_t, !1).barColor;
        const watchedValue_s = void 0 === watchedValue_e || watchedValue_e >= 0 ? _.SeriesBarColorer.upColor(this._series.properties()) : _.SeriesBarColorer
          .downColor(this._series.properties());
        return watchedValue_s.barBorderColor ?? watchedValue_s.barColor
      }
    }