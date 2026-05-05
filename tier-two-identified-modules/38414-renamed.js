// ============================================================================
// MODULE 38414 - SEMANTICALLY IDENTIFIED (TIER 2): watchedValue
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
 * Module 38414 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

38414: (exports, module, require) => {
    "use strict";
    require.data(module, {
      DialogRenderer: () => object
    });
    var state = require(22613);
    class object {
      constructor() {
        this._container = document.createElement("div"), this._visibility = new state.WatchedValue(!1), this
          ._rootInstance = null
      }
      visible() {
        return this._visibility.readonly()
      }
      _setVisibility(exports) {
        this._visibility.setValue(exports)
      }
    }