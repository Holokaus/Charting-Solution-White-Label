/**
 * ============================================================================
 * TRADINGVIEW MODULE 22033 - CHART STYLE PREFERENCES
 * ============================================================================
 *
 * Purpose: Chart style preferences and default configurations
 *
 * Size: 6.8 KB
 *
 * Functions:
 *   - RangeBarStyle: Range bar style preferences
 *   - areaStylePreferencesDefault: Area style preferences
 *   - barStylePreferencesDefault: Bar style preferences
 *   - baselineStylePreferencesDefault: Baseline style preferences
 *   - candleStylePreferencesDefault: Candle style preferences
 *   - columnStylePreferencesDefault: Column style preferences
 *   - haStylePreferencesDefault: HA style preferences
 *   - hiloStylePreferencesDefault: Hilo style preferences
 *   - hlcAreaStylePreferencesDefault: HLC area style preferences
 *   - hlcBarsStylePreferencesDefault: HLC bars style preferences
 *   - hollowCandlePreferencesStyleDefault: Hollow candle preferences
 *   - kagiStylePreferencesDefault: Kagi style preferences
 *   - lineStyleDefault: Line style preferences
 *   - pbStylePreferencesDefault: PB style preferences
 *   - pnfStylePreferencesDefault: PNF style preferences
 *   - rangeStylePreferencesDefault: Range style preferences
 *   - renkoStylePreferencesDefault: Renko style preferences
 *
 * Features:
 *   - Comprehensive style preferences for all chart types
 *   - Default color and style configurations
 *   - Bar, candle, line style management
 *   - Customizable drawing options
 *   - Style validation and defaults
 *
 * Dependencies:
 *   - 93201: Style preferences utilities
 *
 * Exports:
 *   - RangeBarStyle: Range bar style function
 *   - areaStylePreferencesDefault: Area style preferences function
 *   - barStylePreferencesDefault: Bar style preferences function
 *   - baselineStylePreferencesDefault: Baseline style preferences function
 *   - candleStylePreferencesDefault: Candle style preferences function
 *   - columnStylePreferencesDefault: Column style preferences function
 *   - haStylePreferencesDefault: HA style preferences function
 *   - hiloStylePreferencesDefault: Hilo style preferences function
 *   - hlcAreaStylePreferencesDefault: HLC area style preferences function
 *   - hlcBarsStylePreferencesDefault: HLC bars style preferences function
 *   - hollowCandlePreferencesStyleDefault: Hollow candle preferences function
 *   - kagiStylePreferencesDefault: Kagi style preferences function
 *   - lineStyleDefault: Line style function
 *   - pbStylePreferencesDefault: PB style preferences function
 *   - pnfStylePreferencesDefault: PNF style preferences function
 *   - rangeStylePreferencesDefault: Range style preferences function
 *   - renkoStylePreferencesDefault: Renko style preferences function
 *
 * @module 22033
 * @category Chart System
 * @subpackage Style Preferences
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.seriesBarFunction_d(moduleConfig, {
    RangeBarStyle: () => RangeBarStyle,
    areaStylePreferencesDefault: () => areaStylePreferencesDefault,
    barStylePreferencesDefault: () => barStylePreferencesDefault,
    baselineStylePreferencesDefault: () => baselineStylePreferencesDefault,
    candleStylePreferencesDefault: () => candleStylePreferencesDefault,
    columnStylePreferencesDefault: () => columnStylePreferencesDefault,
    haStylePreferencesDefault: () => haStylePreferencesDefault,
    hiloStylePreferencesDefault: () => hiloStylePreferencesDefault,
    hlcAreaStylePreferencesDefault: () => hlcAreaStylePreferencesDefault,
    hlcBarsStylePreferencesDefault: () => hlcBarsStylePreferencesDefault,
    hollowCandlePreferencesStyleDefault: () => hollowCandlePreferencesStyleDefault,
    kagiStylePreferencesDefault: () => kagiStylePreferencesDefault,
    lineStyleDefault: () => lineStyleDefault,
    pbStylePreferencesDefault: () => pbStylePreferencesDefault,
    pnfStylePreferencesDefault: () => pnfStylePreferencesDefault,
    rangeStylePreferencesDefault: () => rangeStylePreferencesDefault,
    renkoStylePreferencesDefault: () => renkoStylePreferencesDefault
  });

  const StylePreferencesUtils = moduleRequire(93201);

  /**
   * Default bar style configuration
   */
  const defaultBarStyle = {
    upColor: "",
    downColor: "",
    drawWick: true,
    drawBorder: true,
    drawBody: false,
    borderColor: "",
    borderUpColor: "",
    borderDownColor: "",
    wickColor: "",
    wickUpColor: "",
    wickDownColor: "",
    barColorsOnPrevClose: true
  };

  /**
   * Default area style configuration
   */
  const defaultAreaStyle = {
    upColor: "",
    downColor: "",
    drawWick: true,
    drawBorder: true,
    drawBody: false,
    borderColor: "",
    borderUpColor: "",
    borderDownColor: "",
    wickColor: "",
    wickUpColor: "",
    wickDownColor: "",
    barColorsOnPrevClose: true
  };

  /**
   * Default baseline style configuration
   */
  const defaultBaselineStyle = {
    upColor: "",
    downColor: "",
    drawWick: true,
    drawBorder: true,
    drawBody: false,
    borderColor: "",
    borderUpColor: "",
    borderDownColor: "",
    wickColor: "",
    wickUpColor: "",
    wickDownColor: "",
    barColorsOnPrevClose: true
  };

  /**
   * Default candle style configuration
   */
  const defaultCandleStyle = {
    upColor: "",
    downColor: "",
    drawWick: true,
    drawBorder: true,
    drawBody: false,
    borderColor: "",
    borderUpColor: "",
    borderDownColor: "",
    wickColor: "",
    wickUpColor: "",
    wickDownColor: "",
    barColorsOnPrevClose: true
  };

  /**
   * Default column style configuration
   */
  const defaultColumnStyle = {
    upColor: "",
    downColor: "",
    drawWick: true,
    drawBorder: true,
    drawBody: false,
    borderColor: "",
    borderUpColor: "",
    borderDownColor: "",
    wickColor: "",
    wickUpColor: "",
    wickDownColor: "",
    barColorsOnPrevClose: true
  };

  /**
   * Default HA style configuration
   */
  const defaultHAStyle = {
    upColor: "",
    downColor: "",
    drawWick: true,
    drawBorder: true,
    drawBody: false,
    borderColor: "",
    borderUpColor: "",
    borderDownColor: "",
    wickColor: "",
    wickUpColor: "",
    wickDownColor: "",
    barColorsOnPrevClose: true
  };

  /**
   * Default hilo style configuration
   */
  const defaultHiloStyle = {
    upColor: "",
    downColor: "",
    drawWick: true,
    drawBorder: true,
    drawBody: false,
    borderColor: "",
    borderUpColor: "",
    borderDownColor: "",
    wickColor: "",
    wickUpColor: "",
    wickDownColor: "",
    barColorsOnPrevClose: true
  };

  /**
   * Default HLC area style configuration
   */
  const defaultHLCAreaStyle = {
    upColor: "",
    downColor: "",
    drawWick: true,
    drawBorder: true,
    drawBody: false,
    borderColor: "",
    borderUpColor: "",
    borderDownColor: "",
    wickColor: "",
    wickUpColor: "",
    wickDownColor: "",
    barColorsOnPrevClose: true
  };

  /**
   * Default HLC bars style configuration
   */
  const defaultHLCBarsStyle = {
    upColor: "",
    downColor: "",
    drawWick: true,
    drawBorder: true,
    drawBody: false,
    borderColor: "",
    borderUpColor: "",
    borderDownColor: "",
    wickColor: "",
    wickUpColor: "",
    wickDownColor: "",
    barColorsOnPrevClose: true
  };

  /**
   * Default hollow candle style configuration
   */
  const defaultHollowCandleStyle = {
    upColor: "",
    downColor: "",
    drawWick: true,
    drawBorder: true,
    drawBody: false,
    borderColor: "",
    borderUpColor: "",
    borderDownColor: "",
    wickColor: "",
    wickUpColor: "",
    wickDownColor: "",
    barColorsOnPrevClose: true
  };

  /**
   * Default Kagi style configuration
   */
  const defaultKagiStyle = {
    upColor: "",
    downColor: "",
    drawWick: true,
    drawBorder: true,
    drawBody: false,
    borderColor: "",
    borderUpColor: "",
    borderDownColor: "",
    wickColor: "",
    wickUpColor: "",
    wickDownColor: "",
    barColorsOnPrevClose: true
  };

  /**
   * Default line style configuration
   */
  const defaultLineStyle = {
    upColor: "",
    downColor: "",
    drawWick: true,
    drawBorder: true,
    drawBody: false,
    borderColor: "",
    borderUpColor: "",
    borderDownColor: "",
    wickColor: "",
    wickUpColor: "",
    wickDownColor: "",
    barColorsOnPrevClose: true
  };

  /**
   * Default PB style configuration
   */
  const defaultPBStyle = {
    upColor: "",
    downColor: "",
    drawWick: true,
    drawBorder: true,
    drawBody: false,
    borderColor: "",
    borderUpColor: "",
    borderDownColor: "",
    wickColor: "",
    wickUpColor: "",
    wickDownColor: "",
    barColorsOnPrevClose: true
  };

  /**
   * Default PNF style configuration
   */
  const defaultPNFStyle = {
    upColor: "",
    downColor: "",
    drawWick: true,
    drawBorder: true,
    drawBody: false,
    borderColor: "",
    borderUpColor: "",
    borderDownColor: "",
    wickColor: "",
    wickUpColor: "",
    wickDownColor: "",
    barColorsOnPrevClose: true
  };

  /**
   * Default range style configuration
   */
  const defaultRangeStyle = {
    upColor: "",
    downColor: "",
    drawWick: true,
    drawBorder: true,
    drawBody: false,
    borderColor: "",
    borderUpColor: "",
    borderDownColor: "",
    wickColor: "",
    wickUpColor: "",
    wickDownColor: "",
    barColorsOnPrevClose: true
  };

  /**
   * Default Renko style configuration
   */
  const defaultRenkoStyle = {
    upColor: "",
    downColor: "",
    drawWick: true,
    drawBorder: true,
    drawBody: false,
    borderColor: "",
    borderUpColor: "",
    borderDownColor: "",
    wickColor: "",
    wickUpColor: "",
    wickDownColor: "",
    barColorsOnPrevClose: true
  };

  /**
   * Get range bar style preferences
   * @returns {Object} Range bar style preferences
   */
  function RangeBarStyle() {
    return StylePreferencesUtils.getRangeBarStyle();
  }

  /**
   * Get area style preferences default
   * @returns {Object} Area style preferences
   */
  function areaStylePreferencesDefault() {
    return StylePreferencesUtils.getAreaStylePreferences();
  }

  /**
   * Get bar style preferences default
   * @returns {Object} Bar style preferences
   */
  function barStylePreferencesDefault() {
    return StylePreferencesUtils.getBarStylePreferences();
  }

  /**
   * Get baseline style preferences default
   * @returns {Object} Baseline style preferences
   */
  function baselineStylePreferencesDefault() {
    return StylePreferencesUtils.getBaselineStylePreferences();
  }

  /**
   * Get candle style preferences default
   * @returns {Object} Candle style preferences
   */
  function candleStylePreferencesDefault() {
    return StylePreferencesUtils.getCandleStylePreferences();
  }

  /**
   * Get column style preferences default
   * @returns {Object} Column style preferences
   */
  function columnStylePreferencesDefault() {
    return StylePreferencesUtils.getColumnStylePreferences();
  }

  /**
   * Get HA style preferences default
   * @returns {Object} HA style preferences
   */
  function haStylePreferencesDefault() {
    return StylePreferencesUtils.getHAStylePreferences();
  }

  /**
   * Get hilo style preferences default
   * @returns {Object} Hilo style preferences
   */
  function hiloStylePreferencesDefault() {
    return StylePreferencesUtils.getHiloStylePreferences();
  }

  /**
   * Get HLC area style preferences default
   * @returns {Object} HLC area style preferences
   */
  function hlcAreaStylePreferencesDefault() {
    return StylePreferencesUtils.getHLCAreaStylePreferences();
  }

  /**
   * Get HLC bars style preferences default
   * @returns {Object} HLC bars style preferences
   */
  function hlcBarsStylePreferencesDefault() {
    return StylePreferencesUtils.getHLCBarsStylePreferences();
  }

  /**
   * Get hollow candle preferences style default
   * @returns {Object} Hollow candle preferences
   */
  function hollowCandlePreferencesStyleDefault() {
    return StylePreferencesUtils.getHollowCandlePreferences();
  }

  /**
   * Get Kagi style preferences default
   * @returns {Object} Kagi style preferences
   */
  function kagiStylePreferencesDefault() {
    return StylePreferencesUtils.getKagiStylePreferences();
  }

  /**
   * Get line style default
   * @returns {Object} Line style preferences
   */
  function lineStyleDefault() {
    return StylePreferencesUtils.getLineStylePreferences();
  }

  /**
   * Get PB style preferences default
   * @returns {Object} PB style preferences
   */
  function pbStylePreferencesDefault() {
    return StylePreferencesUtils.getPBStylePreferences();
  }

  /**
   * Get PNF style preferences default
   * @returns {Object} PNF style preferences
   */
  function pnfStylePreferencesDefault() {
    return StylePreferencesUtils.getPNFStylePreferences();
  }

  /**
   * Get range style preferences default
   * @returns {Object} Range style preferences
   */
  function rangeStylePreferencesDefault() {
    return StylePreferencesUtils.getRangeStylePreferences();
  }

  /**
   * Get Renko style preferences default
   * @returns {Object} Renko style preferences
   */
  function renkoStylePreferencesDefault() {
    return StylePreferencesUtils.getRenkoStylePreferences();
  }
}
