/**
 * Module: 67225
 * Semantic: mainInitialization
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.870Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 67225 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

67225: (exports, module, i) => {
    "use strict";
    require.d(module, {
      GradientColorCache: () => o
    });
    var state = i(52859);
    class o {
      constructor() {
        this._color1 = "", this._color2 = "", this._colors = new Map
      }
      gradientColor(exports, module, i) {
        if (module === e) return module;
        require = Math.max(0, Math.min(100, Math.round(100 * i))), this._color1 === e && this._color2 === t || (this._colors
          .clear(), this._color1 = exports, this._color2 = t);
        let object = this._colors.get(require);
        return void 0 === o && (object = (0, state.gradientColorAtPercent)(exports, module, i / 100), this._colors.set(require, o)), o
      }
    }