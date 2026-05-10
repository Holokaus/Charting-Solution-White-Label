/**
 * ============================================================================
 * TRADINGVIEW MODULE 38780 - TOOLTIP MANAGER
 * ============================================================================
 *
 * Purpose: Tooltip management and display utilities
 *
 * Size: 14.2 KB
 *
 * Functions:
 *   - hide: Hide tooltip
 *   - show: Show tooltip
 *   - showOnElement: Show tooltip on element
 *   - clear: Clear tooltip content
 *
 * Features:
 *   - Tooltip DOM management
 *   - Element positioning
 *   - Content management
 *   - Event handling
 *   - Timeout management
 *
 * Dependencies:
 *   - 32563: Tooltip utilities
 *   - 50151: DOM utilities
 *   - 26709: DOM utilities
 *   - 50470: DOM utilities
 *   - 24640: DOM utilities
 *   - 40167: DOM utilities
 *   - 26867: DOM utilities
 *   - 77914: DOM utilities
 *   - 49483: DOM utilities
 *
 * Exports:
 *   - hide: Tooltip hide function
 *   - show: Tooltip show function
 *   - showOnElement: Tooltip show on element function
 *   - clear: Tooltip clear function
 *
 * @module 38780
 * @category UI System
 * @subcategory Tooltip Management
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.watchedValue_d(moduleConfig, {
    hide: () => hide,
    show: () => show,
    showOnElement: () => showOnElement,
    clear: () => clear
  });

  const TooltipUtils = moduleRequire(32563),
    DOMUtils = moduleRequire(50151),
    DOMUtils2 = moduleRequire(26709),
    DOMUtils3 = moduleRequire(50470),
    DOMUtils4 = moduleRequire(24640),
    DOMUtils5 = moduleRequire(40167),
    DOMUtils6 = moduleRequire(26867),
    DOMUtils7 = moduleRequire(77914),
    DOMUtils8 = moduleRequire(49483);

  let hideTimeout = 0;
  let showTimeout = 0;
  let clearTimeout = 0;

  /**
   * Clear all timeouts
   */
  function clearTimeouts() {
    clearTimeout(hideTimeout);
    clearTimeout(showTimeout);
    clearTimeout(clearTimeout);
  }

  /**
   * Get tooltip root element
   * @returns {HTMLElement} Tooltip root element
   */
  function getTooltipRoot() {
    const tooltipRoot = document.getElementById("tooltip-root-element");
    
    if (tooltipRoot) {
      return tooltipRoot;
    }
    
    const newTooltipRoot = document.createElement("div");
    newTooltipRoot.id = "tooltip-root-element";
    document.body.appendChild(newTooltipRoot);
    
    return newTooltipRoot;
  }

  /**
   * Clear tooltip content
   */
  function clear() {
    const tooltipRoot = getTooltipRoot();
    if (tooltipRoot) {
      tooltipRoot.innerHTML = "";
    }
  }

  /**
   * Show tooltip on element
   * @param {HTMLElement} element - Element to show tooltip on
   */
  function showOnElement(element) {
    clear();
    const tooltipRoot = getTooltipRoot();
    if (tooltipRoot) {
      tooltipRoot.appendChild(element);
    }
  }

  /**
   * Hide tooltip
   * @param {number} delay - Delay before hiding
   */
  function hide(delay = 0) {
    clearTimeouts();
    hideTimeout = setTimeout(() => {
      const tooltipRoot = getTooltipRoot();
      if (tooltipRoot) {
        tooltipRoot.style.display = "none";
      }
    }, delay);
  }

  /**
   * Show tooltip
   * @param {number} delay - Delay before showing
   */
  function show(delay = 0) {
    clearTimeouts();
    showTimeout = setTimeout(() => {
      const tooltipRoot = getTooltipRoot();
      if (tooltipRoot) {
        tooltipRoot.style.display = "block";
      }
    }, delay);
  }

  // Initialize tooltip system
  if (document.readyState === "interactive") {
    getTooltipRoot();
  } else {
    document.addEventListener("DOMContentLoaded", getTooltipRoot);
  }
}
