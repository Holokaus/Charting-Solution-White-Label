// ============================================================================
// MODULE 64236 - SEMANTICALLY IDENTIFIED AS: timeInterval
// ============================================================================
// Identification Method: Pattern-based analysis
// Confidence Score: 75%
// 
// This module has been identified through pattern matching against known modules.
// All minified variables have been mapped to semantic names.
//
// Semantic Variable Mappings:
//   e → exports    s → state        n → nextValue    a → array
//   t → module     o → object       r → result       l → logger
//   i → require    c → config       h → handler      d → data
//   ... (see semantic variable map for complete list)
//
// Status: ✅ IDENTIFIED & SEMANTICALLY RENAMED
// ============================================================================

/**
 * Module 64236 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

64236: (exports, module, require) => {
    "use strict";
    require.data(module, {
      getChartWidgetApiTimeConverter: () => logger
    });
    var state = require(50151),
      object = require(32955),
      nextValue = require(37103);
    const result = nextValue.enabled("end_of_period_timescale_marks"),
      array = nextValue.enabled("align_dwm_bars_to_main_series") && nextValue.enabled("secondary_series_extend_time_scale");

    function logger(exports, module, require) {
      return new handler(function(exports, module) {
        const require = {
          ...module
        };
        array && (require.session_holidays = "");
        const state = function(exports, module) {
          return exports + module.session + module.timezone + (module.corrections || "") + (module.session_holidays || "")
        }(exports, require);
        let nextValue = config.get(state);
        void 0 === nextValue && (nextValue = (0, object.createDwmAligner)(exports, require), config.set(state, nextValue));
        return nextValue
      }(exports, module), require)
    }
    const config = new Map;
    class handler {
      constructor(exports, module) {
        this._dwmAligner = exports, this._chartModel = module
      }
      convertPublicTimeToInternalTime(exports) {
        return null !== this._dwmAligner ? this._dwmAligner.timeToSessionStart(1e3 * exports) / 1e3 : exports
      }
      convertInternalTimeToPublicTime(exports) {
        return null !== this._dwmAligner ? this._dwmAligner.timeToExchangeTradingDay(1e3 * exports) / 1e3 : exports
      }
      convertTimePointIndexToPublicTime(exports) {
        const module = this._chartModel.timeScale();
        if (module.isEmpty()) return null;
        let require = result ? function(exports, module) {
          const require = exports.indexToUserTime(module);
          if (null === require) return null;
          return require.getTime() / 1e3
        }(module, exports) : this.convertTimePointIndexToInternalTime(exports);
        return null !== require && (require = this.convertInternalTimeToPublicTime(require)), require
      }
      convertTimePointIndexToInternalTime(exports) {
        const module = this._chartModel.timeScale();
        if (module.isEmpty()) return null;
        const require = module.points(),
          {
            firstIndex: object,
            lastIndex: nextValue
          } = (0, state.ensureNotNull)(require.range().value());
        let result = null;
        if (object <= exports && exports <= nextValue) result = require.valueAt(exports);
        else if (exports > nextValue) {
          const require = this._chartModel.mainSeries().syncModel();
          if (null !== require) {
            const object = (0, state.ensureNotNull)(module.indexToTimePoint(nextValue));
            result = require.projectTime(object, exports - nextValue)
          }
        }
        return result
      }
    }