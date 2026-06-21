/**
 * ============================================================================
 * TRADINGVIEW MODULE 59064 - SERIES PROPERTIES CONFIGURATION
 * ============================================================================
 * 
 * Purpose: Default configuration for all chart series types and their visual properties
 * 
 * Dependencies:
 *   - Module 69558 (lineStyleConstants): Line style constants (SOLID, DOTTED, etc.)
 *   - Module 22033 (rangeBarStyle): Range bar style enumeration
 *   - Module 18330, 40080: Side-effect imports (initialization modules)
 * 
 * Structure:
 *   The mainSeriesProperties object contains defaults for:
 *   
 *   1. General Series Settings:
 *      - style: Default chart type (1 = likely candles)
 *      - visible: Show/hide series
 *      - showPriceLine: Display price line on axis
 *      - minTick: Price increment ("default" or custom)
 *      - sessionId: Trading session filter
 *   
 *   2. Event Markers:
 *      - esdShowDividends/Splits/Earnings/Breaks: Corporate event visibility
 *      - showContinuousContractSwitches: Futures contract rollover markers
 *      - showFuturesContractExpiration: Contract expiry indicators
 *      - showLastNews: News markers on chart
 *      - showCountdown: Time until next bar close
 *   
 *   3. Special Price Lines:
 *      - bidAsk: Bid/ask spread lines (visible, style, width)
 *      - prePostMarket: Pre/post market session indicators
 *      - highLowAvgPrice: H/L/average price reference lines
 *      - showPrevClosePriceLine: Previous close reference
 *   
 *   4. Chart Type Specific Styles:
 *      - candleStyle/volCandlesStyle/hollowCandleStyle: Candlestick variants
 *      - haStyle: Heikin-Ashi candles
 *      - barStyle/hlcBarsStyle: OHLC bars
 *      - lineStyle/areaStyle/steplineStyle: Line-based charts
 *      - columnStyle: Column/bar chart
 *      - hiloStyle: High-Low bars
 *      - baselineStyle: Baseline deviation chart
 *      - renkoStyle/pbStyle/kagiStyle/pnfStyle: Brick/charts
 *      - rangeStyle: Range bars
 *      - tpoStyle/svpStyle/volFootprintStyle: Volume/profile charts
 *   
 *   5. Style Properties (per chart type):
 *      - drawWick/Border/Body: Visual element toggles
 *      - linewidth/linestyle: Line appearance
 *      - upColor/downColor: Bullish/bearish colors
 *      - priceSource: Data source (open/high/low/close)
 *      - inputs/inputInfo: User-configurable parameters
 *   
 *   6. Axis Properties:
 *      - priceAxisProperties: Auto-scale, log scale, percentage mode
 *      - statusViewStyle: Symbol info display settings
 * 
 * Usage Pattern:
 *   import { mainSeriesProperties } from './59064-series-properties';
 *   
 *   // Access candle defaults
 *   const candleDefaults = mainSeriesProperties.candleStyle;
 *   // { drawWick: true, drawBorder: true, barColorsOnPrevClose: false, drawBody: true }
 *   
 *   // Access line style defaults
 *   const lineDefaults = mainSeriesProperties.lineStyle;
 *   // { linestyle: LINESTYLE_SOLID, linewidth: 2, priceSource: "close" }
 * 
 * Key Defaults:
 *   - Candles: Wick=true, Border=true, Body=true
 *   - Lines: Solid style, 2px width, close price
 *   - Bars: Thin bars enabled, open marks drawn
 *   - Range Bars: 10-unit range, no phantom bars
 *   - Renko: ATR-based, 14-length, 3% size, wicks enabled
 * ============================================================================
 */

"use strict";

const lineStyleConstants = require(69558);
const rangeBarStyle = require(22033);

const mainSeriesProperties = {
      style: 1,
      esdShowDividends: !0,
      esdShowSplits: !0,
      esdShowEarnings: !0,
      esdShowBreaks: !1,
      esdFlagSize: 2,
      showContinuousContractSwitches: !0,
      showContinuousContractSwitchesBreaks: !1,
      showFuturesContractExpiration: !0,
      showLastNews: !0,
      showCountdown: !0,
      bidAsk: {
        visible: !1,
        lineStyle: lineStyleConstants.LINESTYLE_DOTTED,
        lineWidth: 1
      },
      prePostMarket: {
        visible: !0,
        lineStyle: lineStyleConstants.LINESTYLE_DOTTED,
        lineWidth: 1
      },
      highLowAvgPrice: {
        highLowPriceLinesVisible: !1,
        highLowPriceLabelsVisible: !1,
        averageClosePriceLineVisible: !1,
        averageClosePriceLabelVisible: !1,
        highLowPriceLinesWidth: 1,
        averagePriceLineWidth: 1
      },
      visible: !0,
      showPriceLine: !0,
      priceLineWidth: 1,
      showPrevClosePriceLine: !1,
      prevClosePriceLineWidth: 1,
      minTick: "default",
      dividendsAdjustment: void 0,
      backAdjustment: !1,
      settlementAsClose: !0,
      sessionId: "regular",
      sessVis: !1,
      statusViewStyle: {
        fontSize: 16,
        showExchange: !0,
        showInterval: !0,
        symbolTextSource: "description"
      },
      candleStyle: {
        drawWick: !0,
        drawBorder: !0,
        barColorsOnPrevClose: !1,
        drawBody: !0
      },
      volCandlesStyle: {
        drawWick: !0,
        drawBorder: !0,
        barColorsOnPrevClose: !1,
        drawBody: !0
      },
      hollowCandleStyle: {
        drawWick: !0,
        drawBorder: !0,
        drawBody: !0
      },
      haStyle: {
        drawWick: !0,
        drawBorder: !0,
        showRealLastPrice: !1,
        barColorsOnPrevClose: !1,
        inputs: {},
        inputInfo: {},
        drawBody: !0
      },
      barStyle: {
        barColorsOnPrevClose: !1,
        dontDrawOpen: !1,
        thinBars: !0
      },
      hiloStyle: {
        showBorders: !0,
        showLabels: !0,
        drawBody: !0
      },
      columnStyle: {
        barColorsOnPrevClose: !0,
        priceSource: "close",
        baselinePosition: "bottom"
      },
      lineStyle: {
        linestyle: lineStyleConstants.LINESTYLE_SOLID,
        linewidth: 2,
        priceSource: "close"
      },
      tpoStyle: {},
      svpStyle: {},
      lineWithMarkersStyle: {
        linestyle: lineStyleConstants.LINESTYLE_SOLID,
        linewidth: 2,
        priceSource: "close"
      },
      steplineStyle: {
        linestyle: lineStyleConstants.LINESTYLE_SOLID,
        linewidth: 2,
        priceSource: "close"
      },
      areaStyle: {
        linestyle: lineStyleConstants.LINESTYLE_SOLID,
        linewidth: 2,
        priceSource: "close"
      },
      hlcAreaStyle: {
        highLineVisible: !0,
        highLineStyle: lineStyleConstants.LINESTYLE_SOLID,
        highLineWidth: 2,
        lowLineVisible: !0,
        lowLineStyle: lineStyleConstants.LINESTYLE_SOLID,
        lowLineWidth: 2,
        closeLineStyle: lineStyleConstants.LINESTYLE_SOLID,
        closeLineWidth: 2
      },
      priceAxisProperties: {
        autoScale: !0,
        autoScaleDisabled: !1,
        lockScale: !1,
        percentage: !1,
        percentageDisabled: !1,
        indexedTo100: !1,
        log: !1,
        logDisabled: !1,
        isInverted: !1,
        alignLabels: !0
      },
      renkoStyle: {
        inputs: {
          source: "close",
          sources: "Close",
          boxSize: 3,
          style: "ATR",
          atrLength: 14,
          percentageLTP: 1,
          wicks: !0
        },
        inputInfo: {
          source: {
            name: "Source"
          },
          sources: {
            name: "Source"
          },
          boxSize: {
            name: "Box size"
          },
          style: {
            name: "Style"
          },
          atrLength: {
            name: "ATR length"
          },
          percentageLTP: {
            name: "Percentage"
          },
          wicks: {
            name: "Wicks"
          }
        }
      },
      pbStyle: {
        inputs: {
          source: "close",
          lb: 3
        },
        inputInfo: {
          source: {
            name: "Source"
          },
          lb: {
            name: "Number of line"
          }
        }
      },
      kagiStyle: {
        inputs: {
          source: "close",
          style: "ATR",
          atrLength: 14,
          percentageLTP: 1,
          reversalAmount: 1
        },
        inputInfo: {
          source: {
            name: "Source"
          },
          style: {
            name: "Style"
          },
          atrLength: {
            name: "ATR length"
          },
          percentageLTP: {
            name: "Percentage"
          },
          reversalAmount: {
            name: "Reversal amount"
          }
        }
      },
      pnfStyle: {
        inputs: {
          sources: "Close",
          reversalAmount: 3,
          boxSize: 1,
          style: "ATR",
          atrLength: 14,
          percentageLTP: 1,
          oneStepBackBuilding: !1
        },
        inputInfo: {
          sources: {
            name: "Source"
          },
          boxSize: {
            name: "Box size"
          },
          reversalAmount: {
            name: "Reversal amount"
          },
          style: {
            name: "Style"
          },
          atrLength: {
            name: "ATR length"
          },
          percentageLTP: {
            name: "Percentage"
          },
          oneStepBackBuilding: {
            name: "One step back building"
          }
        }
      },
      baselineStyle: {
        topLineWidth: 2,
        bottomLineWidth: 2,
        topLineStyle: lineStyleConstants.LINESTYLE_SOLID,
        bottomLineStyle: lineStyleConstants.LINESTYLE_SOLID,
        priceSource: "close",
        transparency: 50,
        baseLevelPercentage: 50
      },
      rangeStyle: {
        barStyle: rangeBarStyle.RangeBarStyle.BARS,
        thinBars: !0,
        inputs: {
          range: 10,
          phantomBars: !1
        },
        inputInfo: {
          range: {
            name: "Range"
          },
          phantomBars: {
            name: "Phantom bars"
          }
        }
      },
      volFootprintStyle: {},
      hlcBarsStyle: {
        barColorsOnPrevClose: !1,
        thinBars: !0
      }
};

// Export for module system
module.exports = { mainSeriesProperties };
