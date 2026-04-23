/**
 * Module 55014 - Auto-beautified from TradingView webpack bundle
 *
 * @module 55014
 * @date 2026-04-23
 * @size 1993 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 8580, 11542, 12086, 25059, 35601, 39903, 41446, 43716, 45328, 56815, 60630, 66751, 69156, 72819, 76989, 77401, 81030, 81657, 83111, 83524, 94966, 99274
 *
 * Exports:
 *   - formatStudyError (internal: n)
 *   - triesTranslateError (internal: o)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

55014: (e, t, i) => {
    "use strict";
    i.d(t, {
      formatStudyError: () => n,
      triesTranslateError: () => o
    });
    var s = i(11542);

    function o(e) {
      return r.get(e) || e
    }

    function n(e) {
      return e.format({
        boldHighlightStart: "<b>",
        boldHighlightEnd: "</b>"
      })
    }
    const r = new Map([["You cannot see this pivot timeframe on this resolution", s.t(null, void 0, i(25059))], ["The data vendor doesn't provide volume data for this symbol.", s.t(null, void 0, i(81657))], ['Histogram is too large, please increase "Row Size" input.', s.t(null, void 0, i(72819))], ["Histogram is too large, please reduce 'Row Size' input.", s.t(null, void 0, i(66751))], ['Histogram is too large, please increase "Ticks Per Row" input.', s.t(null, void 0, i(94966))], ["This script is invite-only. To request access, please contact its author.", s.t(null, void 0, i(76989))], ["Volume Profile indicator available only on our upgraded plans.", s.t(null, void 0, i(39903))], ["VOLUME_BIST_MIXED", s.t(null, void 0, i(69156))], ["Runtime error", s.t(null, void 0, i(60630))], ["Access error", s.t(null, void 0, i(77401))], ["User-defined error", s.t(null, void 0, i(8580))], ["Compilation error", s.t(null, void 0, i(12086))], ["Metric error", s.t(null, void 0, i(83111))], ["There's no data for your selected period and chart timeframe.", s.t(null, void 0, i(43716))], ["The request took too long to process. Ensure you have a stable internet connection. If the issue persists, try decreasing the length of the requested time interval.", s.t(null, void 0, i(99274))], ["Unexpected error in Deep Backtesting mode. Contact support for more information.", s.t(null, void 0, i(56815))], ["check study unexpected error", s.t(null, void 0, i(83524))], ["To calculate the VWAP indicator, more data is needed. Zoom out or scroll left to load more historical data.", s.t(null, void 0, i(41446))], ["VWAP is waiting for more data", s.t(null, void 0, i(81030))], ["The Bar Magnifier feature is only available to Premium users", s.t(null, void 0, i(45328))], ["The bar magnifier is only available to the Premium plan or higher.", s.t(null, void 0, i(35601))]])
