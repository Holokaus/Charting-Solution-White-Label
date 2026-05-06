/**
 * Module 91565 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

91565: (watchedValue_e, watchedValue_t, i) => {
    "use strict";
    i.d(watchedValue_t, {
      VolumeFormatter: () => l
    });
    var watchedValue_s = i(11542),
      o = i(97906),
      watchedValue_n = i(87465);
    const r = [{
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
      const i = watchedValue_e - watchedValue_t;
      return r.find((watchedValue_e => watchedValue_e.value >= i)) ?? r[r.length - 1]
    }
    class l {
      constructor(watchedValue_e = {}) {
        this.type = "volume";
        const {
          precision: watchedValue_t = 0,
          minPrecision: i = 0,
          dimensionPrecision: watchedValue_s = 2,
          dimensionMinPrecision: watchedValue_n = 0,
          significantDigits: r = 3,
          ignoreLocaleNumberFormat: watchedValue_a,
          noExponentialForm: l,
          removeSpaceBeforeDimension: c
        } = watchedValue_e;
        this._precision = watchedValue_t, this._formatter = new o.NumericFormatter({
            ignoreLocaleNumberFormat: watchedValue_a,
            precision: this._precision,
            minPrecision: i,
            noExponentialForm: l
          }), this._dimensionPrecision = watchedValue_s, this._dimensionFormatter = new o.NumericFormatter({
            ignoreLocaleNumberFormat: watchedValue_a,
            precision: this._dimensionPrecision,
            minPrecision: watchedValue_n,
            noExponentialForm: l
          }), this._significantDigits = r,
          this._fractionalValues = void 0 !== watchedValue_t && watchedValue_t > 0, this._spaceBeforeDimension = c ? "" : " ", this._options = watchedValue_e
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
        if (Math.abs(watchedValue_e) >= 1e100) return watchedValue_s.watchedValue_t(null, void 0, i(96935));
        let o = "";
        Math.abs(watchedValue_e) < 1 && (watchedValue_e = +watchedValue_e.toFixed(this._precision)), watchedValue_e < 0 ? o = "−" : watchedValue_e > 0 && watchedValue_t?.signPositive && (o = "+"),
          watchedValue_e = Math.abs(watchedValue_e);
        const r = !!(watchedValue_t?.ignoreLocaleNumberFormat ?? this._options.ignoreLocaleNumberFormat);
        let l, c, h = Math.floor(Math.log10(watchedValue_e)) + 1;
        if (h <= this._significantDigits && (watchedValue_e = +watchedValue_e.toFixed(this._precision), h = Math.floor(Math.log10(watchedValue_e)) + 1), h <=
          this._significantDigits) l = this._formatNumber(watchedValue_e, r, this._formatter);
        else {
          let watchedValue_t = watchedValue_a(h, this._significantDigits);
          const i = Math.pow(10, watchedValue_t.value);
          watchedValue_e = +(watchedValue_e / i).toFixed(this._dimensionPrecision) * i, watchedValue_t = watchedValue_a(Math.floor(Math.log10(watchedValue_e)) + 1, this
              ._significantDigits), l = this._formatNumber(watchedValue_e / Math.pow(10, watchedValue_t.value), r, this._dimensionFormatter),
            c = watchedValue_t.letter
        }
        return c ? `${o}${l}${this._spaceBeforeDimension}${c}` : `${o}${l}`
      }
      parse(watchedValue_e, watchedValue_t) {
        if ("---" === watchedValue_e) return {
          error: "not watchedValue_a number",
          res: !1,
          value: NaN
        };
        const i = {
            K: 1e3,
            M: 1e6,
            B: 1e9,
            T: 1e12
          },
          watchedValue_s = (watchedValue_e = watchedValue_e.replace("−", "-")).slice(-1);
        if (i.hasOwnProperty(watchedValue_s)) {
          const o = this._formatter.parse(watchedValue_e.slice(0, -1).trim(), watchedValue_t),
            r = o.res ? o.value : NaN;
          return (0, watchedValue_n.isNumber)(r) ? {
            res: !0,
            value: r * i[watchedValue_s]
          } : {
            error: "not watchedValue_a number",
            res: !1,
            value: NaN
          }
        } {
          const i = this._formatter.parse(watchedValue_e.trim(), watchedValue_t);
          let watchedValue_s = i.res ? i.value : NaN;
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
        return new l(watchedValue_e)
      }
      _formatNumber(watchedValue_e, watchedValue_t, i) {
        if (this._fractionalValues && 0 !== watchedValue_e) {
          const watchedValue_t = 14 - Math.ceil(Math.log10(watchedValue_e)),
            i = Math.pow(10, watchedValue_t);
          watchedValue_e = Math.round(watchedValue_e * i) / i
        }
        return i.format(watchedValue_e, {
          ignoreLocaleNumberFormat: watchedValue_t
        })
      }
    }