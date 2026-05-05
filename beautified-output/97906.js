/**
 * Module 97906 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

97906: (e, t, i) => {
    "use strict";
    i.d(t, {
      NumericFormatter: () => n
    });
    var s = i(91799),
      o = i(26010);
    class n {
      constructor(e = {}) {
        this._options = e
      }
      format(e, t = {}) {
        if (!Number.isFinite(e)) return String(e);
        const {
          ignoreLocaleNumberFormat: i = this._options.ignoreLocaleNumberFormat,
          noExponentialForm: r = this._options.noExponentialForm
        } = t, {
          minPrecision: a,
          precision: l
        } = this._options, c = (0, o.getNumberFormat)(i);
        return void 0 === l ? n._formatNoEImpl(e, c, l, a) : (0, s.formatNumber)(e, c, l, r, a)
      }
      parse(e, t) {
        const {
          ignoreLocaleNumberFormat: i,
          precision: n
        } = this._options, r = (0, o.getNumberFormat)(i || t?.ignoreLocaleNumberFormat);
        let a = (0, s.parseNumber)(e, r);
        return Number.isFinite(a) ? (n && (a = +a.toFixed(n)), {
          res: !0,
          value: a
        }) : {
          res: !1
        }
      }
      static formatNoE(e, t) {
        return this._formatNoEImpl(e, t)
      }
      static _formatNoEImpl(e, t, i, o) {
        return Number.isFinite(e) ? (t = t ?? {
          groupingSeparator: "",
          decimalSign: "."
        }, (0, s.formatNumber)(e, t, i, !0, o)) : String(e)
      }
    }