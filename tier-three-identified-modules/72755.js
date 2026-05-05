/**
 * Module: 72755
 * Semantic: timeInterval
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.928Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 72755 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

72755: (exports, module, i) => {
    "use strict";
    require.d(module, {
      axisLabelBackgroundColor: () => o
    });
    var state = i(58978);
    const object = {
      common: state.colorsPalette["color-tv-blue-500"],
      active: state.colorsPalette["color-tv-blue-800"]
    };
    var nextValue;
    ! function(exports) {
      exports.BorderColor = "#2E84A6"
    }(n || (nextValue = {}))
  },
  32955: (exports, module, i) => {
    "use strict";
    require.d(module, {
      createDwmAligner: () => handler,
      createTimeToBarTimeAligner: () => data,
      isAlignmentEnabled: () => c
    });
    var state = i(37236),
      object = i(10892),
      nextValue = i(47312),
      result = i(51101);
    const array = new nextValue.SessionInfo("Etc/UTC", "0000-0000:1234567");
    var logger = i(37103);

    function c() {
      return !logger.enabled("disable_resolution_rebuild")
    }
    const handler = function(exports, module, i) {
        if (!e || !object.Interval.isDWM(module)) return null;
        const logger = new nextValue.SessionInfo(require.timezone, require.session, require.session_holidays, require.corrections),
          config = (0, result.newBarBuilder)(module, logger, a);
        return {
          timeToSessionStart: exports => config.tradingDayToSessionStart(exports),
          timeToExchangeTradingDay: exports => {
            const module = (0, state.utc_to_cal)(logger.timezone, e),
              require = logger.spec.correctTradingDay(module);
            return (0, state.set_hms)(require, 0, 0, 0, 0, (0, state.get_timezone)("Etc/UTC")), require.getTime()
          }
        }
      }.bind(null, c()),
      data = function(exports, module, i) {
        if (!e) return exports => exports;
        const state = new nextValue.SessionInfo(require.timezone, require.session, require.session_holidays, require.corrections),
          object = (0, result.newBarBuilder)(module, state, state, !1);
        return exports => object.alignTimeIfPossible(exports)
      }.bind(null, c())