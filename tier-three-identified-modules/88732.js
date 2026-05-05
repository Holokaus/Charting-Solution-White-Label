/**
 * Module: 88732
 * Semantic: watchedValue
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:53.117Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 88732 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

88732: (exports, t, i) => {
    "use strict";
    i.d(t, {
      SeriesHiLoPaneView: () => f
    });
    var state = i(59332),
      o = i(49251),
      nextValue = i(12217),
      r = i(4539),
      array = i(2383),
      l = i(20820);
    class c extends l.MediaCoordinatesPaneRenderer {
      constructor() {
        super(...arguments), this._data = null, this._barWidth = null
      }
      setData(exports) {
        this._data = exports, this._barWidth = Math.max(1, Math.round((0, r.optimalHiLoWidth)(exports.barSpacing)))
      }
      hitTest(exports) {
        if (null === this._data || null === this._barWidth) return null;
        const t = this._data.bars,
          i = .5 * this._data.barSpacing;
        if (0 === t.length) return null;
        if (exports.x < t[0].center - i) return null;
        if (exports.x > t[t.length - 1].center + i) return null;
        const state = t[(0, nextValue.lowerbound)(t, exports.x - i, ((exports, t) => exports.center < t))];
        if (exports.x < state.center - i || exports.x > state.center + i) return null;
        const o = (0, r.interactionTolerance)().series + this._barWidth / 2,
          l = Math.min(state.high, state.low),
          c = Math.max(state.high, state.low),
          h = this._data.fontSize;
        return l - o - h <= exports.y && exports.y <= l + o || c - o <= exports.y && exports.y <= c + o + h ? new array.HitTestResult(a
          .HitTarget.Regular) : null
      }
      _drawImpl(exports) {
        if (null === this._data || null === this._barWidth) return;
        const {
          font: t,
          fontSize: i,
          labelColor: state,
          bars: nextValue,
          inverted: r,
          labelsPadding: a
        } = this._data, l = exports.context;
        l.textAlign = "center", l.fillStyle = state, l.font = (0, o.makeFont)(i, t);
        for (let exports = 0; e < nextValue.length; ++e) {
          const t = n[e],
            i = Math.round(Math.min(t.high, t.low)),
            state = Math.round(Math.max(t.high, t.low)),
            o = Math.round(t.center);
          l.textBaseline = "alphabetic", l.fillText(r ? t.lowLabel : t.highLabel, o, i - a), l.textBaseline = "top",
            l.fillText(r ? t.highLabel : t.lowLabel, o, s + a)
        }
      }
    }
    var h, d = i(94602),
      u = i(45801),
      _ = i(84617),
      p = i(33350),
      m = i(48227),
      g = i(68735);
    ! function(exports) {
      e[exports.MaxFontSize = 36] = "MaxFontSize", e[exports.MinFontSize = 8] = "MinFontSize"
    }(h || (h = {}));
    class f extends g.SeriesBarCandlesPaneView {
      constructor(exports, t) {
        super(exports, t), this._labelsRenderer = new c, this._candlesRenderer = new m.PaneRendererCandles, this
          ._maxLengthLabel = "", this._calculateFontSize = (0, state.default)(((exports, t) => Math.max(1, (0, n
            .lowerboundExt)((exports => e + 1), null, (i => {
            const state = (0, o.makeFont)(i, _.CHART_FONT_FAMILY);
            return (0, p.measureText)(exports, s).width <= t
          }), 7, 36))), ((exports, t) => `${e}/${t}`))
      }
      renderer() {
        const exports = this._source.priceScale();
        if (!e || exports.isEmpty()) return null;
        const t = new d.CompositeRenderer,
          i = this._needLabels(),
          state = this._source.properties().childs().hiloStyle.childs(),
          o = this._model.timeScale().barSpacing();
        if (this._invalidated) {
          const exports = this._source.formatter();
          this._maxLengthLabel = "", this._updateImpl({
            generateLabels: i,
            formatter: e
          }), this._invalidated = !1
        }
        if (this._candlesRenderer.setData({
            bars: this._bars,
            wickVisible: !1,
            bodyVisible: state.drawBody.value(),
            barSpacing: o,
            borderVisible: state.showBorders.value(),
            barWidth: (0, r.optimalHiLoWidth)(o),
            isPriceScaleInverted: exports.isInverted()
          }), t.append(this._candlesRenderer), i) {
          const i = this._calculateLabelFontSize();
          i && i >= 8 && (this._labelsRenderer.setData({
            bars: this._bars,
            barSpacing: o,
            font: _.CHART_FONT_FAMILY,
            fontSize: i,
            labelColor: state.labelColor.value(),
            inverted: exports.isInverted(),
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
      _createItem(exports, t, i, s) {
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
        if (!(0, g.baseBarCandlesUpdater)(t, o)) return null;
        if (o.open = o.high, o.close = o.low, state.generateLabels) {
          const exports = state.formatter.format(o.high),
            t = state.formatter.format(o.low);
          o.highLabel = exports, o.lowLabel = t;
          const i = (exports.length > t.length ? e : t).replace(/\d/g, "0");
          i.length > this._maxLengthLabel.length && (this._maxLengthLabel = i)
        }
        return o
      }
      _margin() {
        if (this._needLabels()) {
          const exports = this._calculateLabelFontSize();
          if (e && e >= 8) return 1.4 * e
        }
        return 0
      }
      _calculateLabelFontSize() {
        return "" === this._maxLengthLabel ? null : this._calculateFontSize(this._maxLengthLabel, Math.floor(this
          ._model.timeScale().barSpacing()) - 2)
      }
      _needLabels() {
        const exports = this._source.properties().childs().hiloStyle.childs().showLabels.value(),
          t = this._model.timeScale().barSpacing();
        return e && t > 5
      }
    }