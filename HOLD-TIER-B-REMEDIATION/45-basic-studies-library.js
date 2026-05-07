/**
 * Module 45 - Basic Studies Library
 * 
 * Core study library containing built-in TradingView indicators:
 * - Compare, Volume, ZigZag, Sessions, SuperTrend
 * - Pivot Points, Volume Profile (Visible Range & Fixed Range)
 * - Spread, Ratio, Regression Trend, Anchored VWAP
 * - Overlay studies and inactivity gaps detection
 * 
 * @module tv-basicstudies
 * @version 52
 */

import { getHexColorByName } from '58978';
import { Std } from '19979';
import '4783'; // Study registration
import { pivotPointsStandardStudyItem } from '32503';
import { volumeProfileVisibleRangeStudyItem } from '53690';
import { 
  volumeProfileFixedRangeVbPStudyItem, 
  volumeProfileFixedRangeBSStudyItem 
} from '74109';
import { spreadStudyItem } from '24451';
import { ratioStudyItem } from '52691';
import { regressionTrendStudyItem } from '57622';
import { anchoredVWAPStudyItem } from '34378';
import { overlayStudyItem } from '51052';
import { inactivityGapsStudyItem } from '95603';

// Color constants
const COLOR_RIPE_RED = getHexColorByName('color-ripe-red-400');
const COLOR_MINTY_GREEN = getHexColorByName('color-minty-green-400');

/**
 * Compare Study - Compares current symbol with another symbol
 * Allows visualization of price differences between instruments
 */
const CompareStudy = {
  name: 'Compare',
  metainfo: {
    _metainfoVersion: 52,
    isTVScript: false,
    isTVScriptStub: false,
    is_hidden_study: true,
    defaults: {
      styles: {
        compare: {
          linestyle: 0,
          linewidth: 2,
          plottype: 0,
          trackPrice: false,
          transparency: 0,
          visible: true,
          color: '#9C27B0'
        }
      },
      inputs: {
        source: 'close',
        symbol: ''
      }
    },
    plots: [
      { id: 'compare', type: 'line' }
    ],
    styles: {
      compare: {
        title: 'Plot',
        histogramBase: 0
      }
    },
    description: 'Compare',
    shortDescription: 'Compare',
    is_price_study: true,
    inputs: [
      {
        defval: 'close',
        id: 'source',
        name: 'Source',
        options: ['open', 'high', 'low', 'close', 'hl2', 'hlc3', 'ohlc4'],
        type: 'text'
      },
      {
        id: 'symbol',
        name: 'Symbol',
        type: 'symbol',
        isHidden: true
      }
    ],
    id: 'Compare@tv-basicstudies-1',
    format: { type: 'inherit' }
  },
  constructor: function() {
    this.init = function(context, input) {
      this._context = context;
      this._context.new_sym(input(1), Std.period(this._context));
    };
    
    this.main = function(context, input) {
      this._context = context;
      const timeVar = this._context.new_unlimited_var(this._context.symbol.time);
      
      this._context.select_sym(1);
      const otherTimeVar = this._context.new_unlimited_var(this._context.symbol.time);
      const sourceValue = Std[input(0)](this._context);
      const resultVar = this._context.new_unlimited_var(sourceValue);
      
      this._context.select_sym(0);
      return [resultVar.adopt(otherTimeVar, timeVar, 0)];
    };
  }
};

/**
 * Volume Study - Displays trading volume with optional moving average
 * Features color coding based on price direction and smoothing options
 */
const VolumeStudy = {
  name: 'Volume',
  metainfo: {
    _metainfoVersion: 52,
    isTVScript: false,
    isTVScriptStub: false,
    is_hidden_study: false,
    defaults: {
      styles: {
        vol: {
          linestyle: 0,
          linewidth: 1,
          plottype: 5,
          trackPrice: false,
          transparency: 50,
          visible: true,
          color: '#000080'
        },
        vol_ma: {
          linestyle: 0,
          linewidth: 1,
          plottype: 0,
          trackPrice: false,
          transparency: 0,
          visible: false,
          color: '#2196F3'
        },
        smoothedMA: {
          linestyle: 0,
          linewidth: 1,
          plottype: 0,
          trackPrice: false,
          transparency: 0,
          visible: false,
          color: '#2196F3'
        }
      },
      palettes: {
        volumePalette: {
          colors: {
            0: { color: COLOR_RIPE_RED, width: 1, style: 0 },
            1: { color: COLOR_MINTY_GREEN, width: 1, style: 0 }
          }
        }
      },
      inputs: {
        showMA: false,
        volumeMA: 'SMA',
        length: 20,
        col_prev_close: false,
        symbol: '',
        smoothingLine: 'SMA',
        smoothingLength: 9
      }
    },
    plots: [
      { id: 'vol', type: 'line' },
      { id: 'volumePalette', palette: 'volumePalette', target: 'vol', type: 'colorer' },
      { id: 'vol_ma', type: 'line' },
      { id: 'smoothedMA', type: 'line' }
    ],
    styles: {
      vol: { title: 'Volume', histogramBase: 0 },
      vol_ma: { title: 'Volume MA', histogramBase: 0 },
      smoothedMA: { title: 'Smoothed MA', histogramBase: 0 }
    },
    description: 'Volume',
    shortDescription: 'Volume',
    is_price_study: false,
    palettes: {
      volumePalette: {
        colors: {
          0: { name: 'Falling' },
          1: { name: 'Growing' }
        }
      }
    },
    inputs: [
      { id: 'symbol', name: 'Other Symbol', defval: '', type: 'symbol', optional: true, isHidden: false },
      { id: 'showMA', name: 'show MA', defval: false, type: 'bool', isHidden: true },
      { id: 'length', name: 'MA Length', defval: 20, type: 'integer', min: 1, max: 2000, hideWhenPlotsHidden: ['vol_ma'] },
      { id: 'volumeMA', name: 'Volume MA', defval: 'SMA', type: 'text', options: ['SMA', 'EMA', 'WMA'], hideWhenPlotsHidden: ['vol_ma'] },
      { defval: false, id: 'col_prev_close', name: 'Color based on previous close', type: 'bool' },
      { id: 'smoothingLine', name: 'Smoothing Line', defval: 'SMA', type: 'text', options: ['SMA', 'EMA', 'WMA'], hideWhenPlotsHidden: ['smoothedMA'] },
      { id: 'smoothingLength', name: 'Smoothing Length', defval: 9, type: 'integer', min: 1, max: 10000, hideWhenPlotsHidden: ['smoothedMA'] }
    ],
    id: 'Volume@tv-basicstudies-1',
    format: { type: 'volume' }
  },
  constructor: function() {
    /**
     * Determine volume color based on price direction
     * @param {number} current - Current value
     * @param {number} previous - Previous value
     * @returns {number} Color index (0=falling, 1=growing)
     */
    this.f_0 = function(current, previous) {
      return Std.gt(current, previous) ? 0 : 1;
    };
    
    this.init = function(context, input) {
      this._context = context;
      if ('' !== input(0)) {
        this._context.new_sym(input(0), Std.period(this._context));
      }
    };
    
    this.main = function(context, input) {
      this._context = context;
      this._input = input;
      
      const volume = Std.volume(this._context);
      const open = Std.open(this._context);
      const close = Std.close(this._context);
      const timeVar = this._context.new_var(this._context.symbol.time);
      
      const smoothingType = this._input(5);
      const smoothingLength = this._input(6);
      const maLength = this._input(2);
      const maType = this._input(3);
      
      if (this._context.setMinimumAdditionalDepth(maLength + smoothingLength), '' !== this._input(0)) {
        this._context.select_sym(1);
        const otherTimeVar = this._context.new_var(this._context.symbol.time);
        const otherVolume = this._context.new_var(Std.volume(this._context));
        const otherOpen = this._context.new_var(Std.open(this._context));
        const otherClose = this._context.new_var(Std.close(this._context));
        
        volume = otherVolume.adopt(otherTimeVar, timeVar, 1);
        open = otherOpen.adopt(otherTimeVar, timeVar, 1);
        close = otherClose.adopt(otherTimeVar, timeVar, 1);
        
        this._context.select_sym(0);
      }
      
      const volumeVar = this._context.new_var(volume);
      const volumeMA = Std[maType.toLowerCase()](volumeVar, maLength, this._context);
      const maVar = this._context.new_var(volumeMA);
      const closeVar = this._context.new_var(close);
      
      return [
        volume,
        closeVar.get(1) && this._input(4) ? this.f_0(closeVar.get(1), close) : this.f_0(open, close),
        volumeMA,
        Std[smoothingType.toLowerCase()](maVar, smoothingLength, this._context)
      ];
    };
  }
};

/**
 * ZigZag Study - Filters out small price movements to show significant trends
 * @param {number} deviation - Percentage deviation threshold
 * @param {number} depth - Minimum number of bars
 */
const ZigZagStudy = {
  name: 'ZigZag',
  metainfo: {
    _metainfoVersion: 52,
    isTVScript: false,
    isTVScriptStub: false,
    is_hidden_study: false,
    defaults: {
      styles: {
        plot_0: {
          linestyle: 0,
          linewidth: 2,
          plottype: 0,
          trackPrice: false,
          transparency: 0,
          visible: true,
          color: '#2196F3'
        }
      },
      inputs: {
        in_0: 5,
        in_1: 10
      }
    },
    plots: [
      { id: 'plot_0', type: 'line' },
      { id: 'plot_1', target: 'plot_0', type: 'dataoffset' }
    ],
    styles: {
      plot_0: {
        title: 'Plot',
        histogramBase: 0,
        joinPoints: false
      }
    },
    description: 'Zig Zag',
    shortDescription: 'ZigZag',
    is_price_study: true,
    classId: 'ScriptWithDataOffset',
    inputs: [
      { id: 'in_0', name: 'deviation', defval: 5, type: 'float', min: 0.001, max: 100 },
      { id: 'in_1', name: 'depth', defval: 10, type: 'integer', min: 2, max: 1000 }
    ],
    id: 'ZigZag@tv-basicstudies-1',
    format: { type: 'inherit' }
  },
  constructor: function() {
    this.main = function(context, input) {
      const deviation = input(0);
      const depth = input(1);
      const deviationPercent = deviation / 100;
      const halfDepth = Math.ceil(depth / 2);
      
      return [
        Std.zigzag(deviationPercent, halfDepth, context),
        Std.zigzagbars(deviationPercent, halfDepth, context)
      ];
    };
  }
};

/**
 * Sessions Study - Highlights different trading sessions
 * Shows pre-market, post-market backgrounds and session breaks
 */
const SessionsStudy = {
  name: 'Sessions',
  metainfo: {
    _metainfoVersion: 52,
    defaults: {
      graphics: {
        vertlines: {
          sessBreaks: {
            color: '#4985e7',
            style: 2,
            visible: false,
            width: 1
          }
        },
        backgrounds: {
          preMarket: {
            color: '#FF9800',
            transparency: 92,
            visible: true
          },
          postMarket: {
            color: '#2196F3',
            transparency: 92,
            visible: true
          }
        }
      },
      linkedToSeries: true
    },
    description: 'Sessions',
    graphics: {
      vertlines: {
        sessBreaks: {
          name: 'Session Break',
          halign: 'left'
        }
      },
      backgrounds: {
        preMarket: { name: 'Pre market' },
        postMarket: { name: 'Post market' }
      }
    },
    id: 'Sessions@tv-basicstudies-1',
    inputs: [],
    is_hidden_study: true,
    is_price_study: true,
    name: 'Sessions@tv-basicstudies',
    palettes: {},
    plots: [],
    shortDescription: 'Sessions',
    format: { type: 'inherit' }
  },
  constructor: function() {
    /**
     * Create vertical line data for session breaks
     * @param {string} id - Line identifier
     * @param {number} index - Bar index
     */
    const createVerticalLine = (id, index) => ({
      id: id,
      index: index,
      extendBottom: true,
      extendTop: true
    });
    
    /**
     * Create background range data
     * @param {Object} range - Time range object
     */
    const createBackgroundRange = (range) => ({
      id: range.start,
      start: range.start,
      stop: range.stop
    });
    
    this.init = function() {
      this._times = [];
    };
    
    /**
     * Get vertical line data for session breaks
     * @param {Object} context - Chart context
     * @returns {Array} Vertical line data
     */
    this._getVerticalLineData = (context) => {
      return Std.selectSessionBreaks(context, this._times).map(createVerticalLine);
    };
    
    /**
     * Get pre and post market background data
     * @param {Object} context - Chart context
     * @returns {Object} Background ranges for pre and post market
     */
    this._getPreAndPostMarketBackgroundsData = (context) => {
      const ranges = Std.selectPreAndPostMarketTimes(context, this._times);
      return {
        preMarket: ranges.preMarket.map(createBackgroundRange),
        postMarket: ranges.postMarket.map(createBackgroundRange)
      };
    };
    
    this.main = function(context, input) {
      if (Std.isdwm(context)) return null;
      
      const currentTime = Std.time(context);
      if (isNaN(currentTime)) return null;
      
      const timesCount = this._times.length;
      if (0 !== timesCount && this._times[timesCount - 1] === currentTime) {
        return null;
      }
      
      this._times.push(currentTime);
      
      if (!context.symbol.isLastBar || !context.symbol.isNewBar) {
        return null;
      }
      
      const verticalLines = this._getVerticalLineData(context);
      const backgrounds = this._getPreAndPostMarketBackgroundsData(context);
      
      if (0 === verticalLines.length && 
          0 === backgrounds.preMarket.length && 
          0 === backgrounds.postMarket.length) {
        return null;
      }
      
      return {
        nonseries: true,
        type: 'study_graphics',
        data: {
          graphicsCmds: {
            create: {
              vertlines: [{ styleId: 'sessBreaks', data: verticalLines }],
              backgrounds: [
                { styleId: 'preMarket', data: backgrounds.preMarket },
                { styleId: 'postMarket', data: backgrounds.postMarket }
              ]
            },
            erase: [{ action: 'all' }]
          }
        }
      };
    };
  }
};

/**
 * SuperTrend Study - Trend-following indicator based on ATR
 * Provides buy/sell signals with trailing stop levels
 */
const SuperTrendStudy = {
  name: 'SuperTrend',
  metainfo: {
    _metainfoVersion: 52,
    isTVScript: false,
    isTVScriptStub: false,
    is_hidden_study: false,
    defaults: {
      styles: {
        plot_0: {
          linestyle: 0,
          linewidth: 3,
          plottype: 0,
          trackPrice: false,
          transparency: 35,
          visible: true,
          color: '#000080'
        },
        plot_2: {
          linestyle: 0,
          linewidth: 3,
          plottype: 'shape_arrow_up',
          trackPrice: false,
          location: 'BelowBar',
          transparency: 35,
          visible: true,
          color: '#00FF00'
        },
        plot_3: {
          linestyle: 0,
          linewidth: 3,
          plottype: 'shape_arrow_down',
          trackPrice: false,
          location: 'AboveBar',
          transparency: 35,
          visible: true,
          color: '#FF0000'
        }
      },
      palettes: {
        palette_0: {
          colors: {
            0: { color: '#008000', width: 3, style: 0 },
            1: { color: '#800000', width: 3, style: 0 }
          }
        }
      },
      inputs: {
        in_0: 10,
        in_1: 3
      }
    },
    plots: [
      { id: 'plot_0', type: 'line' },
      { id: 'plot_1', palette: 'palette_0', target: 'plot_0', type: 'colorer' },
      { id: 'plot_2', type: 'shapes' },
      { id: 'plot_3', type: 'shapes' }
    ],
    styles: {
      plot_0: { title: 'SuperTrend', histogramBase: 0, joinPoints: false, isHidden: false },
      plot_2: { title: 'Up Arrow', histogramBase: 0, joinPoints: false, isHidden: false },
      plot_3: { title: 'Down Arrow', histogramBase: 0, joinPoints: false, isHidden: false }
    },
    description: 'SuperTrend',
    shortDescription: 'SuperTrend',
    is_price_study: true,
    palettes: {
      palette_0: {
        colors: {
          0: { name: 'Color 0' },
          1: { name: 'Color 1' }
        },
        valToIndex: { 0: 0, 1: 1 }
      }
    },
    inputs: [
      { id: 'in_0', name: 'Length', defval: 10, type: 'integer', min: 1, max: 100 },
      { id: 'in_1', name: 'Factor', defval: 3, type: 'float', min: 1, max: 100 }
    ],
    id: 'SuperTrend@tv-basicstudies-1',
    scriptIdPart: '',
    name: 'SuperTrend',
    isCustomIndicator: true,
    format: { type: 'inherit' }
  },
  constructor: function() {
    this.main = function(context, input) {
      const length = input(0);
      const factor = input(1);
      
      const [supertrendValue, trendDirection] = Std.supertrend(factor, length, context);
      const previousTrend = context.new_var(trendDirection).get(1);
      
      return [
        supertrendValue,
        -1 === trendDirection ? 0 : 1,
        -1 === trendDirection && previousTrend !== trendDirection ? 1 : NaN,
        1 === trendDirection && previousTrend !== trendDirection ? 1 : NaN
      ];
    };
  }
};

// Register all studies with the JSServer
JSServer.studyLibrary = JSServer.studyLibrary.concat([
  CompareStudy,
  overlayStudyItem,
  VolumeStudy,
  ZigZagStudy,
  SessionsStudy,
  SuperTrendStudy,
  pivotPointsStandardStudyItem,
  volumeProfileVisibleRangeStudyItem,
  volumeProfileFixedRangeVbPStudyItem,
  volumeProfileFixedRangeBSStudyItem,
  spreadStudyItem,
  ratioStudyItem,
  regressionTrendStudyItem,
  anchoredVWAPStudyItem,
  inactivityGapsStudyItem
]);

export default JSServer.studyLibrary;
