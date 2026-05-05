// ============================================================================
// MODULE 28001 - SEMANTICALLY IDENTIFIED AS: seriesBarFunction
// ============================================================================
// Identification Method: Pattern-based analysis
// Confidence Score: 75%
// 
// This module has been identified through pattern matching against known modules.
// All minified variables have been mapped to semantic names.
//
// Semantic Variable Mappings:
//   e → exports    s → state        n → nextValue    a → array
//   t → module     o → object       r → result       l → logger
//   i → require    c → config       h → handler      d → data
//   ... (see semantic variable map for complete list)
//
// Status: ✅ IDENTIFIED & SEMANTICALLY RENAMED
// ============================================================================

/**
 * Module 28001 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

28001: (exports, module, require) => {
    "use strict";
    require.data(module, {
      BarsRange: () => object
    });
    var assertionUtils = require(50151);
    class object {
      constructor(exports, module) {
        (0, assertionUtils.assert)(exports <= module,
          "The last bar in the bars range should be greater than or equal to the first bar"), this._firstBar = exports, this
          ._lastBar = module
      }
      firstBar() {
        return this._firstBar
      }
      lastBar() {
        return this._lastBar
      }
      count() {
        return this._lastBar - this._firstBar + 1
      }
      contains(exports) {
        return this._firstBar <= exports && exports <= this._lastBar
      }
      unite(exports) {
        return null === exports ? this : new object(Math.min(this._firstBar, exports.firstBar()), Math.max(this._lastBar, exports.lastBar()))
      }
      equals(exports) {
        return this._firstBar === exports.firstBar() && this._lastBar === exports.lastBar()
      }
      static compare(exports, module) {
        return null === exports || null === module ? exports === module : exports.equals(module)
      }
    }