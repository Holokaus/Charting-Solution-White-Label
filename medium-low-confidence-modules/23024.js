/**
 * Module: 23024
 * Semantic: seriesData
 * Confidence: 45.0%
 * Generated: 2026-05-03T17:50:27.794Z
 * Category: Tier-3 Medium-Low (Advanced Pattern Discovery)
 */

/**
 * Module 23024 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

23024: (exports, module, i) => {
    "use strict";
    require.d(module, {
      getChartStorage: () => n
    });
    var chartDataManager = i(34840);
    let object = null;
    async function n() {
      const exports = (0, chartDataManager.getCustomAdapter)();
      if (null === o)
        if (null !== e) {
          const {
            ChartStorageExternalAdapter: t
          } = await require.e(8313).then(require.bind(require, 33047));
          object = new t(exports)
        } else {
          const {
            ChartStorageHttpLibrary: e
          } = await require.e(6124).then(require.bind(require, 64998));
          object = new e
        } return null === o && (object = new ChartStorageHttp), o
    }