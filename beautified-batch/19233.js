/**
 * Module 19233 - Auto-beautified from TradingView webpack bundle
 *
 * @module 19233
 * @date 2026-04-23
 * @size 885 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - SeriesTimeRangeVolumeCalculator (internal: s)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  SeriesTimeRangeVolumeCalculator: () => s
});
class s {
  constructor(e) {
    this._value = null, this._series = e, this._series.dataEvents().dataUpdated().subscribe(this, this._onSeriesUpdated)
  }
  destroy() {
    this._series.dataEvents().dataUpdated().unsubscribeAll(this)
  }
  volume(e, t) {
    if (null !== this._value && this._value.from === e && this._value.to === t) return this._value.value;
    let i = 0;
    const s = this._series.data().bars(),
      o = s.firstIndex(),
      n = s.lastIndex();
    if (null !== o && e < o && t < o || null !== n && e > n && t > n) i = NaN;
    else {
      const s = this._series.data().bars().rangeIterator(Math.min(e, t), Math.max(e, t));
      for (const e of s) {
        const t = e.value[5];
        if (void 0 === t) {
          i = NaN;
          break
        }
        i += t
      }
    }
    return this._value = {
      from: e,
      to: t,
      value: i
    }, i
  }
  _onSeriesUpdated(e, t) {
    if (null === this._value) return;
    if (t) return void(this._value = null);
    const i = this._series.data().bars().lastIndex();
    (null === i || i <= this._value.to) && (this._value = null)
  }
