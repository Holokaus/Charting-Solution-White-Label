// Simple Runtime Hook Injection Script
// No complex Function.prototype manipulation - just basic logging

console.log('[Hook] Hook injection script loading...');

// Global logs object
window.hookLogs = {
    tradingViewObject: [],
    networkRequests: [],
    domElements: [],
    scriptLoads: [],
    errors: [],
    featureTriggers: [],
    startTime: Date.now()
};

var logs = window.hookLogs;
var currentFeature = null;
var featureStack = [];

// Helper: Add timestamp to log entries
function addTimestamp(entry) {
    entry.timestamp = Date.now() - logs.startTime;
    return entry;
}

// Hook: Intercept XMLHttpRequest
(function() {
    var OriginalXHR = window.XMLHttpRequest;
    window.XMLHttpRequest = function() {
        var xhr = new OriginalXHR();
        var requestData = {
            url: null,
            method: null,
            status: null,
            startTime: Date.now()
        };

        var originalOpen = xhr.open;
        xhr.open = function(method, url, async) {
            requestData.method = method;
            requestData.url = url;
            console.log('[Hook] XHR.open:', method, url);
            return originalOpen.apply(xhr, arguments);
        };

        var originalSend = xhr.send;
        xhr.send = function() {
            requestData.startTime = Date.now();
            return originalSend.apply(xhr, arguments);
        };

        xhr.addEventListener('readystatechange', function() {
            if (xhr.readyState === 4) {
                requestData.status = xhr.status;
                logs.networkRequests.push(addTimestamp({
                    type: 'xhr',
                    method: requestData.method,
                    url: requestData.url,
                    status: xhr.status,
                    duration: Date.now() - requestData.startTime,
                    feature: currentFeature
                }));
                console.log('[Hook] XHR.complete:', requestData.method, requestData.url, xhr.status);
            }
        });

        return xhr;
    };
})();

// Hook: Intercept fetch
(function() {
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
                    duration: Date.now() - startTime,
                    feature: currentFeature
                }));
                console.log('[Hook] fetch.complete:', method, url, response.status);
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
                console.log('[Hook] fetch.error:', method, url, error.message);
                throw error;
            });
        };
    }
})();

// Hook: Intercept document.createElement
(function() {
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
                    console.log('[Hook] script.src set:', value);
                }
                return originalSetAttribute.apply(element, arguments);
            };
            
            element.addEventListener('load', function() {
                logs.scriptLoads.push(addTimestamp({
                    type: 'script_loaded',
                    src: element.src,
                    feature: currentFeature
                }));
                console.log('[Hook] script.loaded:', element.src);
            });
            
            element.addEventListener('error', function() {
                logs.scriptLoads.push(addTimestamp({
                    type: 'script_error',
                    src: element.src,
                    feature: currentFeature
                }));
                console.log('[Hook] script.error:', element.src);
            });
        }
        
        return element;
    };
})();

// Hook: Intercept window errors
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

// Hook: Intercept unhandled promise rejections
window.addEventListener('unhandledrejection', function(event) {
    logs.errors.push(addTimestamp({
        type: 'unhandled_rejection',
        reason: String(event.reason),
        feature: currentFeature
    }));
});

// Feature trigger tracking functions
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
        console.log('[Hook] Feature tracking ended:', feature.name, 'duration:', Date.now() - feature.startTime);
    }
    currentFeature = featureStack.length > 0 ? featureStack[featureStack.length - 1].name : null;
};

// Export logs to JSON file
window.exportHookLogs = function() {
    var dataStr = JSON.stringify(logs, null, 2);
    var dataBlob = new Blob([dataStr], {type: 'application/json'});
    var url = URL.createObjectURL(dataBlob);
    var link = document.createElement('a');
    link.href = url;
    link.download = 'hook-logs.json';
    link.click();
    URL.revokeObjectURL(url);
    console.log('[Hook] Logs exported to hook-logs.json. Total requests:', logs.networkRequests.length);
};

// Export module behavior map
window.exportModuleBehaviorMap = function() {
    var moduleMap = {};
    
    logs.featureTriggers.forEach(function(trigger) {
        moduleMap[trigger.name] = {
            duration: trigger.duration,
            networkRequests: 0,
            domElements: 0,
            errors: 0
        };
    });
    
    logs.networkRequests.forEach(function(req) {
        var feature = req.feature || 'initialization';
        if (!moduleMap[feature]) {
            moduleMap[feature] = {
                duration: 0,
                networkRequests: 0,
                domElements: 0,
                errors: 0
            };
        }
        moduleMap[feature].networkRequests++;
    });
    
    logs.domElements.forEach(function(elem) {
        var feature = elem.feature || 'initialization';
        if (!moduleMap[feature]) {
            moduleMap[feature] = {
                duration: 0,
                networkRequests: 0,
                domElements: 0,
                errors: 0
            };
        }
        moduleMap[feature].domElements++;
    });
    
    logs.errors.forEach(function(err) {
        var feature = err.feature || 'initialization';
        if (!moduleMap[feature]) {
            moduleMap[feature] = {
                duration: 0,
                networkRequests: 0,
                domElements: 0,
                errors: 0
            };
        }
        moduleMap[feature].errors++;
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

console.log('[Hook] Hook injection script loaded successfully!');
console.log('[Hook] Available functions:');
console.log('[Hook]   - window.startFeatureTracking(name) - Start tracking a feature');
console.log('[Hook]   - window.endFeatureTracking() - End tracking current feature');
console.log('[Hook]   - window.exportHookLogs() - Export hook logs to JSON');
console.log('[Hook]   - window.exportModuleBehaviorMap() - Export module behavior map');
