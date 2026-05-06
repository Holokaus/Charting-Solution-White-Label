/**
 * Module 88732 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

88732: (e, t, i) => {
    "use strict";
    i.d(t, {
      SeriesHiLoPaneView: () => lineToolManager_f
    });
    var s = i(59332),
      o = i(49251),
      n = i(12217),
      r = i(4539),
      a = i(2383),
      l = i(20820);
    class c extends l.MediaCoordinatesPaneRenderer {
      constructor() {
        super(...arguments), this._data = null, this._barWidth = null
      }
      setData(e) {
        this._data = e, this._barWidth = Math.max(1, Math.round((0, r.optimalHiLoWidth)(e.barSpacing)))
      }
      hitTest(e) {
        if (null === this._data || null === this._barWidth) return null;
        const t = this._data.bars,
          i = .5 * this._data.barSpacing;
        if (0 === t.length) return null;
        if (e.x < t[0].center - i) return null;
        if (e.x > t[t.length - 1].center + i) return null;
        const s = t[(0, n.lowerbound)(t, e.x - i, ((e, t) => e.center < t))];
        if (e.x < s.center - i || e.x > s.center + i) return null;
        const o = (0, r.interactionTolerance)().series + this._barWidth / 2,
          l = Math.min(s.high, s.low),
          c = Math.max(s.high, s.low),
          h = this._data.fontSize;
        return l - o - h <= e.y && e.y <= l + o || c - o <= e.y && e.y <= c + o + h ? new a.HitTestResult(a
          .HitTarget.Regular) : null
      }
      _drawImpl(e) {
        if (null === this._data || null === this._barWidth) return;
        const {
          font: t,
          fontSize: i,
          labelColor: s,
          bars: n,
          inverted: r,
          labelsPadding: a
        } = this._data, l = e.context;
        l.textAlign = "center", l.fillStyle = s, l.font = (0, o.makeFont)(i, t);
        for (let e = 0; e < n.length; ++e) {
          const t = n[e],
            i = Math.round(Math.min(t.high, t.low)),
            s = Math.round(Math.max(t.high, t.low)),
            o = Math.round(t.center);
          l.textBaseline = "alphabetic", l.fillText(r ? t.lowLabel : t.highLabel, o, i - a), l.textBaseline = "top",
            l.fillText(r ? t.highLabel : t.lowLabel, o, s + a)
        }
      }
    }
    var h, d = i(94602),
      u = i(45801),
      _ = i(84617),
      lineToolManager_p = i(33350),
      lineToolManager_m = i(48227),
      lineToolManager_g = i(68735);
    ! function(e) {
      e[e.MaxFontSize = 36] = "MaxFontSize", e[e.MinFontSize = 8] = "MinFontSize"
    }(h || (h = {}));
    class lineToolManager_f extends lineToolManager_g.SeriesBarCandlesPaneView {
      constructor(e, t) {
        super(e, t), this._labelsRenderer = new c, this._candlesRenderer = new lineToolManager_m.PaneRendererCandles, this
          ._maxLengthLabel = "", this._calculateFontSize = (0, s.default)(((e, t) => Math.max(1, (0, n
            .lowerboundExt)((e => e + 1), null, (i => {
            const s = (0, o.makeFont)(i, _.CHART_FONT_FAMILY);
            return (0, lineToolManager_p.measureText)(e, s).width <= t
          }), 7, 36))), ((e, t) => `${e}/${t}`))
      }
      renderer() {
        const e = this._source.priceScale();
        if (!e || e.isEmpty()) return null;
        const t = new d.CompositeRenderer,
          i = this._needLabels(),
          s = this._source.properties().childs().hiloStyle.childs(),
          o = this._model.timeScale().barSpacing();
        if (this._invalidated) {
          const e = this._source.formatter();
          this._maxLengthLabel = "", this._updateImpl({
            generateLabels: i,
            formatter: e
          }), this._invalidated = !1
        }
        if (this._candlesRenderer.setData({
            bars: this._bars,
            wickVisible: !1,
            bodyVisible: s.drawBody.value(),
            barSpacing: o,
            borderVisible: s.showBorders.value(),
            barWidth: (0, r.optimalHiLoWidth)(o),
            isPriceScaleInverted: e.isInverted()
          }), t.append(this._candlesRenderer), i) {
          const i = this._calculateLabelFontSize();
          i && i >= 8 && (this._labelsRenderer.setData({
            bars: this._bars,
            barSpacing: o,
            font: _.CHART_FONT_FAMILY,
            fontSize: i,
            labelColor: s.labelColor.value(),
            inverted: e.isInverted(),
            labelsPadding: .4 * i
          }), t.append(this._labelsRenderer))
        }
        return this._model.selection().isSelected(this._source) && this._isMarkersEnabled && this._selectionData &&
          t.append(new u.SelectionRenderer(this._selectionData)), t
      }
      topPixelMargin() {
        return this._margin()
      }
      bottomPixelMargin() {
        return this._margin()
      }
      _createItem(e, t, i, s) {
        const o = {
          center: NaN,
          left: NaN,
          right: NaN,
          open: NaN,
          high: NaN,
          low: NaN,
          close: NaN,
          color: i.barColor,
          borderColor: i.barBorderColor,
          hollow: !1,
          highLabel: "",
          lowLabel: "",
          timePointIndex: e
        };
        if (!(0, lineToolManager_g.baseBarCandlesUpdater)(t, o)) return null;
        if (o.open = o.high, o.close = o.low, s.generateLabels) {
          const e = s.formatter.format(o.high),
            t = s.formatter.format(o.low);
          o.highLabel = e, o.lowLabel = t;
          const i = (e.length > t.length ? e : t).replace(/\d/lineToolManager_g, "0");
          i.length > this._maxLengthLabel.length && (this._maxLengthLabel = i)
        }
        return o
      }
      _margin() {
        if (this._needLabels()) {
          const e = this._calculateLabelFontSize();
          if (e && e >= 8) return 1.4 * e
        }
        return 0
      }
      _calculateLabelFontSize() {
        return "" === this._maxLengthLabel ? null : this._calculateFontSize(this._maxLengthLabel, Math.floor(this
          ._model.timeScale().barSpacing()) - 2)
      }
      _needLabels() {
        const e = this._source.properties().childs().hiloStyle.childs().showLabels.value(),
          t = this._model.timeScale().barSpacing();
        return e && t > 5
      }
    }