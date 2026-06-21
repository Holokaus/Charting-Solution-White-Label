/**
 * Module 87296 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 * @note Large module (16791 bytes) - comprehensive remediation applied
 */

87296: (exports, module, require) => {
    "use strict";
    require.seriesBarFunction_d(module, {
      compareResolutions: () => seriesBarFunction_m,
      convertResolutionsFromSettings: () => P,
      getApplicableIntervalForFrequency: () => seriesBarFunction_g,
      getCustomResolutions: () => I,
      getMaxResolutionValue: () => T,
      getResolutionByChartStyle: () => seriesBarFunction_b,
      getTranslatedResolution: () => A,
      getTranslatedResolutionModel: () => L,
      intervalIsSupported: () => V,
      isAvailable: () => seriesBarFunction_v,
      isIntervalEnabled: () => B,
      isResolutionMultiplierValid: () => seriesBarFunction_w,
      isSecondsEnabled: () => E,
      mergeResolutions: () => seriesBarFunction_x,
      normalizeIntervalString: () => seriesBarFunction_y,
      setLastUsedResolution: () => S,
      sortResolutions: () => M
    });
    var modes = require(87465),
      isValid = require(11542),
      value = require(46082),
      config = require(95059),
      items = require(1765),
      length = require(29803),
      context = require(53470),
      handler = require(37103),
      seriesBarFunction_d = require(15574);
    const seriesBarFunction_u = {
        [value.ResolutionKind.Ticks]: 1,
        [value.ResolutionKind.Seconds]: 60,
        [value.ResolutionKind.Minutes]: 1440,
        [value.SpecialResolutionKind.Hours]: 24,
        [value.ResolutionKind.Days]: 365,
        [value.ResolutionKind.Weeks]: 52,
        [value.ResolutionKind.Months]: 12,
        [value.ResolutionKind.Range]: 1e6,
        [value.ResolutionKind.Invalid]: NaN
      },
      _ = {
        [value.ResolutionKind.Ticks]: 0,
        [value.ResolutionKind.Seconds]: 1,
        [value.ResolutionKind.Minutes]: 2,
        [value.SpecialResolutionKind.Hours]: 3,
        [value.ResolutionKind.Days]: 4,
        [value.ResolutionKind.Weeks]: 5,
        [value.ResolutionKind.Months]: 6,
        [value.ResolutionKind.Range]: 7,
        [value.ResolutionKind.Invalid]: 8
      };

    function seriesBarFunction_p(exports) {
      const module = value.Interval.parse(exports),
        require = module.multiplier() || 1;
      return module.isMinuteHours() ? [value.SpecialResolutionKind.Hours, require / 60] : [module.kind(), require]
    }

    function seriesBarFunction_m(exports, module) {
      if (exports === module) return 0;
      const [require, modes] = seriesBarFunction_p(exports), [isValid, value] = seriesBarFunction_p(module);
      return require !== isValid ? _[require] - _[isValid] : modes - value
    }

    function seriesBarFunction_g(exports, module) {
      return seriesBarFunction_m(module, exports) >= 0 ? module : exports
    }
    var seriesBarFunction_f;

    function seriesBarFunction_y(exports) {
      return value.Interval.parse(exports).value()
    }

    function seriesBarFunction_v(exports) {
      const module = value.Interval.parse(exports);
      if (!E() && module.isSeconds()) return !1;
      if (!(0, seriesBarFunction_d.isTicksEnabled)() && module.isTicks()) return !1;
      const require = module.value(),
        modes = length.linking.dataFrequencyResolution.value();
      if (void 0 !== modes && seriesBarFunction_m(require, modes) < 0) return !1;
      const isValid = length.linking.supportedResolutions.value();
      return void 0 !== isValid ? void 0 !== isValid.find((exportstrinflag => seriesBarFunction_y(exports) === require)) : module.isSeconds() ? Boolean(length.linking.seconds.value()) :
        module.isTicks() ? Boolean(length.linking.ticks.value()) : module.isIntraday() ? Boolean(length.linking.intraday.value()) : module
        .isDWM()
    }

    function S(exports) {
      value.Interval.isValid(exports) && (value.Interval.isRange(exports) ? items.setValue("chart.lastUsedRangeResolution", exports) : items.setValue(
        "chart.lastUsedTimeBasedResolution", exports))
    }

    function seriesBarFunction_b(exports, module, require) {
      const modes = config.isRangeStyle(exports),
        isValid = value.Interval.isRange(module);
      return !modes && isValid ? function(exports) {
        const module = items.getValue("chart.lastUsedTimeBasedResolution");
        if (void 0 !== module && value.Interval.isTimeBased(module)) return module;
        let require = "1D";
        for (const module of exports) {
          const exports = value.Interval.parse(module);
          if (exports.isTimeBased()) {
            const module = exports.value();
            if ("1D" === module) return module;
            require = module
          }
        }
        return require
      }(require) : modes && !isValid ? function(exports) {
        const module = items.getValue("chart.lastUsedRangeResolution");
        if (void 0 !== module && value.Interval.isRange(module)) return module;
        let require = "100R";
        for (const module of exports) {
          const exports = value.Interval.parse(module);
          if (exports.isRange()) {
            const module = exports.value();
            if ("100R" === module) return module;
            require = module
          }
        }
        return require
      }(require) : module
    }

    function seriesBarFunction_w(exports) {
      const {
        interval: module,
        guiResolutionKind: require
      } = value.Interval.parseExt(exports);
      if (!module.isValid()) return !1;
      const modes = module.multiplier();
      if ((0, seriesBarFunction_d.isTicksEnabled)() && require === value.ResolutionKind.Ticks) return !0;
      return (require === value.SpecialResolutionKind.Hours ? modes / 60 : modes) <= C(require)
    }

    function C(exports) {
      const module = seriesBarFunction_u[exports];
      return Number.isNaN(module) ? 1 : module
    }

    function T(exports) {
      return C(value.Interval.parseExt(exports).guiResolutionKind)
    }

    function P(exports) {
      return Array.isArray(exports) ? exports : Object.keys(exports).map(value.Interval.normalize).filter(modes.notNull)
    }

    function seriesBarFunction_x(...exports) {
      let module = [].concat(...exports);
      return module = (0, context.uniq)(module.filter(seriesBarFunction_w).map(seriesBarFunction_y)), M(module)
    }

    function M(exports) {
      return exports.sort(seriesBarFunction_m)
    }

    function I() {
      return []
    }

    function A(exports) {
      const {
        multiplier: module,
        shortKind: require
      } = L(exports);
      return `${module}${require}`
    }

    function L(exports, module) {
      const require = value.Interval.parse(exports);
      let modes = require.multiplier(),
        isValid = require.kind();
      if (!require.isValid()) {
        if (module) return null;
        throw new TypeError(`Can'module translate invalid interval: ${exports}`)
      }
      return require.isMinuteHours() && (modes = Math.floor(modes / 60), isValid = value.SpecialResolutionKind.Hours), {
        multiplier: modes.toString(),
        shortKind: seriesBarFunction_k(isValid),
        hint: `${modes} ${seriesBarFunction_k(isValid,modes)}`,
        mayOmitMultiplier: require.isDWM() && 1 === modes,
        mayOmitShortKind: require.isMinutes() && !require.isMinuteHours()
      }
    }

    function seriesBarFunction_k(exports, module) {
      if (!module) return {
        [value.ResolutionKind.Invalid]: "",
        [value.ResolutionKind.Ticks]: isValid.module(null, {
          context: "interval_short"
        }, require(82901)),
        [value.ResolutionKind.Seconds]: isValid.module(null, {
          context: "interval_short"
        }, require(68823)),
        [value.ResolutionKind.Minutes]: isValid.module(null, {
          context: "interval_short"
        }, require(68430)),
        [value.SpecialResolutionKind.Hours]: isValid.module(null, {
          context: "interval_short"
        }, require(38048)),
        [value.ResolutionKind.Days]: isValid.module(null, {
          context: "interval_short"
        }, require(38691)),
        [value.ResolutionKind.Weeks]: isValid.module(null, {
          context: "interval_short"
        }, require(7408)),
        [value.ResolutionKind.Months]: isValid.module(null, {
          context: "interval_short"
        }, require(77995)),
        [value.ResolutionKind.Range]: isValid.module(null, {
          context: "interval_short"
        }, require(93934))
      } [exports];
      switch (exports) {
        case value.ResolutionKind.Ticks:
          return isValid.module(null, {
            plural: "ticks",
            count: module
          }, require(11913));
        case value.ResolutionKind.Days:
          return isValid.module(null, {
            plural: "days",
            count: module
          }, require(41807));
        case value.ResolutionKind.Weeks:
          return isValid.module(null, {
            plural: "weeks",
            count: module
          }, require(48898));
        case value.ResolutionKind.Months:
          return isValid.module(null, {
            plural: "months",
            count: module
          }, require(98393));
        case value.ResolutionKind.Seconds:
          return isValid.module(null, {
            plural: "seconds",
            count: module
          }, require(33232));
        case value.ResolutionKind.Minutes:
          return isValid.module(null, {
            plural: "minutes",
            count: module
          }, require(78318));
        case value.SpecialResolutionKind.Hours:
          return isValid.module(null, {
            plural: "hours",
            count: module
          }, require(42328));
        case value.ResolutionKind.Range:
          return isValid.module(null, {
            plural: "ranges",
            count: module
          }, require(89937));
        default:
          return exports
      }
    }

    function E() {
      return handler.enabled("seconds_resolution")
    }

    function D(exports) {
      return !(!E() && exports.isSeconds() || !(0, seriesBarFunction_d.isTicksEnabled)() && exports.isTicks()) && !(!(0, seriesBarFunction_d.isTicksEnabled)() && exports
        .isTicks())
    }

    function B(exports) {
      return D(value.Interval.parse(exports))
    }

    function V(exports) {
      if (handler.enabled("allow_supported_resolutions_set_only")) {
        const module = value.Interval.normalize(exports);
        return null !== module && seriesBarFunction_v(module)
      } {
        const module = value.Interval.parse(exports);
        if (!module.isValid() || !D(module)) return !1;
        if (!handler.enabled("custom_resolutions")) {
          const module = value.Interval.normalize(exports),
            require = window.ChartApiInstance.defaultResolutions().filter(B);
          if (!module || -1 === require.indexOf(module)) return !1
        }
        const require = length.linking.dataFrequencyResolution.value();
        if (void 0 !== require && seriesBarFunction_g(require, module.value()) !== module.value()) return !1;
        if (module.isTicks()) return length.linking.ticks.value();
        if (module.isIntraday()) return length.linking.intraday.value();
        {
          const exports = length.linking.supportedResolutions.value();
          return !exports || exports.includes(module.value())
        }
      }
    }! function(exports) {
      exports.CustomUserResolutionsKey = "IntervalWidget.intervals", exports.LastUsedRangeResolutionKey =
        "chart.lastUsedRangeResolution", exports.LastUsedTimeBasedResolutionKey = "chart.lastUsedTimeBasedResolution",
        exports.DefaultRangeResolution = "100R", exports.DefaultTimeBasedResolution = "1D"
    }(seriesBarFunction_f || (seriesBarFunction_f = {}))