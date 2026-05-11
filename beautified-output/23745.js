/**
 * Module 23745 - Quick Search Visibility Check
 * 
 * Determines if the quick search should be shown on the library/chart page.
 * Checks device type, page context, and feature flags.
 * 
 * @module QuickSearchVisibility
 * @see Mobile detection (49483)
 * @see Mobile app page (84015)
 * @see Feature flags (37103)
 */

import { CheckMobile } from './49483-mobile-detection.js';
import { isOnMobileAppPage } from './84015-mobile-app-page.js';
import { enabled as isFeatureEnabled } from './37103-feature-flags.js';

/**
 * Check if quick search should be shown
 * @returns {boolean} True if quick search should be visible
 */
export function shouldShowQuickSearchOnLib() {
  return !CheckMobile.any() && 
         !isOnMobileAppPage("any") && 
         !isFeatureEnabled("widget") && 
         isFeatureEnabled("header_quick_search");
}

export default shouldShowQuickSearchOnLib;

// ============================================================================
// RESTORATION COMPLETE - TIER A+
// ============================================================================
// Variable mapping:
// - e → unused
// - t → unused
// - i → unused
// - s → mobileDetection (CheckMobile class)
// - o → mobileAppPage (isOnMobileAppPage function)
// - n → featureFlags (enabled function)
// - r → shouldShowQuickSearchOnLib (exported function)
// ============================================================================