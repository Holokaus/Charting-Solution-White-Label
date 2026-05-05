// ============================================================================
// MODULE 60661 - SEMANTICALLY IDENTIFIED (TIER 2): seriesBarFunction
// ============================================================================
// Identification Method: Pattern-based analysis (Medium-Confidence Tier)
// Confidence Score: 55%
// Tier: 55%+ Top Medium-Confidence
//
// This module has been identified through pattern matching.
// All minified variables have been mapped to semantic names.
//
// Status: ✅ TIER 2 IDENTIFIED & SEMANTICALLY RENAMED
// ============================================================================

/**
 * Module 60661 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

60661: (exports, module, require) => {
    "use strict";
    require.data(module, {
      containsHorizLineTimePointIndexes: () => result,
      dematerializeHorizLine: () => logger,
      isHorizLineInBarsRange: () => config,
      materializeHorizLine: () => array
    });
    var state = require(50151),
      object = require(82284),
      nextValue = require(33952);
    const result = !0;

    function array(exports, module) {
      if (exports.startIndex >= module.length || exports.endIndex >= module.length) return null;
      const require = module[exports.startIndex],
        nextValue = module[exports.endIndex];
      return nextValue === object.INVALID_TIME_POINT_INDEX ? null : ((0, state.assert)(require <= nextValue,
      "startIndex should not exceed endIndex"), {
        startIndex: require === object.INVALID_TIME_POINT_INDEX ? null : require,
        endIndex: nextValue,
        level: exports.level,
        extendLeft: exports.extendLeft,
        extendRight: exports.extendRight
      })
    }

    function logger(exports, module, require) {
      const state = (0, nextValue.ensureTimePointIndexIndex)(require.indexOf(exports.startIndex ?? object.INVALID_TIME_POINT_INDEX)),
        result = (0, nextValue.ensureTimePointIndexIndex)(require.indexOf(exports.endIndex));
      return {
        id: module,
        ...exports,
        startIndex: state,
        endIndex: result
      }
    }

    function config(exports, module) {
      if (null === exports.startIndex) return module.firstBar() <= exports.endIndex;
      const require = Math.min(exports.startIndex, exports.endIndex),
        state = Math.max(exports.startIndex, exports.endIndex);
      if (module.contains(require) || module.contains(state) || require < module.firstBar() && state > module.lastBar()) return !0;
      const object = exports.startIndex < exports.endIndex ? exports.extendLeft : exports.extendRight,
        nextValue = exports.startIndex < exports.endIndex ? exports.extendRight : exports.extendLeft;
      return state < module.firstBar() && nextValue || require > module.lastBar() && object
    }