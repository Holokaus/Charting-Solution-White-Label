/**
 * Module 64651 - Auto-beautified from TradingView webpack bundle
 *
 * @module 64651
 * @date 2026-04-23
 * @size 647 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 2383, 40738, 43838, 69558
 *
 * Exports:
 *   - SeriesWaterlinePaneView (internal: a)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  SeriesWaterlinePaneView: () => a
});
var s = i(40738),
  o = i(43838),
  n = i(2383),
  r = i(69558);
class a extends s.HorizontalLinePaneView {
    constructor(e) {
      super(), this._getters = e;
      const t = {
        cursorType: o.PaneCursorType.VerticalResize,
        activeItem: 0,
        areaName: n.AreaName.SourceItemMove
      };
      this._lineRenderer.setHitTest(new n.HitTestResult(n.HitTarget.MovePoint, t)), this._lineRendererData.visible = !0, this._lineRendererData.linestyle = r.LINESTYLE_SPARSE_DOTTED
    }
    _updateImpl() {
      const {
        baseLevelPercentage: e,
        paneHeight: t,
        color: i
      } = this._getters, s = Math.abs(100 - e());
      this._lineRendererData.y = Math.round(t() * (s / 100)), this._lineRendererData.color = i()
    }
