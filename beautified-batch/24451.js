/**
 * Module 24451 - Auto-beautified from TradingView webpack bundle
 *
 * @module 24451
 * @date 2026-04-23
 * @size 524 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 70680
 *
 * Exports:
 *   - spreadStudyItem (internal: n)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

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
