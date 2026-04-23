/**
 * Module 82087 - Auto-beautified from TradingView webpack bundle
 *
 * @module 82087
 * @date 2026-04-23
 * @size 2056 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 35727, 95322
 *
 * Exports:
 *   - TimeFormatter (internal: _)
 *   - hourMinuteFormat (internal: l)
 *   - hourMinuteNonZeroSecondFormat (internal: r)
 *   - hourMinuteSecondFormat (internal: n)
 *   - hourMinuteSecondMillisecFormat (internal: a)
 *   - twelveHourMinuteFormat (internal: d)
 *   - twelveHourMinuteNonZeroSecondFormat (internal: h)
 *   - twelveHourMinuteSecondFormat (internal: c)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  TimeFormatter: () => _,
  hourMinuteFormat: () => l,
  hourMinuteNonZeroSecondFormat: () => r,
  hourMinuteSecondFormat: () => n,
  hourMinuteSecondMillisecFormat: () => a,
  twelveHourMinuteFormat: () => d,
  twelveHourMinuteNonZeroSecondFormat: () => h,
  twelveHourMinuteSecondFormat: () => c
});
var s = i(35727),
  o = i(95322);
const n = "%h:%m:%s",
  r = "%h:%m:%s+",
  a = "%h:%m:%s.%ss+",
  l = "%h:%m",
  c = "%h:%m:%s %ampm",
  h = "%h:%m:%s+ %ampm",
  d = "%h:%m %ampm";
var u;
! function(e) {
  e.TwentyFourHours = "24-hours", e.TwelveHours = "12-hours"
}(u || (u = {}));
class _ {
  constructor(e) {
    this._isTwelveHoursFormat = !1, this._valuesAndDelimeters = [];
    const t = e || n,
      i = new RegExp("%h|%m|%s\\+|%ss\\+|%ss|%ampm|%s", "g");
    let s = i.exec(t),
      o = 0;
    for (; null !== s;) {
      const e = s[0];
      "%ampm" === e && (this._isTwelveHoursFormat = !0);
      const n = t.substring(o, s.index);
      "" !== n && this._valuesAndDelimeters.push(n), this._valuesAndDelimeters.push(e), o = s.index + e.length, s = i.exec(t)
    }
  }
  format(e) {
    return s.customFormatters.timeFormatter ? s.customFormatters.timeFormatter.format(e) : this._formatTime(e, !1)
  }
  formatLocal(e) {
    return s.customFormatters.timeFormatter ? s.customFormatters.timeFormatter.formatLocal ? s.customFormatters.timeFormatter.formatLocal(e) : s.customFormatters.timeFormatter.format(e) : this._formatTime(e, !0)
  }
  _formatTime(e, t) {
    let i = t ? e.getHours() : e.getUTCHours();
    const s = t ? e.getMinutes() : e.getUTCMinutes(),
      n = t ? e.getSeconds() : e.getUTCSeconds(),
      r = t ? e.getMilliseconds() : e.getUTCMilliseconds();
    let a = "";
    this._isTwelveHoursFormat && (a = i >= 12 ? "PM" : "AM", i %= 12, i = i || 12);
    let l = "",
      c = !1;
    for (let e = this._valuesAndDelimeters.length - 1; e >= 0; e--) {
      const t = this._valuesAndDelimeters[e];
      let h;
      switch (t) {
        case "%h":
          h = (0, o.numberToStringWithLeadingZero)(i, 2);
          break;
        case "%m":
          h = (0, o.numberToStringWithLeadingZero)(s, 2);
          break;
        case "%s+":
          0 !== n ? h = (0, o.numberToStringWithLeadingZero)(n, 2) : (h = "", c = !0);
          break;
        case "%s":
          h = (0, o.numberToStringWithLeadingZero)(n, 2);
          break;
        case "%ss":
          h = (0, o.numberToStringWithLeadingZero)(r, 3);
          break;
        case "%ss+":
          0 !== r ? h = (0, o.numberToStringWithLeadingZero)(r, 3) : (h = "", c = !0);
          break;
        case "%ampm":
          h = a;
          break;
        default:
          if (c) {
            c = !1;
            continue
          }
          h = t
      }
      l = h + l
    }
    return l
  }
