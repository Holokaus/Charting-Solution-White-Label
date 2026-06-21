/**
 * Module 27808 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

27808: (bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, bitmapCoordinatesPane_i) => {
    "use strict";
    bitmapCoordinatesPane_i.bitmapCoordinatesPane_d(bitmapCoordinatesPane_t, {
      SeriesCandlesPaneView: () => bitmapCoordinatesPane_l
    });
    var bitmapCoordinatesPane_s = bitmapCoordinatesPane_i(94602),
      bitmapCoordinatesPane_o = bitmapCoordinatesPane_i(4539),
      bitmapCoordinatesPane_n = bitmapCoordinatesPane_i(45801),
      bitmapCoordinatesPane_r = bitmapCoordinatesPane_i(68735),
      bitmapCoordinatesPane_a = bitmapCoordinatesPane_i(48227);
    class bitmapCoordinatesPane_l extends bitmapCoordinatesPane_r.SeriesBarCandlesPaneView {
      constructor(bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, bitmapCoordinatesPane_i = 1) {
        super(bitmapCoordinatesPane_e, bitmapCoordinatesPane_t), this._scaleCoeff = 1, this._scaleCoeff = bitmapCoordinatesPane_i
      }
      renderer() {
        this._invalidated && (this._updateImpl(null), this._invalidated = !1);
        const bitmapCoordinatesPane_e = this._source.priceScale();
        if (!bitmapCoordinatesPane_e) return null;
        const bitmapCoordinatesPane_t = this._source.properties().childs(),
          bitmapCoordinatesPane_i = 1 === bitmapCoordinatesPane_t.style.value() ? bitmapCoordinatesPane_t.candleStyle.childs() : 19 === bitmapCoordinatesPane_t.style.value() ? bitmapCoordinatesPane_t.volCandlesStyle.childs() :
          bitmapCoordinatesPane_t.volFootprintStyle.childs(),
          bitmapCoordinatesPane_r = this._model.timeScale().barSpacing(),
          bitmapCoordinatesPane_l = {
            bars: this._bars,
            barSpacing: bitmapCoordinatesPane_r,
            bodyVisible: bitmapCoordinatesPane_i.drawBody.value(),
            borderVisible: bitmapCoordinatesPane_i.drawBorder.value(),
            borderColor: bitmapCoordinatesPane_i.borderColor.value(),
            wickColor: bitmapCoordinatesPane_i.wickColor.value(),
            barWidth: (0, bitmapCoordinatesPane_o.optimalBarWidth)(bitmapCoordinatesPane_r),
            wickVisible: bitmapCoordinatesPane_i.drawWick.value(),
            isPriceScaleInverted: bitmapCoordinatesPane_e.isInverted(),
            scaleCoeff: this._scaleCoeff
          },
          bitmapCoordinatesPane_c = new bitmapCoordinatesPane_s.CompositeRenderer;
        return bitmapCoordinatesPane_c.append(new bitmapCoordinatesPane_a.PaneRendererCandles(bitmapCoordinatesPane_l)), this._model.selection().isSelected(this._source) && this
          ._isMarkersEnabled && this._selectionData && bitmapCoordinatesPane_c.append(new bitmapCoordinatesPane_n.SelectionRenderer(this._selectionData)), bitmapCoordinatesPane_c
      }
      _createItem(bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, bitmapCoordinatesPane_i) {
        const bitmapCoordinatesPane_s = {
          center: NaN,
          open: NaN,
          high: NaN,
          low: NaN,
          close: NaN,
          left: NaN,
          right: NaN,
          timePointIndex: bitmapCoordinatesPane_e,
          color: bitmapCoordinatesPane_i.barColor,
          borderColor: bitmapCoordinatesPane_i.barBorderColor,
          wickColor: bitmapCoordinatesPane_i.barWickColor,
          hollow: bitmapCoordinatesPane_i.isBarHollow
        };
        return (0, bitmapCoordinatesPane_r.baseBarCandlesUpdater)(bitmapCoordinatesPane_t, bitmapCoordinatesPane_s) ? bitmapCoordinatesPane_s : null
      }
    }