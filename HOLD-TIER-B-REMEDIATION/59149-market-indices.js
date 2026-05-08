/**
 * ============================================================================
 * TRADINGVIEW MODULE 59149 - MARKET INDICES
 * ============================================================================
 *
 * Purpose: Market indices symbol definitions and mappings
 *
 * Size: 8.9 KB
 *
 * Features:
 *   - Market indices symbol definitions
 *   - Symbol to ticker mappings
 *   - Exchange information
 *   - Market index categories
 *   - Symbol metadata management
 *
 * Dependencies:
 *   - None (standalone module)
 *
 * Exports:
 *   - MARKET_INDICES: Market indices configuration object
 *
 * @module 59149
 * @category Market Data
 * @subpackage Market Indices
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  
  /**
   * Market indices configuration
   */
  const MARKET_INDICES = {
    // US Market Indices
    "E-Mini S&P 500": {
      symbol: "ES",
      description: "E-Mini S&P 500",
      exchange: "CME",
      category: "us_indices"
    },
    "E-Mini Nasdaq 100": {
      symbol: "NQ", 
      description: "E-Mini Nasdaq 100",
      exchange: "CME",
      category: "us_indices"
    },
    
    // Commodities
    "Gold": {
      symbol: "GC",
      description: "Gold Futures",
      exchange: "COMEX",
      category: "commodities"
    },
    "Silver": {
      symbol: "SI",
      description: "Silver Futures", 
      exchange: "COMEX",
      category: "commodities"
    },
    "Crude Oil WTI": {
      symbol: "CL",
      description: "Crude Oil WTI Futures",
      exchange: "NYMEX",
      category: "commodities"
    },
    "Natural Gas": {
      symbol: "NG",
      description: "Natural Gas Futures",
      exchange: "NYMEX",
      category: "commodities"
    },
    
    // Currency Pairs
    "Australian Dollar": {
      symbol: "6A",
      description: "Australian Dollar",
      exchange: "FOREX",
      category: "currencies"
    },
    
    // Additional Market Indices
    "Euro Stoxx 50": {
      symbol: "EURO50",
      description: "Euro Stoxx 50",
      exchange: "EUREX",
      category: "european_indices"
    },
    "FTSE 100": {
      symbol: "UK100",
      description: "FTSE 100",
      exchange: "LSE",
      category: "european_indices"
    },
    "DAX": {
      symbol: "DAX",
      description: "DAX Index",
      exchange: "XETRA",
      category: "european_indices"
    },
    "Nikkei 225": {
      symbol: "NKY",
      description: "Nikkei 225",
      exchange: "TSE",
      category: "asian_indices"
    },
    "Shanghai Composite": {
      symbol: "SSE",
      description: "Shanghai Composite",
      exchange: "SSE",
      category: "asian_indices"
    }
  };

  /**
   * Get market index by symbol
   * @param {string} symbol - Symbol to lookup
   * @returns {Object|null} Market index object or null
   */
  function getMarketIndexBySymbol(symbol) {
    for (const [name, config] of Object.entries(MARKET_INDICES)) {
      if (config.symbol === symbol) {
        return { name, ...config };
      }
    }
    return null;
  }

  /**
   * Get market index by name
   * @param {string} name - Name to lookup
   * @returns {Object|null} Market index object or null
   */
  function getMarketIndexByName(name) {
    const config = MARKET_INDICES[name];
    return config ? { name, ...config } : null;
  }

  /**
   * Get all market indices by category
   * @param {string} category - Category filter
   * @returns {Array} Array of market indices
   */
  function getMarketIndicesByCategory(category) {
    const result = [];
    
    for (const [name, config] of Object.entries(MARKET_INDICES)) {
      if (config.category === category) {
        result.push({ name, ...config });
      }
    }
    
    return result;
  }

  /**
   * Get all market indices
   * @returns {Array} Array of all market indices
   */
  function getAllMarketIndices() {
    return Object.entries(MARKET_INDICES).map(([name, config]) => ({
      name,
      ...config
    }));
  }

  /**
   * Search market indices
   * @param {string} query - Search query
   * @returns {Array} Array of matching indices
   */
  function searchMarketIndices(query) {
    if (!query) return getAllMarketIndices();
    
    const lowerQuery = query.toLowerCase();
    return getAllMarketIndices().filter(index => 
      index.name.toLowerCase().includes(lowerQuery) ||
      index.description.toLowerCase().includes(lowerQuery) ||
      index.symbol.toLowerCase().includes(lowerQuery)
    );
  }

  // Export the market indices configuration and utility functions
  moduleExports.MARKET_INDICES = MARKET_INDICES;
  moduleExports.getMarketIndexBySymbol = getMarketIndexBySymbol;
  moduleExports.getMarketIndexByName = getMarketIndexByName;
  moduleExports.getMarketIndicesByCategory = getMarketIndicesByCategory;
  moduleExports.getAllMarketIndices = getAllMarketIndices;
  moduleExports.searchMarketIndices = searchMarketIndices;
}
