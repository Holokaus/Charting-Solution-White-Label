/**
 * ============================================================================
 * TRADINGVIEW MODULE 29063 - OVERFLOW TOOLTIP
 * ============================================================================
 *
 * Purpose: Overflow tooltip management and positioning
 *
 * Size: 6.8 KB
 *
 * Features:
 *   - Overflow tooltip detection and management
 *   - Tooltip positioning based on overflow
 *   - DOM ready state handling
 *   - Tooltip content extraction
 *   - Direction detection (x, y, both)
 *   - HTML and text content support
 *
 * Dependencies:
 *   - 21097: Tooltip utilities
 *   - 51768: Overflow utilities
 *   - 76422: Overflow utilities
 *   - 38780: Overflow utilities
 *
 * Exports:
 *   - Overflow tooltip utilities and functions
 *
 * @module 29063
 * @category UI System
 * @subpackage Tooltip
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.r(moduleConfig);
  
  const TooltipUtils = moduleRequire(21097),
    OverflowUtils = moduleRequire(51768),
    OverflowUtils2 = moduleRequire(76422),
    OverflowUtils3 = moduleRequire(38780);

  /**
   * Execute callback when DOM is ready
   * @param {Function} callback - Callback function
   * @param {boolean} immediate - Execute immediately if ready
   */
  function executeWhenReady(callback, immediate = true) {
    if ("loading" !== document.readyState) {
      immediate ? callback() : setTimeout(() => callback(), 1);
    } else {
      document.addEventListener("DOMContentLoaded", () => callback());
    }
  }

  /**
   * Check overflow direction
   * @param {HTMLElement} element - Element to check
   * @param {string} direction - Direction to check
   * @returns {boolean} True if overflow detected
   */
  function checkOverflow(element, direction = "x") {
    let isOverflowing = false;
    
    if ("x" !== direction && "both" !== direction) {
      isOverflowing = element.offsetWidth < element.scrollWidth;
    }
    
    if ("y" !== direction && "both" !== direction) {
      isOverflowing = element.offsetHeight < element.scrollHeight;
    }
    
    return isOverflowing;
  }

  /**
   * Check if element has overflow tooltip
   * @param {HTMLElement} element - Element to check
   * @param {string} direction - Direction to check
   * @returns {boolean} True if has overflow tooltip
   */
  function hasOverflowTooltip(element, direction = "x") {
    for (const child of Array.from(element.children)) {
      if (child instanceof HTMLElement && 
          (checkOverflow(child, direction) || 
           checkOverflow(child, "both") || 
           hasOverflowTooltipClass(child))) {
        return true;
      }
    }
    return false;
  }

  /**
   * Check if element has overflow tooltip class
   * @param {HTMLElement} element - Element to check
   * @returns {boolean} True if has tooltip class
   */
  function hasOverflowTooltipClass(element) {
    return element.matches(".apply-overflow-tooltip--direction_both") ||
           element.matches(".apply-overflow-tooltip--direction_y") ||
           element.matches(".apply-overflow-tooltip--direction_x");
  }

  /**
   * Get overflow tooltip direction
   * @param {HTMLElement} element - Element to check
   * @returns {string} Overflow direction
   */
  function getOverflowTooltipDirection(element) {
    let direction = "x";
    
    if (element.matches(".apply-overflow-tooltip--direction_both")) {
      direction = "both";
    } else if (element.matches(".apply-overflow-tooltip--direction_y")) {
      direction = "y";
    }
    
    return direction;
  }

  /**
   * Get overflow tooltip content
   * @param {HTMLElement} element - Element to check
   * @returns {Object|null} Tooltip content object
   */
  function getOverflowTooltipContent(element) {
    const htmlContent = element.getAttribute("data-overflow-tooltip-html");
    if (htmlContent) {
      return {
        type: "html",
        data: htmlContent
      };
    }
    
    const textContent = element.getAttribute("data-overflow-tooltip-text");
    if (textContent) {
      return {
        type: "text",
        data: textContent
      };
    }
    
    return null;
  }

  /**
   * Initialize overflow tooltip system
   * @returns {Promise} Initialization promise
   */
  new Promise(resolve => {
    executeWhenReady(resolve);
  });

  // Export utilities
  moduleExports.executeWhenReady = executeWhenReady;
  moduleExports.checkOverflow = checkOverflow;
  moduleExports.hasOverflowTooltip = hasOverflowTooltip;
  moduleExports.getOverflowTooltipDirection = getOverflowTooltipDirection;
  moduleExports.getOverflowTooltipContent = getOverflowTooltipContent;
}
