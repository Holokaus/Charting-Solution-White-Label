/**
 * ============================================================================
 * TRADINGVIEW MODULE 64651 - BITMAP COORDINATES PANE VIEW
 * ============================================================================
 *
 * Purpose: Bitmap coordinates pane view with line rendering and hit testing
 *
 * Size: 1.3 KB
 *
 * Class: SeriesWaterlinePaneView
 *   - Extends HorizontalLinePaneView
 *   - Renders waterline with hit testing
 *   - Updates line style and position based on data
 *   - Handles cursor interactions (resize, move)
 *
 * Features:
 *   - Line style management (sparse dotted)
 *   - Hit testing for point interactions
 *   - Dynamic line positioning
 *   - Color and visibility updates
 *
 * Dependencies:
 *   - 40738: HorizontalLinePaneView base class
 *   - 43838: Hit test result utilities
 *   - 2383: Line style constants
 *   - 69558: Line style enumeration
 *
 * Exports:
 *   - SeriesWaterlinePaneView: Bitmap coordinates pane view class
 *
 * @module 64651
 * @category Chart Rendering
 * @subpackage Pane Views
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    SeriesWaterlinePaneView: () => SeriesWaterlinePaneView
  });

  const HorizontalLinePaneView = moduleRequire(40738),
    HitTestResult = moduleRequire(43838),
    LineStyle = moduleRequire(2383),
    LineStyleEnum = moduleRequire(69558);

  /**
   * Bitmap coordinates pane view with waterline rendering
   * @param {Object} getters - Data getter functions
   */
  class SeriesWaterlinePaneView extends HorizontalLinePaneView {
    constructor(getters) {
      super();
      this._getters = getters;
      
      // Initialize hit test and line data
      const hitTestConfig = {
        cursorType: HitTestResult.PaneCursorType.VerticalResize,
        activeItem: 0,
        areaName: HitTestResult.AreaName.SourceItemMove
      };
      
      this._lineRenderer.setHitTest(new HitTestResult.HitTestResult(
        HitTestResult.HitTarget.MovePoint, 
        hitTestConfig
      ));
      
      this._lineRendererData.visible = true;
      this._lineRendererData.linestyle = LineStyleEnum.LINESTYLE_SPARSE_DOTTED;
    }

    /**
     * Update pane implementation with current data
     */
    _updateImpl() {
      const {
        baseLevelPercentage,
        paneHeight,
        color
      } = this._getters;
      
      // Calculate line position and style
      const yPosition = Math.abs(100 - baseLevelPercentage());
      const yPixels = Math.round(paneHeight() * (yPosition / 100));
      
      this._lineRendererData.y = yPixels;
      this._lineRendererData.color = color();
    }
  }
}
