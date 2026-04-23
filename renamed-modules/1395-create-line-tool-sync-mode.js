/**
 * Module 1395 - Create Line Tool Sync Mode
 * 
 * Defines the synchronization mode enumeration for creating line tools in TradingView.
 * This controls whether line tool creation should sync across charts, be forced on, or forced off.
 * 
 * @module 1395-create-line-tool-sync-mode
 * @original 1395:(e,t,i)=>{"use strict";var s;i.d(t,{CreateLineToolSyncMode:()=>s})...}
 */

/**
 * Enumeration defining the synchronization behavior when creating line tools.
 * 
 * Controls whether drawing a line tool on one chart should automatically create
 * the same tool on other synchronized charts.
 * 
 * @typedef {Object} CreateLineToolSyncMode
 * @property {number} Default - Use the global/user preference setting (value: 0)
 * @property {number} ForceOn - Always synchronize across charts, overriding preferences (value: 1)
 * @property {number} ForceOff - Never synchronize, even if preferences are enabled (value: 2)
 * 
 * @example
 * // Check sync mode
 * if (syncMode === CreateLineToolSyncMode.ForceOn) {
 *     // Always sync this tool across all linked charts
 *     syncToolToLinkedCharts(tool);
 * } else if (syncMode === CreateLineToolSyncMode.ForceOff) {
 *     // Keep this tool local to current chart only
 *     createLocalToolOnly(tool);
 * } else {
 *     // Respect user's global sync preference
 *     applyUserPreference(tool);
 * }
 */

/**
 * CreateLineToolSyncMode enumeration values.
 * 
 * These values control the synchronization behavior for line tool creation:
 * - Default (0): Follow the user's global synchronization preference
 * - ForceOn (1): Always synchronize the tool across all linked charts
 * - ForceOff (2): Never synchronize, keep the tool local to the current chart
 * 
 * @type {CreateLineToolSyncMode}
 * @readonly
 * @enum {number}
 */
const CreateLineToolSyncMode = {
    /**
     * Use the default/global synchronization setting.
     * The tool will sync based on the user's preferences in chart settings.
     * @type {number}
     * @default 0
     */
    Default: 0,
    
    /**
     * Force synchronization ON.
     * When drawing this tool, it will be created on all linked/synchronized charts
     * regardless of the user's global preference setting.
     * @type {number}
     * @default 1
     */
    ForceOn: 1,
    
    /**
     * Force synchronization OFF.
     * When drawing this tool, it will only appear on the current chart,
     * even if the user has global synchronization enabled.
     * @type {number}
     * @default 2
     */
    ForceOff: 2
};

// Freeze the enum to prevent modification
Object.freeze(CreateLineToolSyncMode);

/**
 * Helper function to check if a value is a valid sync mode.
 * @param {*} value - The value to validate
 * @returns {boolean} True if the value is a valid CreateLineToolSyncMode
 */
function isValidSyncMode(value) {
    return Object.values(CreateLineToolSyncMode).includes(value);
}

/**
 * Helper function to get the string name of a sync mode.
 * @param {number} mode - The sync mode value
 * @returns {string|null} The name of the mode or null if invalid
 */
function getSyncModeName(mode) {
    switch (mode) {
        case CreateLineToolSyncMode.Default:
            return 'Default';
        case CreateLineToolSyncMode.ForceOn:
            return 'ForceOn';
        case CreateLineToolSyncMode.ForceOff:
            return 'ForceOff';
        default:
            return null;
    }
}

// Export the module
export { CreateLineToolSyncMode, isValidSyncMode, getSyncModeName };
export default CreateLineToolSyncMode;
