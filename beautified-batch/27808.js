/**
 * Module 27808 - Auto-beautified from TradingView webpack bundle
 *
 * @module 27808
 * @date 2026-04-23
 * @size 1337 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 4539, 45801, 48227, 68735, 94602
 *
 * Exports:
 *   - SeriesCandlesPaneView (internal: l)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  SeriesCandlesPaneView: () => l
});
var s = i(94602),
  o = i(4539),
  n = i(45801),
  r = i(68735),
  a = i(48227);
class l extends r.SeriesBarCandlesPaneView {
    constructor(e, t, i = 1) {
      super(e, t), this._scaleCoeff = 1, this._scaleCoeff = i
    }
    renderer() {
      this._invalidated && (this._updateImpl(null), this._invalidated = !1);
      const e = this._source.priceScale();
      if (!e) return null;
      const t = this._source.properties().childs(),
        i = 1 === t.style.value() ? t.candleStyle.childs() : 19 === t.style.value() ? t.volCandlesStyle.childs() : t.volFootprintStyle.childs(),
        r = this._model.timeScale().barSpacing(),
        l = {
          bars: this._bars,
          barSpacing: r,
          bodyVisible: i.drawBody.value(),
          borderVisible: i.drawBorder.value(),
          borderColor: i.borderColor.value(),
          wickColor: i.wickColor.value(),
          barWidth: (0, o.optimalBarWidth)(r),
          wickVisible: i.drawWick.value(),
          isPriceScaleInverted: e.isInverted(),
          scaleCoeff: this._scaleCoeff
        },
        c = new s.CompositeRenderer;
      return c.append(new a.PaneRendererCandles(l)), this._model.selection().isSelected(this._source) && this._isMarkersEnabled && this._selectionData && c.append(new n.SelectionRenderer(this._selectionData)), c
    }
    _createItem(e, t, i) {
      const s = {
        center: NaN,
        open: NaN,
        high: NaN,
        low: NaN,
        close: NaN,
        left: NaN,
        right: NaN,
        timePointIndex: e,
        color: i.barColor,
        borderColor: i.barBorderColor,
        wickColor: i.barWickColor,
        hollow: i.isBarHollow
      };
      return (0, r.baseBarCandlesUpdater)(t, s) ? s : null
    }
