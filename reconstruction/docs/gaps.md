# Phase 2 API Documentation Gaps

## Verified Coverage

The Phase 2 documentation provides comprehensive coverage of the public API surface through runtime inspection and TypeScript definitions:

- ✓ 36 global TradingView namespace properties (widget constructor, enums, utility functions)
- ✓ 54+ widget constructor options documented with types and defaults
- ✓ 70+ widget instance methods with signatures, return types, and behavior
- ✓ 19+ subscribable events with complete payload structures
- ✓ 17 detailed event payload examples in JSON format
- ✓ Examples and use cases for all major API functions

## Known Limitations & Gaps

### 1. Advanced Chart Widget API (IChartWidgetApi)
**Status:** Referenced but not fully documented  
**Why:** The `chart(index?)` method returns an IChartWidgetApi object with 50+ additional methods for advanced chart manipulation (panes, series, studies, shapes, time scale).

**Recommendation:** Expand Phase 3 to document:
- `chart.createStudy()` - Study creation with overrides
- `chart.getStudyById()` - Study retrieval and manipulation
- `chart.createShape()` / `chart.removeShape()` - Drawing shape API
- `chart.getShapeById()` - Shape manipulation
- `chart.getPanes()` - Pane API for multi-pane layouts
- `chart.getSeries()` - Series data manipulation
- `chart.getTimeScale()` - Time axis manipulation

### 2. Datafeed Interface (IBasicDataFeed)
**Status:** Not documented (considered external adapter)  
**Why:** The datafeed interface is implemented by the user, not the library. Library only consumes it.

**Recommendation:** Document in separate UDF adapter documentation:
- `onReady(callback)` - Configuration callback
- `resolveSymbol(symbol, onResolve, onError)` - Symbol resolution
- `getBars(symbolInfo, resolution, periodParams, onHistoryCallback, onError, firstDataRequest)` - Bar data
- `subscribeBars()` - Real-time updates
- `unsubscribeBars()` - Subscription cleanup

### 3. Study API (IStudyApi)
**Status:** Referenced but not fully documented  
**Why:** Advanced study manipulation through `chart.getStudyById()` requires deep API knowledge.

**Recommendation:** Document:
- `applyOverrides(overrides)` - Apply style/input overrides
- `setChartType(type)` - Change study display type
- `getInputs()` - Retrieve current study inputs
- `getOptions()` - Get study configuration

### 4. Drawing Tools API
**Status:** Partially documented (via events)  
**Why:** Drawing objects are accessed through `chart.getShapeById()`, requiring detailed shape API knowledge.

**Recommendation:** Document shape manipulation:
- Shape types and their properties
- How to move, resize, edit drawing properties
- Accessing drawing data (points, colors, styles)

### 5. Series API (ISeries)
**Status:** Referenced but methods not documented  
**Why:** Only accessed via `chart.getSeries()` and requires deep internal knowledge.

**Recommendation:** Document:
- Series data access methods
- Price formatter access
- Series visibility and style control

### 6. Custom Indicators (PineJS)
**Status:** Function signature documented, implementation not  
**Why:** PineJS is a complex scripting language requiring separate documentation.

**Recommendation:** Reference PineJS documentation for custom indicator creation through `custom_indicators_getter`.

### 7. Trading Terminal Specific APIs
**Status:** Some options documented, methods not  
**Why:** Trading Platform-specific features (orders, positions, brackets) are platform-specific.

**Recommendation:** Document trading-specific interfaces:
- IBrokerTerminal - Broker integration
- Order and Position management
- Account Manager configuration
- Risk management features

### 8. Trading Customization Options
**Status:** Some options referenced, full schema not documented  
**Why:** TradingTerminalWidgetOptions extends ChartingLibraryWidgetOptions with 100+ additional trading-specific options.

**Recommendation:** Create separate documentation for:
- `trading_customization` object structure
- Order ticket customization
- Account manager layout
- Broker configuration

### 9. Theme Customization
**Status:** Options listed, full theme structure not documented  
**Why:** Custom themes require understanding of 100+ CSS property overrides.

**Recommendation:** Document theme structure:
- Color palettes for light/dark themes
- Component styling options
- How to create and apply themes

### 10. External Adapters (Save/Load, Settings)
**Status:** Options mentioned, interface not fully documented  
**Why:** External adapters are user-implemented, library only consumes them.

**Recommendation:** Document adapter interfaces:
- IExternalSaveLoadAdapter
- ISettingsAdapter
- IImageStorageAdapter

### 11. Advanced Layout & Multi-Chart Features
**Status:** Methods partially documented  
**Why:** Multi-chart layout API is complex and rarely used.

**Recommendation:** Document:
- Layout switching and management
- Multi-chart synchronization
- Pane resizing and management

### 12. Deprecated & Private Methods
**Status:** Not documented (intentional)  
**Why:** Methods starting with `_` (underscore) are private/internal implementation details.

**Note:** These are excluded from public API documentation per TypeScript conventions.

---

## Test Coverage Status

### Runtime Verified (✓)
- TradingView global object structure
- Widget constructor signature
- Common widget methods (save, load, setSymbol, etc.)
- Event subscription mechanism
- Chart API access via chart() method

### Type-Definition Verified (✓)
- Widget options types and defaults
- Method signatures and return types
- Event payload structures
- Global enum definitions

### Not Fully Tested (✗)
- Advanced chart widget API methods
- Datafeed adapter implementation  
- Custom indicator creation via PineJS
- Trading terminal specific features
- Multi-chart layout synchronization
- External data adapters

---

## Verification Summary

**Total API Surface Covered:** ~60% of public API  
**Core User-Facing APIs:** ~80% coverage  
**Advanced/Specialized APIs:** ~30% coverage  

The Phase 2 documentation focuses on the most commonly used public APIs that users encounter when building charts. Advanced features and integrations are documented elsewhere or will be covered in subsequent phases.

---

## Recommendation for Phase 3

Phase 3 should focus on:

1. **Chart Widget API Deep Dive** - IChartWidgetApi methods and properties
2. **Custom Studies & Indicators** - PineJS scripting guide
3. **Trading Terminal Features** - Orders, positions, brackets, account manager
4. **Integration Examples** - Complete working code samples
5. **Performance Guide** - Best practices for large datasets
6. **Troubleshooting Guide** - Common issues and solutions

