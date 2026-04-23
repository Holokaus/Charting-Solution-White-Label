/**
 * Module 62802 - Auto-beautified from TradingView webpack bundle
 *
 * @module 62802
 * @date 2026-04-23
 * @size 851 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 45801, 64138, 68735, 94602
 *
 * Exports:
 *   - SeriesBarsPaneView (internal: a)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  SeriesBarsPaneView: () => a
});
var s = i(94602),
  o = i(45801),
  n = i(68735),
  r = i(64138);
class a extends n.SeriesBarCandlesPaneView {
    renderer() {
      this._invalidated && (this._updateImpl(null), this._invalidated = !1);
      const e = this._source.properties().childs(),
        t = {
          bars: this._bars,
          dontDrawOpen: e.barStyle.childs().dontDrawOpen.value(),
          thinBars: 11 === e.style.value() ? e.rangeStyle.childs().thinBars.value() : e.barStyle.childs().thinBars.value()
        },
        i = new s.CompositeRenderer;
      return i.append(new r.PaneRendererBars(t)),
        this._model.selection().isSelected(this._source) && this._isMarkersEnabled && this._selectionData && i.append(new o.SelectionRenderer(this._selectionData)), i
    }
    _createItem(e, t, i) {
      const s = {
        center: NaN,
        open: NaN,
        high: NaN,
        low: NaN,
        close: NaN,
        color: i.barColor,
        left: NaN,
        right: NaN,
        timePointIndex: e
      };
      return (0, n.baseBarCandlesUpdater)(t, s) ? s : null
    }
