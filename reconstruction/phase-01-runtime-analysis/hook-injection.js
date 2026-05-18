// Runtime Hook Injection Script
// This script intercepts and logs key runtime behaviors of the TradingView library
// All logs are stored in window.hookLogs for later export

(function() {
    'use strict';

    // Initialize log storage
    window.hookLogs = {
        tradingViewObject: [],
        networkRequests: [],
        domElements: [],
        scriptLoads: [],
        errors: [],
        startTime: Date.now()
    };

    var logs = window.hookLogs;

    // Helper: Add timestamp to log entries
    function addTimestamp(entry) {
        entry.timestamp = Date.now() - logs.startTime;
        entry.wallTime = new Date().toISOString();
        return entry;
    }

    // Hook 1: Intercept TradingView object creation and property assignments
    var originalTradingView = window.TradingView;
    Object.defineProperty(window, 'TradingView', {
        get: function() {
            return originalTradingView;
        },
        set: function(value) {
            logs.tradingViewObject.push(addTimestamp({
                type: 'assignment',
                value: value,
                valueType: typeof value,
                constructor: value ? value.constructor.name : 'null'
            }));
            console.log('[Hook] TradingView object assigned:', typeof value);
            originalTradingView = value;
            
            // If it's an object, hook its property assignments
            if (value && typeof value === 'object') {
                hookObjectProperties(value, 'TradingView');
            }
        }
    });

    // Recursively hook object property assignments
    function hookObjectProperties(obj, path) {
        if (!obj || typeof obj !== 'object') return;
        
        var handler = {
            set: function(target, prop, value) {
                logs.tradingViewObject.push(addTimestamp({
                    type: 'property_set',
                    path: path + '.' + prop,
                    value: typeof value === 'function' ? '[function]' : value,
                    valueType: typeof value
                }));
                console.log('[Hook] Property set:', path + '.' + prop, '=', typeof value);
                return Reflect.set(target, prop, value);
            }
        };
        
        try {
            var proxy = new Proxy(obj, handler);
            Object.setPrototypeOf(obj, Object.getPrototypeOf(proxy));
        } catch (e) {
            // Proxy may fail for some objects, silently continue
        }
    }

    // Hook 2: Intercept XMLHttpRequest
    var OriginalXHR = window.XMLHttpRequest;
    window.XMLHttpRequest = function() {
        var xhr = new OriginalXHR();
        var requestData = {
            url: null,
            method: null,
            async: null,
            headers: {},
            startTime: Date.now()
        };

        // Hook open
        var originalOpen = xhr.open;
        xhr.open = function(method, url, async) {
            requestData.method = method;
            requestData.url = url;
            requestData.async = async;
            console.log('[Hook] XHR open:', method, url);
            return originalOpen.apply(xhr, arguments);
        };

        // Hook setRequestHeader
        var originalSetHeader = xhr.setRequestHeader;
        xhr.setRequestHeader = function(header, value) {
            requestData.headers[header] = value;
            return originalSetHeader.apply(xhr, arguments);
        };

        // Hook send
        var originalSend = xhr.send;
        xhr.send = function() {
            requestData.startTime = Date.now();
            return originalSend.apply(xhr, arguments);
        };

        // Hook readystatechange
        xhr.addEventListener('readystatechange', function() {
            if (xhr.readyState === 4) {
                logs.networkRequests.push(addTimestamp({
                    type: 'xhr',
                    method: requestData.method,
                    url: requestData.url,
                    async: requestData.async,
                    status: xhr.status,
                    statusText: xhr.statusText,
                    headers: requestData.headers,
                    duration: Date.now() - requestData.startTime
                }));
                console.log('[Hook] XHR complete:', requestData.method, requestData.url, xhr.status);
            }
        });

        return xhr;
    };

    // Hook 3: Intercept fetch
    if (window.fetch) {
        var originalFetch = window.fetch;
        window.fetch = function(input, init) {
            var url = typeof input === 'string' ? input : input.url;
            var method = (init && init.method) || 'GET';
            var startTime = Date.now();
            
            console.log('[Hook] fetch:', method, url);
            
            return originalFetch.apply(window, arguments).then(function(response) {
                logs.networkRequests.push(addTimestamp({
                    type: 'fetch',
                    method: method,
                    url: url,
                    status: response.status,
                    statusText: response.statusText,
                    duration: Date.now() - startTime
                }));
                console.log('[Hook] fetch complete:', method, url, response.status);
                return response;
            }).catch(function(error) {
                logs.networkRequests.push(addTimestamp({
                    type: 'fetch',
                    method: method,
                    url: url,
                    error: error.message,
                    duration: Date.now() - startTime
                }));
                throw error;
            });
        };
    }

    // Hook 4: Intercept document.createElement
    var originalCreateElement = document.createElement;
    document.createElement = function(tagName) {
        var element = originalCreateElement.apply(document, arguments);
        
        logs.domElements.push(addTimestamp({
            type: 'createElement',
            tagName: tagName.toLowerCase()
        }));
        
        // Special handling for script tags
        if (tagName.toLowerCase() === 'script') {
            var originalSetAttribute = element.setAttribute;
            element.setAttribute = function(name, value) {
                if (name === 'src') {
                    logs.scriptLoads.push(addTimestamp({
                        type: 'script_src',
                        src: value
                    }));
                    console.log('[Hook] Script tag src set:', value);
                }
                return originalSetAttribute.apply(element, arguments);
            });
            
            // Hook script load events
            element.addEventListener('load', function() {
                logs.scriptLoads.push(addTimestamp({
                    type: 'script_loaded',
                    src: element.src
                }));
                console.log('[Hook] Script loaded:', element.src);
            });
            
            element.addEventListener('error', function() {
                logs.scriptLoads.push(addTimestamp({
                    type: 'script_error',
                    src: element.src
                }));
                console.log('[Hook] Script error:', element.src);
            });
        }
        
        return element;
    };

    // Hook 5: Intercept console errors
    var originalError = console.error;
    console.error = function() {
        logs.errors.push(addTimestamp({
            message: Array.prototype.slice.call(arguments).join(' ')
        }));
        return originalError.apply(console, arguments);
    };

    // Hook 6: Intercept window.onerror
    window.addEventListener('error', function(event) {
        logs.errors.push(addTimestamp({
            type: 'window_error',
            message: event.message,
            filename: event.filename,
            lineno: event.lineno,
            colno: event.colno
        }));
    });

    // Hook 7: Intercept unhandled promise rejections
    window.addEventListener('unhandledrejection', function(event) {
        logs.errors.push(addTimestamp({
            type: 'unhandled_rejection',
            reason: event.reason
        }));
    });

    // Export logs to JSON
    window.exportHookLogs = function() {
        var dataStr = JSON.stringify(logs, null, 2);
        var dataBlob = new Blob([dataStr], {type: 'application/json'});
        var url = URL.createObjectURL(dataBlob);
        var link = document.createElement('a');
        link.href = url;
        link.download = 'hook-logs.json';
        link.click();
        URL.revokeObjectURL(url);
        console.log('[Hook] Logs exported to hook-logs.json');
    };

    // Log export instructions
    console.log('[Hook] Runtime hooks installed. Call window.exportHookLogs() to export logs.');
    console.log('[Hook] Logs are also available in window.hookLogs');

})();
