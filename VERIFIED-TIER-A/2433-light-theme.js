/**
 * @module 2433 - Light Theme Configuration
 * @description Defines the complete light theme color scheme for the TradingView
 * charting library. Contains all color definitions for chart elements, studies,
 * and UI components in light mode.
 */

import { colors } from '../49156';
import { ColorType } from '../93201';

// Destructure color constants from the colors module
const {
  // Basic colors
  colorWhite,
  colorBlack,
  
  // Gray scale
  colorColdGray150,
  colorColdGray300,
  colorColdGray400,
  colorColdGray450,
  colorColdGray800Alpha0,
  colorColdGray800Alpha6,
  colorColdGray900,
  
  // Purple tones
  colorGrapesPurpleA400,
  colorGrapesPurpleA200Alpha15,
  
  // Green tones
  colorMintyGreen200,
  colorMintyGreen400,
  colorMintyGreen500,
  colorMintyGreen600,
  colorMintyGreen800,
  colorMintyGreen500Alpha5,
  colorMintyGreen500Alpha28,
  colorMintyGreen500Alpha50,
  
  // Red tones
  colorRipeRed200,
  colorRipeRed400,
  colorRipeRed500,
  colorRipeRed600,
  colorRipeRedA700,
  colorRipeRed500Alpha5,
  colorRipeRed500Alpha28,
  colorRipeRed500Alpha50,
  
  // Blue tones
  colorDeepBlueA700,
  colorBerryPink500,
  colorBerryPink500Alpha25,
  colorBerryPink400Alpha50,
  colorBerryPink400Alpha75,
  colorIguanaGreenA700,
  colorSkyBlue400Alpha5,
  colorSkyBlue400Alpha50,
  colorSkyBlue400Alpha75,
  colorSkyBlue500,
  colorSkyBlue500Alpha25,
  colorDeepBlueA400,
  colorTvBlue200,
  colorTvBlue400,
  colorTvBlue500,
  colorTvBlue500Alpha28,
  colorTvBlue600,
  colorTvBlue800,
  
  // Orange/Tan tones
  colorTanOrange500,
  colorTanOrange600
} = colors;

// Empty placeholders for complex style configurations
const tpoStyleConfig = {};
const volFootprintStyleConfig = {};
const svpStyleConfig = {};

/**
 * Light Theme Configuration Object
 * 
 * Complete color theme for light mode in TradingView charts.
 * Organized hierarchically by component type.
 * 
 * @namespace lightTheme
 * 
 * @property {Object} content - Main content container
 * @property {Object} content.chartProperties - Chart-wide properties
 * @property {Object} content.chartProperties.scalesProperties - Axis and scale styling
 * @property {Object} content.chartProperties.paneProperties - Pane-specific styling
 * @property {Object} content.sessions - Trading session visualization
 * @property {Object} content.mainSourceProperties - Primary data source styling
 */
export const light = {
  content: {
    /**
     * Chart-level properties
     */
    chartProperties: {
      /**
       * Scale (axis) properties
       */
      scalesProperties: {
        textColor: colorColdGray900,
        lineColor: colorColdGray800Alpha0,
        backgroundColor: colorWhite
      },
      
      /**
       * Pane properties
       */
      paneProperties: {
        vertGridProperties: {
          color: colorColdGray800Alpha6
        },
        horzGridProperties: {
          color: colorColdGray800Alpha6
        },
        crossHairProperties: {
          color: colorColdGray400
        },
        backgroundType: ColorType.Solid,
        background: colorWhite,
        backgroundGradientStartColor: colorWhite,
        backgroundGradientEndColor: colorWhite,
        separatorColor: colorColdGray150
      }
    },
    
    /**
     * Trading session highlighting
     */
    sessions: {
      sessionHighlight: {
        backgrounds: {
          outOfSession: {
            color: colorTvBlue500,
            transparency: 92
          },
          preMarket: {
            color: colorTanOrange500,
            transparency: 92
          },
          postMarket: {
            color: colorTvBlue500,
            transparency: 92
          },
          electronic: {
            color: colorTvBlue500,
            transparency: 92
          }
        },
        vertlines: {
          sessBreaks: {
            color: '#4985e7'
          }
        }
      }
    },
    
    /**
     * Main source (price series) properties
     */
    mainSourceProperties: {
      baseLineColor: colorColdGray300,
      prevClosePriceLineColor: '#555555',
      priceLineColor: '',
      
      /**
       * High/Low/Average price lines
       */
      highLowAvgPrice: {
        highLowPriceLinesColor: '',
        averagePriceLineColor: ''
      },
      
      /**
       * Bid/Ask spread visualization
       */
      bidAsk: {
        bidLineColor: colorTvBlue500,
        askLineColor: colorRipeRed400
      },
      
      /**
       * Pre/Post market indicators
       */
      prePostMarket: {
        preMarketColor: colorTanOrange600,
        postMarketColor: colorTvBlue500
      },
      
      /**
       * Candlestick chart styles
       */
      candleStyle: {
        borderColor: '#378658',
        upColor: colorMintyGreen500,
        wickColor: '#737375',
        wickUpColor: colorMintyGreen500,
        wickDownColor: colorRipeRed500,
        downColor: colorRipeRed500,
        borderUpColor: colorMintyGreen500,
        borderDownColor: colorRipeRed500
      },
      
      /**
       * Volume candlestick styles
       */
      volCandlesStyle: {
        borderColor: '#378658',
        upColor: colorMintyGreen500,
        wickColor: '#737375',
        wickUpColor: colorMintyGreen500,
        wickDownColor: colorRipeRed500,
        downColor: colorRipeRed500,
        borderUpColor: colorMintyGreen500,
        borderDownColor: colorRipeRed500
      },
      
      /**
       * Heikin-Ashi candlestick styles
       */
      haStyle: {
        borderColor: '#378658',
        upColor: colorMintyGreen500,
        wickColor: '#737375',
        wickUpColor: colorMintyGreen500,
        wickDownColor: colorRipeRed500,
        downColor: colorRipeRed500,
        borderUpColor: colorMintyGreen500,
        borderDownColor: colorRipeRed500
      },
      
      /**
       * HLC Area chart styles
       */
      hlcAreaStyle: {
        highLineColor: colorSkyBlue500,
        lowLineColor: colorBerryPink500,
        closeLineColor: colorTvBlue500,
        highCloseFillColor: colorSkyBlue500Alpha25,
        closeLowFillColor: colorBerryPink500Alpha25
      },
      
      /**
       * Hollow candlestick styles
       */
      hollowCandleStyle: {
        upColor: colorMintyGreen500,
        downColor: colorRipeRed500,
        borderColor: '#378658',
        borderUpColor: colorMintyGreen500,
        borderDownColor: colorRipeRed500,
        wickColor: '#737375',
        wickUpColor: colorMintyGreen500,
        wickDownColor: colorRipeRed500
      },
      
      /**
       * Bar chart styles
       */
      barStyle: {
        downColor: colorRipeRed500,
        upColor: colorMintyGreen500
      },
      
      /**
       * Point & Figure chart styles
       */
      pnfStyle: {
        downColor: colorRipeRed500,
        upColor: colorMintyGreen500,
        upColorProjection: '#a9dcc3',
        downColorProjection: '#f5a6ae'
      },
      
      /**
       * Baseline chart styles
       */
      baselineStyle: {
        baselineColor: colorColdGray450,
        topFillColor1: colorMintyGreen500Alpha28,
        topFillColor2: colorMintyGreen500Alpha5,
        bottomFillColor1: colorRipeRed500Alpha5,
        bottomFillColor2: colorRipeRed500Alpha28,
        topLineColor: colorMintyGreen500,
        bottomLineColor: colorRipeRed500
      },
      
      /**
       * Area chart styles
       */
      areaStyle: {
        transparency: 100,
        color1: colorTvBlue500Alpha28,
        color2: colorTvBlue500,
        linecolor: colorTvBlue500
      },
      
      /**
       * Hi-Lo chart styles
       */
      hiloStyle: {
        color: colorTvBlue500,
        borderColor: colorTvBlue500,
        labelColor: colorTvBlue500
      },
      
      /**
       * Column chart styles
       */
      columnStyle: {
        upColor: colorMintyGreen500Alpha50,
        downColor: colorRipeRed500Alpha50
      },
      
      /**
       * Renko chart styles
       */
      renkoStyle: {
        upColor: colorMintyGreen500,
        downColor: colorRipeRed500,
        borderUpColor: colorMintyGreen500,
        borderDownColor: colorRipeRed500,
        upColorProjection: '#a9dcc3',
        downColorProjection: '#f5a6ae',
        borderUpColorProjection: '#a9dcc3',
        borderDownColorProjection: '#f5a6ae',
        wickUpColor: colorMintyGreen500,
        wickDownColor: colorRipeRed500
      },
      
      /**
       * Line chart styles
       */
      lineStyle: {
        colorType: ColorType.Gradient,
        color: colorTvBlue500,
        gradientStartColor: colorGrapesPurpleA400,
        gradientEndColor: '#00BCE5'
      },
      
      /**
       * Line with markers chart styles
       */
      lineWithMarkersStyle: {
        colorType: ColorType.Gradient,
        color: colorTvBlue500,
        gradientStartColor: colorGrapesPurpleA400,
        gradientEndColor: '#00BCE5'
      },
      
      /**
       * Step line chart styles
       */
      steplineStyle: {
        colorType: ColorType.Gradient,
        color: colorTvBlue500,
        gradientStartColor: colorGrapesPurpleA400,
        gradientEndColor: '#00BCE5'
      },
      
      /**
       * Kagi chart styles
       */
      kagiStyle: {
        downColor: colorRipeRed500,
        upColor: colorMintyGreen500,
        upColorProjection: '#a9dcc3',
        downColorProjection: '#f5a6ae'
      },
      
      /**
       * Price Break chart styles
       */
      pbStyle: {
        upColor: colorMintyGreen500,
        downColor: colorRipeRed500,
        borderUpColor: colorMintyGreen500,
        borderDownColor: colorRipeRed500,
        upColorProjection: '#a9dcc3',
        downColorProjection: '#f5a6ae',
        borderUpColorProjection: '#a9dcc3',
        borderDownColorProjection: '#f5a6ae'
      },
      
      /**
       * Range chart styles
       */
      rangeStyle: {
        upColor: colorMintyGreen500,
        downColor: colorRipeRed500,
        upColorProjection: '#a9dcc3',
        downColorProjection: '#f5a6ae',
        candlesUpColor: colorMintyGreen500,
        candlesDownColor: colorRipeRed500,
        candlesBorderUpColor: colorMintyGreen500,
        candlesBorderDownColor: colorRipeRed500,
        candlesWickUpColor: colorMintyGreen500,
        candlesWickDownColor: colorRipeRed500
      },
      
      /**
       * TPO (Time Price Opportunity) chart styles
       */
      tpoStyle: tpoStyleConfig,
      
      /**
       * Volume Footprint chart styles
       */
      volFootprintStyle: volFootprintStyleConfig,
      
      /**
       * SVP (Session Volume Profile) chart styles
       */
      svpStyle: svpStyleConfig,
      
      /**
       * HLC Bars chart styles
       */
      hlcBarsStyle: {
        color: colorTvBlue500
      }
    }
  }
};

/**
 * Get a specific color from the light theme
 * 
 * @param {string} path - Dot-separated path to the color
 * @returns {*} Color value or undefined if not found
 * 
 * @example
 * // Get candle up color
 * const upColor = getLightThemeColor('content.mainSourceProperties.candleStyle.upColor');
 */
export function getLightThemeColor(path) {
  return path.split('.').reduce((obj, key) => obj?.[key], light);
}

/**
 * Merge custom colors into the light theme
 * 
 * @param {Object} customColors - Custom color overrides
 * @returns {Object} Merged theme configuration
 */
export function mergeLightTheme(customColors) {
  return {
    ...light,
    content: {
      ...light.content,
      ...customColors
    }
  };
}

// Default export
export default light;
