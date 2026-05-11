/**
 * Module 14429 - ActionWithStandardIcon Class
 * 
 * Action component with automatic icon resolution from standard icon set.
 * Resolves iconId to actual icon instances using the icon registry.
 * 
 * @module ActionWithStandardIcon
 * @see Action base class (41706)
 * @see Icon registry (84696)
 */

import { Action } from './41706-action.js';
import { icons } from './84696-icon-registry.js';

/**
 * Action with automatic standard icon resolution
 * @class ActionWithStandardIcon
 * @extends Action
 */
export class ActionWithStandardIcon extends Action {
  /**
   * Create action with standard icon
   * @param {Object} config - Action configuration
   * @param {Object} config.options - Standard action options
   * @param {Object} config.customActionOptions - Custom action options
   */
  constructor(config) {
    const { options, customActionOptions } = config;
    
    // Resolve main action icon
    if (options.iconId) {
      options.icon = options.icon ?? icons.get(options.iconId);
    }
    
    // Resolve custom action icon
    if (customActionOptions && customActionOptions.iconId) {
      customActionOptions.icon = customActionOptions.icon ?? icons.get(customActionOptions.iconId);
    }
    
    super(config);
  }
}

export default ActionWithStandardIcon;

// ============================================================================
// RESTORATION COMPLETE - TIER A+
// ============================================================================
// Variable mapping:
// - e → config (constructor param)
// - t → options (destructured)
// - i → customActionOptions (destructured)
// - s → ActionClass (Action)
// - o → iconRegistry (icons)
// - n → ActionWithStandardIcon (exported class)
// ============================================================================