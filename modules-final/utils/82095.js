/**
 * Module 82095 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

82095: (seriesBarFunction_e, t, i) => {
    "use strict";
    var seriesBarFunction_s;
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
        Status: () => seriesBarFunction_s,
        chartStylesWithAttachedStudies: () => j,
        seriesLoadingStatuses: () => S,
        seriesReadyStatuses: () => v
      }),
      function(seriesBarFunction_e) {
        seriesBarFunction_e[seriesBarFunction_e.Offline = 0] = "Offline", seriesBarFunction_e[seriesBarFunction_e.Resolving = 1] = "Resolving", seriesBarFunction_e[seriesBarFunction_e.Loading = 2] = "Loading", seriesBarFunction_e[seriesBarFunction_e.Ready = 3] =
          "Ready", seriesBarFunction_e[seriesBarFunction_e.InvalidSymbol = 4] = "InvalidSymbol", seriesBarFunction_e[seriesBarFunction_e.Snapshot = 5] = "Snapshot", seriesBarFunction_e[seriesBarFunction_e.EOD = 6] = "EOD", seriesBarFunction_e[seriesBarFunction_e
            .Pulse = 7] = "Pulse", seriesBarFunction_e[seriesBarFunction_e.Delayed = 8] = "Delayed", seriesBarFunction_e[seriesBarFunction_e.DelayedSteaming = 9] = "DelayedSteaming", seriesBarFunction_e[seriesBarFunction_e
            .NoBars = 10] = "NoBars", seriesBarFunction_e[seriesBarFunction_e.Replay = 11] = "Replay", seriesBarFunction_e[seriesBarFunction_e.Error = 12] = "Error", seriesBarFunction_e[seriesBarFunction_e.CalculationError =
          13] = "CalculationError", seriesBarFunction_e[seriesBarFunction_e.UnsupportedResolution = 14] = "UnsupportedResolution"
      }(seriesBarFunction_s || (seriesBarFunction_s = {}));
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
    ! function(seriesBarFunction_e) {
      seriesBarFunction_e[seriesBarFunction_e.Markers = 0] = "Markers", seriesBarFunction_e[seriesBarFunction_e.Stepline = 1] = "Stepline", seriesBarFunction_e[seriesBarFunction_e.Simple = 2] = "Simple"
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
    ! function(seriesBarFunction_e) {
      seriesBarFunction_e[seriesBarFunction_e.Bar = 0] = "Bar", seriesBarFunction_e[seriesBarFunction_e.Candle = 1] = "Candle", seriesBarFunction_e[seriesBarFunction_e.Line = 2] = "Line", seriesBarFunction_e[seriesBarFunction_e.Area = 3] = "Area", seriesBarFunction_e[seriesBarFunction_e.Renko = 4] =
        "Renko", seriesBarFunction_e[seriesBarFunction_e.Kagi = 5] = "Kagi", seriesBarFunction_e[seriesBarFunction_e.PnF = 6] = "PnF", seriesBarFunction_e[seriesBarFunction_e.LineBreak = 7] = "LineBreak", seriesBarFunction_e[seriesBarFunction_e.HeikinAshi = 8] =
        "HeikinAshi", seriesBarFunction_e[seriesBarFunction_e.HollowCandle = 9] = "HollowCandle",
        seriesBarFunction_e[seriesBarFunction_e.Baseline = 10] = "Baseline", seriesBarFunction_e[seriesBarFunction_e.Range = 11] = "Range", seriesBarFunction_e[seriesBarFunction_e.HiLo = 12] = "HiLo", seriesBarFunction_e[seriesBarFunction_e.Column = 13] =
        "Column", seriesBarFunction_e[seriesBarFunction_e.LineWithMarkers = 14] = "LineWithMarkers", seriesBarFunction_e[seriesBarFunction_e.Stepline = 15] = "Stepline", seriesBarFunction_e[seriesBarFunction_e.HLCArea = 16] =
        "HLCArea", seriesBarFunction_e[seriesBarFunction_e.VolFootprint = 17] = "VolFootprint", seriesBarFunction_e[seriesBarFunction_e.TPO = 18] = "TPO", seriesBarFunction_e[seriesBarFunction_e.VolCandle = 19] = "VolCandle", seriesBarFunction_e[
          seriesBarFunction_e.SVP = 20] = "SVP", seriesBarFunction_e[seriesBarFunction_e.HLCBars = 21] = "HLCBars"
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
}
