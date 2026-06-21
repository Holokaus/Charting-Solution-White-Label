/**
 * Module 89837 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

89837: (seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) => {
    "use strict";
    seriesBarFunction_i.seriesBarFunction_d(seriesBarFunction_t, {
      getErrorFromUnsupportedResolutionState: () => seriesBarFunction_c,
      getResolutionUnsupportedReason: () => seriesBarFunction_h
    });
    var context = seriesBarFunction_i(11542),
      seriesBarFunction_o = seriesBarFunction_i(46082),
      seriesBarFunction_n = seriesBarFunction_i(87296);
    const seriesBarFunction_r = context.seriesBarFunction_t(null, void 0, seriesBarFunction_i(64818)),
      seriesBarFunction_a = context.seriesBarFunction_t(null, void 0, seriesBarFunction_i(80254)),
      seriesBarFunction_l = context.seriesBarFunction_t(null, void 0, seriesBarFunction_i(80185));

    function seriesBarFunction_c(seriesBarFunction_e, seriesBarFunction_t = !1) {
      const seriesBarFunction_i = seriesBarFunction_t ? `<seriesBarFunction_b>${seriesBarFunction_e.ticker}</seriesBarFunction_b>` : seriesBarFunction_e.ticker;
      switch (seriesBarFunction_e.reason) {
        case "unsupported_resolution": {
          const context = seriesBarFunction_t ? `<seriesBarFunction_b>${seriesBarFunction_e.supportedResolutions.join(", ")}</seriesBarFunction_b>` : seriesBarFunction_e.supportedResolutions.join(", ");
          return seriesBarFunction_r.format({
            ticker: seriesBarFunction_i,
            availableResolutions: context
          })
        }
        case "unsupported_ticks":
          return seriesBarFunction_a.format({
            ticker: seriesBarFunction_i
          });
        case "less_than_frequency": {
          const context = seriesBarFunction_t ? `<seriesBarFunction_b>${seriesBarFunction_e.applicableResolution}</seriesBarFunction_b>` : seriesBarFunction_e.applicableResolution;
          return seriesBarFunction_l.format({
            ticker: seriesBarFunction_i,
            resolution: context
          })
        }
      }
    }

    function seriesBarFunction_h(seriesBarFunction_e, seriesBarFunction_t) {
      if (null === seriesBarFunction_e) return null;
      const seriesBarFunction_i = seriesBarFunction_e.data_frequency;
      if (void 0 !== seriesBarFunction_i) {
        if ((0, seriesBarFunction_n.getApplicableIntervalForFrequency)(seriesBarFunction_i, seriesBarFunction_t) !== seriesBarFunction_t) return "less_than_frequency"
      }
      if (seriesBarFunction_o.Interval.isIntraday(seriesBarFunction_t) && !seriesBarFunction_e.has_intraday) return "unsupported_resolution";
      if (seriesBarFunction_o.Interval.isTicks(seriesBarFunction_t) && !seriesBarFunction_e["is-tickbars-available"]) return "unsupported_ticks";
      {
        const seriesBarFunction_i = seriesBarFunction_o.Interval.isSeconds(seriesBarFunction_t) && !seriesBarFunction_e.has_seconds,
          context = seriesBarFunction_o.Interval.isDays(seriesBarFunction_t) && !seriesBarFunction_e.has_daily,
          seriesBarFunction_n = seriesBarFunction_o.Interval.isTicks(seriesBarFunction_t) && !seriesBarFunction_e?.supported_resolutions?.includes(seriesBarFunction_t);
        if (seriesBarFunction_i || context || seriesBarFunction_n) return "unsupported_resolution"
      }
      return null
    }