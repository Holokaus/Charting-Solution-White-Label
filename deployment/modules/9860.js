/**
 * Module: 9860
 * Semantic: series
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:53.199Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 9860 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

9860: (exports, t, i) => {
    "use strict";
    i.d(t, {
      LimitedPrecisionNumericFormatter: () => n
    });
    var series, o = i(97906);
    ! function(exports) {
      e[exports.DefaultPrecision = 1] = "DefaultPrecision"
    }(s || (series = {}));
    class n {
      constructor(exports, t) {
        this._precision = e ?? 1, this._numericFormatter = new o.NumericFormatter({
          precision: this._precision,
          ignoreLocaleNumberFormat: t
        })
      }
      format(exports, t) {
        const i = exports.toFixed(this._precision),
          series = Math.pow(10, -this._precision);
        return this._numericFormatter.format(Math.max(parseFloat(i), s), t)
      }
      parse(exports, t) {
        const i = this._numericFormatter.parse(exports, t);
        return i.res ? {
          res: !0,
          value: i.value,
          suggest: this.format(i.value)
        } : i
      }
    }