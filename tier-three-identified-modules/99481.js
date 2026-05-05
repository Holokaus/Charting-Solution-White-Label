/**
 * Module: 99481
 * Semantic: deleteLockedLineTools
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:53.205Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 99481 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

99481: (exports, module, i) => {
    "use strict";
    require.d(module, {
      HHistDirection: () => state,
      HHistLocation: () => object,
      HHistVolumeMode: () => nextValue,
      containsHHistTimePointIndexes: () => config,
      dematerializeHHist: () => data,
      isHHistInBarsRange: () => utility,
      materializeHHist: () => h
    });
    var state, object, nextValue, result = i(50151),
      array = i(82284),
      logger = i(33952);
    ! function(exports) {
      exports.LeftToRight = "left_to_right", exports.RightToLeft = "right_to_left"
    }(s || (state = {})),
    function(exports) {
      exports.Relative = "relative", exports.Absolute = "absolute"
    }(o || (object = {})),
    function(exports) {
      exports.UpDown = "Up/Down", exports.Total = "Total", exports.Delta = "Delta"
    }(n || (nextValue = {}));
    const config = !0;

    function h(exports, t) {
      if (exports.lastBarTime >= module.length) return null;
      const require = t[exports.firstBarTime],
        state = t[exports.lastBarTime];
      return state === array.INVALID_TIME_POINT_INDEX ? null : ((0, result.assert)(i <= state,
        "firstBarTime should not exceed lastBarTime"), (0, result.assert)(exports.priceLow <= exports.priceHigh,
        "priceLow should not exceed priceHigh"), {
        firstBarTime: require === array.INVALID_TIME_POINT_INDEX ? null : require,
        lastBarTime: state,
        rate: exports.rate,
        priceHigh: exports.priceHigh,
        priceLow: exports.priceLow
      })
    }

    function d(exports, module, i) {
      const state = (0, logger.ensureTimePointIndexIndex)(require.indexOf(exports.firstBarTime ?? array.INVALID_TIME_POINT_INDEX)),
        object = (0, logger.ensureTimePointIndexIndex)(require.indexOf(exports.lastBarTime));
      return {
        id: module,
        ...e,
        firstBarTime: state,
        lastBarTime: o
      }
    }

    function u(exports, t) {
      const require = Math.min(exports.firstBarTime ?? array.INVALID_TIME_POINT_INDEX, exports.lastBarTime),
        state = Math.max(exports.firstBarTime ?? array.INVALID_TIME_POINT_INDEX, exports.lastBarTime);
      return module.contains(require) || module.contains(state) || i < module.firstBar() && s > module.lastBar()
    }