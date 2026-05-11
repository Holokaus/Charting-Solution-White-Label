/**
 * Module 2872 - SVG Icon: Lock/Unlock
 * 
 * This module exports an SVG icon representing lock/unlock functionality.
 * Used in the TradingView UI for securing/unsecuring chart elements or settings.
 * 
 * @module 2872
 * @category UI/Icons
 */

/**
 * SVG icon markup for lock/unlock action
 * 
 * The icon features:
 * - A padlock shape with rounded rectangle body
 * - Shackle (loop) at the top indicating lock state
 * - Clean, minimal design suitable for toolbar buttons
 * - Consistent 28x28 pixel dimensions
 * 
 * @type {string} SVG markup as string
 * @constant
 * 
 * @example
 * // Usage in component
 * import lockIcon from '2872';
 * element.innerHTML = lockIcon;
 */
export const lockIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><g fill="none" fill-rule="evenodd" stroke="currentColor" transform="translate(6 3)"><rect width="15" height="12" rx="2" x=".5" y="8.5"/><path stroke-linecap="round" stroke-width="2" d="M8 15v2"/><path d="M11.5 4a3.5 3.5 0 0 0-7 0v4.5"/></g></svg>';

/**
 * Default export of the lock icon SVG
 */
export default lockIcon;
