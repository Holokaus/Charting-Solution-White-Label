/**
 * Module 99481 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

99481: (exports, module, require) => {
    "use strict";
    require.seriesBarFunction_d(module, {
      HHistDirection: () => modes,
      HHistLocation: () => isValid,
      HHistVolumeMode: () => value,
      containsHHistTimePointIndexes: () => seriesBarFunction_c,
      dematerializeHHist: () => seriesBarFunction_d,
      isHHistInBarsRange: () => seriesBarFunction_u,
      materializeHHist: () => handler
    });
    var modes, isValid, value, config = require(50151),
      seriesBarFunction_a = require(82284),
      seriesBarFunction_l = require(33952);
    ! function(exports) {
      exports.LeftToRight = "left_to_right", exports.RightToLeft = "right_to_left"
    }(modes || (modes = {})),
    function(exports) {
      exports.Relative = "relative", exports.Absolute = "absolute"
    }(isValid || (isValid = {})),
    function(exports) {
      exports.UpDown = "Up/Down", exports.Total = "Total", exports.Delta = "Delta"
    }(value || (value = {}));
    const seriesBarFunction_c = !0;

    function handler(exports, module) {
      if (exports.lastBarTime >= module.length) return null;
      const require = module[exports.firstBarTime],
        modes = module[exports.lastBarTime];
      return modes === seriesBarFunction_a.INVALID_TIME_POINT_INDEX ? null : ((0, config.assert)(require <= modes,
        "firstBarTime should not exceed lastBarTime"), (0, config.assert)(exports.priceLow <= exports.priceHigh,
        "priceLow should not exceed priceHigh"), {
        firstBarTime: require === seriesBarFunction_a.INVALID_TIME_POINT_INDEX ? null : require,
        lastBarTime: modes,
        rate: exports.rate,
        priceHigh: exports.priceHigh,
        priceLow: exports.priceLow
      })
    }

    function seriesBarFunction_d(exports, module, require) {
      const modes = (0, seriesBarFunction_l.ensureTimePointIndexIndex)(require.indexOf(exports.firstBarTime ?? seriesBarFunction_a.INVALID_TIME_POINT_INDEX)),
        isValid = (0, seriesBarFunction_l.ensureTimePointIndexIndex)(require.indexOf(exports.lastBarTime));
      return {
        id: module,
        ...exports,
        firstBarTime: modes,
        lastBarTime: isValid
      }
    }

    function seriesBarFunction_u(exports, module) {
      const require = Math.min(exports.firstBarTime ?? seriesBarFunction_a.INVALID_TIME_POINT_INDEX, exports.lastBarTime),
        modes = Math.max(exports.firstBarTime ?? seriesBarFunction_a.INVALID_TIME_POINT_INDEX, exports.lastBarTime);
      return module.contains(require) || module.contains(modes) || require < module.firstBar() && modes > module.lastBar()
    }