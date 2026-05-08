/**
 * ============================================================================
 * TRADINGVIEW MODULE 27808 - SERIES CANDLES PANE VIEW
 * ============================================================================
 *
 * Purpose: Series candles pane view implementation with scaling
 *
 * Size: 2.4 KB
 *
 * Class: SeriesCandlesPaneView
 *   - Extends SeriesBarCandlesPaneView
 *   - Handles price scale inversion
 *   - Manages bar spacing calculation
 *   - Provides candle rendering configuration
 *
 * Features:
 *   - Candle style management
 *   - Bar width optimization
 *   - Price scale inversion handling
 *   - Composite renderer implementation
 *
 * Dependencies:
 *   - 94602: Series bar candles pane view
 *   - 4539: Series bar candles pane view
 *   - 68735: Series bar candles pane view
 *   - 48227: Series bar candles pane view
 *
 * Exports:
 *   - SeriesCandlesPaneView: Series candles pane view class
 *
 * @module 27808
 * @category Chart Rendering
 * @subpackage Series View
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    SeriesCandlesPaneView: () => SeriesCandlesPaneView
  });

  const SeriesBarCandlesPaneView = moduleRequire(94602),
    CandleStyle = moduleRequire(4539),
    VolCandlesStyle = moduleRequire(68735),
    BarWidthCalculator = moduleRequire(48227);

  /**
   * Series candles pane view implementation
   */
  class SeriesCandlesPaneView extends SeriesBarCandlesPaneView {
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
      const candleStyle = 1 === childProperties.style.value() ? 
        CandleStyle.CandleStyle.childs() : 
        VolCandlesStyle.VolCandlesStyle.childs();

      const barSpacing = this._model.timeScale().barSpacing();
      const bars = this._bars;
      
      const rendererConfig = {
        bars: bars,
        barSpacing: barSpacing,
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
      compositeRenderer.append(new PaneRendererCandles(rendererConfig, candleStyle));
      
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
      const candleStyle = 1 === childProperties.style.value() ? 
        CandleStyle.CandleStyle.childs() : 
        VolCandlesStyle.VolCandlesStyle.childs();

      const barSpacing = model.timeScale().barSpacing();
      const bars = this._bars;
      
      return {
        center: NaN,
        open: NaN,
        high: NaN,
        low: NaN,
        close: NaN,
        barSpacing: barSpacing,
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

  // Export the SeriesCandlesPaneView class
  moduleExports.SeriesCandlesPaneView = SeriesCandlesPaneView;
}
