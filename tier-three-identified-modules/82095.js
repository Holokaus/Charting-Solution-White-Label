/**
 * Module: 82095
 * Semantic: seriesData
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:53.072Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 82095 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

82095: (exports, module, i) => {
    "use strict";
    var state;
    require.r(module), require.d(module, {
        ChartStyle: () => H,
        OldLineStyleTypes: () => watcher,
        SERIES_STATUS_TEXT: () => boolean,
        STATUS_CALCULATION_ERROR: () => function,
        STATUS_DELAYED: () => utility,
        STATUS_DELAYED_STREAMING: () => _,
        STATUS_EOD: () => handler,
        STATUS_ERROR: () => getter,
        STATUS_INVALID_SYMBOL: () => logger,
        STATUS_LOADING: () => result,
        STATUS_NO_BARS: () => parameter,
        STATUS_OFFLINE: () => object,
        STATUS_PULSE: () => data,
        STATUS_READY: () => array,
        STATUS_REPLAY: () => method,
        STATUS_RESOLVING: () => nextValue,
        STATUS_SNAPSHOT: () => config,
        STATUS_UNSUPPORTED_RESOLUTION: () => yValue,
        STYLE_AREA: () => context,
        STYLE_BARS: () => C,
        STYLE_BASELINE: () => D,
        STYLE_CANDLES: () => T,
        STYLE_COLUMNS: () => R,
        STYLE_HEIKEN_ASHI: () => key,
        STYLE_HILO: () => V,
        STYLE_HLC_AREA: () => F,
        STYLE_HLC_BARS: () => W,
        STYLE_HOLLOW_CANDLES: () => E,
        STYLE_KAGI: () => I,
        STYLE_LINE: () => P,
        STYLE_LINE_WITH_MARKERS: () => N,
        STYLE_PB: () => L,
        STYLE_PNF: () => A,
        STYLE_RANGE: () => B,
        STYLE_RENKO: () => M,
        STYLE_SHORT_NAMES: () => callback,
        STYLE_STEPLINE: () => O,
        SYMBOL_STRING_DATA: () => U,
        Status: () => state,
        chartStylesWithAttachedStudies: () => job,
        seriesLoadingStatuses: () => S,
        seriesReadyStatuses: () => v
      }),
      function(exports) {
        e[exports.Offline = 0] = "Offline", e[exports.Resolving = 1] = "Resolving", e[exports.Loading = 2] = "Loading", e[exports.Ready = 3] =
          "Ready", e[exports.InvalidSymbol = 4] = "InvalidSymbol", e[exports.Snapshot = 5] = "Snapshot", e[exports.EOD = 6] = "EOD", e[e
            .Pulse = 7] = "Pulse", e[exports.Delayed = 8] = "Delayed", e[exports.DelayedSteaming = 9] = "DelayedSteaming", e[e
            .NoBars = 10] = "NoBars", e[exports.Replay = 11] = "Replay", e[exports.Error = 12] = "Error", e[exports.CalculationError =
          13] = "CalculationError", e[exports.UnsupportedResolution = 14] = "UnsupportedResolution"
      }(s || (state = {}));
    const object = 0,
      nextValue = 1,
      result = 2,
      array = 3,
      logger = 4,
      config = 5,
      handler = 6,
      data = 7,
      utility = 8,
      _ = 9,
      parameter = 10,
      method = 11,
      getter = 12,
      function = 13,
      yValue = 14,
      value = new Set([3, 6, 7, 8, 9, 11]),
      S = new Set([1, 2]),
      boolean = {
        [o]: "connecting",
        [n]: "loading",
        [r]: "loading",
        [a]: "realtime",
        [l]: "invalid",
        [c]: "snapshot",
        [h]: "endofday",
        [d]: "endofday",
        [u]: "delayed",
        [_]: "delayed_streaming",
        [p]: "forbidden",
        [m]: "replay",
        [g]: "error",
        [f]: "calculation_error",
        [y]: "unsupported_resolution"
      };
    var watcher;
    ! function(exports) {
      e[exports.Markers = 0] = "Markers", e[exports.Stepline = 1] = "Stepline", e[exports.Simple = 2] = "Simple"
    }(w || (watcher = {}));
    const C = 0,
      T = 1,
      P = 2,
      context = 3,
      M = 4,
      I = 5,
      A = 6,
      L = 7,
      key = 8,
      E = 9,
      D = 10,
      B = 11,
      V = 12,
      R = 13,
      N = 14,
      O = 15,
      F = 16,
      W = 21;
    var H;
    ! function(exports) {
      e[exports.Bar = 0] = "Bar", e[exports.Candle = 1] = "Candle", e[exports.Line = 2] = "Line", e[exports.Area = 3] = "Area", e[exports.Renko = 4] =
        "Renko", e[exports.Kagi = 5] = "Kagi", e[exports.PnF = 6] = "PnF", e[exports.LineBreak = 7] = "LineBreak", e[exports.HeikinAshi = 8] =
        "HeikinAshi", e[exports.HollowCandle = 9] = "HollowCandle",
        e[exports.Baseline = 10] = "Baseline", e[exports.Range = 11] = "Range", e[exports.HiLo = 12] = "HiLo", e[exports.Column = 13] =
        "Column", e[exports.LineWithMarkers = 14] = "LineWithMarkers", e[exports.Stepline = 15] = "Stepline", e[exports.HLCArea = 16] =
        "HLCArea", e[exports.VolFootprint = 17] = "VolFootprint", e[exports.TPO = 18] = "TPO", e[exports.VolCandle = 19] = "VolCandle", e[
          exports.SVP = 20] = "SVP", e[exports.HLCBars = 21] = "HLCBars"
    }(H || (H = {}));
    const callback = {
        0: "bar",
        1: "candle",
        9: "hollowCandle",
        2: "line",
        14: "lineWithMarkers",
        15: "stepline",
        3: "area",
        16: "hlcArea",
        4: "renko",
        7: "pb",
        5: "kagi",
        6: "pnf",
        8: "ha",
        10: "baseline",
        11: "range",
        12: "hilo",
        13: "column",
        17: "volFootprint",
        18: "tpo",
        19: "volCandles",
        20: "svp",
        21: "hlcBars"
      },
      U = {
        4: {
          type: "BarSetRenko@tv-prostudies",
          basicStudyVersion: 73
        },
        7: {
          type: "BarSetPriceBreak@tv-prostudies",
          basicStudyVersion: 34
        },
        5: {
          type: "BarSetKagi@tv-prostudies",
          basicStudyVersion: 73
        },
        6: {
          type: "BarSetPnF@tv-prostudies",
          basicStudyVersion: 73
        },
        8: {
          type: "BarSetHeikenAshi@tv-basicstudies",
          basicStudyVersion: 60
        },
        11: {
          type: "BarSetRange@tv-basicstudies",
          basicStudyVersion: 72
        },
        17: {
          type: "Footprint@tv-volumebyprice",
          basicStudyVersion: 104
        },
        18: {
          type: "TPOPeriodic@tv-volumebyprice",
          basicStudyVersion: 104
        },
        20: {
          type: "VbPSessions@tv-volumebyprice",
          basicStudyVersion: 126
        }
      },
      job = [17, 18, 20]