/**
 * Module 28334 - Auto-beautified from TradingView webpack bundle
 *
 * @module 28334
 * @date 2026-04-23
 * @size 790 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 45801, 62802, 64138, 94602
 *
 * Exports:
 *   - SeriesHLCBarsPaneView (internal: l)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  SeriesHLCBarsPaneView: () => l
});
var s = i(94602),
  o = i(45801),
  n = i(64138),
  r = i(62802);

function a(e) {
  return null != e
}
class l extends r.SeriesBarsPaneView {
    renderer() {
      this._invalidated && (this._updateImpl(null), this._invalidated = !1);
      const e = this._source.properties().childs(),
        t = {
          bars: this._bars,
          dontDrawOpen: !0,
          thinBars: e.hlcBarsStyle.childs().thinBars.value()
        },
        i = new s.CompositeRenderer;
      return i.append(new n.PaneRendererBars(t)), this._model.selection().isSelected(this._source) && this._isMarkersEnabled && this._selectionData && i.append(new o.SelectionRenderer(this._selectionData)), i
    }
    _createItem(e, t, i) {
      const s = t[2],
        o = t[3],
        n = t[4];
      if (!a(s) || !a(o) || !a(n)) return null;
      return {
        center: NaN,
        open: NaN,
        high: s,
        low: o,
        close: n,
        color: i.barColor,
        left: NaN,
        right: NaN,
        timePointIndex: e
      }
    }
