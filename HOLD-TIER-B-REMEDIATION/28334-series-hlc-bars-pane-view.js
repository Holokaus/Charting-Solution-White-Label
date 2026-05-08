/**
 * ============================================================================
 * TRADINGVIEW MODULE 28334 - SERIES HLC BARS PANE VIEW
 * ============================================================================
 *
 * Purpose: Series HLC bars pane view implementation
 *
 * Size: 2.5 KB
 *
 * Class: SeriesHLCBarsPaneView
 *   - Extends SeriesBarsPaneView
 *   - Handles HLC bar rendering
 *   - Manages bar style configuration
 *   - Provides composite renderer implementation
 *
 * Features:
 *   - HLC bar style management
 *   - Bar width optimization
 *   - Price scale inversion handling
 *   - Composite renderer implementation
 *
 * Dependencies:
 *   - 94602: Series bar candles pane view
 *   - 45801: Series bar candles pane view
 *   - 64138: Series bar candles pane view
 *   - 62802: Series bar candles pane view
 *
 * Exports:
 *   - SeriesHLCBarsPaneView: Series HLC bars pane view class
 *
 * @module 28334
 * @category Chart Rendering
 * @subpackage Series View
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    SeriesHLCBarsPaneView: () => SeriesHLCBarsPaneView
  });

  const SeriesBarsPaneView = moduleRequire(94602),
    HLCCandlesStyle = moduleRequire(45801),
    HLCCandleStyle = moduleRequire(64138),
    HLCBarStyle = moduleRequire(62802),
    BarWidthCalculator = moduleRequire(48227);

  /**
   * Series HLC bars pane view implementation
   */
  class SeriesHLCBarsPaneView extends SeriesBarsPaneView {
    /**
     * @param {Object} source - Data source
     * @param {Object} model - Chart model
     * @param {number} scaleCoeff - Scale coefficient
     */
    constructor(source, model, scaleCoeff = 1) {
      super(source, model);
      this._scaleCoeff = scaleCoeff;
    }

    /**
     * Get renderer implementation
     * @returns {Object} Renderer object
     */
    renderer() {
      this._invalidated && this._updateImpl(null);
      this._invalidated = false;

      const priceScale = this._source.priceScale();
      if (!priceScale) {
        return null;
      }

      const childProperties = this._source.properties().childs();
      const hlcStyle = 2 === childProperties.style.value() ? 
        HLCCandleStyle.HLCCandleStyle.childs() : 
        HLCBarStyle.HLCBarStyle.childs();

      const barSpacing = this._model.timeScale().barSpacing();
      const bars = this._bars;
      
      const rendererConfig = {
        bars: bars,
        barSpacing: barSpacing,
        dontDrawOpen: true,
        thinBars: hlcStyle.thinBars.value(),
        bodyVisible: this._bodyVisible,
        borderVisible: this._borderVisible,
        borderColor: this._borderColor,
        wickColor: this._wickColor,
        barWidth: (0, BarWidthCalculator.optimalBarWidth)(barSpacing),
        wickVisible: this._wickVisible,
        isPriceScaleInverted: priceScale.isInverted(),
        scaleCoeff: this._scaleCoeff
      };

      const compositeRenderer = new CompositeRenderer();
      compositeRenderer.append(new PaneRendererBars(rendererConfig, hlcStyle));
      
      if (this._model.selection().isSelected(this._source)) {
        compositeRenderer.append(new SelectionRenderer(this._selectionData));
      }

      return compositeRenderer;
    }

    /**
     * Create item for rendering
     * @param {Object} source - Data source
     * @param {Object} model - Chart model
     * @param {number} scaleCoeff - Scale coefficient
     * @returns {Object} Render item object
     */
    _createItem(source, model, scaleCoeff) {
      const priceScale = source.priceScale();
      if (!source) {
        return null;
      }

      const childProperties = source.properties().childs();
      const hlcStyle = 2 === childProperties.style.value() ? 
        HLCCandleStyle.HLCCandleStyle.childs() : 
        HLCBarStyle.HLCBarStyle.childs();

      const barSpacing = model.timeScale().barSpacing();
      const bars = this._bars;
      
      return {
        center: NaN,
        open: NaN,
        high: NaN,
        low: NaN,
        close: NaN,
        barSpacing: barSpacing,
        dontDrawOpen: true,
        thinBars: hlcStyle.thinBars.value(),
        bodyVisible: this._bodyVisible,
        borderVisible: this._borderVisible,
        borderColor: this._borderColor,
        wickColor: this._wickColor,
        barWidth: (0, BarWidthCalculator.optimalBarWidth)(barSpacing),
        wickVisible: this._wickVisible,
        isPriceScaleInverted: priceScale.isInverted(),
        scaleCoeff: scaleCoeff
      };
    }
  }

  // Export the SeriesHLCBarsPaneView class
  moduleExports.SeriesHLCBarsPaneView = SeriesHLCBarsPaneView;
}
