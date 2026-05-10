/**
 * Module 4622 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

4622: (exports, module, require) => {
    "use strict";
    require.seriesBarFunction_d(module, {
      findSuitableResolutionToBuildFrom: () => value
    });
    var modes = require(46082);

    function isValid(exports, module) {
      const require = module.multiplier();
      for (let modes = exports.length - 1; modes >= 0; modes--) {
        const isValid = Number(exports[modes]);
        if (require % isValid == 0) return {
          error: !1,
          resolution: `${isValid}${module.letter()}`
        }
      }
      return {
        error: !0,
        errorMessage: (modes = module.value(),
          `Misconfiguration error: it is trying to request ${modes} but we cannot build it from lower resolution`)
      };
      var modes
    }

    function value(exports, module) {
      const require = modes.Interval.parse(exports);
      if ((require.isWeeks() || require.isMonths()) && module.has_weekly_and_monthly) {
        let exports = ["1"];
        require.isWeeks() && void 0 !== module.weekly_multipliers && (exports = module.weekly_multipliers), require.isMonths() && void 0 !== module
          .monthly_multipliers && (exports = module.monthly_multipliers);
        const modes = isValid(exports, require);
        if (!modes.error) return modes
      }
      if (require.isDWM() && (void 0 === module.has_daily || module.has_daily)) return require.isDays() && void 0 !== module.daily_multipliers ? isValid(
        module.daily_multipliers, require) : void 0 === module.daily_multipliers || module.daily_multipliers.includes("1") ? {
        error: !1,
        resolution: "1D"
      } : {
        error: !0,
        errorMessage: "unsupported_resolution"
      };
      if (require.isDWM()) return {
        error: !0,
        errorMessage: "unsupported_resolution"
      };
      if (require.isMinutes() && !module.has_intraday) return {
        error: !0,
        errorMessage: "unsupported_resolution"
      };
      if (require.isSeconds() && !module.has_seconds) return {
        error: !0,
        errorMessage: "unsupported_resolution"
      };
      const value = module.seconds_multipliers ?? ["1"],
        config = 0 === value.length,
        seriesBarFunction_a = config || value.every((exportstring => parseInt(exports, 10) > require.multiplier())),
        seriesBarFunction_l = module.build_seconds_from_ticks && (config || seriesBarFunction_a) && module["is-tickbars-available"];
      if (require.isSeconds() && seriesBarFunction_l) return {
        error: !1,
        resolution: "1T"
      };
      if (require.isTicks()) return module["is-tickbars-available"] ? {
        error: !1,
        resolution: exports
      } : {
        error: !0,
        errorMessage: "unsupported_resolution"
      };
      const seriesBarFunction_c = require.isSeconds() ? module.seconds_multipliers : module.intraday_multipliers;
      return void 0 === seriesBarFunction_c ? {
        error: !1,
        resolution: require.value()
      } : isValid(seriesBarFunction_c, require)
    }