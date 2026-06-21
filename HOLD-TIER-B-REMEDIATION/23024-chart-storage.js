/**
 * ============================================================================
 * TRADINGVIEW MODULE 23024 - CHART STORAGE
 * ============================================================================
 *
 * Purpose: Chart storage management and adapter selection
 *
 * Size: 1.3 KB
 *
 * Functions:
 *   - getChartStorage: Get chart storage instance
 *
 * Features:
 *   - Chart storage adapter selection
 *   - External adapter support
 *   - HTTP library support
 *   - Async initialization
 *
 * Dependencies:
 *   - 34840: Chart data manager
 *   - 8313: Chart storage external adapter
 *   - 33047: Chart storage HTTP library
 *   - 6124: Chart storage HTTP library
 *   - 64998: Chart storage HTTP library
 *
 * Exports:
 *   - getChartStorage: Chart storage getter function
 *
 * @module 23024
 * @category Chart Storage
 * @subpackage Storage Management
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.seriesBarFunction_d(moduleConfig, {
    getChartStorage: () => getChartStorage
  });

  const chartDataManager = moduleRequire(34840);
  let chartStorageInstance = null;

  /**
   * Get chart storage instance
   * @returns {Promise<Object>} Promise resolving to chart storage instance
   */
  async function getChartStorage() {
    const customAdapter = (0, chartDataManager.getCustomAdapter)();
    
    if (null === chartStorageInstance) {
      if (null !== customAdapter) {
        const {
          ChartStorageExternalAdapter: ExternalAdapter
        } = await moduleRequire.seriesBarFunction_e(8313).then(moduleRequire.bind(moduleRequire, 33047));
        chartStorageInstance = new ExternalAdapter(customAdapter);
      } else {
        const {
          ChartStorageHttpLibrary: HttpLibrary
        } = await moduleRequire.seriesBarFunction_e(6124).then(moduleRequire.bind(moduleRequire, 64998));
        chartStorageInstance = new HttpLibrary();
      }
    }
    
    return chartStorageInstance;
  }
}
