/**
 * Module 63903 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

63903: (e, t, i) => {
    "use strict";
    i.d(t, {
      getPriceValueFormatterForSource: () => l,
      getPriceValueFormatterForStudy: () => c,
      shouldBeFormattedAsIndexedTo100: () => r,
      shouldBeFormattedAsPercent: () => n
    });
    var s = i(95059),
      o = i(22455);

    function n(e) {
      const t = e.priceScale();
      return !(null === t || !t.isPercentage()) && (!(0, o.isActingAsSymbolSource)(e) || (0, s.isPriceSourceStyle)(e
        .style()))
    }

    function r(e) {
      const t = e.priceScale();
      return !(null === t || !t.isIndexedTo100()) && (!(0, o.isActingAsSymbolSource)(e) || (0, s.isPriceSourceStyle)(e
        .style()))
    }

    function a(e) {
      const t = e.priceScale();
      return r(e) && null !== t ? (i, s) => t.formatPriceIndexedTo100(i, e.firstValue() ?? 100, s) : n(e) && null !==
        t ? (i, s) => t.formatPricePercentage(i, e.firstValue() ?? 100, s) : null
    }

    function l(e) {
      const t = a(e);
      if (t) return t;
      const i = e.formatter();
      return i.format.bind(i)
    }

    function c(e, t) {
      const i = a(e);
      if (i) return i;
      const s = e.plotFormatter(t);
      return s.format.bind(s)
    }