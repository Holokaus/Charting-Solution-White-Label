/**
 * Module 32544 - Quote Session Manager
 * 
 * Singleton manager for quote session instances.
 * Provides session creation, caching, and cleanup.
 * 
 * @module QuoteSessionManager
 * @see QuoteSession class (13607)
 */

import { QuoteSession } from './13607-quote-session.js';

const sessionCache = {};

/**
 * Get or create quote session instance
 * @param {string} sessionType - Session type (default: "full")
 * @returns {QuoteSession} Quote session instance
 */
export function getQuoteSessionInstance(sessionType = "full") {
  if (!sessionCache[sessionType]) {
    sessionCache[sessionType] = new QuoteSession(sessionType);
  }
  return sessionCache[sessionType];
}

/**
 * Destroy all quote sessions and clear cache
 */
export function destroyQuoteSessions() {
  for (const key in sessionCache) {
    if (sessionCache.hasOwnProperty(key)) {
      const session = sessionCache[key];
      if (session !== undefined) {
        session.destroy();
      }
      delete sessionCache[key];
    }
  }
}

export default { getQuoteSessionInstance, destroyQuoteSessions };

// ============================================================================
// RESTORATION COMPLETE - TIER A+
// ============================================================================
// Variable mapping:
// - e → sessionType (parameter with default)
// - t → session instance (local)
// - s → QuoteSessionClass (QuoteSession)
// - o → sessionCache (static cache object)
// - n → getQuoteSessionInstance (exported function)
// - r → destroyQuoteSessions (exported function)
// ============================================================================