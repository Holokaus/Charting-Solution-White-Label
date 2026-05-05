/**
 * Module 70859 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

70859: (e, t, i) => {
    "use strict";
    i.d(t, {
      SeriesBarColorer: () => _
    });
    var s = i(58978),
      o = i(50151),
      n = (i(22033), i(5471)),
      r = i(28477);
    const a = (0, s.getHexColorByName)("color-minty-green-500"),
      l = (0, s.getHexColorByName)("color-ripe-red-500");

    function c(e) {
      return {
        barColor: e.upColor.value(),
        barBorderColor: e.borderUpColor ? e.borderUpColor.value() : e.borderColor.value()
      }
    }

    function h(e) {
      return {
        barColor: e.downColor.value(),
        barBorderColor: e.borderDownColor ? e.borderDownColor.value() : e.borderColor.value()
      }
    }

    function d(e, t) {
      return e.borderUpColorProjection && e.borderUpColor ? {
        barColor: t ? e.upColorProjection.value() : e.upColor.value(),
        barBorderColor: t ? e.borderUpColorProjection.value() : e.borderUpColor.value()
      } : {
        barColor: t ? e.upColorProjection.value() : e.upColor.value()
      }
    }

    function u(e, t) {
      return e.borderDownColorProjection && e.borderDownColor ? {
        barColor: t ? e.downColorProjection.value() : e.downColor.value(),
        barBorderColor: t ? e.borderDownColorProjection.value() : e.borderDownColor.value()
      } : {
        barColor: t ? e.downColorProjection.value() : e.downColor.value()
      }
    }
    class _ extends r.AbstractBarColorer {
      constructor(e) {
        super(), this._series = e
      }
      applyBarStyle(e, t, i, s) {
        const o = i;
        o.barColor = void 0, o.barBorderColor = void 0, o.barWickColor = void 0, o.isBarHollow = void 0, o.isBarUp =
          void 0, o.upColor = void 0, o.downColor = void 0, o.isTwoColorBar = void 0, o.isMergedBar = void 0;
        const n = this._series.properties();
        switch (n.childs().style.value()) {
          case 2:
          case 14:
          case 15:
            this._applyLineStyle(e, t, i, s, n);
            break;
          case 18:
            this._applyLineStyle(e, t, i, s, n, !0);
            break;
          case 3:
            this._applyAreaStyle(i, n);
            break;
          case 16:
            this._applyHLCAreaStyle(e, t, i, s, n);
            break;
          case 0:
            this._applyBarStyle(e, i, s, n);
            break;
          case 17:
          case 1:
          case 19:
            this._applyCandleStyle(e, i, s, n);
            break;
          case 9:
            this._applyHollowCandleStyle(e, i, s, n);
            break;
          case 8:
            this._applyHAStyle(e, t, i, s, n);
            break;
          case 10:
            this._applyBaseLineStyle(e, t, i, s, n);
            break;
          case 12:
            this._applyHiLoStyle(t, i, n);
            break;
          case 13:
            this._applyColumnStyle(e, i, s, n);
            break;
          case 4:
            this._applyRenkoStyle(e, t, i, s, n);
            break;
          case 7:
            this._applyPBStyle(e, t, i, s, n);
            break;
          case 5:
            this._applyKagiStyle(e, t, i, s, n);
            break;
          case 6:
            this._applyPnfStyle(e, t, i, s, n);
            break;
          case 11:
            this._applyRangeStyle(e, t, i, s, n);
            break;
          case 20:
            0;
            break;
          case 21:
            this._applyHLCBarsStyle(e, i, s, n)
        }
        return i
      }
      static upColor(e, t) {
        const i = e.childs(),
          s = i.style.value();
        switch (s) {
          case 18:
            return {
              barColor: i.tpoStyle.childs().color.value()
            };
          case 20:
            return {
              barColor: i.svpStyle.childs().volumeProfile.childs().volumeColorUp.value()
            };
          case 2:
            return {
              barColor: i.lineStyle.childs().color.value()
            };
          case 14:
            return {
              barColor: i.lineWithMarkersStyle.childs().color.value()
            };
          case 15:
            return {
              barColor: i.steplineStyle.childs().color.value()
            };
          case 3:
            return {
              barColor: i.areaStyle.childs().linecolor.value()
            };
          case 16:
            return {
              barColor: i.hlcAreaStyle.childs().closeLineColor.value(), barBorderColor: a
            };
          case 0:
            return {
              barColor: i.barStyle.childs().upColor.value()
            };
          case 17:
            return c(i.volFootprintStyle.childs());
          case 19:
            return c(i.volCandlesStyle.childs());
          case 1:
            return c(i.candleStyle.childs());
          case 9:
            return c(i.hollowCandleStyle.childs());
          case 8:
            return c(i.haStyle.childs());
          case 10:
            return {
              barColor: i.baselineStyle.childs().topLineColor.value()
            };
          case 12:
            return {
              barColor: i.hiloStyle.childs().color.value(), barBorderColor: e.childs().hiloStyle.childs()
                .borderColor.value()
            };
          case 13:
            return {
              barColor: i.columnStyle.childs().upColor.value()
            };
          case 4:
            return d(i.renkoStyle.childs(), t);
          case 7:
            return d(i.pbStyle.childs(), t);
          case 5:
            return d(i.kagiStyle.childs(), t);
          case 6:
            return d(i.pnfStyle.childs(), t);
          case 11:
            return {
              barColor: ""
            };
          case 21:
            return {
              barColor: i.hlcBarsStyle.childs().color.value()
            }
        }(0, o.ensureNever)(s)
      }
      static downColor(e, t) {
        const i = e.childs(),
          s = i.style.value();
        switch (s) {
          case 2:
            return {
              barColor: i.lineStyle.childs().color.value()
            };
          case 18:
            return {
              barColor: i.tpoStyle.childs().color.value()
            };
          case 20:
            return {
              barColor: i.svpStyle.childs().volumeProfile.childs().volumeColorUp.value()
            };
          case 14:
            return {
              barColor: i.lineWithMarkersStyle.childs().color.value()
            };
          case 15:
            return {
              barColor: i.steplineStyle.childs().color.value()
            };
          case 3:
            return {
              barColor: i.areaStyle.childs().linecolor.value()
            };
          case 16:
            return {
              barColor: i.hlcAreaStyle.childs().closeLineColor.value(), barBorderColor: l
            };
          case 0:
            return {
              barColor: i.barStyle.childs().downColor.value()
            };
          case 17:
            return h(i.volFootprintStyle.childs());
          case 1:
            return h(i.candleStyle.childs());
          case 19:
            return h(i.volCandlesStyle.childs());
          case 9:
            return h(i.hollowCandleStyle.childs());
          case 8:
            return h(i.haStyle.childs());
          case 10:
            return {
              barColor: i.baselineStyle.childs().bottomLineColor.value()
            };
          case 12:
            return {
              barColor: i.hiloStyle.childs().color.value(), barBorderColor: e.childs().hiloStyle.childs()
                .borderColor.value()
            };
          case 13:
            return {
              barColor: i.columnStyle.childs().downColor.value()
            };
          case 4:
            return u(i.renkoStyle.childs(), t);
          case 7:
            return u(i.pbStyle.childs(), t);
          case 5:
            return u(i.kagiStyle.childs(), t);
          case 6:
            return u(i.pnfStyle.childs(), t);
          case 11:
            return {
              barColor: ""
            };
          case 21:
            return {
              barColor: i.hlcBarsStyle.childs().color.value()
            }
        }(0, o.ensureNever)(s)
      }
      _applyLineStyle(e, t, i, s, n, r) {
        if (i.barColor = _.upColor(n).barColor, r) return;
        const a = this._findBar(e, t, s),
          l = this._series.barFunction()(a),
          c = this._series.priceScale(),
          h = this._series.firstValue();
        if (null == l || c.isEmpty() || null == h) return;
        const d = c.priceToCoordinate(l, h);
        i.barColor = (0, o.ensureNotNull)(this._series.lineColorAtYPercentFromTop(d / c.height()))
      }
      _applyAreaStyle(e, t) {
        e.barColor = _.upColor(t).barColor
      }
      _applyHLCAreaStyle(e, t, i, s, o) {
        const n = this._isUp(e, !1, s, this._series.data().first()?.index !== e) ? _.upColor(o, t) : _.downColor(o,
          t);
        i.barColor = n.barColor, i.barBorderColor = n.barBorderColor
      }
      _applyBarStyle(e, t, i, s) {
        const o = this._isUp(e, !1, i, s.childs().barStyle.childs().barColorsOnPrevClose.value()) ? _.upColor(s) : _
          .downColor(s);
        t.barColor = o.barColor, t.barBorderColor = o.barBorderColor
      }
      _applyCandleStyle(e, t, i, s) {
        const o = s.childs(),
          n = 1 === o.style.value() ? o.candleStyle.childs() : 19 === o.style.value() ? o.volCandlesStyle.childs() :
          o.volFootprintStyle.childs(),
          r = this._isUp(e, !1, i, n.barColorsOnPrevClose.value() && this._series.data().first()?.index !== e),
          a = r ? _.upColor(s) : _.downColor(s);
        t.barColor = a.barColor, t.barBorderColor = a.barBorderColor, t.barWickColor = r ? n.wickUpColor ? n
          .wickUpColor.value() : n.wickColor.value() : n.wickDownColor ? n.wickDownColor.value() : n.wickColor
          .value()
      }
      _applyHollowCandleStyle(e, t, i, s) {
        const o = s.childs().hollowCandleStyle.childs(),
          n = this._isUp(e, !1, i, this._series.data().first()?.index !== e),
          r = n ? _.upColor(s) : _.downColor(s);
        t.barColor = r.barColor, t.barBorderColor = r.barBorderColor, t.barWickColor = n ? o.wickUpColor ? o
          .wickUpColor.value() : o.wickColor.value() : o.wickDownColor ? o.wickDownColor.value() : o.wickColor
          .value();
        const a = this._findBar(e, !1, i);
        t.isBarHollow = a[1] <= a[4]
      }
      _applyHAStyle(e, t, i, s, o) {
        const n = o.childs().haStyle.childs(),
          r = this._isUp(e, t, s, n.barColorsOnPrevClose.value()),
          a = r ? _.upColor(o) : _.downColor(o);
        i.barColor = a.barColor, i.barBorderColor = a.barBorderColor, i.barWickColor = r ? n.wickUpColor.value() : n
          .wickDownColor.value()
      }
      _applyBaseLineStyle(e, t, i, s, n) {
        const r = this._findBar(e, t, s),
          a = n.childs().baselineStyle.childs(),
          l = this._series.priceScale(),
          c = Math.round(l.height() * (Math.abs(100 - a.baseLevelPercentage.value()) / 100)),
          h = (0, o.ensureNotNull)(this._series.firstValue()),
          d = l.coordinateToPrice(c, h);
        r[4] > d ? i.barColor = _.upColor(n, t).barColor : i.barColor = _.downColor(n, t).barColor
      }
      _applyHiLoStyle(e, t, i) {
        const s = _.upColor(i, e);
        t.barColor = s.barColor, t.barBorderColor = s.barBorderColor
      }
      _applyColumnStyle(e, t, i, s) {
        const o = s.childs().columnStyle.childs(),
          n = this._isUp(e, !1, i, o.barColorsOnPrevClose.value()) ? _.upColor(s) : _.downColor(s);
        t.color = n.barColor, t.barColor = t.color
      }
      _applyRenkoStyle(e, t, i, s, o) {}
      _applyPBStyle(e, t, i, s, o) {}
      _applyKagiStyle(e, t, i, s, o) {}
      _applyPnfStyle(e, t, i, s, o) {}
      _applyRangeStyle(e, t, i, s, o) {}
      _applySVPStyle(e, t, i, s) {}
      _applyHLCBarsStyle(e, t, i, s) {
        t.barColor = s.childs().hlcBarsStyle.childs().color.value()
      }
      _findBar(e, t, i) {
        return i ? i.value : this._getSeriesBars(t).valueAt(e) || []
      }
      _findPrevBar(e, t, i) {
        if (i && i.previousValue) return i.previousValue;
        const s = this._series.bars().search(e - 1, n.PlotRowSearchMode.NearestLeft, 4);
        return null !== s ? s.value : []
      }
      _getSeriesBars(e) {
        return e ? this._series.nsBars() : this._series.bars()
      }
      _isUp(e, t, i, s) {
        const o = this._findBar(e, t, i);
        if (s) {
          return this._findPrevBar(e, t, i)[4] <= o[4]
        }
        return o[1] <= o[4]
      }
    }