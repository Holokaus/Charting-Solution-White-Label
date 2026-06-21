/**
 * ============================================================================
 * TRADINGVIEW MODULE 32399 - SERIES LINE PANE VIEW
 * ============================================================================
 *
 * Purpose: Series line pane view implementation with markers support
 *
 * Size: 6.0 KB
 *
 * Class: SeriesLinePaneView
 *   - Extends SeriesSingleLinePaneView
 *   - Handles line rendering with markers
 *   - Manages line styles and colors
 *   - Provides composite renderer
 *
 * Features:
 *   - Line style management
 *   - Marker support
 *   - Color type handling
 *   - Composite renderer implementation
 *
 * Dependencies:
 *   - 2383: Line tool utilities
 *   - 94602: Series bar candles pane view
 *   - 79268: Series bar candles pane view
 *   - 45801: Series bar candles pane view
 *   - 73773: Series bar candles pane view
 *   - 93201: Series bar candles pane view
 *
 * Exports:
 *   - SeriesLinePaneView: Series line pane view class
 *
 * @module 32399
 * @category Chart Rendering
 * @subpackage Series View
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    SeriesLinePaneView: () => SeriesLinePaneView
  });

  const lineToolUtils = moduleRequire(2383),
    SeriesBarCandlesPaneView = moduleRequire(94602),
    SeriesSingleLinePaneView = moduleRequire(79268),
    LineStyle = moduleRequire(45801),
    ColorType = moduleRequire(73773),
    BarWidthCalculator = moduleRequire(93201);

  /**
   * Series line pane view implementation
   */
  class SeriesLinePaneView extends SeriesSingleLinePaneView {
    /**
     * Get renderer implementation
     * @returns {Object} Renderer object
     */
    renderer() {
      this._invalidated && this._updateImpl(null);
      this._invalidated = false;

      const childProperties = this._source.properties().childs();
      const lineStyle = childProperties.style.value();
      
      let lineStyleConfig, withMarkers = false;
      
      switch (lineStyle) {
        case 2: // Line with markers
          lineStyleConfig = childProperties.lineWithMarkersStyle.childs();
          withMarkers = true;
          break;
        case 14: // Step line
          lineStyleConfig = childProperties.steplineStyle.childs();
          break;
        case 18: // TPO line
          lineStyleConfig = childProperties.tpolineStyle.childs();
          break;
        default:
          lineStyleConfig = childProperties.lineStyle.childs();
          break;
      }

      const barSpacing = this._model.timeScale().barSpacing();
      const colorType = this._colorType?.value() !== ColorType.Gradient ? {
        type: ColorType.Solid,
        color: this._color.value()
      } : {
        type: ColorType.Gradient,
        startColor: this._gradientStartColor.value(),
        endColor: this._gradientEndColor.value()
      };

      const rendererConfig = {
        barSpacing: barSpacing,
        items: this._items,
        lineColor: colorType,
        lineStyle: lineStyleConfig,
        lineWidth: this._lineWidth.value(),
        withMarkers: withMarkers,
        hitTestResult: lineToolUtils.HitTarget.Regular,
        skipHoles: !this._skipHoles.value()
      };

      const compositeRenderer = new CompositeRenderer();
      compositeRenderer.append(new PaneRendererLine(rendererConfig, lineStyleConfig));
      
      if (this._model.selection().isSelected(this._source)) {
        compositeRenderer.append(new SelectionRenderer(this._selectionData));
      }

      return compositeRenderer;
    }
  }

  // Export the SeriesLinePaneView class
  moduleExports.SeriesLinePaneView = SeriesLinePaneView;
}
