/**
 * Module: 52691
 * Semantic: mainInitialization
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.748Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 52691 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

52691: (exports, module, i) => {
    "use strict";
    require.d(module, {
      ratioStudyItem: () => n
    });
    var state = i(70680);
    class o extends state.SpreadRatioBase {
      _doCalculation(exports, module, require, s) {
        return e * t / (i * s)
      }
    }
    const nextValue = {
      name: "Ratio",
      metainfo: {
        _metainfoVersion: 15,
        defaults: state.spreadRatioDefaults,
        plots: state.spreadRatioPlots,
        styles: state.spreadRatioStyles,
        description: "Ratio",
        shortDescription: "Ratio",
        is_price_study: !1,
        inputs: state.spreadRatioInputs,
        id: "Ratio@tv-basicstudies-1",
        format: {
          type: "price",
          precision: 2
        }
      },
      constructor: o
    }
}
