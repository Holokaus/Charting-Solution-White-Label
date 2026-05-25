# Module 1765: Event System

## Confidence: [UNCERTAIN]

## Source Evidence
- **File:** `phase-00-unbundling/modules/1765.js`
- **Lines:** 3
- **Size:** 3933 bytes
- **Requires:** 6 modules (49483, 32925, 21097, 11417, 48096, 37103)
- **Required by:** 40 modules (3190, 3650, 5734, 6519, 6639, 7314, 9698, 11065, 12981, 14283, ...)

## Behavioral Spec

### Input
- Receives: exports object, require function, module object (standard webpack factory signature)
- Requires modules: 49483, 32925, 21097, 11417, 48096, 37103

### Process
- String literals found: use strict, s.tradingview.com, betacdn.tradingview.com, use_localstorage_for_settings, tradingview-widget, tradingview,  is not float (key: ,  is not int (key: , )');return s}function M(e,t,i={}){const s=, +(o=e,o.replace(/[-/\\^$*+?.()|[\]{}]/g,
- Code patterns: keyboard-event, event-system
- 
- 
- 
- Implements event subscription/dispatch

### Output
- Exports: default, getBool, getFloat, getInt, getJSON, getValue, keys, keysMask, loaded, loadedModel, onSync, remove, setJSON, setSettingsAdapter, setValue, sync
- To: 3190, 3650, 5734, 6519, 6639, 7314, 9698, 11065, 12981, 14283 and 30 more
- 

## Gaps / Unknowns
- Cannot determine: exact internal implementation details due to minification/obfuscation
- Why: module uses minified variable names and webpack factory pattern

