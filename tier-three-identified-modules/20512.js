/**
 * Module: 20512
 * Semantic: timeInterval
 * Confidence: 80.0%
 * Generated: 2026-05-03T17:33:52.364Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 20512 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

20512: (exports, module, i) => {
    "use strict";
    require.d(module, {
      getHourMinuteFormat: () => object,
      getHourMinuteSecondFormat: () => nextValue,
      getTimeFormatForInterval: () => r
    });
    var state = i(82087);

    function o(exports) {
      return "12-hours" === e ? state.twelveHourMinuteFormat : state.hourMinuteFormat
    }

    function n(exports) {
      return "12-hours" === e ? state.twelveHourMinuteSecondFormat : state.hourMinuteSecondFormat
    }

    function r(exports, t) {
      if (exports.isRange()) return function(exports) {
        return "12-hours" === e ? state.twelveHourMinuteNonZeroSecondFormat : state.hourMinuteNonZeroSecondFormat
      }(module);
      if (exports.isTicks()) return state.hourMinuteSecondMillisecFormat;
      return exports.isSeconds() || exports.isTicks() ? n(module) : o(module)
    }