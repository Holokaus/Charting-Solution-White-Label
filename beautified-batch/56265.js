/**
 * Module 56265 - Auto-beautified from TradingView webpack bundle
 *
 * @module 56265
 * @date 2026-04-23
 * @size 1403 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 38888, 67563, 91565, 95322, 97906
 *
 * Exports:
 *   - getNumericFormatter (internal: c)
 *   - getPercentageFormatter (internal: h)
 *   - getPipFormatter (internal: _)
 *   - getVolumeFormatter (internal: d)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  getNumericFormatter: () => c,
  getPercentageFormatter: () => h,
  getPipFormatter: () => _,
  getVolumeFormatter: () => d
});
var s = i(97906),
  o = i(38888);
var n = i(67563);
class r extends n.PriceFormatter {
  constructor(e) {
    const {
      priceScale: t,
      minMove: i = 1,
      type: s,
      typespecs: o,
      minMove2: n,
      ignoreLocaleNumberFormat: r
    } = e;
    ("forex" === s || function(e, t) {
      return Boolean(t?.includes("cfd")) && ["commodity", "futures", "index", "stock", "fund"].includes(e)
    }(s, o)) && n ? (super({
      priceScale: n,
      ignoreLocaleNumberFormat: r
    }), this._isForex = !0) : (super({
      priceScale: 1,
      ignoreLocaleNumberFormat: r
    }), this._isForex = !1), this._pipPriceScale = t, this._pipMinMove = i, this._pipMinMove2 = n
  }
  format(e, t = {}) {
    const {
      signPositive: i,
      tailSize: s,
      ignoreLocaleNumberFormat: o,
      noExponentialForm: n
    } = t;
    let r = this._isForex ? this._pipMinMove2 : this._pipMinMove;
    return void 0 === r && (r = NaN), super.format(e * this._pipPriceScale / r, {
      signPositive: i,
      tailSize: s,
      ignoreLocaleNumberFormat: o,
      noExponentialForm: n
    })
  }
}
var a = i(91565),
  l = i(95322);
const c = (0, l.numDependencyFormatter)((e => new s.NumericFormatter({
    precision: e
  }))),
  h = (0, l.numDependencyFormatter)((e => new o.PercentageFormatter({
    priceScale: Math.pow(10, e ?? 2),
    minMove: 1
  }))),
  d = (0, l.numDependencyFormatter)((e => new a.VolumeFormatter({
    precision: e
  }))),
  u = new WeakMap;

function _(e) {
  let t = u.get(e);
  return t || (t = new r({
    priceScale: e.pricescale,
    minMove: e.minmov,
    minMove2: e.minmove2,
    type: e.type,
    typespecs: e.typespecs
  }), u.set(e, t)), t
