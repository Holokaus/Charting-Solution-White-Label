/**
 * Module 54405 - Auto-beautified from TradingView webpack bundle
 *
 * @module 54405
 * @date 2026-04-23
 * @size 896 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 4539, 27808, 45801, 48227, 94602
 *
 * Exports:
 *   - SeriesHollowCandlesPaneView (internal: l)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  SeriesHollowCandlesPaneView: () => l
});
var s = i(94602),
  o = i(4539),
  n = i(45801),
  r = i(48227),
  a = i(27808);
class l extends a.SeriesCandlesPaneView {
    renderer() {
      this._invalidated && (this._updateImpl(null), this._invalidated = !1);
      const e = this._source.priceScale();
      if (!e) return null;
      const t = this._source.properties().childs().hollowCandleStyle.childs(),
        i = this._model.timeScale().barSpacing(),
        a = {
          bars: this._bars,
          barSpacing: i,
          bodyVisible: t.drawBody.value(),
          borderVisible: t.drawBorder.value(),
          borderColor: t.borderColor.value(),
          wickColor: t.wickColor.value(),
          barWidth: (0, o.optimalBarWidth)(i),
          wickVisible: t.drawWick.value(),
          isPriceScaleInverted: e.isInverted()
        },
        l = new s.CompositeRenderer;
      return l.append(new r.PaneRendererCandles(a)), this._model.selection().isSelected(this._source) && this._isMarkersEnabled && this._selectionData && l.append(new n.SelectionRenderer(this._selectionData)), l
    }
