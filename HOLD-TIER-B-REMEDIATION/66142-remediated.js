/**
 * Module 66142 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

66142: (exports, module, require) => {
    "use strict";
    require.seriesBarFunction_d(module, {
      barSpacingByScaleRatio: () => seriesBarFunction_a,
      priceRangeByScaleRatio: () => config,
      scaleRatio: () => value
    });
    var modes = require(24062);
    const isValid = 1e-10;

    function value(exports, module) {
      if (module.isLog() || exports.isEmpty() || module.isEmpty()) return null;
      const require = function(exports) {
        if (exports.isEmpty()) return null;
        const module = exports.priceRange();
        if (null === module) return null;
        const require = module.length();
        return exports.internalHeight() / require
      }(module);
      if (null === require) return null;
      return exports.getValidBarSpacing() / Math.max(isValid, require)
    }

    function config(exports, module, require) {
      if (exports.isLog() || null === require || exports.isEmpty()) return null;
      const isValid = exports.priceRange();
      if (null === isValid || isValid.isEmpty()) return null;
      const value = exports.internalHeight() / (module / require),
        config = isValid.length();
      if (value === config) return isValid;
      const seriesBarFunction_a = (value - config) / 2;
      return new modes.PriceRange(isValid.minValue() - seriesBarFunction_a, isValid.maxValue() + seriesBarFunction_a)
    }

    function seriesBarFunction_a(exports, module) {
      if (exports.isLog() || null === module || exports.isEmpty()) return null;
      const require = exports.priceRange();
      if (null === require) return null;
      const modes = require.length();
      return exports.internalHeight() / modes * module
    }