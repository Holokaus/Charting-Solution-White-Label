/**
 * Module 36947 - Line Tool Pitchfork Style
 *
 * @description Defines the enumeration for Pitchfork line tool styles
 * @dependencies None
 * @exports LineToolPitchforkStyle
 */

/**
 * Enumeration of Pitchfork line tool style variants
 * 
 * Pitchfork tools are technical analysis drawing tools used to identify
 * potential support/resistance levels based on trend lines.
 * 
 * @enum {number}
 * @property {number} Original - Standard Andrews' Pitchfork style
 * @property {number} Schiff - Modified Schiff Pitchfork variant
 * @property {number} Inside - Inside Pitchfork variant
 * @property {number} Schiff2 - Alternative Schiff Pitchfork style
 */
const LineToolPitchforkStyle = {
  /** Standard Andrews' Pitchfork - the original design */
  Original: 0,
  
  /** Schiff Pitchfork - modified proportions for different market conditions */
  Schiff: 1,
  
  /** Inside Pitchfork - variant drawn within the trend channel */
  Inside: 2,
  
  /** Alternative Schiff style - second variant of Schiff modification */
  Schiff2: 3
};

module.exports = {
  LineToolPitchforkStyle
};
