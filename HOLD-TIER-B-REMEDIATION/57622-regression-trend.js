/**
 * ============================================================================
 * TRADINGVIEW MODULE 57622 - REGRESSION TREND STUDY
 * ============================================================================
 *
 * Purpose: Regression trend study implementation
 *
 * Size: 7.5 KB
 *
 * Classes:
 *   - RegressionTrendStudyItem: Regression trend study item
 *
 * Features:
 *   - Regression trend calculation
 *   - Statistical analysis (slope, average, standard deviation)
 *   - Up/down deviation calculations
 *   - Correlation coefficient (Pearson's r)
 *   - Linear regression implementation
 *   - Study item configuration
 *   - Data validation and error handling
 *
 * Dependencies:
 *   - 19979: Market session utilities
 *   - 24062: Bar utilities
 *
 * Exports:
 *   - regressionTrendStudyItem: Regression trend study item function
 *
 * @module 57622
 * @category Study System
 * @subpackage Trend Analysis
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  
  moduleRequire.regressionTrend_d(moduleConfig, {
    regressionTrendStudyItem: () => regressionTrendStudyItem
  });

  const MarketSessionUtils = moduleRequire(19979),
    BarUtils = moduleRequire(24062);

  /**
   * Create regression trend study item
   * @param {Object} studyConfig - Study configuration
   * @returns {Object} Regression trend study item
   */
  function regressionTrendStudyItem(studyConfig) {
    const studyData = {
      slope: NaN,
      average: NaN,
      intercept: NaN,
      stdDev: NaN,
      upDev: NaN,
      downDev: NaN,
      pearsons: NaN
    };
    
    // Calculate regression statistics if data is available
    if (studyConfig && studyConfig.bars && studyConfig.bars.length > 0) {
      const stats = calculateRegressionStatistics(studyConfig.bars);
      studyData.slope = stats.slope;
      studyData.average = stats.average;
      studyData.intercept = stats.intercept;
      studyData.stdDev = stats.stdDev;
      studyData.upDev = stats.upDev;
      studyData.downDev = stats.downDev;
      studyData.pearsons = stats.pearsons;
    }
    
    return {
      ...studyConfig,
      ...studyData
    };
  }

  /**
   * Calculate regression statistics
   * @param {Array} bars - Bar data array
   * @returns {Object} Regression statistics
   */
  function calculateRegressionStatistics(bars) {
    const n = bars.length;
    if (n === 0) {
      return {
        slope: 0,
        average: 0,
        intercept: 0,
        stdDev: 0,
        upDev: 0,
        downDev: 0,
        pearsons: 0
      };
    }
    
    // Calculate sums
    let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0, sumY2 = 0;
    
    for (let i = 0; i < n; i++) {
      const x = i;
      const y = bars[i].close || 0;
      sumX += x;
      sumY += y;
      sumXY += x * y;
      sumX2 += x * x;
      sumY2 += y * y;
    }
    
    // Calculate regression coefficients
    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    const average = sumY / n;
    const intercept = (sumY - slope * sumX) / n;
    
    // Calculate standard deviation and deviations
    let sumSquaredErrors = 0;
    let sumUpDeviations = 0;
    let sumDownDeviations = 0;
    
    for (let i = 0; i < n; i++) {
      const x = i;
      const predictedY = slope * x + intercept;
      const actualY = bars[i].close || 0;
      const error = actualY - predictedY;
      const squaredError = error * error;
      
      sumSquaredErrors += squaredError;
      
      if (error > 0) {
        sumUpDeviations += error;
      } else {
        sumDownDeviations += Math.abs(error);
      }
    }
    
    const variance = sumSquaredErrors / n;
    const stdDev = Math.sqrt(variance);
    const upDev = sumUpDeviations / n;
    const downDev = sumDownDeviations / n;
    
    // Calculate Pearson's correlation coefficient
    const numerator = n * sumXY - sumX * sumY;
    const denominator = Math.sqrt((n * sumX2 - sumX * sumX) * (n * sumY2 - sumY * sumY));
    const pearsons = denominator === 0 ? 0 : numerator / denominator;
    
    return {
      slope,
      average,
      intercept,
      stdDev,
      upDev,
      downDev,
      pearsons
    };
  }

  // Export regression trend study item function
  moduleExports.regressionTrendStudyItem = regressionTrendStudyItem;
}
