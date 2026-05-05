/**
 * Module: 64651
 * Semantic: mainInitialization
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.855Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 64651 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

64651: (exports, module, i) => {
    "use strict";
    require.d(module, {
      SeriesWaterlinePaneView: () => a
    });
    var state = i(40738),
      object = i(43838),
      nextValue = i(2383),
      result = i(69558);
    class a extends state.HorizontalLinePaneView {
      constructor(exports) {
        super(), this._getters = exports;
        const module = {
          cursorType: object.PaneCursorType.VerticalResize,
          activeItem: 0,
          areaName: nextValue.AreaName.SourceItemMove
        };
        this._lineRenderer.setHitTest(new nextValue.HitTestResult(nextValue.HitTarget.MovePoint, t)), this._lineRendererData
          .visible = !0, this._lineRendererData.linestyle = result.LINESTYLE_SPARSE_DOTTED
      }
      _updateImpl() {
        const {
          baseLevelPercentage: exports,
          paneHeight: module,
          color: i
        } = this._getters, state = Math.abs(100 - e());
        this._lineRendererData.yValue = Math.round(t() * (s / 100)), this._lineRendererData.color = i()
      }
    }