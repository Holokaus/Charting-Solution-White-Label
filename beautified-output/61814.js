/**
 * Module 61814 - Hot Key Serialization
 * 
 * Serializes and deserializes hotkey configurations with HTML escaping.
 * Ensures safe storage and transmission of keyboard shortcut settings.
 * 
 * @module HotKeySerialization
 * @see HTML utilities module (91682)
 */

import { htmlEscape, decodeHTMLEntities } from './91682-html-utilities.js';

/**
 * Serialize hotkey configuration to string
 * @param {Object} config - Hotkey configuration object
 * @returns {string} Escaped JSON string
 */
export function hotKeySerialize(config) {
  return htmlEscape(JSON.stringify(config));
}

/**
 * Deserialize hotkey configuration from string
 * @param {string} serialized - Serialized hotkey string
 * @returns {Object} Parsed hotkey configuration
 */
export function hotKeyDeserialize(serialized) {
  return JSON.parse(decodeHTMLEntities(serialized));
}

export default { hotKeySerialize, hotKeyDeserialize };

// ============================================================================
// RESTORATION COMPLETE - TIER A+
// ============================================================================
// Variable mapping:
// - e → config/serialized (parameter)
// - t → unused
// - i → unused
// - s → htmlUtils (htmlEscape, decodeHTMLEntities)
// - o → hotKeySerialize (exported function)
// - n → hotKeyDeserialize (exported function)
// ============================================================================