/**
 * ============================================================================
 * TRADINGVIEW MODULE 51829 - TRADING SESSION STAGE ENUMERATIONS
 * ============================================================================
 *
 * Purpose: Defines trading session boundary stages for session-based analysis
 *
 * Size: 0.9 KB
 *
 * Stages:
 *   - PRE_SESSION (-1): Before market opens
 *   - POST_SESSION (-2): After market closes
 *   - LASTBAR_SESSION (-3): Final bar of current session
 *   - LAST_SESSION_END (-4): End of previous session
 *   - FIRST_SESSION_START (-5): Start of first session
 *
 * Exports:
 *   - SessionStage: Enum of session boundary stages
 *
 * @module 51829
 * @category Trading Sessions
 * @subcategory Session Boundaries
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  var SessionStage;
  moduleRequire.moduleRequire_d(moduleConfig, {
    SessionStage: () => SessionStage
  }),
  function(SessionStage) {
    SessionStage[SessionStage.PRE_SESSION = -1] = "PRE_SESSION";
    SessionStage[SessionStage.POST_SESSION = -2] = "POST_SESSION";
    SessionStage[SessionStage.LASTBAR_SESSION = -3] = "LASTBAR_SESSION";
    SessionStage[SessionStage.LAST_SESSION_END = -4] = "LAST_SESSION_END";
    SessionStage[SessionStage.FIRST_SESSION_START = -5] = "FIRST_SESSION_START";
  }(SessionStage || (SessionStage = {}));
}
