# Variable Naming Registry

## Purpose
This registry ensures consistent and semantic variable naming across all renamed modules in the TradingView reverse engineering project. Use this as a reference when renaming variables to maintain consistency.

---

## Color Variables (Module 4783 - Indicators)

| Original | Semantic Name | Description | Usage |
|----------|---------------|-------------|-------|
| `n` | `colorRipeRed100` | Light ripe red color | UI highlights |
| `r` | `colorRipeRed200` | Medium-light ripe red | Error states |
| `a` | `colorRipeRed500` | Primary ripe red | Main error indicators |
| `l` | `colorRipeRed900` | Dark ripe red | Critical errors |
| `c` | `colorRipeRedA200` | Accent ripe red | Alert backgrounds |
| `h` | `colorMintyGreen100` | Light minty green | Success highlights |
| `d` | `colorMintyGreen400` | Medium minty green | Success states |
| `u` | `colorMintyGreen500` | Primary minty green | Success indicators |

**Source Module:** `58978.getHexColorByName`

---

## Standard Library (Module 19979)

| Original | Semantic Name | Description | Usage |
|----------|---------------|-------------|-------|
| `o` | `Std` | Standard library object | All study calculations |

### Std Library Methods (Common Patterns)

| Method | Description | Example Usage |
|--------|-------------|---------------|
| `Std.or()` | Logical OR | Combine conditions |
| `Std.and()` | Logical AND | Multiple conditions |
| `Std.eq()` | Equality check | Compare values |
| `Std.gt()` | Greater than | Price comparisons |
| `Std.lt()` | Less than | Price comparisons |
| `Std.le()` | Less than or equal | Boundary checks |
| `Std.abs()` | Absolute value | Distance calculations |
| `Std.max()` | Maximum value | Find highest |
| `Std.min()` | Minimum value | Find lowest |
| `Std.iff()` | Conditional (if-then-else) | Ternary operations |
| `Std.close()` | Close price | OHLC data access |
| `Std.high()` | High price | OHLC data access |
| `Std.low()` | Low price | OHLC data access |
| `Std.open()` | Open price | OHLC data access |
| `Std.volume()` | Volume | Volume data |
| `Std.cum()` | Cumulative sum | Running totals |
| `Std.sma()` | Simple moving average | Trend analysis |
| `Std.ema()` | Exponential moving average | Weighted trends |
| `Std.rma()` | Rolling moving average | Smoothed averages |
| `Std.stdev()` | Standard deviation | Volatility |
| `Std.sum()` | Sum over period | Aggregations |
| `Std.change()` | Change from previous bar | Momentum |
| `Std.highest()` | Highest value in period | Range analysis |
| `Std.lowest()` | Lowest value in period | Range analysis |
| `Std.highestbars()` | Bars since highest | Pattern detection |
| `Std.lowestbars()` | Bars since lowest | Pattern detection |
| `Std.tr()` | True range | Volatility (ATR) |
| `Std.atr()` | Average true range | Volatility indicator |
| `Std.alma()` | Arnaud Legoux MA | Advanced smoothing |
| `Std.hl2()` | (High + Low) / 2 | Typical price |
| `Std.ohlc4()` | (O+H+L+C) / 4 | Average price |
| `Std.fixnan()` | Fix NaN values | Data cleaning |
| `Std.new_var()` | Create new variable | State management |
| `Std.new_sym()` | Create new symbol | Multi-symbol studies |
| `Std.period()` | Get chart period | Timeframe detection |
| `Std.time()` | Bar timestamp | Time-based logic |
| `Std.error()` | Throw study error | Error handling |

---

## Context Variables (Study Execution)

| Original | Semantic Name | Description | Usage |
|----------|---------------|-------------|-------|
| `e` | `context` | Chart context object | Access chart data |
| `t` | `input` | Input function | Get user parameters |
| `this._context` | `this.context` | Stored context | Study methods |
| `this._input` | `this.input` | Stored input | Study methods |

### Context Methods

| Method | Description | Example |
|--------|-------------|---------|
| `context.new_var()` | Create stateful variable | `const close = context.new_var(Std.close(context))` |
| `context.new_sym()` | Add additional symbol | Load multi-timeframe data |
| `context.select_sym()` | Switch active symbol | For multi-symbol studies |
| `context.setMinimumAdditionalDepth()` | Set lookback bars | Ensure enough history |
| `context.symbol` | Symbol information | Access ticker, timezone, etc. |
| `context.symbol.time` | Current bar time | Timestamp access |
| `context.symbol.isNewBar` | New bar flag | Detect bar completion |
| `context.symbol.isLastBar` | Last bar flag | Real-time updates |

---

## Study Structure Variables

| Original | Semantic Name | Description | Usage |
|----------|---------------|-------------|-------|
| `s` | Varies by context | Temporary storage | Function-specific |
| `i` | Varies by context | Iterator/index | Loop counters |
| `n` | Varies by context | Temporary value | Calculations |
| `r` | Varies by context | Result/return | Computed values |
| `a` | Varies by context | Accumulator | Running calculations |
| `l` | Varies by context | Length/limit | Period sizes |
| `c` | Varies by context | Condition/compare | Logic checks |
| `h` | Varies by context | High/helper | Secondary values |
| `d` | Varies by context | Delta/difference | Changes |
| `u` | Varies by context | Upper/updated | Upper bands |

**Note:** These single-letter variables should be renamed based on their specific usage context within each function.

---

## Common Indicator Variables

### Moving Averages
| Variable | Semantic Name | Description |
|----------|---------------|-------------|
| `s` (period) | `windowSize` | MA calculation period |
| `n` (offset) | `offset` | Forward/backward shift |
| `r` (sigma) | `sigma` | Standard deviation multiplier |

### Bollinger Bands
| Variable | Semantic Name | Description |
|----------|---------------|-------------|
| `a` | `median` | Middle band (SMA) |
| `d` | `upperBand` | Upper band |
| `_` | `lowerBand` | Lower band |
| `p` | `bandwidth` | Band width (stdDev × multiplier) |

### Oscillators
| Variable | Semantic Name | Description |
|----------|---------------|-------------|
| `l` | `fastMA` | Fast moving average |
| `a` | `slowMA` | Slow moving average |
| `c` | `oscillatorValue` | Main oscillator output |
| `d` | `signalLine` | Signal line for crossovers |

### Trend Indicators
| Variable | Semantic Name | Description |
|----------|---------------|-------------|
| `s` | `plusDI` | Positive directional indicator |
| `n` | `minusDI` | Negative directional indicator |
| `r` | `diSum` | Sum of +DI and -DI |
| `a` | `adx` | Average Directional Index |

---

## Synchronization Enums (Module 1395)

| Original | Semantic Name | Value | Description |
|----------|---------------|-------|-------------|
| `s.Default` | `CreateLineToolSyncMode.Default` | 0 | Use global preference |
| `s.ForceOn` | `CreateLineToolSyncMode.ForceOn` | 1 | Always synchronize |
| `s.ForceOff` | `CreateLineToolSyncMode.ForceOff` | 2 | Never synchronize |

---

## Naming Conventions

### General Rules
1. **camelCase** for variables and functions
2. **PascalCase** for classes and constructors
3. **Descriptive names** over abbreviations (except common terms like MA, SMA, EMA)
4. **Context-specific** names (e.g., `closePrice` not just `price`)

### Prefix Guidelines
- `is` for booleans: `isNewBar`, `isVisible`
- `has` for flags: `hasVolume`, `hasError`
- `get` for getters: `getValue`, `getColor`
- `set` for setters: `setValue`, `setStyle`

### Suffix Guidelines
- `Array` for arrays: `pricesArray`, `volumesArray`
- `Map` for maps: `symbolMap`, `styleMap`
- `Fn` or `Func` for function references: `calculateFn`, `renderFunc`
- `Config` for configuration: `studyConfig`, `renderConfig`

---

## Study Metadata Fields

| Field | Description | Example |
|-------|-------------|---------|
| `name` | Full study name | "Bollinger Bands" |
| `shortDescription` | Abbreviated name | "BB" |
| `description` | Full description | "Bollinger Bands indicator" |
| `is_price_study` | Uses price scale | `true` |
| `is_hidden_study` | Hidden from menu | `false` |
| `isTVScript` | TradingView script | `false` |
| `scriptIdPart` | Script ID portion | "" |
| `format.type` | Price format | "inherit", "volume", "percent" |
| `format.precision` | Decimal places | 2, 4 |

---

## Plot Configuration

| Property | Description | Values |
|----------|-------------|--------|
| `linestyle` | Line style | 0=solid, 1=dashed, 2=dotted |
| `linewidth` | Line thickness | 1-4 |
| `plottype` | Plot type | 0=line, 1=histogram, 2=area |
| `trackPrice` | Show price label | true/false |
| `transparency` | Transparency % | 0-100 |
| `visible` | Show/hide | true/false |
| `color` | Line color | Hex string "#RRGGBB" |

---

## Input Types

| Type | Description | Properties |
|------|-------------|------------|
| `integer` | Whole number | min, max, defval |
| `float` | Decimal number | min, max, defval |
| `text` | String selection | options[], defval |
| `symbol` | Symbol selector | defval, isHidden |
| `resolution` | Timeframe | defval |
| `source` | Price source | options: open, high, low, close |

---

## File Organization Reference

```
renamed-modules/
├── *-series*.js          # Series/data modules
├── *-indicators.js       # Study definitions (4783)
├── *-sync-mode.js        # Sync enums (1395)
├── *-watched-value.js    # WatchedValue class (2072)
├── *-renderer*.js        # Rendering modules
└── *-utilities.js        # Helper functions
```

---

## Progress Tracking

| Module ID | Name | Status | Variables Renamed | Notes |
|-----------|------|--------|-------------------|-------|
| 4783 | Indicators Library | ⚠️ Beautified only | 0/8 | Colors need renaming |
| 1395 | CreateLineToolSyncMode | ✅ Complete | 3/3 | Fully documented |
| 2072 | WatchedValue | ✅ Complete | - | See module file |
| 2115 | Series | ✅ Complete | - | See module file |
| ... | ... | ... | ... | ... |

---

## How to Use This Registry

1. **Before renaming**: Check if a semantic name already exists in this registry
2. **During renaming**: Follow the naming conventions above
3. **After renaming**: Add new patterns to this registry for future reference
4. **For colors**: Use the color table for consistency across modules
5. **For Std methods**: Reference the Std library table for proper naming

---

## Contributing

When you discover new variable patterns or rename a module:
1. Document the original variable name
2. Choose a semantic name following conventions
3. Add it to the appropriate section above
4. Note the module where it was found
5. Include example usage if helpful

---

**Last Updated:** 2026-04-29  
**Maintained By:** Reverse Engineering Team  
**Version:** 1.0
