/**
 * ============================================================================
 * TRADINGVIEW MODULE 2115 - SERIES DATA MANAGER
 * ============================================================================
 *
 * Purpose: Series data management and symbol information processing
 *
 * Size: 109.7 KB
 *
 * Classes:
 *   - Series: Series data class
 *   - SymbolInfoProvider: Symbol information provider
 *
 * Functions:
 *   - createSymbolInfo: Create symbol information object
 *   - formatSymbolDescription: Format symbol description
 *   - getTranslatedIntervalString: Get translated interval string
 *   - getChartStyleTranslation: Get chart style translation
 *
 * Features:
 *   - Symbol information extraction and formatting
 *   - Series data management
 *   - Interval translation and localization
 *   - Chart style management
 *   - Exchange information handling
 *   - Price source management
 *   - Settlement information processing
 *   - Status provider implementation
 *   - Feature flag integration
 *
 * Dependencies:
 *   - 50279: Series utilities
 *   - 50151: Translation utilities
 *   - 9343: Symbol utilities
 *   - 51768: Symbol utilities
 *   - 76422: Symbol utilities
 *   - 38780: Symbol utilities
 *   - 89837: Status provider utilities
 *   - 82095: Feature flags
 *   - 92211: Feature flags
 *   - 30342: Feature flags
 *   - 67563: Feature flags
 *   - 82095: Feature flags
 *   - 13651: Feature flags
 *   - 11542: Translation utilities
 *   - 19e3: Translation utilities
 *   - 52479: Feature flags
 *   - 37103: Feature flags
 *   - 40080: Feature flags
 *   - 3618: Feature flags
 *   - 75641: Feature flags
 *
 * Exports:
 *   - Series: Series data class
 *   - createSymbolInfo: Symbol information creation function
 *   - formatSymbolDescription: Symbol description formatting function
 *   - getTranslatedIntervalString: Translated interval string function
 *   - getChartStyleTranslation: Chart style translation function
 *
 * @module 2115
 * @category Data Management
 * @subpackage Series Data
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  
  moduleRequire.seriesData_d(moduleConfig, {
    Series: () => Series
  });

  const SeriesUtils = moduleRequire(50279),
    TranslationUtils = moduleRequire(50151),
    SymbolUtils = moduleRequire(9343),
    SymbolUtils2 = moduleRequire(51768),
    SymbolUtils3 = moduleRequire(76422),
    SymbolUtils4 = moduleRequire(38780),
    StatusProviderUtils = moduleRequire(89837),
    FeatureFlags = moduleRequire(82095),
    FeatureFlags2 = moduleRequire(92211),
    FeatureFlags3 = moduleRequire(30342),
    FeatureFlags4 = moduleRequire(67563),
    FeatureFlags5 = moduleRequire(82095),
    FeatureFlags6 = moduleRequire(13651),
    TranslationUtils2 = moduleRequire(11542),
    TranslationUtils3 = moduleRequire(19e3),
    FeatureFlags7 = moduleRequire(52479),
    FeatureFlags8 = moduleRequire(37103),
    FeatureFlags9 = moduleRequire(40080),
    FeatureFlags10 = moduleRequire(3618),
    FeatureFlags11 = moduleRequire(75641);

  /**
   * Create symbol information object
   * @param {Object} symbolData - Symbol data object
   * @returns {Object} Symbol information object
   */
  function createSymbolInfo(symbolData) {
    const isQuandl = symbolData.listedExchange === 'QUANDL';
    
    return {
      title: symbolData.title || '',
      description: formatSymbolDescription(symbolData),
      interval: symbolData.interval || '',
      listedExchange: symbolData.listedExchange || '',
      provider: symbolData.provider || '',
      chartStyle: symbolData.chartStyle || '',
      sessionDescription: symbolData.sessionDescription || '',
      priceSource: symbolData.priceSource || '',
      adjustment: symbolData.adjustment || '',
      backadjustment: symbolData.backadjustment || '',
      settlement: symbolData.settlement || '',
      isQuandl: isQuandl
    };
  }

  /**
   * Format symbol description
   * @param {Object} symbolData - Symbol data object
   * @returns {string} Formatted symbol description
   */
  function formatSymbolDescription(symbolData) {
    if (!symbolData || !symbolData.description) {
      return symbolData.symbol || '';
    }
    
    let formattedDescription = '';
    const isQuandl = symbolData.listedExchange === 'QUANDL';
    
    if (symbolData.description && isQuandl) {
      const descriptionParts = symbolData.description.split('/');
      if (descriptionParts.length === 2) {
        formattedDescription = descriptionParts[1];
      } else {
        // Handle complex description with multiple parts
        const parts = symbolData.description.split("'")
          .filter(part => part.length > 0);
        
        parts.forEach(part => {
          const subParts = part.split("/");
          if (subParts.length === 2) {
            formattedDescription += subParts[1];
          }
        });
      }
    } else {
      formattedDescription = symbolData.description || symbolData.symbol || '';
    }
    
    return formattedDescription;
  }

  /**
   * Get translated interval string
   * @param {string} interval - Interval string
   * @returns {string} Translated interval string
   */
  function getTranslatedIntervalString(interval) {
    if (!interval) return '';
    
    return TranslationUtils2.translate(`interval_${interval}`, interval);
  }

  /**
   * Get chart style translation
   * @param {Object} symbolData - Symbol data object
   * @returns {string} Translated chart style
   */
  function getChartStyleTranslation(symbolData) {
    if (!symbolData || !symbolData.style) return '';
    
    return TranslationUtils3.translate(
      `chart_style_${symbolData.style}`,
      symbolData.style
    );
  }

  /**
   * Series data class
   */
  class Series extends StatusProviderUtils.StatusProviderBase {
    constructor(seriesData, statusViewProperties, options = {}) {
      super();
      this._series = seriesData;
      this._statusViewProperties = statusViewProperties;
      this._options = options;
    }

    /**
     * Get formatted text
     * @param {Object} data - Data object
     * @returns {string} Formatted text
     */
    text(data) {
      const symbolInfo = createSymbolInfo(data);
      const interval = getTranslatedIntervalString(symbolInfo.interval);
      const chartStyle = getChartStyleTranslation(data);
      
      let text = symbolInfo.title;
      
      if (symbolInfo.ticker) {
        text += `, ${symbolInfo.description}`;
      }
      
      if (interval) {
        text += `, ${interval}`;
      }
      
      return text;
    }
  }

  /**
   * Symbol information provider class
   */
  class SymbolInfoProvider {
    constructor() {
      this._hideUnresolvedSymbols = FeatureFlags.enabled('hide_unresolved_symbols_in_legend');
      this._symbolInfoPriceSource = FeatureFlags2.enabled('symbol_info_price_source');
    }

    /**
     * Get symbol information
     * @param {Object} symbolData - Symbol data object
     * @returns {Object} Symbol information
     */
    getSymbolInfo(symbolData) {
      const symbolInfo = createSymbolInfo(symbolData);
      
      // Apply feature flags
      if (this._hideUnresolvedSymbols) {
        symbolInfo.hideUnresolved = true;
      }
      
      if (this._symbolInfoPriceSource) {
        symbolInfo.showPriceSource = true;
      }
      
      return symbolInfo;
    }

    /**
     * Format symbol for display
     * @param {Object} symbolData - Symbol data object
     * @returns {string} Formatted symbol
     */
    formatSymbol(symbolData) {
      const symbolInfo = this.getSymbolInfo(symbolData);
      return `${symbolInfo.title} (${symbolInfo.description})`;
    }
  }

  // Export classes and functions
  moduleExports.Series = Series;
  moduleExports.createSymbolInfo = createSymbolInfo;
  moduleExports.formatSymbolDescription = formatSymbolDescription;
  moduleExports.getTranslatedIntervalString = getTranslatedIntervalString;
  moduleExports.getChartStyleTranslation = getChartStyleTranslation;
}
