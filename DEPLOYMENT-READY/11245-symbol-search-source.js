/**
 * Module 11245: Symbol Search Data Source
 * 
 * Handles data fetching and filtering for the symbol search functionality.
 * Connects to various data providers (exchanges, brokers) and returns
 * matching symbols based on user input queries.
 * 
 * @module 11245
 * @namespace SymbolSearch
 */

/**
 * Represents a single symbol search result.
 * @typedef {Object} SymbolItem
 * @property {string} symbol - The ticker symbol.
 * @property {string} description - Full name/description of the instrument.
 * @property {string} exchange - Exchange code (e.g., 'NASDAQ', 'NYSE').
 * @property {string} type - Instrument type ('stock', 'forex', 'crypto', 'index').
 * @property {string} currency - Currency code (e.g., 'USD', 'EUR').
 * @property {string} providerId - ID of the data provider.
 * @property {number} volume - Trading volume (optional).
 * @property {number} marketCap - Market capitalization (optional).
 */

/**
 * Configuration for the search request.
 * @typedef {Object} SearchConfig
 * @property {string} query - Search term.
 * @property {string[]} types - Filter by instrument types.
 * @property {string[]} exchanges - Filter by specific exchanges.
 * @property {number} limit - Maximum number of results.
 */

/**
 * Performs a symbol search across all enabled providers.
 * 
 * @param {SearchConfig} config - Search configuration.
 * @returns {Promise<SymbolItem[]>} Array of matching symbols.
 */
export async function searchSymbols(config) {
    const { query, types = [], exchanges = [], limit = 30 } = config;
    
    if (!query || query.trim().length === 0) {
        return [];
    }

    const normalizedQuery = query.trim().toUpperCase();
    const results = [];

    // Simulate fetching from multiple providers
    const providers = getEnabledProviders();
    
    const promises = providers.map(provider => 
        fetchFromProvider(provider, normalizedQuery, types, exchanges)
    );

    const providerResults = await Promise.all(promises);
    
    // Merge and deduplicate results
    providerResults.forEach(batch => {
        batch.forEach(item => {
            if (!isDuplicate(results, item)) {
                results.push(item);
            }
        });
    });

    // Sort by relevance (exact match first, then volume)
    results.sort((a, b) => {
        const aExact = a.symbol === normalizedQuery ? 1 : 0;
        const bExact = b.symbol === normalizedQuery ? 1 : 0;
        
        if (aExact !== bExact) return bExact - aExact;
        
        return (b.volume || 0) - (a.volume || 0);
    });

    return results.slice(0, limit);
}

/**
 * Fetches results from a specific data provider.
 * @private
 */
async function fetchFromProvider(providerId, query, types, exchanges) {
    // Mock implementation - in real code this would be an API call
    console.log(`Searching provider ${providerId} for "${query}"`);
    
    // Simulated delay
    await new Promise(resolve => setTimeout(resolve, 50 + Math.random() * 100));
    
    // Generate mock results based on query
    return generateMockResults(query, types, exchanges, providerId);
}

/**
 * Generates mock search results for demonstration.
 * @private
 */
function generateMockResults(query, types, exchanges, providerId) {
    const mockData = [
        { symbol: query, description: `${query} Corp`, type: 'stock', exchange: 'NASDAQ' },
        { symbol: `${query}L`, description: `${query} Limited`, type: 'stock', exchange: 'LSE' },
        { symbol: `CRYPTO:${query}USD`, description: `${query} to USD`, type: 'crypto', exchange: 'BINANCE' }
    ];

    return mockData
        .filter(item => types.length === 0 || types.includes(item.type))
        .filter(item => exchanges.length === 0 || exchanges.includes(item.exchange))
        .map(item => ({
            ...item,
            providerId,
            currency: 'USD',
            volume: Math.floor(Math.random() * 1000000)
        }));
}

/**
 * Checks if a symbol already exists in the results list.
 * @private
 */
function isDuplicate(results, newItem) {
    return results.some(item => 
        item.symbol === newItem.symbol && item.exchange === newItem.exchange
    );
}

/**
 * Returns list of enabled data providers.
 * @private
 */
function getEnabledProviders() {
    return ['TV', 'ICE', 'CBOE', 'BINANCE', 'COINBASE'];
}

/**
 * Gets detailed information for a specific symbol.
 * 
 * @param {string} symbol - Full symbol string (e.g., 'NASDAQ:AAPL').
 * @returns {Promise<Object>} Detailed symbol info.
 */
export async function getSymbolDetails(symbol) {
    if (!symbol) return null;

    // Parse symbol parts
    const parts = symbol.split(':');
    const exchange = parts.length > 1 ? parts[0] : 'NASDAQ';
    const ticker = parts.length > 1 ? parts[1] : parts[0];

    // Mock details response
    return {
        symbol: ticker,
        exchange,
        description: `${ticker} Common Stock`,
        type: 'stock',
        currency: 'USD',
        session: 'market',
        timezone: 'America/New_York',
        minmov: 1,
        pricescale: 100,
        has_intraday: true,
        supported_resolutions: ['1', '5', '15', '30', '60', 'D', 'W', 'M']
    };
}

/**
 * Caches recent search results to improve performance.
 * @class
 */
export class SymbolSearchCache {
    constructor(maxSize = 100) {
        this.cache = new Map();
        this.maxSize = maxSize;
    }

    /**
     * Stores search results in cache.
     * @param {string} key - Cache key (usually the query).
     * @param {SymbolItem[]} data - Results to cache.
     */
    set(key, data) {
        if (this.cache.size >= this.maxSize) {
            // Remove oldest entry
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
        this.cache.set(key, {
            data,
            timestamp: Date.now()
        });
    }

    /**
     * Retrieves cached results if available and not expired.
     * @param {string} key - Cache key.
     * @param {number} ttlMs - Time to live in milliseconds.
     * @returns {SymbolItem[]|null} Cached data or null.
     */
    get(key, ttlMs = 300000) { // Default 5 minutes
        const entry = this.cache.get(key);
        if (!entry) return null;

        if (Date.now() - entry.timestamp > ttlMs) {
            this.cache.delete(key);
            return null;
        }

        return entry.data;
    }

    /**
     * Clears the entire cache.
     */
    clear() {
        this.cache.clear();
    }
}

/**
 * Creates a debounced version of the search function to avoid excessive API calls.
 * 
 * @param {Function} searchFn - The search function to debounce.
 * @param {number} delayMs - Delay in milliseconds.
 * @returns {Function} Debounced function.
 */
export function createDebouncedSearch(searchFn, delayMs = 300) {
    let timeoutId = null;
    let lastQuery = '';

    return function(config, callback) {
        const query = config.query;
        
        // Cancel previous request if query changed significantly
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        // If query is just an extension of the last one, might not need full search
        if (query.startsWith(lastQuery) && lastQuery.length > 2) {
            // Could implement incremental search optimization here
        }

        timeoutId = setTimeout(() => {
            lastQuery = query;
            searchFn(config).then(callback).catch(err => {
                console.error('Search failed:', err);
                callback([]);
            });
        }, delayMs);
    };
}

export default {
    searchSymbols,
    getSymbolDetails,
    SymbolSearchCache,
    createDebouncedSearch
};
