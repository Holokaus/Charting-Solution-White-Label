/**
 * Module 64651 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

64651: (bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, bitmapCoordinatesPane_i) => {
    "use strict";
    bitmapCoordinatesPane_i.bitmapCoordinatesPane_d(bitmapCoordinatesPane_t, {
      SeriesWaterlinePaneView: () => bitmapCoordinatesPane_a
    });
    var bitmapCoordinatesPane_s = bitmapCoordinatesPane_i(40738),
      bitmapCoordinatesPane_o = bitmapCoordinatesPane_i(43838),
      bitmapCoordinatesPane_n = bitmapCoordinatesPane_i(2383),
      bitmapCoordinatesPane_r = bitmapCoordinatesPane_i(69558);
    class bitmapCoordinatesPane_a extends bitmapCoordinatesPane_s.HorizontalLinePaneView {
      constructor(bitmapCoordinatesPane_e) {
        super(), this._getters = bitmapCoordinatesPane_e;
        const bitmapCoordinatesPane_t = {
          cursorType: bitmapCoordinatesPane_o.PaneCursorType.VerticalResize,
          activeItem: 0,
          areaName: bitmapCoordinatesPane_n.AreaName.SourceItemMove
        };
        this._lineRenderer.setHitTest(new bitmapCoordinatesPane_n.HitTestResult(bitmapCoordinatesPane_n.HitTarget.MovePoint, bitmapCoordinatesPane_t)), this._lineRendererData
          .visible = !0, this._lineRendererData.linestyle = bitmapCoordinatesPane_r.LINESTYLE_SPARSE_DOTTED
      }
      _updateImpl() {
        const {
          baseLevelPercentage: bitmapCoordinatesPane_e,
          paneHeight: bitmapCoordinatesPane_t,
          color: bitmapCoordinatesPane_i
        } = this._getters, bitmapCoordinatesPane_s = Math.abs(100 - bitmapCoordinatesPane_e());
        this._lineRendererData.bitmapCoordinatesPane_y = Math.round(bitmapCoordinatesPane_t() * (bitmapCoordinatesPane_s / 100)), this._lineRendererData.color = bitmapCoordinatesPane_i()
      }
    }