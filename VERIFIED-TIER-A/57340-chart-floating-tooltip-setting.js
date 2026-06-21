/**
 * Module 57340 - Chart Floating Tooltip Setting
 *
 * @description Exports a WatchedValue for the chart floating tooltip enabled state
 * @dependencies 
 *   - 1765 (settingsAdapter - settings storage and retrieval)
 *   - 22613 (WatchedValue - reactive value wrapper)
 * @exports chartFloatingTooltipEnabledWV
 */

const settingsAdapter = require(1765);
const { WatchedValue } = require(22613);

/** Settings key for floating tooltip preference */
const SETTING_KEY = 'chart_floating_tooltip_enabled';

/**
 * Reads the current floating tooltip enabled state from settings
 * @returns {boolean} true if floating tooltips are enabled, false otherwise
 */
function readFloatingTooltipSetting() {
  return settingsAdapter.getJSON(SETTING_KEY, true);
}

/**
 * WatchedValue that tracks the chart floating tooltip enabled state
 * 
 * This reactive value automatically syncs with user settings:
 * - When the value changes, it updates the persisted setting
 * - When settings sync from server, it updates the local value
 * 
 * Default value: true (floating tooltips enabled by default)
 * 
 * @type {WatchedValue<boolean>}
 * 
 * @example
 * // Subscribe to tooltip setting changes
 * chartFloatingTooltipEnabledWV.subscribe((enabled) => {
 *   if (enabled) {
 *     showFloatingTooltips();
 *   } else {
 *     hideFloatingTooltips();
 *   }
 * });
 * 
 * @example
 * // Toggle the setting
 * chartFloatingTooltipEnabledWV.setValue(!chartFloatingTooltipEnabledWV.value());
 */
const chartFloatingTooltipEnabledWV = new WatchedValue(readFloatingTooltipSetting());

// Subscribe to value changes and persist to settings
chartFloatingTooltipEnabledWV.subscribe(() => {
  settingsAdapter.setValue(SETTING_KEY, chartFloatingTooltipEnabledWV.value());
});

// Sync with server settings when they update
settingsAdapter.onSync.subscribe(null, () => {
  chartFloatingTooltipEnabledWV.setValue(readFloatingTooltipSetting());
});

module.exports = {
  chartFloatingTooltipEnabledWV
};
