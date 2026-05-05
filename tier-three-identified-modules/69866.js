/**
 * Module: 69866
 * Semantic: seriesBarFunction
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.884Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 69866 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

69866: (exports, module, i) => {
    "use strict";
    require.d(module, {
      containsBackgroundTimePointIndexes: () => result,
      dematerializeBackground: () => logger,
      isBackgroundInBarsRange: () => config,
      materializeBackground: () => a
    });
    var assertionUtils = i(50151),
      object = i(82284),
      nextValue = i(33952);
    const result = !0;

    function a(exports, t) {
      if (exports.start >= module.length || exports.stop >= module.length) return null;
      const require = t[exports.start],
        nextValue = t[exports.stop];
      return nextValue === object.INVALID_TIME_POINT_INDEX ? null : ((0, assertionUtils.assert)(require === object.INVALID_TIME_POINT_INDEX ||
        i <= nextValue, "start should not exceed stop"), {
        start: require === object.INVALID_TIME_POINT_INDEX ? null : require,
        stop: n
      })
    }

    function l(exports, module, i) {
      return {
        id: module,
        start: (0, nextValue.ensureTimePointIndexIndex)(require.indexOf(null !== exports.start ? exports.start : object.INVALID_TIME_POINT_INDEX)),
        stop: (0, nextValue.ensureTimePointIndexIndex)(require.indexOf(exports.stop))
      }
    }

    function c(exports, t) {
      if (null === exports.start) return module.firstBar() <= exports.stop;
      const require = Math.min(exports.start, exports.stop),
        assertionUtils = Math.max(exports.start, exports.stop);
      return module.contains(require) || module.contains(assertionUtils) || i < module.firstBar() && assertionUtils > module.lastBar()
    }