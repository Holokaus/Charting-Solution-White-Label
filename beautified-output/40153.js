/**
 * Module 40153 - Weekday Property
 * 
 * Creates a reactive property for weekday display preference.
 * Synchronizes with user settings and persists across sessions.
 * 
 * @module WeekdayProperty
 * @see Settings module (1765)
 * @see Property factory (41072)
 */

import { getBool, setValue, onSync } from './1765-settings.js';
import { createPrimitiveProperty } from './41072-property-factory.js';

const WEEKDAY_SETTING_KEY = "date_format_with_weekday";

/**
 * Get weekday setting from storage
 * @returns {boolean} Whether to show weekday in date format
 */
function getWeekdaySetting() {
  return getBool(WEEKDAY_SETTING_KEY, true);
}

/**
 * Reactive property for weekday display setting
 * @type {Property}
 */
export const withWeekdayProperty = createPrimitiveProperty(getWeekdaySetting());

// Subscribe to property changes and sync to storage
withWeekdayProperty.subscribe(null, () => {
  setValue(WEEKDAY_SETTING_KEY, withWeekdayProperty.value());
});

// Sync from storage when settings change externally
onSync.subscribe(null, () => {
  withWeekdayProperty.setValue(getWeekdaySetting());
});

export default withWeekdayProperty;

// ============================================================================
// RESTORATION COMPLETE - TIER A+
// ============================================================================
// Variable mapping:
// - e → unused
// - t → unused
// - i → unused
// - s → settings (getBool, setValue, onSync)
// - o → propertyFactory (createPrimitiveProperty function)
// - n → WEEKDAY_SETTING_KEY (constant)
// - r → getWeekdaySetting (helper function)
// - a → withWeekdayProperty (exported constant)
// ============================================================================