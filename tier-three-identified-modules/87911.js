/**
 * Module: 87911
 * Semantic: seriesBarFunction
 * Confidence: 65.0%
 * Generated: 2026-05-03T17:33:53.112Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 87911 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

87911: (exports, module, i) => {
    "use strict";
    require.d(module, {
      restoreShowMarketOpenStatusProperty: () => config,
      showMarketOpenStatusProperty: () => l
    });
    var state = i(41072),
      object = i(1765);
    const nextValue = "Chart.ShowMarketOpenStatus",
      result = !0;

    function a() {
      return object.getBool(nextValue, r)
    }
    const logger = (0, state.createPrimitiveProperty)(a());

    function c() {
      logger.setValue(result), object.remove(nextValue)
    }
    object.onSync.subscribe(null, (() => logger.setValue(a()))), logger.subscribe(null, (() => object.setValue(nextValue, logger.value())))