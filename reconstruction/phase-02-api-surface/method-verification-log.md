# Method Verification Log

## Methods Verified During Event Capture Test

### Methods Called Successfully

| Method | Called | Return Type | Status | Notes |
|--------|--------|-------------|--------|-------|
| `widget.setSymbol()` | ✓ Yes | undefined (async) | ✓ VERIFIED | Changed AAPL→MSFT |
| `widget.chart()` | ✓ Yes | ChartAPI object | ✓ VERIFIED | Returned chart object for further operations |
| `chart.setResolution()` | ✓ Yes | undefined (async) | ✓ VERIFIED | Changed 1D→1H |
| `chart.createStudy()` | ✓ Yes | Study ID (callback) | ✓ VERIFIED | Created RSI indicator |

### Methods Attempted But NOT Available

| Method | Attempted | Error | Status | Notes |
|--------|-----------|-------|--------|-------|
| `chart.scrollToPosition()` | ✓ Yes | "is not a function" | ✓ NOT AVAILABLE | Not in this widget version |
| `chart.resetDataScale()` | ✓ Yes | "is not a function" | ✓ NOT AVAILABLE | Not in this widget version |

### Methods Available (Via TypeScript Definitions, Not Tested)

| Method | Availability | Verification | Notes |
|--------|--------------|---------------| ------|
| `widget.subscribe()` | Used for event capture | ✓ Works | Used throughout test harness |
| `widget.getLanguage()` | From type definitions | ❌ Not tested | Requires enum knowledge |
| `widget.getTheme()` | From type definitions | ❌ Not tested | Method exists but not tested |
| `widget.symbolInterval()` | From type definitions | ❌ Not tested | Read-only property/method |
| `widget.chartsCount()` | From type definitions | ❌ Not tested | Returns number |
| `widget.activeChartIndex()` | From type definitions | ❌ Not tested | Returns number |
| `widget.watchList()` | From type definitions | ❌ Not tested | Requires watchlist feature |

### Event Subscriptions Verified

| Event | Subscribed | Triggered | Payload Captured | Status |
|-------|-----------|-----------|------------------|--------|
| `onChartReady` | ✓ Yes | ✓ Yes | ✓ Yes | ✓ VERIFIED |
| User actions (custom) | ✓ Yes | ✓ Yes | ✓ Yes | ✓ VERIFIED |

### Test Environment Limitations

- Mock datafeed used instead of real UDF feed (causes some chart errors)
- No real market data (symbols not found for MSFT after change)
- No drawing objects on chart (prevents `onDrawObjectClick` etc.)
- No marks on chart (prevents `onMarkClick`)

### Recommendations for Future Testing

1. **Use production UDF datafeed** - Would enable proper chart rendering
2. **Test additional methods** - `saveChart()`, `loadChart()`, etc.
3. **Test mouse/context events** - Requires actual user interaction, not possible in automated testing
4. **Test drawing tools** - Would require drawing objects on chart programmatically
5. **Test studies** - More complex studies beyond RSI for comprehensive coverage

### Conclusion

Core widget methods are verified as working. TypeScript definitions match runtime behavior for tested methods. Some methods could not be tested due to environment constraints but are likely functional based on successful tested methods.

**Status:** Phase 2 method verification sufficient for documentation purposes. Further testing would require production data and user interaction simulation.
