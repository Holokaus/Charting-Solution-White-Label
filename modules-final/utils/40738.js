/**
 * Module 40738 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

40738: (bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, bitmapCoordinatesPane_i) => {
    "use strict";
    bitmapCoordinatesPane_i.bitmapCoordinatesPane_d(bitmapCoordinatesPane_t, {
      HorizontalLinePaneView: () => bitmapCoordinatesPane_n
    });
    var bitmapCoordinatesPane_s = bitmapCoordinatesPane_i(94119),
      bitmapCoordinatesPane_o = bitmapCoordinatesPane_i(69558);
    class bitmapCoordinatesPane_n {
      constructor() {
        this._lineRendererData = {
          bitmapCoordinatesPane_y: 0,
          color: "rgba(0, 0, 0, 0)",
          linewidth: 1,
          linestyle: bitmapCoordinatesPane_o.LINESTYLE_SOLID,
          visible: !1
        }, this._lineRenderer = new bitmapCoordinatesPane_s.HorizontalLineRenderer, this._invalidated = !0, this._lineRenderer.setData(
          this._lineRendererData)
      }
      update(bitmapCoordinatesPane_e) {
        this._invalidated = !0
      }
      renderer() {
        return this._invalidated && (this._updateImpl(), this._invalidated = !1), this._lineRenderer
      }
    }
}
