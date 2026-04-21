# Module 2115: Series Data Handler Analysis

## Overview
Module 2115 (109.7 KB) is the core data management engine for TradingView charts. It handles:
- Price bar storage and retrieval (OHLCV data)
- Time scale mapping (timestamp to pixel coordinates)
- Session gap detection
- Symbol information formatting
- Data iterators for efficient rendering

## Key Classes Identified

### 1. `Series` (wi)
Main class representing a chart series (e.g., BTCUSD, SPY). Contains:
- Bar data arrays (time, open, high, low, close, volume)
- Symbol metadata
- Status indicators (delayed, market closed, etc.)

### 2. `SymbolInfoFormatter` (M function)
Formats symbol information for display in legends and tooltips:
```javascript
// Parses exchange listings like "NASDAQ:AAPL"
// Extracts ticker, interval, session info
// Handles special cases for Quandl data
```

### 3. `StatusProvider` (B class)
Manages series status messages:
- Market closed
- Delayed data
- Invalid symbol
- Exchange holidays

### 4. `TimeScaleUtils`
Helper functions for:
- Converting timestamps to X-coordinates
- Detecting gaps in trading sessions
- Handling different timezones

## Critical Functions

### `formatSymbolInfo(e)`
Parses raw symbol data into human-readable format:
- Splits "EXCHANGE:SYMBOL" patterns
- Extracts intervals ("1D", "1H", "5m")
- Formats adjustment types (dividends, splits)

### `isSessionOpen()`
Determines if market is currently trading based on:
- Session hours configuration
- Timezone settings
- Holiday calendars

## Data Flow
1. Raw data arrives from datafeed
2. `Series` class stores bars in typed arrays
3. `TimeScale` maps time to screen pixels
4. Renderer requests visible range via iterator
5. Gaps detected and rendered as breaks

## Next Steps
- Rename internal variables for clarity
- Document bar calculation methods
- Map indicator integration points
