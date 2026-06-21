/**
 * Module 88732 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

88732: (lineToolManager_e, lineToolManager_t, lineToolManager_i) => {
    "use strict";
    lineToolManager_i.lineToolManager_d(lineToolManager_t, {
      SeriesHiLoPaneView: () => lineToolManager_f
    });
    var lineToolManager_s = lineToolManager_i(59332),
      lineToolManager_o = lineToolManager_i(49251),
      lineToolManager_n = lineToolManager_i(12217),
      lineToolManager_r = lineToolManager_i(4539),
      lineToolManager_a = lineToolManager_i(2383),
      lineToolManager_l = lineToolManager_i(20820);
    class lineToolManager_c extends lineToolManager_l.MediaCoordinatesPaneRenderer {
      constructor() {
        super(...arguments), this._data = null, this._barWidth = null
      }
      setData(lineToolManager_e) {
        this._data = lineToolManager_e, this._barWidth = Math.max(1, Math.round((0, lineToolManager_r.optimalHiLoWidth)(lineToolManager_e.barSpacing)))
      }
      hitTest(lineToolManager_e) {
        if (null === this._data || null === this._barWidth) return null;
        const lineToolManager_t = this._data.bars,
          lineToolManager_i = .5 * this._data.barSpacing;
        if (0 === lineToolManager_t.length) return null;
        if (lineToolManager_e.lineToolManager_x < lineToolManager_t[0].center - lineToolManager_i) return null;
        if (lineToolManager_e.lineToolManager_x > lineToolManager_t[lineToolManager_t.length - 1].center + lineToolManager_i) return null;
        const lineToolManager_s = lineToolManager_t[(0, lineToolManager_n.lowerbound)(lineToolManager_t, lineToolManager_e.lineToolManager_x - lineToolManager_i, ((lineToolManager_e, lineToolManager_t) => lineToolManager_e.center < lineToolManager_t))];
        if (lineToolManager_e.lineToolManager_x < lineToolManager_s.center - lineToolManager_i || lineToolManager_e.lineToolManager_x > lineToolManager_s.center + lineToolManager_i) return null;
        const lineToolManager_o = (0, lineToolManager_r.interactionTolerance)().series + this._barWidth / 2,
          lineToolManager_l = Math.min(lineToolManager_s.high, lineToolManager_s.low),
          lineToolManager_c = Math.max(lineToolManager_s.high, lineToolManager_s.low),
          lineToolManager_h = this._data.fontSize;
        return lineToolManager_l - lineToolManager_o - lineToolManager_h <= lineToolManager_e.lineToolManager_y && lineToolManager_e.lineToolManager_y <= lineToolManager_l + lineToolManager_o || lineToolManager_c - lineToolManager_o <= lineToolManager_e.lineToolManager_y && lineToolManager_e.lineToolManager_y <= lineToolManager_c + lineToolManager_o + lineToolManager_h ? new lineToolManager_a.HitTestResult(lineToolManager_a
          .HitTarget.Regular) : null
      }
      _drawImpl(lineToolManager_e) {
        if (null === this._data || null === this._barWidth) return;
        const {
          font: lineToolManager_t,
          fontSize: lineToolManager_i,
          labelColor: lineToolManager_s,
          bars: lineToolManager_n,
          inverted: lineToolManager_r,
          labelsPadding: lineToolManager_a
        } = this._data, lineToolManager_l = lineToolManager_e.context;
        lineToolManager_l.textAlign = "center", lineToolManager_l.fillStyle = lineToolManager_s, lineToolManager_l.font = (0, lineToolManager_o.makeFont)(lineToolManager_i, lineToolManager_t);
        for (let lineToolManager_e = 0; lineToolManager_e < lineToolManager_n.length; ++lineToolManager_e) {
          const lineToolManager_t = lineToolManager_n[lineToolManager_e],
            lineToolManager_i = Math.round(Math.min(lineToolManager_t.high, lineToolManager_t.low)),
            lineToolManager_s = Math.round(Math.max(lineToolManager_t.high, lineToolManager_t.low)),
            lineToolManager_o = Math.round(lineToolManager_t.center);
          lineToolManager_l.textBaseline = "alphabetic", lineToolManager_l.fillText(lineToolManager_r ? lineToolManager_t.lowLabel : lineToolManager_t.highLabel, lineToolManager_o, lineToolManager_i - lineToolManager_a), lineToolManager_l.textBaseline = "top",
            lineToolManager_l.fillText(lineToolManager_r ? lineToolManager_t.highLabel : lineToolManager_t.lowLabel, lineToolManager_o, lineToolManager_s + lineToolManager_a)
        }
      }
    }
    var lineToolManager_h, lineToolManager_d = lineToolManager_i(94602),
      lineToolManager_u = lineToolManager_i(45801),
      _ = lineToolManager_i(84617),
      lineToolManager_p = lineToolManager_i(33350),
      lineToolManager_m = lineToolManager_i(48227),
      lineToolManager_g = lineToolManager_i(68735);
    ! function(lineToolManager_e) {
      lineToolManager_e[lineToolManager_e.MaxFontSize = 36] = "MaxFontSize", lineToolManager_e[lineToolManager_e.MinFontSize = 8] = "MinFontSize"
    }(lineToolManager_h || (lineToolManager_h = {}));
    class lineToolManager_f extends lineToolManager_g.SeriesBarCandlesPaneView {
      constructor(lineToolManager_e, lineToolManager_t) {
        super(lineToolManager_e, lineToolManager_t), this._labelsRenderer = new lineToolManager_c, this._candlesRenderer = new lineToolManager_m.PaneRendererCandles, this
          ._maxLengthLabel = "", this._calculateFontSize = (0, lineToolManager_s.default)(((lineToolManager_e, lineToolManager_t) => Math.max(1, (0, lineToolManager_n
            .lowerboundExt)((lineToolManager_e => lineToolManager_e + 1), null, (lineToolManager_i => {
            const lineToolManager_s = (0, lineToolManager_o.makeFont)(lineToolManager_i, _.CHART_FONT_FAMILY);
            return (0, lineToolManager_p.measureText)(lineToolManager_e, lineToolManager_s).width <= lineToolManager_t
          }), 7, 36))), ((lineToolManager_e, lineToolManager_t) => `${lineToolManager_e}/${lineToolManager_t}`))
      }
      renderer() {
        const lineToolManager_e = this._source.priceScale();
        if (!lineToolManager_e || lineToolManager_e.isEmpty()) return null;
        const lineToolManager_t = new lineToolManager_d.CompositeRenderer,
          lineToolManager_i = this._needLabels(),
          lineToolManager_s = this._source.properties().childs().hiloStyle.childs(),
          lineToolManager_o = this._model.timeScale().barSpacing();
        if (this._invalidated) {
          const lineToolManager_e = this._source.formatter();
          this._maxLengthLabel = "", this._updateImpl({
            generateLabels: lineToolManager_i,
            formatter: lineToolManager_e
          }), this._invalidated = !1
        }
        if (this._candlesRenderer.setData({
            bars: this._bars,
            wickVisible: !1,
            bodyVisible: lineToolManager_s.drawBody.value(),
            barSpacing: lineToolManager_o,
            borderVisible: lineToolManager_s.showBorders.value(),
            barWidth: (0, lineToolManager_r.optimalHiLoWidth)(lineToolManager_o),
            isPriceScaleInverted: lineToolManager_e.isInverted()
          }), lineToolManager_t.append(this._candlesRenderer), lineToolManager_i) {
          const lineToolManager_i = this._calculateLabelFontSize();
          lineToolManager_i && lineToolManager_i >= 8 && (this._labelsRenderer.setData({
            bars: this._bars,
            barSpacing: lineToolManager_o,
            font: _.CHART_FONT_FAMILY,
            fontSize: lineToolManager_i,
            labelColor: lineToolManager_s.labelColor.value(),
            inverted: lineToolManager_e.isInverted(),
            labelsPadding: .4 * lineToolManager_i
          }), lineToolManager_t.append(this._labelsRenderer))
        }
        return this._model.selection().isSelected(this._source) && this._isMarkersEnabled && this._selectionData &&
          lineToolManager_t.append(new lineToolManager_u.SelectionRenderer(this._selectionData)), lineToolManager_t
      }
      topPixelMargin() {
        return this._margin()
      }
      bottomPixelMargin() {
        return this._margin()
      }
      _createItem(lineToolManager_e, lineToolManager_t, lineToolManager_i, lineToolManager_s) {
        const lineToolManager_o = {
          center: NaN,
          left: NaN,
          right: NaN,
          open: NaN,
          high: NaN,
          low: NaN,
          close: NaN,
          color: lineToolManager_i.barColor,
          borderColor: lineToolManager_i.barBorderColor,
          hollow: !1,
          highLabel: "",
          lowLabel: "",
          timePointIndex: lineToolManager_e
        };
        if (!(0, lineToolManager_g.baseBarCandlesUpdater)(lineToolManager_t, lineToolManager_o)) return null;
        if (lineToolManager_o.open = lineToolManager_o.high, lineToolManager_o.close = lineToolManager_o.low, lineToolManager_s.generateLabels) {
          const lineToolManager_e = lineToolManager_s.formatter.format(lineToolManager_o.high),
            lineToolManager_t = lineToolManager_s.formatter.format(lineToolManager_o.low);
          lineToolManager_o.highLabel = lineToolManager_e, lineToolManager_o.lowLabel = lineToolManager_t;
          const lineToolManager_i = (lineToolManager_e.length > lineToolManager_t.length ? lineToolManager_e : lineToolManager_t).replace(/\lineToolManager_d/lineToolManager_g, "0");
          lineToolManager_i.length > this._maxLengthLabel.length && (this._maxLengthLabel = lineToolManager_i)
        }
        return lineToolManager_o
      }
      _margin() {
        if (this._needLabels()) {
          const lineToolManager_e = this._calculateLabelFontSize();
          if (lineToolManager_e && lineToolManager_e >= 8) return 1.4 * lineToolManager_e
        }
        return 0
      }
      _calculateLabelFontSize() {
        return "" === this._maxLengthLabel ? null : this._calculateFontSize(this._maxLengthLabel, Math.floor(this
          ._model.timeScale().barSpacing()) - 2)
      }
      _needLabels() {
        const lineToolManager_e = this._source.properties().childs().hiloStyle.childs().showLabels.value(),
          lineToolManager_t = this._model.timeScale().barSpacing();
        return lineToolManager_e && lineToolManager_t > 5
      }
    }