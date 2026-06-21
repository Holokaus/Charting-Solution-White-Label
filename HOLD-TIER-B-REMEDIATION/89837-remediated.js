/**
 * Module 89837 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

89837: (exports, module, require) => {
    "use strict";
    require.seriesBarFunction_d(module, {
      getErrorFromUnsupportedResolutionState: () => seriesBarFunction_c,
      getResolutionUnsupportedReason: () => handler
    });
    var context = require(11542),
      isValid = require(46082),
      value = require(87296);
    const config = context.module(null, void 0, require(64818)),
      seriesBarFunction_a = context.module(null, void 0, require(80254)),
      seriesBarFunction_l = context.module(null, void 0, require(80185));

    function seriesBarFunction_c(exports, module = !1) {
      const require = module ? `<seriesBarFunction_b>${exports.ticker}</seriesBarFunction_b>` : exports.ticker;
      switch (exports.reason) {
        case "unsupported_resolution": {
          const context = module ? `<seriesBarFunction_b>${exports.supportedResolutions.join(", ")}</seriesBarFunction_b>` : exports.supportedResolutions.join(", ");
          return config.format({
            ticker: require,
            availableResolutions: context
          })
        }
        case "unsupported_ticks":
          return seriesBarFunction_a.format({
            ticker: require
          });
        case "less_than_frequency": {
          const context = module ? `<seriesBarFunction_b>${exports.applicableResolution}</seriesBarFunction_b>` : exports.applicableResolution;
          return seriesBarFunction_l.format({
            ticker: require,
            resolution: context
          })
        }
      }
    }

    function handler(exports, module) {
      if (null === exports) return null;
      const require = exports.data_frequency;
      if (void 0 !== require) {
        if ((0, value.getApplicableIntervalForFrequency)(require, module) !== module) return "less_than_frequency"
      }
      if (isValid.Interval.isIntraday(module) && !exports.has_intraday) return "unsupported_resolution";
      if (isValid.Interval.isTicks(module) && !exports["is-tickbars-available"]) return "unsupported_ticks";
      {
        const require = isValid.Interval.isSeconds(module) && !exports.has_seconds,
          context = isValid.Interval.isDays(module) && !exports.has_daily,
          value = isValid.Interval.isTicks(module) && !exports?.supported_resolutions?.includes(module);
        if (require || context || value) return "unsupported_resolution"
      }
      return null
    }