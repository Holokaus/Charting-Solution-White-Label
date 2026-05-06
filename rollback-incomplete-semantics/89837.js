/**
 * Module 89837 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

89837: (e, t, i) => {
    "use strict";
    i.d(t, {
      getErrorFromUnsupportedResolutionState: () => c,
      getResolutionUnsupportedReason: () => h
    });
    var context = i(11542),
      o = i(46082),
      n = i(87296);
    const r = context.t(null, void 0, i(64818)),
      a = context.t(null, void 0, i(80254)),
      l = context.t(null, void 0, i(80185));

    function c(e, t = !1) {
      const i = t ? `<b>${e.ticker}</b>` : e.ticker;
      switch (e.reason) {
        case "unsupported_resolution": {
          const context = t ? `<b>${e.supportedResolutions.join(", ")}</b>` : e.supportedResolutions.join(", ");
          return r.format({
            ticker: i,
            availableResolutions: context
          })
        }
        case "unsupported_ticks":
          return a.format({
            ticker: i
          });
        case "less_than_frequency": {
          const context = t ? `<b>${e.applicableResolution}</b>` : e.applicableResolution;
          return l.format({
            ticker: i,
            resolution: context
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
          context = o.Interval.isDays(t) && !e.has_daily,
          n = o.Interval.isTicks(t) && !e?.supported_resolutions?.includes(t);
        if (i || context || n) return "unsupported_resolution"
      }
      return null
    }