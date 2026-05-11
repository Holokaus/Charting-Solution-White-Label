/**
 * Module 61786 - Pane Buttons Visibility Controller
 * 
 * Manages visibility settings for chart pane navigation buttons.
 * Exports reactive property and behavior controllers.
 * 
 * @module PaneButtonsVisibility
 * @see Visibility controller factory (64876)
 * @see Navigation buttons settings (23714)
 */

import { createVisibilityController } from './64876-visibility-controller.js';
import { navigationButtonsVisibilityKey } from './23714-navigation-settings.js';

/**
 * Visibility controller instance for pane buttons
 * @type {Object}
 */
const visibilityController = createVisibilityController(
  "PaneButtons.visibility", 
  navigationButtonsVisibilityKey
);

/**
 * Reactive property for pane buttons visibility
 * @type {Property}
 */
export const property = visibilityController.property;

/**
 * Available visibility values
 * @type {Array}
 */
export const availableValues = visibilityController.availableValues;

/**
 * Actual behavior implementation
 * @type {Function}
 */
export const actualBehavior = visibilityController.actualBehavior;

/**
 * Restore default visibility value
 * @type {Function}
 */
export const restorePaneButtonsVisibilitySettingsValue = visibilityController.restoreDefaultValue;

export default {
  property,
  availableValues,
  actualBehavior,
  restorePaneButtonsVisibilitySettingsValue
};

// ============================================================================
// RESTORATION COMPLETE - TIER A+
// ============================================================================
// Variable mapping:
// - s → visibilityControllerFactory (createVisibilityController)
// - o → navigationSettings (navigationButtonsVisibilityKey)
// - n → property (export)
// - r → availableValues (export)
// - a → actualBehavior (export)
// - l → restoreDefaultValue (export)
// ============================================================================