/**
 * Module 58554 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

58554: (e, t, i) => {
    "use strict";
    i.d(t, {
      containsVertLineTimePointIndexes: () => n,
      dematerializeVertLine: () => a,
      isVertLineInBarsRange: () => l,
      materializeVertLine: () => r
    });
    var s = i(82284),
      o = i(33952);
    const n = !0;

    function r(e, t) {
      if (e.index >= t.length) return null;
      const i = t[e.index];
      return i === s.INVALID_TIME_POINT_INDEX ? null : {
        startPrice: e.startPrice,
        endPrice: e.endPrice,
        index: i,
        extendTop: e.extendTop,
        extendBottom: e.extendBottom
      }
    }

    function a(e, t, i) {
      const s = (0, o.ensureTimePointIndexIndex)(i.indexOf(e.index));
      return {
        id: t,
        ...e,
        index: s
      }
    }

    function l(e, t) {
      return t.contains(e.index)
    }