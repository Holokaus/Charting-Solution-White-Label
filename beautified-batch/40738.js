/**
 * Module 40738 - Auto-beautified from TradingView webpack bundle
 *
 * @module 40738
 * @date 2026-04-23
 * @size 470 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 69558, 94119
 *
 * Exports:
 *   - HorizontalLinePaneView (internal: n)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  HorizontalLinePaneView: () => n
});
var s = i(94119),
  o = i(69558);
class n {
  constructor() {
    this._lineRendererData = {
      y: 0,
      color: "rgba(0, 0, 0, 0)",
      linewidth: 1,
      linestyle: o.LINESTYLE_SOLID,
      visible: !1
    }, this._lineRenderer = new s.HorizontalLineRenderer, this._invalidated = !0, this._lineRenderer.setData(this._lineRendererData)
  }
  update(e) {
    this._invalidated = !0
  }
  renderer() {
    return this._invalidated && (this._updateImpl(), this._invalidated = !1), this._lineRenderer
  }
