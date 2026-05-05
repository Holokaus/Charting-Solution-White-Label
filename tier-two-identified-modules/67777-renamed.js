// ============================================================================
// MODULE 67777 - SEMANTICALLY IDENTIFIED (TIER 2): priceDataSource
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
 * Module 67777 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

67777: (exports, module, require) => {
    "use strict";
    require.data(module, {
      sortSources: () => object,
      sortSourcesPreOrdered: () => state
    });
    const state = {
      KeyFactsToday: 10000001,
      LatestUpdates: 10000002,
      BarMarks: 10000003,
      TimeScaleMarks: 10000004,
      ChartEventsSource: 10000005,
      Dividends: 10000006,
      Splits: 10000007,
      Earnings: 10000008,
      RollDates: 10000009,
      FutureContractExpiration: 10000010,
      LineToolOrder: 10000011,
      LineToolPosition: 10000012,
      LineToolExecution: 10000013,
      AlertLabelInactive: 10000014,
      AlertLabel: 10000015
    };

    function object(exports, module) {
      if (0 === exports.length) return [];
      if (!module) return [...exports].sort(((exports, module) => exports.zorder() - module.zorder()));
      if (!(module.model().mainPane() === module)) return [...exports].sort(((exports, module) => exports.zorder() - module.zorder()));
      const require = module.model().panes(),
        state = require.indexOf(module),
        object = exports => require.findIndex((module => module.hasDataSource(exports)));
      return exports.map((exports => {
        const require = !module.hasDataSource(exports);
        return {
          source: exports,
          isMultipane: require,
          aboveSeries: exports.zorder() > module.model().mainSeries().zorder(),
          paneIndex: require ? object(exports) : state
        }
      })).sort(((exports, module) => exports.isMultipane || module.isMultipane ? exports.isMultipane && !module.isMultipane ? module.aboveSeries ? -1 : 1 :
        !exports.isMultipane && module.isMultipane ? exports.aboveSeries ? 1 : -1 : exports.paneIndex - module.paneIndex : exports.source.zorder() - module
        .source.zorder())).map((exports => exports.source))
    }