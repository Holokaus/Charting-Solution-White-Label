/**
 * Module 45580 - Line Tool Bars Pattern Mode
 *
 * @description Defines enumeration for bars pattern display modes in line tools
 * @dependencies None
 * @exports LineToolBarsPatternMode
 */

/**
 * Enumeration of display modes for bars pattern line tools
 * 
 * Controls how price data is visualized when using bars-based drawing tools
 * or pattern recognition features. Each mode represents a different way
 * to connect or display OHLC (Open, High, Low, Close) data points.
 *
 * @enum {number}
 * @property {number} Bars - Standard OHLC bars display
 * @property {number} Line - Simple line connecting prices
 * @property {number} OpenClose - Display only open and close markers
 * @property {number} LineOpen - Line connecting open prices
 * @property {number} LineHigh - Line connecting high prices
 * @property {number} LineLow - Line connecting low prices
 * @property {number} LineHL2 - Line connecting typical price ((High+Low)/2)
 * 
 * @example
 * // Set bars pattern to show high prices
 * const mode = LineToolBarsPatternMode.LineHigh;
 * applyBarsPattern(mode);
 * 
 * @example
 * // Compare different display modes
 * const modes = [
 *   LineToolBarsPatternMode.Bars,      // Full OHLC
 *   LineToolBarsPatternMode.Line,      // Simple line
 *   LineToolBarsPatternMode.LineHL2    // Typical price
 * ];
 */
const LineToolBarsPatternMode = {
  /** Standard OHLC bars - shows Open, High, Low, Close for each period */
  Bars: 0,
  
  /** Simple line chart - connects closing prices */
  Line: 1,
  
  /** Open-Close markers - shows only open and close points */
  OpenClose: 2,
  
  /** Line connecting open prices across periods */
  LineOpen: 3,
  
  /** Line connecting high prices (resistance line) */
  LineHigh: 4,
  
  /** Line connecting low prices (support line) */
  LineLow: 5,
  
  /** Line connecting HL2 typical price ((High + Low) / 2) */
  LineHL2: 6
};

module.exports = {
  LineToolBarsPatternMode
};
