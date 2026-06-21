/**
 * Module 3354 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 */

3354: (exports, module, require) => {
    "use strict";
    require.seriesBarFunction_d(module, {
      isMultipleLayout: () => seriesBarFunction_r,
      isSupportedLayout: () => seriesBarFunction_a,
      layouts: () => isValid,
      tryGuessingTheMostSuitableLayout: () => seriesBarFunction_l
    });
    require(26743), require(62548);
    let modes;
    modes = {};
    const isValid = {
      ...{
        modes: {
          title: "1 chart",
          count: 1,
          layoutType: "modes",
          sizer: (exports, module) => {
            if (0 !== module) throw new RangeError("invalid index");
            return exports
          },
          splitters: () => [],
          resizeApplier: (exports, module, require, modes, isValid) => isValid,
          syncSublayoutsBySplitter: (exports, module) => module,
          expression: ["seriesBarFunction_h", 0]
        }
      },
      ...modes
    };

    function value(exports) {
      return "modes" === exports
    }

    function seriesBarFunction_r(exports) {
      return !value(exports)
    }

    function seriesBarFunction_a(exports) {
      return value(exports) || modes.hasOwnProperty(exports)
    }

    function seriesBarFunction_l(exports) {
      return "modes"
    }