/**
 * Module 82095 - Auto-beautified from TradingView webpack bundle
 *
 * @module 82095
 * @date 2026-04-23
 * @size 3405 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - ChartStyle (internal: H)
 *   - OldLineStyleTypes (internal: w)
 *   - SERIES_STATUS_TEXT (internal: b)
 *   - STATUS_CALCULATION_ERROR (internal: f)
 *   - STATUS_DELAYED (internal: u)
 *   - STATUS_DELAYED_STREAMING (internal: _)
 *   - STATUS_EOD (internal: h)
 *   - STATUS_ERROR (internal: g)
 *   - STATUS_INVALID_SYMBOL (internal: l)
 *   - STATUS_LOADING (internal: r)
 *   - STATUS_NO_BARS (internal: p)
 *   - STATUS_OFFLINE (internal: o)
 *   - STATUS_PULSE (internal: d)
 *   - STATUS_READY (internal: a)
 *   - STATUS_REPLAY (internal: m)
 *   - STATUS_RESOLVING (internal: n)
 *   - STATUS_SNAPSHOT (internal: c)
 *   - STATUS_UNSUPPORTED_RESOLUTION (internal: y)
 *   - STYLE_AREA (internal: x)
 *   - STYLE_BARS (internal: C)
 *   - STYLE_BASELINE (internal: D)
 *   - STYLE_CANDLES (internal: T)
 *   - STYLE_COLUMNS (internal: R)
 *   - STYLE_HEIKEN_ASHI (internal: k)
 *   - STYLE_HILO (internal: V)
 *   - STYLE_HLC_AREA (internal: F)
 *   - STYLE_HLC_BARS (internal: W)
 *   - STYLE_HOLLOW_CANDLES (internal: E)
 *   - STYLE_KAGI (internal: I)
 *   - STYLE_LINE (internal: P)
 *   - STYLE_LINE_WITH_MARKERS (internal: N)
 *   - STYLE_PB (internal: L)
 *   - STYLE_PNF (internal: A)
 *   - STYLE_RANGE (internal: B)
 *   - STYLE_RENKO (internal: M)
 *   - STYLE_SHORT_NAMES (internal: z)
 *   - STYLE_STEPLINE (internal: O)
 *   - SYMBOL_STRING_DATA (internal: U)
 *   - Status (internal: s)
 *   - chartStylesWithAttachedStudies (internal: j)
 *   - seriesLoadingStatuses (internal: S)
 *   - seriesReadyStatuses (internal: v)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

82095: (e, t, i) => {
    "use strict";
    var s;
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
        STATUS_READY: () => a,
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
        Status: () => s,
        chartStylesWithAttachedStudies: () => j,
        seriesLoadingStatuses: () => S,
        seriesReadyStatuses: () => v
      }),
      function(e) {
        e[e.Offline = 0] = "Offline", e[e.Resolving = 1] = "Resolving", e[e.Loading = 2] = "Loading", e[e.Ready = 3] = "Ready", e[e.InvalidSymbol = 4] = "InvalidSymbol", e[e.Snapshot = 5] = "Snapshot", e[e.EOD = 6] = "EOD", e[e.Pulse = 7] = "Pulse", e[e.Delayed = 8] = "Delayed", e[e.DelayedSteaming = 9] = "DelayedSteaming", e[e.NoBars = 10] = "NoBars", e[e.Replay = 11] = "Replay", e[e.Error = 12] = "Error", e[e.CalculationError = 13] = "CalculationError", e[e.UnsupportedResolution = 14] = "UnsupportedResolution"
      }(s || (s = {}));
    const o = 0,
      n = 1,
      r = 2,
      a = 3,
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
    var w;
    ! function(e) {
      e[e.Markers = 0] = "Markers", e[e.Stepline = 1] = "Stepline", e[e.Simple = 2] = "Simple"
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
    ! function(e) {
      e[e.Bar = 0] = "Bar", e[e.Candle = 1] = "Candle", e[e.Line = 2] = "Line", e[e.Area = 3] = "Area", e[e.Renko = 4] = "Renko", e[e.Kagi = 5] = "Kagi", e[e.PnF = 6] = "PnF", e[e.LineBreak = 7] = "LineBreak", e[e.HeikinAshi = 8] = "HeikinAshi", e[e.HollowCandle = 9] = "HollowCandle",
        e[e.Baseline = 10] = "Baseline", e[e.Range = 11] = "Range", e[e.HiLo = 12] = "HiLo", e[e.Column = 13] = "Column", e[e.LineWithMarkers = 14] = "LineWithMarkers", e[e.Stepline = 15] = "Stepline", e[e.HLCArea = 16] = "HLCArea", e[e.VolFootprint = 17] = "VolFootprint", e[e.TPO = 18] = "TPO", e[e.VolCandle = 19] = "VolCandle", e[e.SVP = 20] = "SVP", e[e.HLCBars = 21] = "HLCBars"
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
