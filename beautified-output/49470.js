/**
 * Module 49470 - Trading Service Accessor
 * 
 * Provides access to the TradingView trading service singleton.
 * Returns null if the service is not registered.
 * 
 * @module TradingServiceAccessor
 * @see Service registry (16216)
 */

import { hasService, service } from './16216-service-registry.js';

const TRADING_SERVICE_ID = { id: "TradingService" };

/**
 * Get trading service instance
 * @returns {Object|null} Trading service or null if not available
 */
export function tradingService() {
  return hasService(TRADING_SERVICE_ID) ? service(TRADING_SERVICE_ID) : null;
}

export default tradingService;

// ============================================================================
// RESTORATION COMPLETE - TIER A+
// ============================================================================
// Variable mapping:
// - e → unused
// - t → unused
// - i → unused
// - s → serviceRegistry (hasService, service functions)
// - o → TRADING_SERVICE_ID (service identifier constant)
// - n → tradingService (exported function)
// ============================================================================