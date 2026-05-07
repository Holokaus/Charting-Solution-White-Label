/**
 * Module 23024 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

23024: (seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) => {
    "use strict";
    seriesBarFunction_i.seriesBarFunction_d(seriesBarFunction_t, {
      getChartStorage: () => seriesBarFunction_n
    });
    var chartDataManager = seriesBarFunction_i(34840);
    let seriesBarFunction_o = null;
    async function seriesBarFunction_n() {
      const seriesBarFunction_e = (0, chartDataManager.getCustomAdapter)();
      if (null === seriesBarFunction_o)
        if (null !== seriesBarFunction_e) {
          const {
            ChartStorageExternalAdapter: seriesBarFunction_t
          } = await seriesBarFunction_i.seriesBarFunction_e(8313).then(seriesBarFunction_i.bind(seriesBarFunction_i, 33047));
          seriesBarFunction_o = new seriesBarFunction_t(seriesBarFunction_e)
        } else {
          const {
            ChartStorageHttpLibrary: seriesBarFunction_e
          } = await seriesBarFunction_i.seriesBarFunction_e(6124).then(seriesBarFunction_i.bind(seriesBarFunction_i, 64998));
          seriesBarFunction_o = new seriesBarFunction_e
        } return null === seriesBarFunction_o && (seriesBarFunction_o = new ChartStorageHttp), seriesBarFunction_o
    }