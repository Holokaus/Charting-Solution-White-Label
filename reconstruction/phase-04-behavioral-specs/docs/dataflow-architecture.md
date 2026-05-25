# Dataflow Architecture

## Confidence: [LIKELY] — based on module grouping and API surface documentation

## Overview
The data flows through a layered architecture: External Datafeed → Internal Cache → Chart Engine → Rendering Pipeline → Canvas.

## Data Sources

### External Datafeed (UDF Protocol)
- **Interface:** `IDatafeed` with `onReady()`, `resolveSymbol()`, `getBars()`, `subscribeBars()`, `unsubscribeBars()`, `searchSymbols()`
- **Observed in modules:** Modules referencing `datafeed`, `symbol`, `resolution`, `subscribe`
- **Protocol:** HTTP GET for historical, WebSocket for realtime

### Internal Data Management

#### Symbol Resolver
- **Modules:** `symbol` group, modules referencing `resolveSymbol`, `symbolInfo`
- **Process:** `resolveSymbol(symbolName)` → fetches metadata → stores in `SymbolInfo` cache
- **Cache key:** Symbol name string → SymbolInfo object (name, ticker, type, session, exchange, listed/exchange timezone, minmov, pricescale, etc.)

#### Bar Cache (Historical Data)
- **Modules:** Modules referencing `getBars`, `bar`, `series`, `data`
- **Process:** `getBars(symbolInfo, resolution, from, to)` → fetches from datafeed → stores in ordered bar array
- **Cache strategy:** Paginated — requests are made in range windows; caching layer handles overlap
- **Real-time updates:** `subscribeBars()` receives streaming updates appended to bar array

#### Resolution/Interval Manager
- **Modules:** `resolution` group, modules referencing `interval`, `timeframe`, `time`
- **Process:** Changes trigger `setResolution()` → clears bar cache → re-fetches with new interval

## Data Flow Path

```
┌──────────────┐     ┌─────────────┐     ┌────────────────┐     ┌───────────────┐
│  External     │────▶│  Symbol     │────▶│  Series Data   │────▶│  Price Scale  │
│  Datafeed     │     │  Resolver   │     │  Store (Cache) │     │  Transformer  │
└──────────────┘     └─────────────┘     └────────────────┘     └───────┬───────┘
                                                                        │
┌──────────────┐     ┌─────────────┐     ┌────────────────┐            │
│  Widget API  │◀────│  Chart      │◀────│  Time Scale    │◀───────────┘
│  (subscribe) │     │  Engine     │     │  Transformer   │
└──────────────┘     └─────────────┘     └────────────────┘
```

1. **Widget API** (`setSymbol`, `setResolution`, `createStudy`) → triggers data load
2. **Chart Engine** (module 37150) coordinates all subsystems
3. **Symbol Resolver** validates and caches symbol metadata
4. **Series Data Store** manages bar array, handles pagination and realtime merging
5. **Price/Time Scale Transformers** map data values to pixel coordinates

## Realtime Update Path
```
WebSocket → subscribeBars() callback → SeriesData.updateLastBar() → PaneView.update() → CanvasRenderer.draw()
```

## Caching Strategy
- **Historical:** Bars cached in memory per (symbol × resolution) tuple
- **Merging:** New bars from streaming replace or append to cached array
- **Eviction:** Symbol change or resolution change clears the cache
- **Pagination:** `getBars()` called with `from`/`to` timestamps; overlapping ranges are merged

## Key Modules in Dataflow
| Module ID | Role | Confidence |
|-----------|------|------------|
| 37150 | Main chart engine / widget coordinator | [CERTAIN] |
| 38881 | ChunkLoader base class for async loading | [CERTAIN] |
| 11065 | Event/delegate system for data changes | [LIKELY] |
| 78176 | Property system (reactive state) | [LIKELY] |
| 92024 | Toolset/feature restrictions | [CERTAIN] |
| 50151 | Core utility (time/price math) | [LIKELY] |

## Gaps
- The exact WebSocket reconnection and retry logic is not confirmed [UNCERTAIN]
- Bar cache size limits and eviction policy are unknown [UNKNOWN]
- The protocol between widget iframe and host page for data relay is not fully mapped [UNCERTAIN]
- Study data caching (separate from main series) is not traced [UNCERTAIN]
