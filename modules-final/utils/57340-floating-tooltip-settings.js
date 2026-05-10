/**
 * ============================================================================
 * TRADINGVIEW MODULE 57340 - FLOATING TOOLTIP SETTINGS
 * ============================================================================
 *
 * Purpose: Settings adapter for chart floating tooltip configuration
 *
 * Size: 0.8 KB
 *
 * Function: getFloatingTooltipEnabled()
 *   - Gets floating tooltip enabled setting from JSON adapter
 *   - Creates WatchedValue for reactive updates
 *   - Syncs setting changes with WatchedValue
 *
 * Dependencies:
 *   - 1765: Settings adapter for JSON persistence
 *   - 22613: WatchedValue class
 *
 * Exports:
 *   - chartFloatingTooltipEnabledWV: WatchedValue<boolean> for tooltip state
 *
 * @module 57340
 * @category UI System
 * @subcategory Floating Tooltip
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    chartFloatingTooltipEnabledWV: () => chartFloatingTooltipEnabledWV
  });

  const settingsAdapter = moduleRequire(1765),
    WatchedValue = moduleRequire(22613);

  const FLOATING_TOOLTIP_SETTING = "chart_floating_tooltip_enabled";

  /**
   * Get floating tooltip enabled setting as WatchedValue
   * @returns {WatchedValue<boolean>} WatchedValue tracking tooltip state
   */
  function getFloatingTooltipEnabled() {
    return settingsAdapter.getJSON(FLOATING_TOOLTIP_SETTING, true);
  }

  // Create WatchedValue for reactive tooltip state
  const chartFloatingTooltipEnabledWV = new WatchedValue.WatchedValue(getFloatingTooltipEnabled());
  
  // Subscribe to setting changes and update WatchedValue
  settingsAdapter.onSync.subscribe(null, (() => {
    chartFloatingTooltipEnabledWV.setValue(getFloatingTooltipEnabled());
  }));
}
