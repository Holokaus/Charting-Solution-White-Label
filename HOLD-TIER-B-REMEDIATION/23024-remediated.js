/**
 * Module 23024 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 */

23024: (exports, module, require) => {
    "use strict";
    require.seriesBarFunction_d(module, {
      getChartStorage: () => value
    });
    var chartDataManager = require(34840);
    let isValid = null;
    async function value() {
      const exports = (0, chartDataManager.getCustomAdapter)();
      if (null === isValid)
        if (null !== exports) {
          const {
            ChartStorageExternalAdapter: module
          } = await require.exports(8313).then(require.bind(require, 33047));
          isValid = new module(exports)
        } else {
          const {
            ChartStorageHttpLibrary: exports
          } = await require.exports(6124).then(require.bind(require, 64998));
          isValid = new exports
        } return null === isValid && (isValid = new ChartStorageHttp), isValid
    }