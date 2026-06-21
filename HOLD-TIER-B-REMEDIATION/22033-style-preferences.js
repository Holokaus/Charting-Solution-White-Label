/**
 * ============================================================================
 * TRADINGVIEW MODULE 22033 - STYLE PREFERENCES
 * ============================================================================
 *
 * Purpose: Style preferences for different chart elements
 *
 * Size: 8.8 KB
 *
 * Enumerations:
 *   - RangeBarStyle: Range bar style preferences
 *   - AreaStylePreferences: Area style preferences
 *   - BarStylePreferences: Bar style preferences
 *   - BaselineStylePreferences: Baseline style preferences
 *   - CandleStylePreferences: Candle style preferences
 *   - ColumnStylePreferences: Column style preferences
 *   - HAStylePreferences: Heikin-Ashi style preferences
 *   - HLCAreaStylePreferences: HLC area style preferences
 *   - HLCBarsStylePreferences: HLC bars style preferences
 *   - HollowCandleStylePreferences: Hollow candle style preferences
 *   - KagiStylePreferences: Kagi style preferences
 *   - LineStylePreferences: Line style preferences
 *   - PBStylePreferences: Point & figure style preferences
 *   - PNFStylePreferences: Point & figure style preferences
 *   - RangeStylePreferences: Range style preferences
 *   - RenkoStylePreferences: Renko style preferences
 *
 * Features:
 *   - Comprehensive style preference definitions
 *   - Color and drawing preferences
 *   - Border and wick settings
 *   - Body and fill preferences
 *
 * Dependencies:
 *   - 93201: Style utilities
 *
 * Exports:
 *   - RangeBarStyle: Range bar style enumeration
 *   - areaStylePreferencesDefault: Area style preferences
 *   - barStylePreferencesDefault: Bar style preferences
 *   - baselineStylePreferencesDefault: Baseline style preferences
 *   - candleStylePreferencesDefault: Candle style preferences
 *   - columnStylePreferencesDefault: Column style preferences
 *   - haStylePreferencesDefault: Heikin-Ashi style preferences
 *   - hiloAreaStylePreferencesDefault: HLC area style preferences
 *   - hlcBarsStylePreferencesDefault: HLC bars style preferences
 *   - hollowCandlePreferencesStyleDefault: Hollow candle style preferences
 *   - kagiStylePreferencesDefault: Kagi style preferences
 *   - lineStyleDefault: Line style preferences
 *   - pbStylePreferencesDefault: Point & figure style preferences
 *   - pnfStylePreferencesDefault: Point & figure style preferences
 *   - rangeStylePreferencesDefault: Range style preferences
 *   - renkoStylePreferencesDefault: Renko style preferences
 *
 * @module 22033
 * @category Chart Styles
 * @subpackage Preferences
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
    hiloAreaStylePreferencesDefault: () => hiloAreaStylePreferencesDefault,
    hlcBarsStylePreferencesDefault: () => hlcBarsStylePreferencesDefault,
    hollowCandlePreferencesStyleDefault: () => hollowCandlePreferencesStyleDefault,
    kagiStylePreferencesDefault: () => kagiStylePreferencesDefault,
    lineStyleDefault: () => lineStyleDefault,
    pbStylePreferencesDefault: () => pbStylePreferencesDefault,
    pnfStylePreferencesDefault: () => pnfStylePreferencesDefault,
    rangeStylePreferencesDefault: () => rangeStylePreferencesDefault,
    renkoStylePreferencesDefault: () => renkoStylePreferencesDefault
  });

  const styleUtils = moduleRequire(93201);

  // Range bar style enumeration
  !function(RangeBarStyle) {
    RangeBarStyle[RangeBarStyle.UpColor = 0] = "UpColor";
    RangeBarStyle[RangeBarStyle.DownColor = 1] = "DownColor";
    RangeBarStyle[RangeBarStyle.DrawWick = 2] = "DrawWick";
    RangeBarStyle[RangeBarStyle.DrawBorder = 3] = "DrawBorder";
    RangeBarStyle[RangeBarStyle.DrawBody = 4] = "DrawBody";
    RangeBarStyle[RangeBarStyle.BorderColor = 5] = "BorderColor";
    RangeBarStyle[RangeBarStyle.BorderUpColor = 6] = "BorderUpColor";
    RangeBarStyle[RangeBarStyle.BorderDownColor = 7] = "BorderDownColor";
    RangeBarStyle[RangeBarStyle.WickColor = 8] = "WickColor";
    RangeBarStyle[RangeBarStyle.WickUpColor = 9] = "WickUpColor";
    RangeBarStyle[RangeBarStyle.WickDownColor = 10] = "WickDownColor";
    RangeBarStyle[RangeBarStyle.BarColorsOnPrevClose = 11] = "BarColorsOnPrevClose";
  }(RangeBarStyle || (RangeBarStyle = {}));

  // Default style preferences
  const rangeBarStyleDefaults = {
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

  const areaStylePreferencesDefault = {
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

  const barStylePreferencesDefault = {
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

  const baselineStylePreferencesDefault = {
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

  const candleStylePreferencesDefault = {
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

  const columnStylePreferencesDefault = {
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

  const haStylePreferencesDefault = {
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

  const hiloAreaStylePreferencesDefault = {
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

  const hlcBarsStylePreferencesDefault = {
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

  const hollowCandlePreferencesStyleDefault = {
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

  const kagiStylePreferencesDefault = {
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

  const lineStyleDefault = {
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

  const pbStylePreferencesDefault = {
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

  const pnfStylePreferencesDefault = {
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

  const rangeStylePreferencesDefault = {
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

  const renkoStylePreferencesDefault = {
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
}
