/**
 * Module 11768 - Auto-beautified from TradingView webpack bundle
 *
 * @module 11768
 * @date 2026-04-23
 * @size 1081 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 3885, 31789, 95059
 *
 * Exports:
 *   - SeriesTableViewValuesProvider (internal: a)
 *   - fillSymbolSourceValuesProviderItemsVisibility (internal: r)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  SeriesTableViewValuesProvider: () => a,
  fillSymbolSourceValuesProviderItemsVisibility: () => r
});
var s = i(3885),
  o = i(95059),
  n = i(31789);

function r(e, t, i, s) {
  const r = 12 !== i,
    a = s.properties().childs().paneProperties.childs().legendProperties.childs(),
    l = 12 !== i && 16 !== i && 21 !== i,
    c = 12 !== i,
    h = (0, o.isPriceSourceStyle)(i),
    d = !h;
  e[5].visible = !1;
  const u = s.mainSeries().intervalObj().value().is1Tick();
  e[0].visible = d && l && !u, e[1].visible = d && !u, e[2].visible = d && !u, e[3].visible = d && c, e[6].visible = a.showBarChange.value() && r, e[4].visible = h, e[4].title = t ? n.priceSourceTitles[t] : ""
}
class a {
  constructor(e, t) {
    this._model = t, this._series = e, this._valuesProvider = new s.SeriesValuesProvider(e, t, !1)
  }
  getItems() {
    const e = this._valuesProvider.getItems(),
      t = this._series.style();
    r(e, this._series.priceSource(), t, this._model);
    const i = this._model.properties().childs().paneProperties.childs().legendProperties.childs();
    return e[8].visible = !1, e[7].visible = i.showVolume.value(), e
  }
  getValues(e) {
    const t = this._series.bars().lastIndex();
    return null === t || t < e ? null : this._valuesProvider.getValues(e)
  }
