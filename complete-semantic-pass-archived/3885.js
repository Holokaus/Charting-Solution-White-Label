/**
 * Module 3885 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

3885: (watchedValue_e, watchedValue_t, watchedValue_i) => {
    "use strict";
    watchedValue_i.watchedValue_d(watchedValue_t, {
      SeriesValuesProvider: () => M,
      calculateColor: () => P,
      changesData: () => watchedValue_x
    });
    var watchedValue_s = watchedValue_i(50151),
      watchedValue_o = watchedValue_i(50335),
      watchedValue_n = watchedValue_i(24377),
      watchedValue_r = watchedValue_i(11542),
      watchedValue_a = watchedValue_i(49483),
      watchedValue_l = watchedValue_i(52859),
      watchedValue_c = watchedValue_i(24640),
      watchedValue_h = watchedValue_i(5471),
      watchedValue_d = watchedValue_i(78861),
      watchedValue_u = watchedValue_i(56265),
      _ = watchedValue_i(70859);

    function watchedValue_p(watchedValue_e, watchedValue_t) {
      return 100 * (watchedValue_t - watchedValue_e) / Math.abs(watchedValue_e || 1)
    }
    var watchedValue_m = watchedValue_i(63903),
      watchedValue_g = watchedValue_i(11946),
      watchedValue_f = watchedValue_i(53660),
      watchedValue_y = watchedValue_i(17161);
    const watchedValue_v = watchedValue_y.lastDayChangeAvailable || watchedValue_y.alwaysShowLastPriceAndLastDayChange,
      S = watchedValue_a.CheckMobile.any(),
      watchedValue_b = (0, watchedValue_u.getPercentageFormatter)(),
      watchedValue_w = (0, watchedValue_u.getVolumeFormatter)(2),
      C = `${watchedValue_f.notAvailable} (${watchedValue_f.notAvailable}%)`;
    var T;

    function P(watchedValue_e, watchedValue_t) {
      const watchedValue_i = (0, watchedValue_n.parseRgb)(watchedValue_t),
        watchedValue_s = (0, watchedValue_n.parseRgb)(watchedValue_e);
      return (0, watchedValue_n.distanceRgb)(watchedValue_i, watchedValue_s) < 70 ? (0, watchedValue_n.rgbToHexString)((0, watchedValue_n.invertRgb)(watchedValue_i)) : watchedValue_t
    }

    function watchedValue_x(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s, watchedValue_o) {
      let watchedValue_n, watchedValue_r;
      if (null !== watchedValue_t) {
        const watchedValue_e = watchedValue_o[4],
          watchedValue_i = watchedValue_t.change || 0;
        watchedValue_r = {
          change: watchedValue_i,
          currentPrice: watchedValue_e,
          prevPrice: watchedValue_e - watchedValue_i,
          percentChange: watchedValue_t.change_percent || 0
        }
      }
      const watchedValue_a = watchedValue_i[4],
        watchedValue_l = watchedValue_e.search(watchedValue_s - 1, watchedValue_h.PlotRowSearchMode.NearestLeft, 1),
        watchedValue_c = watchedValue_l?.value[4] ?? null;
      return null !== watchedValue_c && null != watchedValue_a && (watchedValue_n = {
        change: watchedValue_a - watchedValue_c,
        currentPrice: watchedValue_a,
        prevPrice: watchedValue_c,
        percentChange: watchedValue_p(watchedValue_c, watchedValue_a)
      }), {
        barChange: watchedValue_n,
        lastDayChange: watchedValue_r
      }
    }! function(watchedValue_e) {
      watchedValue_e[watchedValue_e.Open = 0] = "Open", watchedValue_e[watchedValue_e.High = 1] = "High", watchedValue_e[watchedValue_e.Low = 2] = "Low", watchedValue_e[watchedValue_e.Close = 3] = "Close", watchedValue_e[watchedValue_e.Source = 4] =
        "Source", watchedValue_e[watchedValue_e.LastPrice = 5] = "LastPrice", watchedValue_e[watchedValue_e.Change = 6] = "Change", watchedValue_e[watchedValue_e.Volume = 7] = "Volume", watchedValue_e[watchedValue_e
          .LastDayChange = 8] = "LastDayChange"
    }(T || (T = {}));
    class M {
      constructor(watchedValue_e, watchedValue_t, watchedValue_s = !0) {
        this._series = watchedValue_e, this._model = watchedValue_t, this._searchNearestLeftValue = watchedValue_s, this._emptyValues = [{
          title: watchedValue_r.watchedValue_t(null, void 0, watchedValue_i(16610)),
          visible: !1,
          value: "",
          index: 0,
          orderIndex: 0,
          id: "open"
        }, {
          title: watchedValue_r.watchedValue_t(null, void 0, watchedValue_i(78254)),
          visible: !1,
          value: "",
          index: 1,
          orderIndex: 1,
          id: "high"
        }, {
          title: watchedValue_r.watchedValue_t(null, void 0, watchedValue_i(65318)),
          visible: !1,
          value: "",
          index: 2,
          orderIndex: 2,
          id: "low"
        }, {
          title: watchedValue_r.watchedValue_t(null, {
            context: "input"
          }, watchedValue_i(51408)),
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
          title: watchedValue_r.watchedValue_t(null, void 0, watchedValue_i(37276)),
          visible: !1,
          value: "",
          index: 6,
          orderIndex: 6,
          id: "change"
        }, {
          title: watchedValue_r.watchedValue_t(null, {
            context: "study"
          }, watchedValue_i(24261)),
          visible: !1,
          value: "",
          index: 7,
          orderIndex: 7,
          id: "volume"
        }, {
          title: watchedValue_r.watchedValue_t(null, void 0, watchedValue_i(63815)),
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
          watchedValue_i = this._emptyValues.map(((watchedValue_e, watchedValue_i) => ({
            ...watchedValue_e,
            value: 6 === watchedValue_i || 8 === watchedValue_i ? C : watchedValue_f.notAvailable,
            visible: 5 !== watchedValue_i && 4 !== watchedValue_i && !watchedValue_t
          })));
        if (this._model.timeScale().isEmpty() || 0 === this._series.bars().size() || this._series.priceScale()
          .isEmpty()) return watchedValue_i;
        const watchedValue_n = (0, watchedValue_s.ensureNotNull)(this._series.data().bars().last());
        (0, watchedValue_o.isNumber)(watchedValue_e) || (watchedValue_e = watchedValue_n.index);
        const watchedValue_r = this._searchNearestLeftValue ? watchedValue_h.PlotRowSearchMode.NearestLeft : watchedValue_h.PlotRowSearchMode.Exact,
          watchedValue_a = this._series.nearestIndex(watchedValue_e, watchedValue_r);
        if (void 0 === watchedValue_a) return watchedValue_i;
        const watchedValue_d = this._series.data().valueAt(watchedValue_a),
          watchedValue_u = this._model.backgroundTopColor().value();
        if (null === watchedValue_d) return watchedValue_i;
        const _ = watchedValue_d[1],
          watchedValue_p = watchedValue_d[2],
          watchedValue_g = watchedValue_d[3],
          watchedValue_y = watchedValue_d[4],
          {
            barChange: S,
            lastDayChange: T
          } = watchedValue_x(this._series.data(), this._series.quotes(), watchedValue_d, watchedValue_a, watchedValue_n.value),
          M = (0, watchedValue_m.getPriceValueFormatterForSource)(this._series);
        if ((0, watchedValue_m.shouldBeFormattedAsPercent)(this._series) || (0, watchedValue_m.shouldBeFormattedAsIndexedTo100)(this._series))
          watchedValue_i[6].value = "", watchedValue_i[8].value = "";
        else {
          const watchedValue_e = this._series.formatter(),
            watchedValue_t = {
              signPositive: !0
            };
          if (void 0 !== S) {
            const {
              currentPrice: watchedValue_s,
              prevPrice: watchedValue_o,
              change: watchedValue_n,
              percentChange: watchedValue_r
            } = S, watchedValue_a = watchedValue_e.formatChange?.(watchedValue_s, watchedValue_o, watchedValue_t) ?? watchedValue_e.format(watchedValue_n, watchedValue_t);
            watchedValue_i[6].value = (0, watchedValue_c.forceLTRStr)(`${watchedValue_a} (${watchedValue_b.format(watchedValue_r,watchedValue_t)})`)
          }
          if (void 0 !== T) {
            const {
              currentPrice: watchedValue_s,
              prevPrice: watchedValue_o,
              change: watchedValue_n,
              percentChange: watchedValue_r
            } = T, watchedValue_a = watchedValue_e.formatChange?.(watchedValue_s, watchedValue_o, watchedValue_t) ?? watchedValue_e.format(watchedValue_n, watchedValue_t);
            watchedValue_i[8].value = (0, watchedValue_c.forceLTRStr)(`${watchedValue_a} (${watchedValue_b.format(watchedValue_r,watchedValue_t)})`)
          }
        }
        let I = null;
        if (watchedValue_t) watchedValue_i[5].value = null == watchedValue_y ? watchedValue_f.notAvailable : M(watchedValue_y), watchedValue_i[5].visible = !0, I = this._getChangeColor(S?.change,
          watchedValue_a), watchedValue_i[6].visible = void 0 !== S, watchedValue_i[8].visible = void 0 !== T || watchedValue_v;
        else {
          watchedValue_i[0].value = null == _ ? watchedValue_f.notAvailable : M(_), watchedValue_i[1].value = null == watchedValue_p ? watchedValue_f.notAvailable : M(watchedValue_p), watchedValue_i[2].value =
            null == watchedValue_g ? watchedValue_f.notAvailable : M(watchedValue_g), watchedValue_i[3].value = null == watchedValue_y ? watchedValue_f.notAvailable : M(watchedValue_y), watchedValue_i[4].value = M(this
              ._series.barFunction()(watchedValue_d));
          const watchedValue_e = watchedValue_d[5];
          (0, watchedValue_o.isNumber)(watchedValue_e) ? watchedValue_i[7].value = watchedValue_w.format(watchedValue_e): watchedValue_i[7].visible = !1;
          const watchedValue_t = this._series.intervalObj().value().is1Tick(),
            watchedValue_s = 21 !== this._series.style();
          watchedValue_i[0].visible = !watchedValue_t && watchedValue_s, watchedValue_i[1].visible = !watchedValue_t, watchedValue_i[2].visible = !watchedValue_t, watchedValue_i[8].visible = void 0 !== T || watchedValue_v, watchedValue_i[6]
            .visible = void 0 !== S;
          const watchedValue_n = this._series.barColorer().barStyle(watchedValue_a, !1);
          I = P(watchedValue_u, watchedValue_n.barBorderColor ?? watchedValue_n.barColor)
        }
        I = (0, watchedValue_l.resetTransparency)(P(watchedValue_u, I));
        for (const watchedValue_e of watchedValue_i) watchedValue_e.color || (watchedValue_e.color = I);
        return watchedValue_i[8].visible && (watchedValue_i[8].color = (0, watchedValue_l.resetTransparency)(P(watchedValue_u, this._getChangeColor(T?.change, watchedValue_n
          .index)))), watchedValue_i
      }
      _mobileNonTrackingMode() {
        return S && (null === this._model.crosshairSource().pane || (0, watchedValue_g.isLineToolName)(watchedValue_d.tool.value()) || null !==
          this._model.lineBeingEdited())
      }
      _showLastPriceAndChangeOnly() {
        return watchedValue_y.alwaysShowLastPriceAndLastDayChange || this._mobileNonTrackingMode()
      }
      _getChangeColor(watchedValue_e, watchedValue_t) {
        const watchedValue_i = this._series.style();
        if (2 === watchedValue_i || 15 === watchedValue_i || 14 === watchedValue_i) return this._series.barColorer().barStyle(watchedValue_t, !1).barColor;
        const watchedValue_s = void 0 === watchedValue_e || watchedValue_e >= 0 ? _.SeriesBarColorer.upColor(this._series.properties()) : _.SeriesBarColorer
          .downColor(this._series.properties());
        return watchedValue_s.barBorderColor ?? watchedValue_s.barColor
      }
    }