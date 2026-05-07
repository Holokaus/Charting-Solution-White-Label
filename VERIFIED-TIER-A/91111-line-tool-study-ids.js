/**
 * Module 91111 - Line Tool Study IDs
 *
 * @description Maps line tool names to their corresponding study IDs
 * @dependencies None
 * @exports LineToolAnchoredVWAP
 * @exports LineToolRegressionTrend
 * @exports LineToolFixedRangeVolumeProfile
 * @exports LineToolVbPFixed
 */

/**
 * Mapping of line tool identifiers to their study plugin IDs
 * Used for resolving line tool types to actual study implementations
 */
const lineToolStudyIds = {
  /** Anchored Volume Weighted Average Price */
  LineToolAnchoredVWAP: 'AnchoredVWAP@tv-basicstudies',
  
  /** Regression Trend analysis tool */
  LineToolRegressionTrend: 'RegressionTrend@tv-basicstudies',
  
  /** Fixed Range Volume Profile (basic studies version) */
  LineToolFixedRangeVolumeProfile: 'VbPFixed@tv-basicstudies',
  
  /** Volume by Price Fixed (separate plugin version) */
  LineToolVbPFixed: 'VbPFixed@tv-volumebyprice'
};

module.exports = lineToolStudyIds;
