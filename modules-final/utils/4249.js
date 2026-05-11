/**
 * Module 4249 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

4249: (bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, bitmapCoordinatesPane_i) => {
    "use strict";
    bitmapCoordinatesPane_i.bitmapCoordinatesPane_d(bitmapCoordinatesPane_t, {
      SeriesAreaPaneView: () => bitmapCoordinatesPane_l
    });
    var bitmapCoordinatesPane_s = bitmapCoordinatesPane_i(52859),
      bitmapCoordinatesPane_o = bitmapCoordinatesPane_i(93463),
      bitmapCoordinatesPane_n = bitmapCoordinatesPane_i(94602),
      bitmapCoordinatesPane_r = bitmapCoordinatesPane_i(45801),
      bitmapCoordinatesPane_a = bitmapCoordinatesPane_i(73773);
    class bitmapCoordinatesPane_l extends bitmapCoordinatesPane_a.SeriesSingleLinePaneView {
      renderer() {
        this._invalidated && (this._updateImpl(), this._invalidated = !1);
        const bitmapCoordinatesPane_e = this._source.priceScale();
        if (!bitmapCoordinatesPane_e) return null;
        const bitmapCoordinatesPane_t = this._source.properties().childs().areaStyle.childs(),
          bitmapCoordinatesPane_i = bitmapCoordinatesPane_t.transparency.value(),
          bitmapCoordinatesPane_a = {
            simpleMode: !1,
            barSpacing: this._model.timeScale().barSpacing(),
            items: this._items,
            lineColor: bitmapCoordinatesPane_t.linecolor.value(),
            lineStyle: bitmapCoordinatesPane_t.linestyle.value(),
            lineWidth: bitmapCoordinatesPane_t.linewidth.value(),
            isSeries: !0,
            withMarkers: !1,
            bottom: bitmapCoordinatesPane_e.height(),
            color1: (0, bitmapCoordinatesPane_s.generateColor)(bitmapCoordinatesPane_t.color1.value(), bitmapCoordinatesPane_i),
            color2: (0, bitmapCoordinatesPane_s.generateColor)(bitmapCoordinatesPane_t.color2.value(), bitmapCoordinatesPane_i),
            skipHoles: !0
          },
          bitmapCoordinatesPane_l = new bitmapCoordinatesPane_n.CompositeRenderer;
        return bitmapCoordinatesPane_l.append(new bitmapCoordinatesPane_o.PaneRendererArea(bitmapCoordinatesPane_a)), this._model.selection().isSelected(this._source) && this
          ._isMarkersEnabled && this._selectionData && bitmapCoordinatesPane_l.append(new bitmapCoordinatesPane_r.SelectionRenderer(this._selectionData)), bitmapCoordinatesPane_l
      }
    }
}
