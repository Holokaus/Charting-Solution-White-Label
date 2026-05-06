/**
 * Module 3354 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

3354: (seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) => {
    "use strict";
    seriesBarFunction_i.seriesBarFunction_d(seriesBarFunction_t, {
      isMultipleLayout: () => seriesBarFunction_r,
      isSupportedLayout: () => seriesBarFunction_a,
      layouts: () => seriesBarFunction_o,
      tryGuessingTheMostSuitableLayout: () => seriesBarFunction_l
    });
    seriesBarFunction_i(26743), seriesBarFunction_i(62548);
    let seriesBarFunction_s;
    seriesBarFunction_s = {};
    const seriesBarFunction_o = {
      ...{
        seriesBarFunction_s: {
          title: "1 chart",
          count: 1,
          layoutType: "seriesBarFunction_s",
          sizer: (seriesBarFunction_e, seriesBarFunction_t) => {
            if (0 !== seriesBarFunction_t) throw new RangeError("invalid index");
            return seriesBarFunction_e
          },
          splitters: () => [],
          resizeApplier: (seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i, seriesBarFunction_s, seriesBarFunction_o) => seriesBarFunction_o,
          syncSublayoutsBySplitter: (seriesBarFunction_e, seriesBarFunction_t) => seriesBarFunction_t,
          expression: ["seriesBarFunction_h", 0]
        }
      },
      ...seriesBarFunction_s
    };

    function seriesBarFunction_n(seriesBarFunction_e) {
      return "seriesBarFunction_s" === seriesBarFunction_e
    }

    function seriesBarFunction_r(seriesBarFunction_e) {
      return !seriesBarFunction_n(seriesBarFunction_e)
    }

    function seriesBarFunction_a(seriesBarFunction_e) {
      return seriesBarFunction_n(seriesBarFunction_e) || seriesBarFunction_s.hasOwnProperty(seriesBarFunction_e)
    }

    function seriesBarFunction_l(seriesBarFunction_e) {
      return "seriesBarFunction_s"
    }