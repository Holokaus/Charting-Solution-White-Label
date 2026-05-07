/**
 * Module 40153 - Date Format With Weekday Property
 *
 * @description Exports a reactive property for controlling whether dates include weekday names
 * @dependencies 
 *   - 1765 (settingsAdapter - settings storage and retrieval)
 *   - 41072 (createPrimitiveProperty - factory for primitive reactive properties)
 * @exports withWeekdayProperty
 */

const settingsAdapter = require(1765);
const { createPrimitiveProperty } = require(41072);

/** Settings key for date format with weekday preference */
const SETTING_KEY = 'date_format_with_weekday';

/**
 * Reads the current "show weekday" setting from user preferences
 * @returns {boolean} true if weekday should be shown in dates, false otherwise
 */
function readWeekdaySetting() {
  return settingsAdapter.getBool(SETTING_KEY, true);
}

/**
 * Reactive property controlling whether date formats include weekday names
 * 
 * When enabled, dates are displayed as "Monday, Jan 1, 2024"
 * When disabled, dates are displayed as "Jan 1, 2024"
 * 
 * This property automatically syncs with user settings:
 * - Changes are persisted to user preferences
 * - Server sync updates the local value
 * 
 * Default value: true (weekday shown by default)
 * 
 * @type {Object} Primitive property with value() and subscribe() methods
 * 
 * @example
 * // Subscribe to weekday format changes
 * withWeekdayProperty.subscribe(null, () => {
 *   const showWeekday = withWeekdayProperty.value();
 *   updateDateFormat(showWeekday);
 * });
 * 
 * @example
 * // Toggle weekday display
 * withWeekdayProperty.setValue(!withWeekdayProperty.value());
 */
const withWeekdayProperty = createPrimitiveProperty(readWeekdaySetting());

// Subscribe to property changes and persist to settings
withWeekdayProperty.subscribe(null, () => {
  settingsAdapter.setValue(SETTING_KEY, withWeekdayProperty.value());
});

// Sync with server settings when they update
settingsAdapter.onSync.subscribe(null, () => {
  withWeekdayProperty.setValue(readWeekdaySetting());
});

module.exports = {
  withWeekdayProperty
};
