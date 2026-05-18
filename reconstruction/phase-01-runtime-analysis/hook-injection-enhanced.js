// Enhanced Runtime Hook Injection Script for Module ID-to-Behavior Mapping
// This script intercepts function calls and captures stack traces during feature execution

(function() {
    'use strict';

    // Initialize log storage
    window.hookLogs = {
        tradingViewObject: [],
        networkRequests: [],
        domElements: [],
        scriptLoads: [],
        errors: [],
        functionCalls: [],
        featureTriggers: [],
        startTime: Date.now()
    };

    var logs = window.hookLogs;
    var featureStack = [];
    var currentFeature = null;

    // Helper: Add timestamp to log entries
    function addTimestamp(entry) {
        entry.timestamp = Date.now() - logs.startTime;
        entry.wallTime = new Date().toISOString();
        return entry;
    }

    // Helper: Capture stack trace
    function captureStackTrace() {
        var stack = new Error().stack;
        return stack ? stack.split('\n').slice(3, 10).map(function(line) {
            return line.trim();
        }) : [];
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
        }
    });

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

        var originalOpen = xhr.open;
        xhr.open = function(method, url, async) {
            requestData.method = method;
            requestData.url = url;
            requestData.async = async;
            console.log('[Hook] XHR open:', method, url);
            return originalOpen.apply(xhr, arguments);
        };

        var originalSetHeader = xhr.setRequestHeader;
        xhr.setRequestHeader = function(header, value) {
            requestData.headers[header] = value;
            return originalSetHeader.apply(xhr, arguments);
        };

        var originalSend = xhr.send;
        xhr.send = function() {
            requestData.startTime = Date.now();
            return originalSend.apply(xhr, arguments);
        };

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
                    duration: Date.now() - requestData.startTime,
                    feature: currentFeature
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
                    duration: Date.now() - startTime,
                    feature: currentFeature
                }));
                console.log('[Hook] fetch complete:', method, url, response.status);
                return response;
            }).catch(function(error) {
                logs.networkRequests.push(addTimestamp({
                    type: 'fetch',
                    method: method,
                    url: url,
                    error: error.message,
                    duration: Date.now() - startTime,
                    feature: currentFeature
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
            tagName: tagName.toLowerCase(),
            feature: currentFeature
        }));
        
        if (tagName.toLowerCase() === 'script') {
            var originalSetAttribute = element.setAttribute;
            element.setAttribute = function(name, value) {
                if (name === 'src') {
                    logs.scriptLoads.push(addTimestamp({
                        type: 'script_src',
                        src: value,
                        feature: currentFeature
                    }));
                    console.log('[Hook] Script tag src set:', value);
                }
                return originalSetAttribute.apply(element, arguments);
            });
            
            element.addEventListener('load', function() {
                logs.scriptLoads.push(addTimestamp({
                    type: 'script_loaded',
                    src: element.src,
                    feature: currentFeature
                }));
                console.log('[Hook] Script loaded:', element.src);
            });
            
            element.addEventListener('error', function() {
                logs.scriptLoads.push(addTimestamp({
                    type: 'script_error',
                    src: element.src,
                    feature: currentFeature
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
            message: Array.prototype.slice.call(arguments).join(' '),
            stack: captureStackTrace(),
            feature: currentFeature
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
            colno: event.colno,
            feature: currentFeature
        }));
    });

    // Hook 7: Intercept unhandled promise rejections
    window.addEventListener('unhandledrejection', function(event) {
        logs.errors.push(addTimestamp({
            type: 'unhandled_rejection',
            reason: event.reason,
            feature: currentFeature
        }));
    });

    // Hook 8: Global function call tracking (via global context)
    var callTrackingEnabled = false;
    
    window.enableCallTracking = function() {
        callTrackingEnabled = true;
        console.log('[Hook] Function call tracking enabled');
    };
    
    window.disableCallTracking = function() {
        callTrackingEnabled = false;
        console.log('[Hook] Function call tracking disabled');
    };

    // Feature trigger tracking
    window.startFeatureTracking = function(featureName) {
        currentFeature = featureName;
        featureStack.push({
            name: featureName,
            startTime: Date.now()
        });
        console.log('[Hook] Feature tracking started:', featureName);
    };

    window.endFeatureTracking = function() {
        if (featureStack.length > 0) {
            var feature = featureStack.pop();
            logs.featureTriggers.push(addTimestamp({
                name: feature.name,
                duration: Date.now() - feature.startTime
            }));
            console.log('[Hook] Feature tracking ended:', feature.name);
        }
        currentFeature = featureStack.length > 0 ? featureStack[featureStack.length - 1].name : null;
    };

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

    // Export module behavior map
    window.exportModuleBehaviorMap = function() {
        var moduleMap = {};
        
        // Group function calls by feature
        logs.functionCalls.forEach(function(call) {
            var feature = call.feature || 'initialization';
            if (!moduleMap[feature]) {
                moduleMap[feature] = {
                    functionName: {},
                    stackTraces: [],
                    networkRequests: [],
                    scriptLoads: []
                };
            }
            
            if (!moduleMap[feature].functionName[call.functionName]) {
                moduleMap[feature].functionName[call.functionName] = 0;
            }
            moduleMap[feature].functionName[call.functionName]++;
            
            if (call.stack && call.stack.length > 0) {
                moduleMap[feature].stackTraces.push(call.stack);
            }
        });
        
        // Add network requests per feature
        logs.networkRequests.forEach(function(req) {
            var feature = req.feature || 'initialization';
            if (!moduleMap[feature]) {
                moduleMap[feature] = {
                    functionName: {},
                    stackTraces: [],
                    networkRequests: [],
                    scriptLoads: []
                };
            }
            moduleMap[feature].networkRequests.push({
                type: req.type,
                url: req.url,
                method: req.method,
                status: req.status
            });
        });
        
        // Add script loads per feature
        logs.scriptLoads.forEach(function(script) {
            var feature = script.feature || 'initialization';
            if (!moduleMap[feature]) {
                moduleMap[feature] = {
                    functionName: {},
                    stackTraces: [],
                    networkRequests: [],
                    scriptLoads: []
                };
            }
            moduleMap[feature].scriptLoads.push({
                type: script.type,
                src: script.src
            });
        });
        
        var dataStr = JSON.stringify(moduleMap, null, 2);
        var dataBlob = new Blob([dataStr], {type: 'application/json'});
        var url = URL.createObjectURL(dataBlob);
        var link = document.createElement('a');
        link.href = url;
        link.download = 'module-behavior-map.json';
        link.click();
        URL.revokeObjectURL(url);
        console.log('[Hook] Module behavior map exported to module-behavior-map.json');
    };

    console.log('[Hook] Enhanced runtime hooks installed. Call window.exportHookLogs() to export logs. Call window.exportModuleBehaviorMap() to export module behavior map.');
    console.log('[Hook] Use window.startFeatureTracking(featureName) and window.endFeatureTracking() to track specific features.');
})();
