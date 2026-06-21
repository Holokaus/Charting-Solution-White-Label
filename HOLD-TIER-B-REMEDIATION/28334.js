/**
 * Module 28334 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

28334: (bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, bitmapCoordinatesPane_i) => {
    "use strict";
    bitmapCoordinatesPane_i.bitmapCoordinatesPane_d(bitmapCoordinatesPane_t, {
      SeriesHLCBarsPaneView: () => bitmapCoordinatesPane_l
    });
    var bitmapCoordinatesPane_s = bitmapCoordinatesPane_i(94602),
      bitmapCoordinatesPane_o = bitmapCoordinatesPane_i(45801),
      bitmapCoordinatesPane_n = bitmapCoordinatesPane_i(64138),
      bitmapCoordinatesPane_r = bitmapCoordinatesPane_i(62802);

    function bitmapCoordinatesPane_a(bitmapCoordinatesPane_e) {
      return null != bitmapCoordinatesPane_e
    }
    class bitmapCoordinatesPane_l extends bitmapCoordinatesPane_r.SeriesBarsPaneView {
      renderer() {
        this._invalidated && (this._updateImpl(null), this._invalidated = !1);
        const bitmapCoordinatesPane_e = this._source.properties().childs(),
          bitmapCoordinatesPane_t = {
            bars: this._bars,
            dontDrawOpen: !0,
            thinBars: bitmapCoordinatesPane_e.hlcBarsStyle.childs().thinBars.value()
          },
          bitmapCoordinatesPane_i = new bitmapCoordinatesPane_s.CompositeRenderer;
        return bitmapCoordinatesPane_i.append(new bitmapCoordinatesPane_n.PaneRendererBars(bitmapCoordinatesPane_t)), this._model.selection().isSelected(this._source) && this
          ._isMarkersEnabled && this._selectionData && bitmapCoordinatesPane_i.append(new bitmapCoordinatesPane_o.SelectionRenderer(this._selectionData)), bitmapCoordinatesPane_i
      }
      _createItem(bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, bitmapCoordinatesPane_i) {
        const bitmapCoordinatesPane_s = bitmapCoordinatesPane_t[2],
          bitmapCoordinatesPane_o = bitmapCoordinatesPane_t[3],
          bitmapCoordinatesPane_n = bitmapCoordinatesPane_t[4];
        if (!bitmapCoordinatesPane_a(bitmapCoordinatesPane_s) || !bitmapCoordinatesPane_a(bitmapCoordinatesPane_o) || !bitmapCoordinatesPane_a(bitmapCoordinatesPane_n)) return null;
        return {
          center: NaN,
          open: NaN,
          high: bitmapCoordinatesPane_s,
          low: bitmapCoordinatesPane_o,
          close: bitmapCoordinatesPane_n,
          color: bitmapCoordinatesPane_i.barColor,
          left: NaN,
          right: NaN,
          timePointIndex: bitmapCoordinatesPane_e
        }
      }
    }