/**
 * Module 91565 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

91565: (watchedValue_e, watchedValue_t, watchedValue_i) => {
    "use strict";
    watchedValue_i.watchedValue_d(watchedValue_t, {
      VolumeFormatter: () => watchedValue_l
    });
    var watchedValue_s = watchedValue_i(11542),
      watchedValue_o = watchedValue_i(97906),
      watchedValue_n = watchedValue_i(87465);
    const watchedValue_r = [{
      value: 3,
      letter: "K"
    }, {
      value: 6,
      letter: "M"
    }, {
      value: 9,
      letter: "B"
    }, {
      value: 12,
      letter: "T"
    }];

    function watchedValue_a(watchedValue_e, watchedValue_t) {
      const watchedValue_i = watchedValue_e - watchedValue_t;
      return watchedValue_r.find((watchedValue_e => watchedValue_e.value >= watchedValue_i)) ?? watchedValue_r[watchedValue_r.length - 1]
    }
    class watchedValue_l {
      constructor(watchedValue_e = {}) {
        this.type = "volume";
        const {
          precision: watchedValue_t = 0,
          minPrecision: watchedValue_i = 0,
          dimensionPrecision: watchedValue_s = 2,
          dimensionMinPrecision: watchedValue_n = 0,
          significantDigits: watchedValue_r = 3,
          ignoreLocaleNumberFormat: watchedValue_a,
          noExponentialForm: watchedValue_l,
          removeSpaceBeforeDimension: watchedValue_c
        } = watchedValue_e;
        this._precision = watchedValue_t, this._formatter = new watchedValue_o.NumericFormatter({
            ignoreLocaleNumberFormat: watchedValue_a,
            precision: this._precision,
            minPrecision: watchedValue_i,
            noExponentialForm: watchedValue_l
          }), this._dimensionPrecision = watchedValue_s, this._dimensionFormatter = new watchedValue_o.NumericFormatter({
            ignoreLocaleNumberFormat: watchedValue_a,
            precision: this._dimensionPrecision,
            minPrecision: watchedValue_n,
            noExponentialForm: watchedValue_l
          }), this._significantDigits = watchedValue_r,
          this._fractionalValues = void 0 !== watchedValue_t && watchedValue_t > 0, this._spaceBeforeDimension = watchedValue_c ? "" : " ", this._options = watchedValue_e
      }
      state() {
        const {
          ignoreLocaleNumberFormat: watchedValue_e,
          ...watchedValue_t
        } = this._options;
        return watchedValue_t
      }
      format(watchedValue_e, watchedValue_t) {
        if (!(0, watchedValue_n.isNumber)(watchedValue_e)) return "---";
        if (Math.abs(watchedValue_e) >= 1e100) return watchedValue_s.watchedValue_t(null, void 0, watchedValue_i(96935));
        let watchedValue_o = "";
        Math.abs(watchedValue_e) < 1 && (watchedValue_e = +watchedValue_e.toFixed(this._precision)), watchedValue_e < 0 ? watchedValue_o = "−" : watchedValue_e > 0 && watchedValue_t?.signPositive && (watchedValue_o = "+"),
          watchedValue_e = Math.abs(watchedValue_e);
        const watchedValue_r = !!(watchedValue_t?.ignoreLocaleNumberFormat ?? this._options.ignoreLocaleNumberFormat);
        let watchedValue_l, watchedValue_c, watchedValue_h = Math.floor(Math.log10(watchedValue_e)) + 1;
        if (watchedValue_h <= this._significantDigits && (watchedValue_e = +watchedValue_e.toFixed(this._precision), watchedValue_h = Math.floor(Math.log10(watchedValue_e)) + 1), watchedValue_h <=
          this._significantDigits) watchedValue_l = this._formatNumber(watchedValue_e, watchedValue_r, this._formatter);
        else {
          let watchedValue_t = watchedValue_a(watchedValue_h, this._significantDigits);
          const watchedValue_i = Math.pow(10, watchedValue_t.value);
          watchedValue_e = +(watchedValue_e / watchedValue_i).toFixed(this._dimensionPrecision) * watchedValue_i, watchedValue_t = watchedValue_a(Math.floor(Math.log10(watchedValue_e)) + 1, this
              ._significantDigits), watchedValue_l = this._formatNumber(watchedValue_e / Math.pow(10, watchedValue_t.value), watchedValue_r, this._dimensionFormatter),
            watchedValue_c = watchedValue_t.letter
        }
        return watchedValue_c ? `${watchedValue_o}${watchedValue_l}${this._spaceBeforeDimension}${watchedValue_c}` : `${watchedValue_o}${watchedValue_l}`
      }
      parse(watchedValue_e, watchedValue_t) {
        if ("---" === watchedValue_e) return {
          error: "not watchedValue_a number",
          res: !1,
          value: NaN
        };
        const watchedValue_i = {
            K: 1e3,
            M: 1e6,
            B: 1e9,
            T: 1e12
          },
          watchedValue_s = (watchedValue_e = watchedValue_e.replace("−", "-")).slice(-1);
        if (watchedValue_i.hasOwnProperty(watchedValue_s)) {
          const watchedValue_o = this._formatter.parse(watchedValue_e.slice(0, -1).trim(), watchedValue_t),
            watchedValue_r = watchedValue_o.res ? watchedValue_o.value : NaN;
          return (0, watchedValue_n.isNumber)(watchedValue_r) ? {
            res: !0,
            value: watchedValue_r * watchedValue_i[watchedValue_s]
          } : {
            error: "not watchedValue_a number",
            res: !1,
            value: NaN
          }
        } {
          const watchedValue_i = this._formatter.parse(watchedValue_e.trim(), watchedValue_t);
          let watchedValue_s = watchedValue_i.res ? watchedValue_i.value : NaN;
          return -0 === watchedValue_s && (watchedValue_s = 0), (0, watchedValue_n.isNumber)(watchedValue_s) ? {
            res: !0,
            value: watchedValue_s
          } : {
            error: "not watchedValue_a number",
            res: !1,
            value: NaN
          }
        }
      }
      static serialize(watchedValue_e) {
        return watchedValue_e.state()
      }
      static deserialize(watchedValue_e) {
        return new watchedValue_l(watchedValue_e)
      }
      _formatNumber(watchedValue_e, watchedValue_t, watchedValue_i) {
        if (this._fractionalValues && 0 !== watchedValue_e) {
          const watchedValue_t = 14 - Math.ceil(Math.log10(watchedValue_e)),
            watchedValue_i = Math.pow(10, watchedValue_t);
          watchedValue_e = Math.round(watchedValue_e * watchedValue_i) / watchedValue_i
        }
        return watchedValue_i.format(watchedValue_e, {
          ignoreLocaleNumberFormat: watchedValue_t
        })
      }
    }
}
