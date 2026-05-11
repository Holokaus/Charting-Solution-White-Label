/**
 * Module 87911 - Market Open Status Property
 * 
 * Reactive property for controlling market open status indicator display.
 * Synchronizes with user settings and provides reset functionality.
 * 
 * @module MarketOpenStatusProperty
 * @see Property factory (41072)
 * @see Settings module (1765)
 */

import { createPrimitiveProperty } from './41072-property-factory.js';
import { getBool, remove, onSync, setValue } from './1765-settings.js';

const MARKET_OPEN_KEY = "Chart.ShowMarketOpenStatus";
const DEFAULT_VALUE = true;

/**
 * Get current market open status setting
 * @returns {boolean} Current setting value
 */
function getMarketOpenSetting() {
  return getBool(MARKET_OPEN_KEY, DEFAULT_VALUE);
}

/**
 * Reactive property for market open status display
 * @type {Property}
 */
export const showMarketOpenStatusProperty = createPrimitiveProperty(getMarketOpenSetting());

/**
 * Restore market open status property to default
 */
export function restoreShowMarketOpenStatusProperty() {
  showMarketOpenStatusProperty.setValue(DEFAULT_VALUE);
  remove(MARKET_OPEN_KEY);
}

// Sync from settings changes
onSync.subscribe(null, () => {
  showMarketOpenStatusProperty.setValue(getMarketOpenSetting());
});

// Persist property changes to settings
showMarketOpenStatusProperty.subscribe(null, () => {
  setValue(MARKET_OPEN_KEY, showMarketOpenStatusProperty.value());
});

export default { showMarketOpenStatusProperty, restoreShowMarketOpenStatusProperty };

// ============================================================================
// RESTORATION COMPLETE - TIER A+
// ============================================================================
// Variable mapping:
// - s → propertyFactory (createPrimitiveProperty)
// - o → settings (getBool, remove, onSync, setValue)
// - n → MARKET_OPEN_KEY (constant)
// - r → DEFAULT_VALUE (constant)
// - a → getMarketOpenSetting (helper function)
// - l → showMarketOpenStatusProperty (export)
// - c → restoreShowMarketOpenStatusProperty (export)
// ============================================================================