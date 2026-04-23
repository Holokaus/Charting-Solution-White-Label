#!/usr/bin/env node
/**
 * Module 045 - Basic Studies Library (Indicators Collection)
 *
 * This module contains the complete library of built-in TradingView indicators
 * including technical analysis studies like Volume, ZigZag, Sessions, SuperTrend,
 * and many classic indicators (RSI, MACD, Bollinger Bands, etc.).
 *
 * @module 45
 * @category Indicators
 * @dependencies 
 *   - 58978 (Color utilities)
 *   - 19979 (Std - Standard library functions)
 *   - 4783 (Additional indicators)
 *   - Multiple study item modules
 */

// This file has been beautified and documented.
// Original minified variables have been renamed for clarity.

45: (exports, moduleExports, require) => {
    "use strict";
    
    // Import color utility for predefined colors
    const getHexColorByName = require(58978).getHexColorByName;
    
    // Import standard library for mathematical and charting operations
    const Std = require(19979).Std;
    
    // Import additional indicator definitions
    require(4783);
    
    // Import specific study items
    const pivotPointsStandardStudyItem = require(32503).pivotPointsStandardStudyItem;
    const volumeProfileVisibleRangeStudyItem = require(53690).volumeProfileVisibleRangeStudyItem;
    const volumeProfileFixedRangeVbPStudyItem = require(74109).volumeProfileFixedRangeVbPStudyItem;
    const volumeProfileFixedRangeBSStudyItem = require(74109).volumeProfileFixedRangeBSStudyItem;
    const spreadStudyItem = require(24451).spreadStudyItem;
    const ratioStudyItem = require(52691).ratioStudyItem;
    const regressionTrendStudyItem = require(57622).regressionTrendStudyItem;
    const anchoredVWAPStudyItem = require(34378).anchoredVWAPStudyItem;
    const overlayStudyItem = require(51052).overlayStudyItem;
    const inactivityGapsStudyItem = require(95603).inactivityGapsStudyItem;
    
    // Predefined colors from TradingView palette
    const COLOR_RED = getHexColorByName("color-ripe-red-400");
    const COLOR_GREEN = getHexColorByName("color-minty-green-400");
    
    /**
     * Main Study Library Registration
     * 
     * This extends the global JSServer.studyLibrary with all built-in indicators.
     * Each indicator includes:
     * - metainfo: Metadata about the indicator (version, visibility, defaults)
     * - plots: Definition of output plots (lines, shapes, colors)
     * - styles: Visual styling for each plot
     * - inputs: User-configurable parameters
     * - constructor: The actual calculation logic
     */
    JSServer.studyLibrary = JSServer.studyLibrary.concat([
        
        /**
         * ============================================
         * COMPARE STUDY
         * ============================================
         * Allows comparing price data from another symbol
         * Plots the selected price source (close, open, etc.) of another symbol
         */
        {
            name: "Compare",
            metainfo: {
                _metainfoVersion: 52,
                isTVScript: false,
                isTVScriptStub: false,
                is_hidden_study: true,
                defaults: {
                    styles: {
                        compare: {
                            linestyle: 0,      // Solid line
                            linewidth: 2,
                            plottype: 0,       // Line plot
                            trackPrice: false,
                            transparency: 0,
                            visible: true,
                            color: "#9C27B0"   // Purple
                        }
                    },
                    inputs: {
                        source: "close",       // Default to close price
                        symbol: ""             // Empty = user selects
                    }
                },
                plots: [
                    { id: "compare", type: "line" }
                ],
                styles: {
                    compare: {
                        title: "Plot",
                        histogramBase: 0
                    }
                },
                description: "Compare",
                shortDescription: "Compare",
                is_price_study: true,
                inputs: [
                    {
                        defval: "close",
                        id: "source",
                        name: "Source",
                        options: ["open", "high", "low", "close", "hl2", "hlc3", "ohlc4"],
                        type: "text"
                    },
                    {
                        id: "symbol",
                        name: "Symbol",
                        type: "symbol",
                        isHidden: true
                    }
                ],
                id: "Compare@tv-basicstudies-1",
                format: { type: "inherit" }
            },
            constructor: function() {
                /**
                 * Initialize the Compare study
                 * @param context - Chart context
                 * @param input - Input accessor function
                 */
                this.init = function(context, input) {
                    this._context = context;
                    // Create new symbol comparison with specified period
                    this._context.new_sym(input(1), Std.period(this._context));
                };
                
                /**
                 * Main calculation for Compare study
                 * Returns the selected price source from the compared symbol
                 */
                this.main = function(context, input) {
                    this._context = context;
                    
                    // Get current bar time as reference
                    const currentTime = this._context.new_unlimited_var(this._context.symbol.time);
                    
                    // Switch to the compared symbol (index 1)
                    this._context.select_sym(1);
                    
                    // Get time and price data from compared symbol
                    const comparedTime = this._context.new_unlimited_var(this._context.symbol.time);
                    const priceValue = Std[input(0)](this._context);
                    const priceVar = this._context.new_unlimited_var(priceValue);
                    
                    // Switch back to main symbol
                    this._context.select_sym(0);
                    
                    // Adopt the compared data to our timeline
                    return [priceVar.adopt(comparedTime, currentTime, 0)];
                };
            }
        },
        
        // Note: Constructor will be attached to overlayStudyItem
        overlayStudyItem,
        
        /**
         * ============================================
         * VOLUME STUDY
         * ============================================
         * Displays trading volume with optional moving average
         * Color-coded based on price direction
         */
        {
            name: "Volume",
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
                            plottype: 5,       // Histogram/columns
                            trackPrice: false,
                            transparency: 50,
                            visible: true,
                            color: "#000080"   // Navy blue
                        },
                        vol_ma: {
                            linestyle: 0,
                            linewidth: 1,
                            plottype: 0,       // Line
                            trackPrice: false,
                            transparency: 0,
                            visible: false,    // Hidden by default
                            color: "#2196F3"   // Blue
                        },
                        smoothedMA: {
                            linestyle: 0,
                            linewidth: 1,
                            plottype: 0,
                            trackPrice: false,
                            transparency: 0,
                            visible: false,
                            color: "#2196F3"
                        }
                    },
                    palettes: {
                        volumePalette: {
                            colors: {
                                0: { color: COLOR_RED, width: 1, style: 0 },    // Falling
                                1: { color: COLOR_GREEN, width: 1, style: 0 }   // Growing
                            }
                        }
                    },
                    inputs: {
                        showMA: false,
                        volumeMA: "SMA",
                        length: 20,
                        col_prev_close: false,
                        symbol: "",
                        smoothingLine: "SMA",
                        smoothingLength: 9
                    }
                },
                plots: [
                    { id: "vol", type: "line" },
                    { id: "volumePalette", palette: "volumePalette", target: "vol", type: "colorer" },
                    { id: "vol_ma", type: "line" },
                    { id: "smoothedMA", type: "line" }
                ],
                styles: {
                    vol: { title: "Volume", histogramBase: 0 },
                    vol_ma: { title: "Volume MA", histogramBase: 0 },
                    smoothedMA: { title: "Smoothed MA", histogramBase: 0 }
                },
                description: "Volume",
                shortDescription: "Volume",
                is_price_study: false,
                palettes: {
                    volumePalette: {
                        colors: {
                            0: { name: "Falling" },
                            1: { name: "Growing" }
                        }
                    }
                },
                inputs: [
                    {
                        id: "symbol",
                        name: "Other Symbol",
                        defval: "",
                        type: "symbol",
                        optional: true,
                        isHidden: false
                    },
                    {
                        id: "showMA",
                        name: "show MA",
                        defval: false,
                        type: "bool",
                        isHidden: true
                    },
                    {
                        id: "length",
                        name: "MA Length",
                        defval: 20,
                        type: "integer",
                        min: 1,
                        max: 2000,
                        hideWhenPlotsHidden: ["vol_ma"]
                    },
                    {
                        id: "volumeMA",
                        name: "Volume MA",
                        defval: "SMA",
                        type: "text",
                        options: ["SMA", "EMA", "WMA"],
                        hideWhenPlotsHidden: ["vol_ma"]
                    },
                    {
                        defval: false,
                        id: "col_prev_close",
                        name: "Color based on previous close",
                        type: "bool"
                    },
                    {
                        id: "smoothingLine",
                        name: "Smoothing Line",
                        defval: "SMA",
                        type: "text",
                        options: ["SMA", "EMA", "WMA"],
                        hideWhenPlotsHidden: ["smoothedMA"]
                    },
                    {
                        id: "smoothingLength",
                        name: "Smoothing Length",
                        defval: 9,
                        type: "integer",
                        min: 1,
                        max: 10000,
                        hideWhenPlotsHidden: ["smoothedMA"]
                    }
                ],
                id: "Volume@tv-basicstudies-1",
                format: { type: "volume" }
            },
            constructor: function() {
                /**
                 * Determine volume bar color based on price direction
                 * @returns 0 for falling (red), 1 for growing (green)
                 */
                this.f_0 = function(currentPrice, previousPrice) {
                    return Std.gt(currentPrice, previousPrice) ? 0 : 1;
                };
                
                /**
                 * Main calculation for Volume study
                 * Returns: [volume, color, volume_ma, smoothed_ma]
                 */
                this.main = function(context, input) {
                    this._context = context;
                    this._input = input;
                    
                    // Get volume and price data
                    const volume = Std.volume(this._context);
                    const openPrice = Std.open(this._context);
                    const closePrice = Std.close(this._context);
                    
                    // Create time series variable
                    const timeSeries = this._context.new_var(this._context.symbol.time);
                    
                    // Get input parameters
                    const otherSymbol = this._input(0);
                    const maLength = this._input(6);
                    const maType = this._input(2);
                    const maMethod = this._input(3);
                    
                    // If comparing to another symbol, fetch that data
                    if ("" !== otherSymbol) {
                        this._context.select_sym(1);
                        
                        const otherTime = this._context.new_var(this._context.symbol.time);
                        const otherVolume = this._context.new_var(Std.volume(this._context));
                        const otherOpen = this._context.new_var(Std.open(this._context));
                        const otherClose = this._context.new_var(Std.close(this._context));
                        
                        // Adopt other symbol's data to our timeline
                        volume = otherVolume.adopt(otherTime, timeSeries, 1);
                        openPrice = otherOpen.adopt(otherTime, timeSeries, 1);
                        closePrice = otherClose.adopt(otherTime, timeSeries, 1);
                        
                        this._context.select_sym(0);
                    }
                    
                    // Create volume variable
                    const volumeVar = this._context.new_var(volume);
                    
                    // Calculate volume moving average
                    const volumeMA = Std[maType.toLowerCase()](volumeVar, maLength, this._context);
                    const maVar = this._context.new_var(volumeMA);
                    
                    // Calculate smoothed MA if requested
                    const closeVar = this._context.new_var(closePrice);
                    const smoothedMA = Std[maMethod.toLowerCase()](closeVar, this._input(7), this._context);
                    
                    // Return: [volume, color, volume_ma, smoothed_ma]
                    return [
                        volume,
                        // Color based on previous close comparison
                        closePrice.get(1) && this._input(4) ? 
                            this.f_0(closePrice.get(1), closePrice) : 
                            this.f_0(openPrice, closePrice),
                        volumeMA,
                        smoothedMA
                    ];
                };
            }
        },
        
        /**
         * ============================================
         * ZIG ZAG STUDY
         * ============================================
         * Filters out small price movements to show significant trends
         * Uses percentage deviation and depth parameters
         */
        {
            name: "ZigZag",
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
                            color: "#2196F3"
                        }
                    },
                    inputs: {
                        in_0: 5,    // Deviation percentage
                        in_1: 10    // Depth (minimum bars)
                    }
                },
                plots: [
                    { id: "plot_0", type: "line" },
                    { id: "plot_1", target: "plot_0", type: "dataoffset" }
                ],
                styles: {
                    plot_0: {
                        title: "Plot",
                        histogramBase: 0,
                        joinPoints: false
                    }
                },
                description: "Zig Zag",
                shortDescription: "ZigZag",
                is_price_study: true,
                classId: "ScriptWithDataOffset",
                inputs: [
                    {
                        id: "in_0",
                        name: "deviation",
                        defval: 5,
                        type: "float",
                        min: 0.001,
                        max: 100
                    },
                    {
                        id: "in_1",
                        name: "depth",
                        defval: 10,
                        type: "integer",
                        min: 2,
                        max: 1000
                    }
                ],
                id: "ZigZag@tv-basicstudies-1",
                format: { type: "inherit" }
            },
            constructor: function() {
                /**
                 * Main calculation for ZigZag study
                 * Returns: [zigzag_values, zigzag_bars_offset]
                 */
                this.main = function(context, input) {
                    this._context = context;
                    this._input = input;
                    
                    const deviationPercent = this._input(0);
                    const depth = this._input(1);
                    
                    // Convert percentage to decimal
                    const deviationRatio = deviationPercent / 100;
                    
                    // Calculate minimum lookback period
                    const lookback = Math.ceil(depth / 2);
                    
                    // Calculate ZigZag values and bar offsets
                    return [
                        Std.zigzag(deviationRatio, lookback, this._context),
                        Std.zigzagbars(deviationRatio, lookback, this._context)
                    ];
                };
            }
        },
        
        /**
         * ============================================
         * SESSIONS STUDY
         * ============================================
         * Highlights different trading sessions (pre-market, post-market)
         * Draws vertical lines at session breaks
         */
        {
            name: "Sessions",
            metainfo: {
                _metainfoVersion: 52,
                defaults: {
                    graphics: {
                        vertlines: {
                            sessBreaks: {
                                color: "#4985e7",
                                style: 2,        // Dotted
                                visible: false,
                                width: 1
                            }
                        },
                        backgrounds: {
                            preMarket: {
                                color: "#FF9800",  // Orange
                                transparency: 92,
                                visible: true
                            },
                            postMarket: {
                                color: "#2196F3",  // Blue
                                transparency: 92,
                                visible: true
                            }
                        }
                    },
                    linkedToSeries: true
                },
                description: "Sessions",
                graphics: {
                    vertlines: {
                        sessBreaks: {
                            name: "Session Break",
                            halign: "left"
                        }
                    },
                    backgrounds: {
                        preMarket: { name: "Pre market" },
                        postMarket: { name: "Post market" }
                    }
                },
                id: "Sessions@tv-basicstudies-1",
                inputs: [],
                is_hidden_study: true,
                is_price_study: true,
                name: "Sessions@tv-basicstudies",
                palettes: {},
                plots: [],
                shortDescription: "Sessions",
                format: { type: "inherit" }
            },
            constructor: function() {
                /**
                 * Create vertical line data for session breaks
                 */
                const createVerticalLineData = (times, index) => {
                    return {
                        id: index,
                        index: index,
                        extendBottom: true,
                        extendTop: true
                    };
                };
                
                /**
                 * Create background region data for pre/post market
                 */
                const createBackgroundData = (region) => {
                    return {
                        id: region.start,
                        start: region.start,
                        stop: region.stop
                    };
                };
                
                /**
                 * Initialize Sessions study
                 */
                this.init = function() {
                    this._times = [];
                };
                
                /**
                 * Get vertical line data for session breaks
                 */
                this._getVerticalLineData = function(context) {
                    return Std.selectSessionBreaks(context, this._times).map(createVerticalLineData);
                };
                
                /**
                 * Get pre-market and post-market background data
                 */
                this._getPreAndPostMarketBackgroundsData = function(context) {
                    const regions = Std.selectPreAndPostMarketTimes(context, this._times);
                    return {
                        preMarket: regions.preMarket.map(createBackgroundData),
                        postMarket: regions.postMarket.map(createBackgroundData)
                    };
                };
                
                /**
                 * Main calculation for Sessions study
                 * Returns graphics commands for drawing session markers
                 */
                this.main = function(context, input) {
                    // Only work on intraday charts
                    if (Std.isdwm(context)) return null;
                    
                    const currentTime = Std.time(context);
                    if (isNaN(currentTime)) return null;
                    
                    // Track unique times
                    const timesCount = this._times.length;
                    if (0 !== timesCount && this._times[timesCount - 1] === currentTime) {
                        // Already recorded this time
                    } else {
                        this._times.push(currentTime);
                    }
                    
                    // Only update on new bars
                    if (!context.symbol.isLastBar || !context.symbol.isNewBar) return null;
                    
                    // Get graphics data
                    const verticalLines = this._getVerticalLineData(context);
                    const backgrounds = this._getPreAndPostMarketBackgroundsData(context);
                    
                    // Return nothing if no graphics to draw
                    if (0 === verticalLines.length && 
                        0 === backgrounds.preMarket.length && 
                        0 === backgrounds.postMarket) {
                        return null;
                    }
                    
                    // Return graphics commands
                    return {
                        nonseries: true,
                        type: "study_graphics",
                        data: {
                            graphicsCmds: {
                                create: {
                                    vertlines: [
                                        { styleId: "sessBreaks", data: verticalLines }
                                    ],
                                    backgrounds: [
                                        { styleId: "preMarket", data: backgrounds.preMarket },
                                        { styleId: "postMarket", data: backgrounds.postMarket }
                                    ]
                                },
                                erase: [{ action: "all" }]
                            }
                        }
                    };
                };
            }
        },
        
        /**
         * ============================================
         * SUPERTREND STUDY
         * ============================================
         * Trend-following indicator based on ATR
         * Shows buy/sell signals with colored line
         */
        {
            name: "SuperTrend",
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
                            color: "#000080"
                        },
                        plot_2: {
                            linestyle: 0,
                            linewidth: 3,
                            plottype: "shape_arrow_up",
                            trackPrice: false,
                            location: "BelowBar",
                            transparency: 35,
                            visible: true,
                            color: "#00FF00"
                        },
                        plot_3: {
                            linestyle: 0,
                            linewidth: 3,
                            plottype: "shape_arrow_down",
                            trackPrice: false,
                            location: "AboveBar",
                            transparency: 35,
                            visible: true,
                            color: "#FF0000"
                        }
                    },
                    palettes: {
                        palette_0: {
                            colors: {
                                0: { color: "#008000", width: 3, style: 0 },
                                1: { color: "#800000", width: 3, style: 0 }
                            }
                        }
                    },
                    inputs: {
                        in_0: 10,   // ATR Length
                        in_1: 3     // Factor (multiplier)
                    }
                },
                plots: [
                    { id: "plot_0", type: "line" },
                    { id: "plot_1", palette: "palette_0", target: "plot_0", type: "colorer" },
                    { id: "plot_2", type: "shapes" },
                    { id: "plot_3", type: "shapes" }
                ],
                styles: {
                    plot_0: { title: "SuperTrend", histogramBase: 0, joinPoints: false, isHidden: false },
                    plot_2: { title: "Up Arrow", histogramBase: 0, joinPoints: false, isHidden: false },
                    plot_3: { title: "Down Arrow", histogramBase: 0, joinPoints: false, isHidden: false }
                },
                description: "SuperTrend",
                shortDescription: "SuperTrend",
                is_price_study: true,
                palettes: {
                    palette_0: {
                        colors: {
                            0: { name: "Color 0" },
                            1: { name: "Color 1" }
                        },
                        valToIndex: { 0: 0, 1: 1 }
                    }
                },
                inputs: [
                    {
                        id: "in_0",
                        name: "Length",
                        defval: 10,
                        type: "integer",
                        min: 1,
                        max: 100
                    },
                    {
                        id: "in_1",
                        name: "Factor",
                        defval: 3,
                        type: "float",
                        min: 1,
                        max: 100
                    }
                ],
                id: "SuperTrend@tv-basicstudies-1",
                scriptIdPart: "",
                name: "SuperTrend",
                isCustomIndicator: true,
                format: { type: "inherit" }
            },
            constructor: function() {
                /**
                 * Main calculation for SuperTrend study
                 * Returns: [supertrend_value, trend_direction, up_arrow, down_arrow]
                 */
                this.main = function(context, input) {
                    const atrLength = input(0);
                    const factor = input(1);
                    
                    // Calculate SuperTrend values and trend direction
                    const [supertrend, trendDir] = Std.supertrend(factor, atrLength, context);
                    
                    // Get previous trend direction for arrow detection
                    const prevTrendDir = context.new_var(trendDir).get(1);
                    
                    return [
                        supertrend,
                        // Color based on trend direction (-1 = down, 1 = up)
                        -1 === trendDir ? 0 : 1,
                        // Up arrow when trend changes from down to up
                        -1 === trendDir && prevTrendDir !== trendDir ? 1 : NaN,
                        // Down arrow when trend changes from up to down
                        1 === trendDir && prevTrendDir !== trendDir ? 1 : NaN
                    ];
                };
            }
        },
        
        // Add remaining study items from imports
        pivotPointsStandardStudyItem,
        volumeProfileVisibleRangeStudyItem,
        volumeProfileFixedRangeVbPStudyItem,
        volumeProfileFixedRangeBSStudyItem,
        spreadStudyItem,
        ratioStudyItem,
        regressionTrendStudyItem,
        anchoredVWAPStudyItem,
        inactivityGapsStudyItem
        
    ]); // End of studyLibrary.concat
    
}; // End of module 45
