/**
 * Module 23024 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

23024: (e, t, i) => {
    "use strict";
    i.d(t, {
      getChartStorage: () => n
    });
    var chartDataManager = i(34840);
    let o = null;
    async function n() {
      const e = (0, chartDataManager.getCustomAdapter)();
      if (null === o)
        if (null !== e) {
          const {
            ChartStorageExternalAdapter: t
          } = await i.e(8313).then(i.bind(i, 33047));
          o = new t(e)
        } else {
          const {
            ChartStorageHttpLibrary: e
          } = await i.e(6124).then(i.bind(i, 64998));
          o = new e
        } return null === o && (o = new ChartStorageHttp), o
    }