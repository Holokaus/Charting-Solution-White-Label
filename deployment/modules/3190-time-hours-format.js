/**
 * Module 3190 - Time Hours Format Settings
 * 
 * This module provides utilities for managing the time hours format setting
 * in TradingView charts (12-hour vs 24-hour format).
 * 
 * @module 3190
 * @category Settings/Time
 */

import { getValue, remove, setValue, onSync } from './1765-settings-adapter.js';
import { createPrimitiveProperty } from './41072-property-utils.js';

/**
 * Setting key for time hours format
 * @private @constant
 */
const TIME_HOURS_FORMAT_SETTING_KEY = 'time_hours_format';

/**
 * Default time format value (24-hour format)
 * @private @constant
 */
const DEFAULT_TIME_FORMAT = '24-hours';

/**
 * Gets the current time hours format setting value
 * Falls back to 24-hour format if not set
 * 
 * @private
 * @returns {string} Current time format ('24-hours' or '12-hours')
 */
function getCurrentTimeFormat() {
  return getValue(TIME_HOURS_FORMAT_SETTING_KEY, DEFAULT_TIME_FORMAT);
}

/**
 * Time hours format property
 * 
 * A reactive property that manages the time format setting.
 * Automatically syncs with persistent storage.
 * 
 * @type {Property<string>}
 * @public
 * 
 * @example
 * // Get current value
 * const format = timeHoursFormatProperty.value();
 * 
 * // Set new value
 * timeHoursFormatProperty.setValue('12-hours');
 */
export const timeHoursFormatProperty = createPrimitiveProperty(getCurrentTimeFormat());

/**
 * Restores time hours format settings to default value (24-hours)
 * 
 * This function:
 * 1. Resets the property value to '24-hours'
 * 2. Removes the persisted setting from storage
 * 
 * @public
 * 
 * @example
 * // Reset to default 24-hour format
 * restoreTimeHoursFormatSettingsValue();
 */
export function restoreTimeHoursFormatSettingsValue() {
  timeHoursFormatProperty.setValue(DEFAULT_TIME_FORMAT);
  remove(TIME_HOURS_FORMAT_SETTING_KEY);
}

// Auto-sync: Subscribe to settings changes
// When settings sync occurs, update property from storage
onSync.subscribe(null, () => {
  timeHoursFormatProperty.setValue(getCurrentTimeFormat());
});

// Auto-save: Subscribe to property changes
// When property changes, persist to storage
timeHoursFormatProperty.subscribe(null, () => {
  setValue(TIME_HOURS_FORMAT_SETTING_KEY, timeHoursFormatProperty.value());
});

/**
 * Available time format constants
 * @enum {string}
 * @public
 */
export const TimeFormat = {
  /** 24-hour format (e.g., 14:30) */
  HOURS_24: '24-hours',
  /** 12-hour format (e.g., 2:30 PM) */
  HOURS_12: '12-hours'
};

/**
 * Default exports
 */
export default {
  timeHoursFormatProperty,
  restoreTimeHoursFormatSettingsValue,
  TimeFormat
};
