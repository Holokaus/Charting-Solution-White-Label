/**
 * Module 62802 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

62802: (bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, bitmapCoordinatesPane_i) => {
    "use strict";
    bitmapCoordinatesPane_i.bitmapCoordinatesPane_d(bitmapCoordinatesPane_t, {
      SeriesBarsPaneView: () => bitmapCoordinatesPane_a
    });
    var bitmapCoordinatesPane_s = bitmapCoordinatesPane_i(94602),
      bitmapCoordinatesPane_o = bitmapCoordinatesPane_i(45801),
      bitmapCoordinatesPane_n = bitmapCoordinatesPane_i(68735),
      bitmapCoordinatesPane_r = bitmapCoordinatesPane_i(64138);
    class bitmapCoordinatesPane_a extends bitmapCoordinatesPane_n.SeriesBarCandlesPaneView {
      renderer() {
        this._invalidated && (this._updateImpl(null), this._invalidated = !1);
        const bitmapCoordinatesPane_e = this._source.properties().childs(),
          bitmapCoordinatesPane_t = {
            bars: this._bars,
            dontDrawOpen: bitmapCoordinatesPane_e.barStyle.childs().dontDrawOpen.value(),
            thinBars: 11 === bitmapCoordinatesPane_e.style.value() ? bitmapCoordinatesPane_e.rangeStyle.childs().thinBars.value() : bitmapCoordinatesPane_e.barStyle.childs().thinBars
              .value()
          },
          bitmapCoordinatesPane_i = new bitmapCoordinatesPane_s.CompositeRenderer;
        return bitmapCoordinatesPane_i.append(new bitmapCoordinatesPane_r.PaneRendererBars(bitmapCoordinatesPane_t)),
          this._model.selection().isSelected(this._source) && this._isMarkersEnabled && this._selectionData && bitmapCoordinatesPane_i
          .append(new bitmapCoordinatesPane_o.SelectionRenderer(this._selectionData)), bitmapCoordinatesPane_i
      }
      _createItem(bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, bitmapCoordinatesPane_i) {
        const bitmapCoordinatesPane_s = {
          center: NaN,
          open: NaN,
          high: NaN,
          low: NaN,
          close: NaN,
          color: bitmapCoordinatesPane_i.barColor,
          left: NaN,
          right: NaN,
          timePointIndex: bitmapCoordinatesPane_e
        };
        return (0, bitmapCoordinatesPane_n.baseBarCandlesUpdater)(bitmapCoordinatesPane_t, bitmapCoordinatesPane_s) ? bitmapCoordinatesPane_s : null
      }
    }