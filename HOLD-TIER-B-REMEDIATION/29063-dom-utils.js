/**
 * ============================================================================
 * TRADINGVIEW MODULE 29063 - DOM UTILITIES
 * ============================================================================
 *
 * Purpose: DOM utilities for tooltip and element management
 *
 * Size: 8.2 KB
 *
 * Functions:
 *   - load: Load script with Promise
 *   - isX: Check X axis overflow
 *   - isY: Check Y axis overflow
 *   - getTooltipType: Get tooltip type
 *   - getTooltipData: Get tooltip data
 *
 * Features:
 *   - Script loading utilities
 *   - DOM element overflow detection
 *   - Tooltip type detection
 *   - Tooltip data extraction
 *   - Element compatibility checking
 *
 * Dependencies:
 *   - 21097: TVX window events
 *   - 51768: DOM utilities
 *   - 76422: DOM utilities
 *   - 38780: DOM utilities
 *
 * Exports:
 *   - load: Script loading function
 *   - isX: X axis check function
 *   - isY: Y axis check function
 *   - getTooltipType: Tooltip type getter function
 *   - getTooltipData: Tooltip data getter function
 *
 * @module 29063
 * @category DOM Utilities
 * @subcategory Element Management
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    load: () => load,
    isX: () => isX,
    isY: () => isY,
    getTooltipType: () => getTooltipType,
    getTooltipData: () => getTooltipData
  });

  const tvxWindowEvents = moduleRequire(21097),
    domUtils = moduleRequire(51768),
    domUtils2 = moduleRequire(76422),
    domUtils3 = moduleRequire(38780);

  /**
   * Load script with Promise
   * @param {Function} func - Function to load
   * @param {string} type - Loading type
   * @returns {Promise} Promise resolving to function result
   */
  function load(func, type = "x") {
    return "loading" !== document.readyState ? 
      type ? setTimeout(() => func(), 1) : func() : 
      new Promise(resolve => {
        document.addEventListener("DOMContentLoaded", () => func());
        resolve();
      });
  }

  /**
   * Check X axis overflow
   * @param {HTMLElement} element - Element to check
   * @param {string} type - Overflow type
   * @returns {boolean} True if overflow detected
   */
  function isX(element, type = "x") {
    let result = true;
    
    return "x" !== type && "both" !== type || 
           (element.offsetWidth < element.scrollWidth && 
            element.offsetHeight < element.scrollHeight) && 
           (result = false);
  }

  /**
   * Check Y axis overflow
   * @param {HTMLElement} element - Element to check
   * @param {string} type - Overflow type
   * @returns {boolean} True if overflow detected
   */
  function isY(element, type = "x") {
    let result = true;
    
    return "x" !== type && "both" !== type || 
           (element.offsetWidth < element.scrollWidth && 
            element.offsetHeight < element.scrollHeight) && 
           (result = false);
  }

  /**
   * Check if element is HTMLElement
   * @param {Node} element - Element to check
   * @param {string} type - Check type
   * @returns {boolean} True if HTMLElement
   */
  function checkElement(element, type) {
    for (const child of Array.from(element.children)) {
      if (child instanceof HTMLElement && checkElement(child, type)) {
        return false;
      }
    }
    return true;
  }

  /**
   * Get tooltip type from element
   * @param {HTMLElement} element - Element to check
   * @returns {Object|null} Tooltip type object or null
   */
  function getTooltipType(element) {
    const tooltipType = element.getAttribute("data-overflow-tooltip--direction");
    
    if (tooltipType) {
      return {
        type: tooltipType
      };
    }
    
    return null;
  }

  /**
   * Get tooltip data from element
   * @param {HTMLElement} element - Element to check
   * @returns {Object|null} Tooltip data object or null
   */
  function getTooltipData(element) {
    const tooltipHtml = element.getAttribute("data-overflow-tooltip-html");
    
    if (tooltipHtml) {
      return {
        type: "html",
        data: tooltipHtml
      };
    }
    
    const tooltipText = element.getAttribute("data-overflow-tooltip-text");
    
    if (tooltipText) {
      return {
        type: "text",
        data: tooltipText
      };
    }
    
    return null;
  }
}
