/**
 * Module 89837 - Auto-beautified from TradingView webpack bundle
 *
 * @module 89837
 * @date 2026-04-23
 * @size 1204 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 11542, 46082, 64818, 80185, 80254, 87296
 *
 * Exports:
 *   - getErrorFromUnsupportedResolutionState (internal: c)
 *   - getResolutionUnsupportedReason (internal: h)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  getErrorFromUnsupportedResolutionState: () => c,
  getResolutionUnsupportedReason: () => h
});
var s = i(11542),
  o = i(46082),
  n = i(87296);
const r = s.t(null, void 0, i(64818)),
  a = s.t(null, void 0, i(80254)),
  l = s.t(null, void 0, i(80185));

function c(e, t = !1) {
  const i = t ? `<b>${e.ticker}</b>` : e.ticker;
  switch (e.reason) {
    case "unsupported_resolution": {
      const s = t ? `<b>${e.supportedResolutions.join(", ")}</b>` : e.supportedResolutions.join(", ");
      return r.format({
        ticker: i,
        availableResolutions: s
      })
    }
    case "unsupported_ticks":
      return a.format({
        ticker: i
      });
    case "less_than_frequency": {
      const s = t ? `<b>${e.applicableResolution}</b>` : e.applicableResolution;
      return l.format({
        ticker: i,
        resolution: s
      })
    }
  }
}

function h(e, t) {
  if (null === e) return null;
  const i = e.data_frequency;
  if (void 0 !== i) {
    if ((0, n.getApplicableIntervalForFrequency)(i, t) !== t) return "less_than_frequency"
  }
  if (o.Interval.isIntraday(t) && !e.has_intraday) return "unsupported_resolution";
  if (o.Interval.isTicks(t) && !e["is-tickbars-available"]) return "unsupported_ticks";
  {
    const i = o.Interval.isSeconds(t) && !e.has_seconds,
      s = o.Interval.isDays(t) && !e.has_daily,
      n = o.Interval.isTicks(t) && !e?.supported_resolutions?.includes(t);
    if (i || s || n) return "unsupported_resolution"
  }
  return null
