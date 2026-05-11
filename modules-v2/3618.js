/**
 * Module 3618 - Input Title Translation Utilities
 * 
 * Provides translated titles for study inputs and pane labels.
 * Supports localization for different input types.
 * 
 * @module tv-input-translations
 */

import { t } from '11542';
import { translationContext } from '32856';

/**
 * Mapping of input keys to their display names
 */
const inputTitles = {
  PercentageLTP: 'Percentage LTP',
  Labels: 'Pane labels',
  LineFills: 'Line fills'
};

/**
 * Get translated title for an input
 * @param {string} key - The input key to translate
 * @returns {string} Translated title with proper context
 * 
 * @example
 * getTranslatedInputTitle('PercentageLTP') // Returns "Percentage LTP" (translated)
 * getTranslatedInputTitle('Labels') // Returns "Pane labels" (translated)
 * getTranslatedInputTitle('UnknownKey') // Returns "UnknownKey" (translated as-is)
 */
function getTranslatedInputTitle(key) {
  const title = inputTitles[key] ?? key;
  return t(title, { context: 'input' }, translationContext);
}

export { 
  getTranslatedInputTitle,
  inputTitles 
};

export default {
  getTranslatedInputTitle,
  inputTitles
};
