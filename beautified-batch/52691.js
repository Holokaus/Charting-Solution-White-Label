/**
 * Module 52691 - Auto-beautified from TradingView webpack bundle
 *
 * @module 52691
 * @date 2026-04-23
 * @size 453 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 70680
 *
 * Exports:
 *   - ratioStudyItem (internal: n)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  ratioStudyItem: () => n
});
var s = i(70680);
class o extends s.SpreadRatioBase {
  _doCalculation(e, t, i, s) {
    return e * t / (i * s)
  }
}
const n = {
    name: "Ratio",
    metainfo: {
      _metainfoVersion: 15,
      defaults: s.spreadRatioDefaults,
      plots: s.spreadRatioPlots,
      styles: s.spreadRatioStyles,
      description: "Ratio",
      shortDescription: "Ratio",
      is_price_study: !1,
      inputs: s.spreadRatioInputs,
      id: "Ratio@tv-basicstudies-1",
      format: {
        type: "price",
        precision: 2
      }
    },
    constructor: o
