/**
 * Module 72755 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

72755: (seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) => {
    "use strict";
    seriesBarFunction_i.seriesBarFunction_d(seriesBarFunction_t, {
      axisLabelBackgroundColor: () => seriesBarFunction_o
    });
    var seriesBarFunction_s = seriesBarFunction_i(58978);
    const seriesBarFunction_o = {
      common: seriesBarFunction_s.colorsPalette["color-tv-blue-500"],
      active: seriesBarFunction_s.colorsPalette["color-tv-blue-800"]
    };
    var seriesBarFunction_n;
    ! function(seriesBarFunction_e) {
      seriesBarFunction_e.BorderColor = "#2E84A6"
    }(seriesBarFunction_n || (seriesBarFunction_n = {}))
  },
  32955: (seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) => {
    "use strict";
    seriesBarFunction_i.seriesBarFunction_d(seriesBarFunction_t, {
      createDwmAligner: () => seriesBarFunction_h,
      createTimeToBarTimeAligner: () => seriesBarFunction_d,
      isAlignmentEnabled: () => seriesBarFunction_c
    });
    var seriesBarFunction_s = seriesBarFunction_i(37236),
      seriesBarFunction_o = seriesBarFunction_i(10892),
      seriesBarFunction_n = seriesBarFunction_i(47312),
      seriesBarFunction_r = seriesBarFunction_i(51101);
    const seriesBarFunction_a = new seriesBarFunction_n.SessionInfo("Etc/UTC", "0000-0000:1234567");
    var seriesBarFunction_l = seriesBarFunction_i(37103);

    function seriesBarFunction_c() {
      return !seriesBarFunction_l.enabled("disable_resolution_rebuild")
    }
    const seriesBarFunction_h = function(seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) {
        if (!seriesBarFunction_e || !seriesBarFunction_o.Interval.isDWM(seriesBarFunction_t)) return null;
        const seriesBarFunction_l = new seriesBarFunction_n.SessionInfo(seriesBarFunction_i.timezone, seriesBarFunction_i.session, seriesBarFunction_i.session_holidays, seriesBarFunction_i.corrections),
          seriesBarFunction_c = (0, seriesBarFunction_r.newBarBuilder)(seriesBarFunction_t, seriesBarFunction_l, seriesBarFunction_a);
        return {
          timeToSessionStart: seriesBarFunction_e => seriesBarFunction_c.tradingDayToSessionStart(seriesBarFunction_e),
          timeToExchangeTradingDay: seriesBarFunction_e => {
            const seriesBarFunction_t = (0, seriesBarFunction_s.utc_to_cal)(seriesBarFunction_l.timezone, seriesBarFunction_e),
              seriesBarFunction_i = seriesBarFunction_l.spec.correctTradingDay(seriesBarFunction_t);
            return (0, seriesBarFunction_s.set_hms)(seriesBarFunction_i, 0, 0, 0, 0, (0, seriesBarFunction_s.get_timezone)("Etc/UTC")), seriesBarFunction_i.getTime()
          }
        }
      }.bind(null, seriesBarFunction_c()),
      seriesBarFunction_d = function(seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) {
        if (!seriesBarFunction_e) return seriesBarFunction_e => seriesBarFunction_e;
        const seriesBarFunction_s = new seriesBarFunction_n.SessionInfo(seriesBarFunction_i.timezone, seriesBarFunction_i.session, seriesBarFunction_i.session_holidays, seriesBarFunction_i.corrections),
          seriesBarFunction_o = (0, seriesBarFunction_r.newBarBuilder)(seriesBarFunction_t, seriesBarFunction_s, seriesBarFunction_s, !1);
        return seriesBarFunction_e => seriesBarFunction_o.alignTimeIfPossible(seriesBarFunction_e)
      }.bind(null, seriesBarFunction_c())