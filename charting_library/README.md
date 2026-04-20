# TradingView Charting Library - Code Analysis & Beautification

This directory contains the beautified, simplified, and re-minified versions of the TradingView Charting Library standalone widget.

## Files Overview

| File | Size | Purpose |
|------|------|---------|
| `charting_library.standalone.js` | 72.5 KB | Original minified file (prettier-beautified) |
| `charting_library.standalone.beautified.js` | 72.5 KB | Prettier-formatted version with proper indentation |
| `charting_library.standalone.simple.js` | 72.7 KB | **READABLE VERSION** - With renamed variables |
| `charting_library.standalone.reminified.js` | 55.5 KB | Production-ready minified version (23% smaller!) |

## Quick Start

### View the Readable Version
```bash
cat charting_library.standalone.simple.js | less
```

### Re-minify for Production
```bash
npx terser charting_library.standalone.simple.js \
  -c -m \
  -o charting_library.standalone.minified.js \
  --reserved "mergeOptions,ChartWidget,getVersion,defaultWidgetOptions,debugModeEnabled,isChromeIOS,TradingView,ActionId"
```

### Using Esbuild (Alternative)
```bash
npx esbuild charting_library.standalone.simple.js \
  --minify \
  --keep-names \
  --outfile=charting_library.standalone.minified.js
```

## Renamed Variables (100% Confidence)

| Original | New Name | Purpose |
|----------|----------|---------|
| `Ve` | `mergeOptions` | Deep merge utility for options |
| `Be` | `ChartWidget` | Main widget class |
| `Me` | `getVersion` | Returns library version |
| `Fe` | `defaultWidgetOptions` | Default configuration object |
| `Ee` | `debugModeEnabled` | Debug mode flag |
| `Ne` | `isChromeIOS` | Chrome on iOS detection |

## Key Sections in the Code

### 1. Module Header (Lines 1-88)
- IIFE wrapper pattern
- Module-level variable declarations

### 2. Utility Functions (Lines 89-96)
- `mergeOptions()` - Deep object merging

### 3. ActionId Enum (Lines 97-452)
- All action identifiers for chart operations
- Alerts, charts, indicators, line tools, etc.

### 4. Helper Enums (Lines 453-1008)
- Various enumeration objects for chart configuration

### 5. Default Options (Lines 1009-1055)
- `defaultWidgetOptions` - Complete widget configuration schema

### 6. Version Function (Lines 1056-1059)
- `getVersion()` - Returns version string

### 7. ChartWidget Class (Lines 1060-1696)
Main class with methods:
- `constructor(options)` - Initialize widget
- `onChartReady(callback)` - Register ready handler
- `setSymbol(symbol, interval, callback)` - Change symbol
- `chart(index)` - Get chart API
- `save/load()` - Layout persistence
- `subscribe/unsubscribe()` - Event handling
- `remove()` - Cleanup

### 8. Browser Detection (Lines 1697-1705)
- `isChromeIOS` - Special handling for Chrome on iOS

### 9. Module Exports (Line 1706)
- Export `version` and `widget` to global scope

## Architecture

```
TradingView Widget
├── IIFE Wrapper (isolates scope)
├── ActionId Enum (all action constants)
├── mergeOptions() (utility)
├── defaultWidgetOptions (config schema)
├── ChartWidget Class
│   ├── Constructor (validates & initializes)
│   ├── iframe Creation (embeds chart)
│   ├── API Methods (public interface)
│   └── Event System (subscribe/unsubscribe)
└── Browser Detection (isChromeIOS)
```

## Usage Example

```javascript
// Create widget instance
const widget = new TradingView.widget({
  width: 800,
  height: 600,
  symbol: 'AAPL',
  interval: 'D',
  datafeed: yourDatafeedImplementation,
  library_path: '/charting_library/',
  locale: 'en',
  theme: 'light',
});

// Handle chart ready event
widget.onChartReady(() => {
  console.log('Chart is ready!');
  
  // Subscribe to events
  widget.subscribe('onAutoSaveNeeded', () => {
    widget.save(layout => {
      localStorage.setItem('chartLayout', layout);
    });
  });
});
```

## Legal Notice

**This analysis is for PERSONAL STUDY AND DEBUGGING ONLY.**

The TradingView Charting Library is proprietary commercial software. This beautified version:
- ✅ May be used for personal learning and debugging
- ✅ May be used for interoperability analysis
- ❌ Must NOT be redistributed
- ❌ Must NOT be used in production without a valid TradingView license

See: https://www.tradingview.com/charting-library/

## Documentation References

- [TradingView Charting Library Docs](https://www.tradingview.com/charting-library-docs/)
- [Widget Constructor Options](https://www.tradingview.com/charting-library-docs/getting_started/widget_constructor)
- [Widget Methods](https://www.tradingview.com/charting-library-docs/getting_started/widget_methods)
