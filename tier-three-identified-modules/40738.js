/**
 * Module: 40738
 * Semantic: series
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.581Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 40738 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

40738: (exports, t, i) => {
    "use strict";
    i.d(t, {
      HorizontalLinePaneView: () => n
    });
    var series = i(94119),
      o = i(69558);
    class n {
      constructor() {
        this._lineRendererData = {
          y: 0,
          color: "rgba(0, 0, 0, 0)",
          linewidth: 1,
          linestyle: o.LINESTYLE_SOLID,
          visible: !1
        }, this._lineRenderer = new series.HorizontalLineRenderer, this._invalidated = !0, this._lineRenderer.setData(
          this._lineRendererData)
      }
      update(exports) {
        this._invalidated = !0
      }
      renderer() {
        return this._invalidated && (this._updateImpl(), this._invalidated = !1), this._lineRenderer
      }
    }