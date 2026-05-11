/**
 * Module 54405 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

54405: (bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, bitmapCoordinatesPane_i) => {
    "use strict";
    bitmapCoordinatesPane_i.bitmapCoordinatesPane_d(bitmapCoordinatesPane_t, {
      SeriesHollowCandlesPaneView: () => bitmapCoordinatesPane_l
    });
    var bitmapCoordinatesPane_s = bitmapCoordinatesPane_i(94602),
      bitmapCoordinatesPane_o = bitmapCoordinatesPane_i(4539),
      bitmapCoordinatesPane_n = bitmapCoordinatesPane_i(45801),
      bitmapCoordinatesPane_r = bitmapCoordinatesPane_i(48227),
      bitmapCoordinatesPane_a = bitmapCoordinatesPane_i(27808);
    class bitmapCoordinatesPane_l extends bitmapCoordinatesPane_a.SeriesCandlesPaneView {
      renderer() {
        this._invalidated && (this._updateImpl(null), this._invalidated = !1);
        const bitmapCoordinatesPane_e = this._source.priceScale();
        if (!bitmapCoordinatesPane_e) return null;
        const bitmapCoordinatesPane_t = this._source.properties().childs().hollowCandleStyle.childs(),
          bitmapCoordinatesPane_i = this._model.timeScale().barSpacing(),
          bitmapCoordinatesPane_a = {
            bars: this._bars,
            barSpacing: bitmapCoordinatesPane_i,
            bodyVisible: bitmapCoordinatesPane_t.drawBody.value(),
            borderVisible: bitmapCoordinatesPane_t.drawBorder.value(),
            borderColor: bitmapCoordinatesPane_t.borderColor.value(),
            wickColor: bitmapCoordinatesPane_t.wickColor.value(),
            barWidth: (0, bitmapCoordinatesPane_o.optimalBarWidth)(bitmapCoordinatesPane_i),
            wickVisible: bitmapCoordinatesPane_t.drawWick.value(),
            isPriceScaleInverted: bitmapCoordinatesPane_e.isInverted()
          },
          bitmapCoordinatesPane_l = new bitmapCoordinatesPane_s.CompositeRenderer;
        return bitmapCoordinatesPane_l.append(new bitmapCoordinatesPane_r.PaneRendererCandles(bitmapCoordinatesPane_a)), this._model.selection().isSelected(this._source) && this
          ._isMarkersEnabled && this._selectionData && bitmapCoordinatesPane_l.append(new bitmapCoordinatesPane_n.SelectionRenderer(this._selectionData)), bitmapCoordinatesPane_l
      }
    }
}
