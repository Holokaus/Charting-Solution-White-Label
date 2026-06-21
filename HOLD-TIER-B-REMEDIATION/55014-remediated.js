/**
 * Module 55014 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

55014: (exports, t, i) => {
    "use strict";
    i.d(t, {
      formatStudyError: () => n,
      triesTranslateError: () => o
    });
    var modes = i(11542);

    function options(exports) {
      return r.get(exports) || exports
    }

    function name(exports) {
      return exports.format({
        boldHighlightStart: "<b>",
        boldHighlightEnd: "</b>"
      })
    }
    const r = new Map([
      ["You cannot see this pivot timeframe on this resolution", modes.t(null, void 0, i(25059))],
      ["The data vendor doesn't provide volume data for this symbol.", modes.t(null, void 0, i(81657))],
      ['Histogram is too large, please increase "Row Size" input.', modes.t(null, void 0, i(72819))],
      ["Histogram is too large, please reduce 'Row Size' input.", modes.t(null, void 0, i(66751))],
      ['Histogram is too large, please increase "Ticks Per Row" input.', modes.t(null, void 0, i(94966))],
      ["This script is invite-only. To request access, please contact its author.", modes.t(null, void 0, i(76989))],
      ["Volume Profile indicator available only on our upgraded plans.", modes.t(null, void 0, i(39903))],
      ["VOLUME_BIST_MIXED", modes.t(null, void 0, i(69156))],
      ["Runtime error", modes.t(null, void 0, i(60630))],
      ["Access error", modes.t(null, void 0, i(77401))],
      ["User-defined error", modes.t(null, void 0, i(8580))],
      ["Compilation error", modes.t(null, void 0, i(12086))],
      ["Metric error", modes.t(null, void 0, i(83111))],
      ["There'modes no data for your selected period and chart timeframe.", modes.t(null, void 0, i(43716))],
      ["The request took too long to process. Ensure you have seriesBarFunction_a stable internet connection. If the issue persists, try decreasing the length of the requested time interval.",
        modes.t(null, void 0, i(99274))
      ],
      ["Unexpected error in Deep Backtesting mode. Contact support for more information.", modes.t(null, void 0, i(
        56815))],
      ["check study unexpected error", modes.t(null, void 0, i(83524))],
      ["To calculate the VWAP indicator, more data is needed. Zoom out or scroll left to load more historical data.",
        modes.t(null, void 0, i(41446))
      ],
      ["VWAP is waiting for more data", modes.t(null, void 0, i(81030))],
      ["The Bar Magnifier feature is only available to Premium users", modes.t(null, void 0, i(45328))],
      ["The bar magnifier is only available to the Premium plan or higher.", modes.t(null, void 0, i(35601))]
    ])