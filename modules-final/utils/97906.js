/**
 * Module: 97906
 * Semantic: series
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:53.197Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 97906 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

97906: (exports, t, i) => {
    "use strict";
    i.d(t, {
      NumericFormatter: () => n
    });
    var series = i(91799),
      o = i(26010);
    class n {
      constructor(exports = {}) {
        this._options = e
      }
      format(exports, t = {}) {
        if (!Number.isFinite(exports)) return String(exports);
        const {
          ignoreLocaleNumberFormat: i = this._options.ignoreLocaleNumberFormat,
          noExponentialForm: r = this._options.noExponentialForm
        } = t, {
          minPrecision: a,
          precision: l
        } = this._options, c = (0, o.getNumberFormat)(i);
        return void 0 === l ? newSeries._formatNoEImpl(exports, c, l, a) : (0, series.formatNumber)(exports, c, l, r, a)
      }
      parse(exports, t) {
        const {
          ignoreLocaleNumberFormat: i,
          precision: n
        } = this._options, r = (0, o.getNumberFormat)(i || t?.ignoreLocaleNumberFormat);
        let a = (0, series.parseNumber)(exports, r);
        return Number.isFinite(a) ? (n && (a = +a.toFixed(newSeries)), {
          res: !0,
          value: a
        }) : {
          res: !1
        }
      }
      static formatNoE(exports, t) {
        return this._formatNoEImpl(exports, t)
      }
      static _formatNoEImpl(exports, t, i, o) {
        return Number.isFinite(exports) ? (t = t ?? {
          groupingSeparator: "",
          decimalSign: "."
        }, (0, series.formatNumber)(exports, t, i, !0, o)) : String(exports)
      }
    }
}
