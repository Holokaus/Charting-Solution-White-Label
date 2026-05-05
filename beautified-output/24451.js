/**
 * Module 24451 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

24451: (e, t, i) => {
    "use strict";
    i.d(t, {
      spreadStudyItem: () => n
    });
    var s = i(70680);
    class o extends s.SpreadRatioBase {
      _doCalculation(e, t, i, s) {
        return e * t - i * s
      }
    }
    const n = {
      name: "Spread",
      metainfo: {
        _metainfoVersion: 15,
        defaults: s.spreadRatioDefaults,
        plots: s.spreadRatioPlots,
        styles: s.spreadRatioStyles,
        palettes: s.spreadRatioPalettes,
        filledAreas: s.spreadRatioFilledAreas,
        description: "Spread",
        shortDescription: "Spread",
        is_price_study: !1,
        inputs: s.spreadRatioInputs,
        id: "Spread@tv-basicstudies-1",
        format: {
          type: "price",
          precision: 2
        }
      },
      constructor: o
    }