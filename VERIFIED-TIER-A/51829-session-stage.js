/**
 * Module 51829 - Session Stage Enumeration
 *
 * @description Defines enumeration for trading session stages relative to current bar
 * @dependencies None
 * @exports SessionStage
 */

/**
 * Enumeration of session stages for time-based analysis
 * 
 * These values represent different phases of a trading session,
 * used for filtering data, rendering session markers, or calculating
 * session-based indicators.
 * 
 * Negative values indicate positions relative to the current session:
 * - PRE_SESSION: Before the current session opens
 * - POST_SESSION: After the current session closes
 * - LASTBAR_SESSION: The last bar of the current session
 * - LAST_SESSION_END: End of the previous/last complete session
 * - FIRST_SESSION_START: Start of the first session in range
 *
 * @enum {number}
 * @property {number} PRE_SESSION - Bars before session opens (-1)
 * @property {number} POST_SESSION - Bars after session closes (-2)
 * @property {number} LASTBAR_SESSION - Final bar within session (-3)
 * @property {number} LAST_SESSION_END - End point of last completed session (-4)
 * @property {number} FIRST_SESSION_START - Start point of first session in range (-5)
 * 
 * @example
 * // Check if current bar is in pre-session
 * if (stage === SessionStage.PRE_SESSION) {
 *     showPreSessionIndicator();
 * }
 * 
 * @example
 * // Filter bars by session stage
 * const sessionBars = bars.filter(bar => 
 *   bar.stage === SessionStage.LASTBAR_SESSION
 * );
 */
const SessionStage = {
  /** Pre-market or pre-session period */
  PRE_SESSION: -1,
  
  /** After-hours or post-session period */
  POST_SESSION: -2,
  
  /** The very last bar within the current session */
  LASTBAR_SESSION: -3,
  
  /** Mark the end boundary of the last completed session */
  LAST_SESSION_END: -4,
  
  /** Mark the start boundary of the first session in the displayed range */
  FIRST_SESSION_START: -5
};

module.exports = {
  SessionStage
};
