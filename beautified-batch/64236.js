/**
 * Module 64236 - Auto-beautified from TradingView webpack bundle
 *
 * @module 64236
 * @date 2026-04-23
 * @size 1552 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 32955, 37103, 50151
 *
 * Exports:
 *   - getChartWidgetApiTimeConverter (internal: l)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  getChartWidgetApiTimeConverter: () => l
});
var s = i(50151),
  o = i(32955),
  n = i(37103);
const r = n.enabled("end_of_period_timescale_marks"),
  a = n.enabled("align_dwm_bars_to_main_series") && n.enabled("secondary_series_extend_time_scale");

function l(e, t, i) {
  return new h(function(e, t) {
    const i = {
      ...t
    };
    a && (i.session_holidays = "");
    const s = function(e, t) {
      return e + t.session + t.timezone + (t.corrections || "") + (t.session_holidays || "")
    }(e, i);
    let n = c.get(s);
    void 0 === n && (n = (0, o.createDwmAligner)(e, i), c.set(s, n));
    return n
  }(e, t), i)
}
const c = new Map;
class h {
  constructor(e, t) {
    this._dwmAligner = e, this._chartModel = t
  }
  convertPublicTimeToInternalTime(e) {
    return null !== this._dwmAligner ? this._dwmAligner.timeToSessionStart(1e3 * e) / 1e3 : e
  }
  convertInternalTimeToPublicTime(e) {
    return null !== this._dwmAligner ? this._dwmAligner.timeToExchangeTradingDay(1e3 * e) / 1e3 : e
  }
  convertTimePointIndexToPublicTime(e) {
    const t = this._chartModel.timeScale();
    if (t.isEmpty()) return null;
    let i = r ? function(e, t) {
      const i = e.indexToUserTime(t);
      if (null === i) return null;
      return i.getTime() / 1e3
    }(t, e) : this.convertTimePointIndexToInternalTime(e);
    return null !== i && (i = this.convertInternalTimeToPublicTime(i)), i
  }
  convertTimePointIndexToInternalTime(e) {
    const t = this._chartModel.timeScale();
    if (t.isEmpty()) return null;
    const i = t.points(),
      {
        firstIndex: o,
        lastIndex: n
      } = (0, s.ensureNotNull)(i.range().value());
    let r = null;
    if (o <= e && e <= n) r = i.valueAt(e);
    else if (e > n) {
      const i = this._chartModel.mainSeries().syncModel();
      if (null !== i) {
        const o = (0, s.ensureNotNull)(t.indexToTimePoint(n));
        r = i.projectTime(o, e - n)
      }
    }
    return r
  }
