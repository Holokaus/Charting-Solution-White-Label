/**
 * Module 3615 - Dialog Utilities
 * 
 * Provides UI dialog functions for user interactions:
 * - Rename dialogs
 * - Confirmation dialogs
 * - Warning dialogs
 * 
 * @module tv-dialogs
 */

import { showSimpleDialog } from '70493';

/**
 * Show a rename dialog to the user
 * @param {string} message - The message to display
 * @param {Function} callback - Callback function when dialog is closed
 * @returns {Promise} Promise resolving with user input
 */
async function showRename(message, callback) {
  await Promise.all([
    import(/* webpackChunkName: "chunk-3581" */ '3581'),
    import(/* webpackChunkName: "chunk-8185" */ '8185'),
    import(/* webpackChunkName: "chunk-1681" */ '1681'),
    import(/* webpackChunkName: "chunk-5371" */ '5371'),
    import(/* webpackChunkName: "chunk-2202" */ '2202'),
    import(/* webpackChunkName: "chunk-1171" */ '1171'),
    import(/* webpackChunkName: "chunk-6032" */ '6032'),
    import(/* webpackChunkName: "chunk-3672" */ '3672'),
    import(/* webpackChunkName: "chunk-2537" */ '2537'),
    import(/* webpackChunkName: "chunk-8894" */ '8894'),
    import(/* webpackChunkName: "chunk-5743" */ '5743'),
    import(/* webpackChunkName: "chunk-7780" */ '7780'),
    import(/* webpackChunkName: "chunk-4495" */ '4495'),
    import(/* webpackChunkName: "chunk-9323" */ '9323'),
    import(/* webpackChunkName: "chunk-159" */ '159'),
    import(/* webpackChunkName: "chunk-683" */ '683'),
    import(/* webpackChunkName: "chunk-6633" */ '6633'),
    import(/* webpackChunkName: "chunk-9658" */ '9658'),
    import(/* webpackChunkName: "chunk-2227" */ '2227'),
    import(/* webpackChunkName: "chunk-4931" */ '4931'),
    import(/* webpackChunkName: "chunk-3179" */ '3179'),
    import(/* webpackChunkName: "chunk-769" */ '769'),
    import(/* webpackChunkName: "chunk-5705" */ '5705'),
    import(/* webpackChunkName: "chunk-8890" */ '8890')
  ]);
  
  return showSimpleDialog(message, showSimpleDialog.renameModule, callback);
}

/**
 * Show a confirmation dialog to the user
 * @param {string} message - The message to display
 * @param {Function} callback - Callback function when dialog is closed
 * @returns {Promise} Promise resolving with user confirmation
 */
async function showConfirm(message, callback) {
  await Promise.all([
    import(/* webpackChunkName: "chunk-3581" */ '3581'),
    import(/* webpackChunkName: "chunk-8185" */ '8185'),
    import(/* webpackChunkName: "chunk-1681" */ '1681'),
    import(/* webpackChunkName: "chunk-5371" */ '5371'),
    import(/* webpackChunkName: "chunk-2202" */ '2202'),
    import(/* webpackChunkName: "chunk-1171" */ '1171'),
    import(/* webpackChunkName: "chunk-6032" */ '6032'),
    import(/* webpackChunkName: "chunk-3672" */ '3672'),
    import(/* webpackChunkName: "chunk-2537" */ '2537'),
    import(/* webpackChunkName: "chunk-8894" */ '8894'),
    import(/* webpackChunkName: "chunk-5743" */ '5743'),
    import(/* webpackChunkName: "chunk-7780" */ '7780'),
    import(/* webpackChunkName: "chunk-4495" */ '4495'),
    import(/* webpackChunkName: "chunk-9323" */ '9323'),
    import(/* webpackChunkName: "chunk-159" */ '159'),
    import(/* webpackChunkName: "chunk-683" */ '683'),
    import(/* webpackChunkName: "chunk-6633" */ '6633'),
    import(/* webpackChunkName: "chunk-9658" */ '9658'),
    import(/* webpackChunkName: "chunk-2227" */ '2227'),
    import(/* webpackChunkName: "chunk-4931" */ '4931'),
    import(/* webpackChunkName: "chunk-3179" */ '3179'),
    import(/* webpackChunkName: "chunk-769" */ '769'),
    import(/* webpackChunkName: "chunk-5705" */ '5705'),
    import(/* webpackChunkName: "chunk-8890" */ '8890')
  ]);
  
  return showSimpleDialog(message, showSimpleDialog.confirmModule, callback);
}

/**
 * Show a warning dialog to the user
 * @param {string} message - The message to display
 * @param {Function} callback - Callback function when dialog is closed
 * @returns {Promise} Promise resolving when dialog is closed
 */
async function showWarning(message, callback) {
  await Promise.all([
    import(/* webpackChunkName: "chunk-3581" */ '3581'),
    import(/* webpackChunkName: "chunk-8185" */ '8185'),
    import(/* webpackChunkName: "chunk-1681" */ '1681'),
    import(/* webpackChunkName: "chunk-5371" */ '5371'),
    import(/* webpackChunkName: "chunk-2202" */ '2202'),
    import(/* webpackChunkName: "chunk-1171" */ '1171'),
    import(/* webpackChunkName: "chunk-6032" */ '6032'),
    import(/* webpackChunkName: "chunk-3672" */ '3672'),
    import(/* webpackChunkName: "chunk-2537" */ '2537'),
    import(/* webpackChunkName: "chunk-8894" */ '8894'),
    import(/* webpackChunkName: "chunk-5743" */ '5743'),
    import(/* webpackChunkName: "chunk-7780" */ '7780'),
    import(/* webpackChunkName: "chunk-4495" */ '4495'),
    import(/* webpackChunkName: "chunk-9323" */ '9323'),
    import(/* webpackChunkName: "chunk-159" */ '159'),
    import(/* webpackChunkName: "chunk-683" */ '683'),
    import(/* webpackChunkName: "chunk-6633" */ '6633'),
    import(/* webpackChunkName: "chunk-9658" */ '9658'),
    import(/* webpackChunkName: "chunk-2227" */ '2227'),
    import(/* webpackChunkName: "chunk-4931" */ '4931'),
    import(/* webpackChunkName: "chunk-3179" */ '3179'),
    import(/* webpackChunkName: "chunk-769" */ '769'),
    import(/* webpackChunkName: "chunk-5705" */ '5705'),
    import(/* webpackChunkName: "chunk-8890" */ '8890')
  ]);
  
  return showSimpleDialog(message, showSimpleDialog.warningModule, callback);
}

export { 
  showRename, 
  showConfirm, 
  showWarning 
};

export default {
  showRename,
  showConfirm,
  showWarning
};
