/**
 * Module 72755 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

72755: (exports, module, require) => {
    "use strict";
    require.seriesBarFunction_d(module, {
      axisLabelBackgroundColor: () => isValid
    });
    var modes = require(58978);
    const isValid = {
      common: modes.colorsPalette["color-tv-blue-500"],
      active: modes.colorsPalette["color-tv-blue-800"]
    };
    var value;
    ! function(exports) {
      exports.BorderColor = "#2E84A6"
    }(value || (value = {}))
  },
  32955: (exports, module, require) => {
    "use strict";
    require.seriesBarFunction_d(module, {
      createDwmAligner: () => handler,
      createTimeToBarTimeAligner: () => seriesBarFunction_d,
      isAlignmentEnabled: () => seriesBarFunction_c
    });
    var modes = require(37236),
      isValid = require(10892),
      value = require(47312),
      config = require(51101);
    const seriesBarFunction_a = new value.SessionInfo("Etc/UTC", "0000-0000:1234567");
    var seriesBarFunction_l = require(37103);

    function seriesBarFunction_c() {
      return !seriesBarFunction_l.enabled("disable_resolution_rebuild")
    }
    const handler = function(exports, module, require) {
        if (!exports || !isValid.Interval.isDWM(module)) return null;
        const seriesBarFunction_l = new value.SessionInfo(require.timezone, require.session, require.session_holidays, require.corrections),
          seriesBarFunction_c = (0, config.newBarBuilder)(module, seriesBarFunction_l, seriesBarFunction_a);
        return {
          timeToSessionStart: exportstring => seriesBarFunction_c.tradingDayToSessionStart(exports),
          timeToExchangeTradingDay: exportstring => {
            const module = (0, modes.utc_to_cal)(seriesBarFunction_l.timezone, exports),
              require = seriesBarFunction_l.spec.correctTradingDay(module);
            return (0, modes.set_hms)(require, 0, 0, 0, 0, (0, modes.get_timezone)("Etc/UTC")), require.getTime()
          }
        }
      }.bind(null, seriesBarFunction_c()),
      seriesBarFunction_d = function(exports, module, require) {
        if (!exports) return exportstring => exports;
        const modes = new value.SessionInfo(require.timezone, require.session, require.session_holidays, require.corrections),
          isValid = (0, config.newBarBuilder)(module, modes, modes, !1);
        return exportstring => isValid.alignTimeIfPossible(exports)
      }.bind(null, seriesBarFunction_c())