/**
 * Module 4622 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

4622: (seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) => {
    "use strict";
    seriesBarFunction_i.seriesBarFunction_d(seriesBarFunction_t, {
      findSuitableResolutionToBuildFrom: () => seriesBarFunction_n
    });
    var seriesBarFunction_s = seriesBarFunction_i(46082);

    function seriesBarFunction_o(seriesBarFunction_e, seriesBarFunction_t) {
      const seriesBarFunction_i = seriesBarFunction_t.multiplier();
      for (let seriesBarFunction_s = seriesBarFunction_e.length - 1; seriesBarFunction_s >= 0; seriesBarFunction_s--) {
        const seriesBarFunction_o = Number(seriesBarFunction_e[seriesBarFunction_s]);
        if (seriesBarFunction_i % seriesBarFunction_o == 0) return {
          error: !1,
          resolution: `${seriesBarFunction_o}${seriesBarFunction_t.letter()}`
        }
      }
      return {
        error: !0,
        errorMessage: (seriesBarFunction_s = seriesBarFunction_t.value(),
          `Misconfiguration error: it is trying to request ${seriesBarFunction_s} but we cannot build it from lower resolution`)
      };
      var seriesBarFunction_s
    }

    function seriesBarFunction_n(seriesBarFunction_e, seriesBarFunction_t) {
      const seriesBarFunction_i = seriesBarFunction_s.Interval.parse(seriesBarFunction_e);
      if ((seriesBarFunction_i.isWeeks() || seriesBarFunction_i.isMonths()) && seriesBarFunction_t.has_weekly_and_monthly) {
        let seriesBarFunction_e = ["1"];
        seriesBarFunction_i.isWeeks() && void 0 !== seriesBarFunction_t.weekly_multipliers && (seriesBarFunction_e = seriesBarFunction_t.weekly_multipliers), seriesBarFunction_i.isMonths() && void 0 !== seriesBarFunction_t
          .monthly_multipliers && (seriesBarFunction_e = seriesBarFunction_t.monthly_multipliers);
        const seriesBarFunction_s = seriesBarFunction_o(seriesBarFunction_e, seriesBarFunction_i);
        if (!seriesBarFunction_s.error) return seriesBarFunction_s
      }
      if (seriesBarFunction_i.isDWM() && (void 0 === seriesBarFunction_t.has_daily || seriesBarFunction_t.has_daily)) return seriesBarFunction_i.isDays() && void 0 !== seriesBarFunction_t.daily_multipliers ? seriesBarFunction_o(
        seriesBarFunction_t.daily_multipliers, seriesBarFunction_i) : void 0 === seriesBarFunction_t.daily_multipliers || seriesBarFunction_t.daily_multipliers.includes("1") ? {
        error: !1,
        resolution: "1D"
      } : {
        error: !0,
        errorMessage: "unsupported_resolution"
      };
      if (seriesBarFunction_i.isDWM()) return {
        error: !0,
        errorMessage: "unsupported_resolution"
      };
      if (seriesBarFunction_i.isMinutes() && !seriesBarFunction_t.has_intraday) return {
        error: !0,
        errorMessage: "unsupported_resolution"
      };
      if (seriesBarFunction_i.isSeconds() && !seriesBarFunction_t.has_seconds) return {
        error: !0,
        errorMessage: "unsupported_resolution"
      };
      const seriesBarFunction_n = seriesBarFunction_t.seconds_multipliers ?? ["1"],
        seriesBarFunction_r = 0 === seriesBarFunction_n.length,
        seriesBarFunction_a = seriesBarFunction_r || seriesBarFunction_n.every((seriesBarFunction_e => parseInt(seriesBarFunction_e, 10) > seriesBarFunction_i.multiplier())),
        seriesBarFunction_l = seriesBarFunction_t.build_seconds_from_ticks && (seriesBarFunction_r || seriesBarFunction_a) && seriesBarFunction_t["is-tickbars-available"];
      if (seriesBarFunction_i.isSeconds() && seriesBarFunction_l) return {
        error: !1,
        resolution: "1T"
      };
      if (seriesBarFunction_i.isTicks()) return seriesBarFunction_t["is-tickbars-available"] ? {
        error: !1,
        resolution: seriesBarFunction_e
      } : {
        error: !0,
        errorMessage: "unsupported_resolution"
      };
      const seriesBarFunction_c = seriesBarFunction_i.isSeconds() ? seriesBarFunction_t.seconds_multipliers : seriesBarFunction_t.intraday_multipliers;
      return void 0 === seriesBarFunction_c ? {
        error: !1,
        resolution: seriesBarFunction_i.value()
      } : seriesBarFunction_o(seriesBarFunction_c, seriesBarFunction_i)
    }