/**
 * Module 82095 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

82095: (exports, t, i) => {
    "use strict";
    var modes;
    i.r(t), i.d(t, {
        ChartStyle: () => H,
        OldLineStyleTypes: () => w,
        SERIES_STATUS_TEXT: () => b,
        STATUS_CALCULATION_ERROR: () => f,
        STATUS_DELAYED: () => u,
        STATUS_DELAYED_STREAMING: () => _,
        STATUS_EOD: () => h,
        STATUS_ERROR: () => g,
        STATUS_INVALID_SYMBOL: () => l,
        STATUS_LOADING: () => r,
        STATUS_NO_BARS: () => p,
        STATUS_OFFLINE: () => o,
        STATUS_PULSE: () => d,
        STATUS_READY: () => seriesBarFunction_a,
        STATUS_REPLAY: () => m,
        STATUS_RESOLVING: () => n,
        STATUS_SNAPSHOT: () => c,
        STATUS_UNSUPPORTED_RESOLUTION: () => y,
        STYLE_AREA: () => x,
        STYLE_BARS: () => C,
        STYLE_BASELINE: () => D,
        STYLE_CANDLES: () => T,
        STYLE_COLUMNS: () => R,
        STYLE_HEIKEN_ASHI: () => k,
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
        STYLE_SHORT_NAMES: () => z,
        STYLE_STEPLINE: () => O,
        SYMBOL_STRING_DATA: () => U,
        Status: () => modes,
        chartStylesWithAttachedStudies: () => j,
        seriesLoadingStatuses: () => S,
        seriesReadyStatuses: () => v
      }),
      function(exports) {
        exports[exports.Offline = 0] = "Offline", exports[exports.Resolving = 1] = "Resolving", exports[exports.Loading = 2] = "Loading", exports[exports.Ready = 3] =
          "Ready", exports[exports.InvalidSymbol = 4] = "InvalidSymbol", exports[exports.Snapshot = 5] = "Snapshot", exports[exports.EOD = 6] = "EOD", exports[exports
            .Pulse = 7] = "Pulse", exports[exports.Delayed = 8] = "Delayed", exports[exports.DelayedSteaming = 9] = "DelayedSteaming", exports[exports
            .NoBars = 10] = "NoBars", exports[exports.Replay = 11] = "Replay", exports[exports.Error = 12] = "Error", exports[exports.CalculationError =
          13] = "CalculationError", exports[exports.UnsupportedResolution = 14] = "UnsupportedResolution"
      }(modes || (modes = {}));
    const o = 0,
      n = 1,
      r = 2,
      seriesBarFunction_a = 3,
      l = 4,
      c = 5,
      h = 6,
      d = 7,
      u = 8,
      _ = 9,
      p = 10,
      m = 11,
      g = 12,
      f = 13,
      y = 14,
      v = new Set([3, 6, 7, 8, 9, 11]),
      S = new Set([1, 2]),
      b = {
        [o]: "connecting",
        [n]: "loading",
        [r]: "loading",
        [seriesBarFunction_a]: "realtime",
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
    var w;
    ! function(exports) {
      exports[exports.Markers = 0] = "Markers", exports[exports.Stepline = 1] = "Stepline", exports[exports.Simple = 2] = "Simple"
    }(w || (w = {}));
    const C = 0,
      T = 1,
      P = 2,
      x = 3,
      M = 4,
      I = 5,
      A = 6,
      L = 7,
      k = 8,
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
      exports[exports.Bar = 0] = "Bar", exports[exports.Candle = 1] = "Candle", exports[exports.Line = 2] = "Line", exports[exports.Area = 3] = "Area", exports[exports.Renko = 4] =
        "Renko", exports[exports.Kagi = 5] = "Kagi", exports[exports.PnF = 6] = "PnF", exports[exports.LineBreak = 7] = "LineBreak", exports[exports.HeikinAshi = 8] =
        "HeikinAshi", exports[exports.HollowCandle = 9] = "HollowCandle",
        exports[exports.Baseline = 10] = "Baseline", exports[exports.Range = 11] = "Range", exports[exports.HiLo = 12] = "HiLo", exports[exports.Column = 13] =
        "Column", exports[exports.LineWithMarkers = 14] = "LineWithMarkers", exports[exports.Stepline = 15] = "Stepline", exports[exports.HLCArea = 16] =
        "HLCArea", exports[exports.VolFootprint = 17] = "VolFootprint", exports[exports.TPO = 18] = "TPO", exports[exports.VolCandle = 19] = "VolCandle", exports[
          exports.SVP = 20] = "SVP", exports[exports.HLCBars = 21] = "HLCBars"
    }(H || (H = {}));
    const z = {
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
      j = [17, 18, 20]