/**
 * Module 72755 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

72755: (e, t, i) => {
    "use strict";
    i.d(t, {
      axisLabelBackgroundColor: () => o
    });
    var s = i(58978);
    const o = {
      common: s.colorsPalette["color-tv-blue-500"],
      active: s.colorsPalette["color-tv-blue-800"]
    };
    var n;
    ! function(e) {
      e.BorderColor = "#2E84A6"
    }(n || (n = {}))
  },
  32955: (e, t, i) => {
    "use strict";
    i.d(t, {
      createDwmAligner: () => h,
      createTimeToBarTimeAligner: () => d,
      isAlignmentEnabled: () => c
    });
    var s = i(37236),
      o = i(10892),
      n = i(47312),
      r = i(51101);
    const a = new n.SessionInfo("Etc/UTC", "0000-0000:1234567");
    var l = i(37103);

    function c() {
      return !l.enabled("disable_resolution_rebuild")
    }
    const h = function(e, t, i) {
        if (!e || !o.Interval.isDWM(t)) return null;
        const l = new n.SessionInfo(i.timezone, i.session, i.session_holidays, i.corrections),
          c = (0, r.newBarBuilder)(t, l, a);
        return {
          timeToSessionStart: e => c.tradingDayToSessionStart(e),
          timeToExchangeTradingDay: e => {
            const t = (0, s.utc_to_cal)(l.timezone, e),
              i = l.spec.correctTradingDay(t);
            return (0, s.set_hms)(i, 0, 0, 0, 0, (0, s.get_timezone)("Etc/UTC")), i.getTime()
          }
        }
      }.bind(null, c()),
      d = function(e, t, i) {
        if (!e) return e => e;
        const s = new n.SessionInfo(i.timezone, i.session, i.session_holidays, i.corrections),
          o = (0, r.newBarBuilder)(t, s, s, !1);
        return e => o.alignTimeIfPossible(e)
      }.bind(null, c())