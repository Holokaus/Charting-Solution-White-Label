/**
 * Module 32925 - Fetch Wrapper
 * 
 * Centralized fetch API wrapper with QA testing support.
 * Provides a simple pass-through to native window.fetch() with logging and QA hooks.
 * 
 * @module 32925-fetch-wrapper
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
 */

"use strict";

// Export the fetch function
i.d(t, {
  fetch: () => fetchWrapper
});

// Import logger
const LoggerModule = i(9343);

// Register QA globals for testing
new class QAGlobalsRegistrar {
  constructor(globalObj, propertyName) {
    this._testObject = globalObj[propertyName] = {};
  }
  
  provide(key, value) {
    this._testObject[key] = value;
  }
}(window, "qaGlobals");

// Initialize logger for fetch operations
const fetchLogger = (0, LoggerModule.getLogger)("Fetch");

/**
 * Wrapper function for native fetch API
 * @param {string} url - The URL to fetch
 * @param {RequestInit} options - Fetch options (method, headers, body, etc.)
 * @param {Object} additionalOptions - Additional custom options (currently unused)
 * @returns {Promise<Response>} Promise resolving to Response object
 */
function fetchWrapper(url, options, additionalOptions = {}) {
  return window.fetch(url, options);
}