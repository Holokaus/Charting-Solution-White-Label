/**
 * Module 1457 - SVG Icon: Copy/Clone
 * 
 * This module exports an SVG icon representing a copy or clone action.
 * Used in the TradingView UI for duplicate/copy functionality.
 * 
 * @module 1457
 * @category UI/Icons
 */

/**
 * SVG icon markup for copy/clone action
 * 
 * The icon features:
 * - Two overlapping rectangles suggesting duplication
 * - Clean, minimal design suitable for toolbar buttons
 * - Responsive stroke width and rounded corners
 * 
 * @type {string} SVG markup as string
 * @constant
 * 
 * @example
 * // Usage in component
 * import copyIcon from '1457';
 * element.innerHTML = copyIcon;
 */
export const copyIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><g fill="none" fill-rule="evenodd" stroke="currentColor"><path d="M13.111 18.5H10.5a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-8.389z"/><path d="M18.5 20v1.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1H8"/></g></svg>';

/**
 * Default export of the copy icon SVG
 */
export default copyIcon;
