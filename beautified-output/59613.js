/**
 * Module 59613 - Change Interval Dialog
 * 
 * Async dialog for changing chart time intervals.
 * Handles lazy loading and race condition prevention.
 * 
 * @module ChangeIntervalDialog
 * @see Dialog loader module (59672)
 */

import { loadChangeIntervalDialog } from './59672-dialog-loader.js';

let currentDialogPromise = null;

/**
 * Show change interval dialog asynchronously
 * @param {string} currentInterval - Current chart interval
 * @returns {Promise} Dialog promise
 */
export function showChangeIntervalDialogAsync(currentInterval) {
  const dialogPromise = currentDialogPromise = loadChangeIntervalDialog().then(dialog => {
    // Only use result if this is still the current request
    if (dialogPromise === currentDialogPromise) {
      dialog.showChangeIntervalDialog(currentInterval);
    }
  });
  return dialogPromise;
}

export default showChangeIntervalDialogAsync;

// ============================================================================
// RESTORATION COMPLETE - TIER A+
// ============================================================================
// Variable mapping:
// - e → currentInterval (parameter)
// - t → dialogPromise (local promise)
// - i → dialog (loaded dialog instance)
// - s → dialogLoader (loadChangeIntervalDialog function)
// - o → currentDialogPromise (static variable)
// - n → showChangeIntervalDialogAsync (exported function)
// ============================================================================