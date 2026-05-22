# Method Verification Log

## Verification Notes

- **Source of truth:** TypeScript type definitions (`IChartingLibraryWidget` interface from `charting_library.d.ts`)
- **Runtime verification status:** NOT VERIFIED — No widget method was successfully called and observed at runtime
- **Blocker:** The automated test harness initialized the widget but `subscribe()` callbacks never fired and `chart()` method returned objects whose methods could not be reliably called. See `captured-events.json` for the full log of capture attempts.

## Methods

| # | Method | Signature | Called? | Return Value Captured? | Notes |
|---|--------|-----------|---------|----------------------|-------|
| 1 | `widget.onChartReady()` | `(callback: () => void): void` | ❌ No | ❌ No | Callback registered but never invoked within 30s timeout |
| 2 | `widget.subscribe()` | `(event: string, callback: (data?: any) => void): void` | ❌ No | ❌ No | `subscribe()` registered callbacks but no event ever triggered them |
| 3 | `widget.unsubscribe()` | `(event: string, callback: (data?: any) => void): void` | ❌ No | ❌ No | Not attempted |
| 4 | `widget.save()` | `(callback?: Function, options?: object): object` | ❌ No | ❌ No | Not attempted |
| 5 | `widget.load()` | `(state: object, options?: object, callback?: Function): void` | ❌ No | ❌ No | Not attempted |
| 6 | `widget.setSymbol()` | `(symbol: string, interval: string, onChartReady?: Function): void` | ❌ No | ❌ No | Method exists in type defs but not called at runtime |
| 7 | `widget.chart()` | `(index?: number): ChartAPI` | ❌ No | ❌ No | `chart()` returned an object but methods on it (e.g., `scrollToPosition()`) threw "is not a function" |
| 8 | `widget.remove()` | `(): void` | ❌ No | ❌ No | Not attempted |
| 9 | `widget.symbolInterval()` | `(): object` | ❌ No | ❌ No | Not attempted |
| 10 | `widget.getIntervals()` | `(): string[]` | ❌ No | ❌ No | Not attempted |
| 11 | `widget.setTimeFrame()` | `(timeframe: string): void` | ❌ No | ❌ No | Not attempted |
| 12 | `widget.getStudiesList()` | `(): StudyInfo[]` | ❌ No | ❌ No | Not attempted |
| 13 | `widget.getStudyInputs()` | `(studyName: string): object` | ❌ No | ❌ No | Not attempted |
| 14 | `widget.getStudyStyles()` | `(studyName: string): object` | ❌ No | ❌ No | Not attempted |
| 15 | `widget.addCustomCSSFile()` | `(filePath: string): void` | ❌ No | ❌ No | Not attempted |
| 16 | `widget.layout()` | `(): Layout` | ❌ No | ❌ No | Not attempted |
| 17 | `widget.setLayout()` | `(id: string): void` | ❌ No | ❌ No | Not attempted |
| 18 | `widget.layoutName()` | `(): string` | ❌ No | ❌ No | Not attempted |
| 19 | `widget.resetLayoutSizes()` | `(paneIndex: number): void` | ❌ No | ❌ No | Not attempted |
| 20 | `widget.setLayoutSizes()` | `(sizes: object): void` | ❌ No | ❌ No | Not attempted |
| 21 | `widget.changeTheme()` | `(theme: string, disableUndo?: boolean): void` | ❌ No | ❌ No | Not attempted |
| 22 | `widget.getTheme()` | `(): string` | ❌ No | ❌ No | Not attempted |
| 23 | `widget.activeChart()` | `(): ChartAPI` | ❌ No | ❌ No | Not attempted |
| 24 | `widget.activeChartIndex()` | `(): number` | ❌ No | ❌ No | Not attempted |
| 25 | `widget.chartsCount()` | `(): number` | ❌ No | ❌ No | Not attempted |
| 26 | `widget.setActiveChart()` | `(index: number): void` | ❌ No | ❌ No | Not attempted |
| 27 | `widget.selectLineTool()` | `(toolName: string, skipIfSameToolSelected?: boolean): void` | ❌ No | ❌ No | Not attempted |
| 28 | `widget.selectedLineTool()` | `(): string` | ❌ No | ❌ No | Not attempted |
| 29 | `widget.hideAllDrawingTools()` | `(): void` | ❌ No | ❌ No | Not attempted |
| 30 | `widget.lockAllDrawingTools()` | `(): void` | ❌ No | ❌ No | Not attempted |
| 31 | `widget.drawOnAllCharts()` | `(enabled: boolean): void` | ❌ No | ❌ No | Not attempted |
| 32 | `widget.drawOnAllChartsEnabled()` | `(): boolean` | ❌ No | ❌ No | Not attempted |
| 33 | `widget.undo()` | `(): void` | ❌ No | ❌ No | Not attempted |
| 34 | `widget.redo()` | `(): void` | ❌ No | ❌ No | Not attempted |
| 35 | `widget.clearUndoHistory()` | `(): void` | ❌ No | ❌ No | Not attempted |
| 36 | `widget.undoRedoState()` | `(): object` | ❌ No | ❌ No | Not attempted |
| 37 | `widget.takeScreenshot()` | `(): void` | ❌ No | ❌ No | Not attempted |
| 38 | `widget.takeClientScreenshot()` | `(callback: Function): void` | ❌ No | ❌ No | Not attempted |
| 39 | `widget.getLanguage()` | `(): string` | ❌ No | ❌ No | Not attempted |
| 40 | `widget.watchList()` | `(): WatchList` | ❌ No | ❌ No | Not attempted |
| 41 | `widget.news()` | `(): NewsWidget` | ❌ No | ❌ No | Not attempted |
| 42 | `widget.widgetbar()` | `(): WidgetBar` | ❌ No | ❌ No | Not attempted |
| 43 | `widget.headerReady()` | `(): Promise<void>` | ❌ No | ❌ No | Not attempted |

## Events

| # | Event | Subscribed? | Triggered? | Payload Captured? | Notes |
|---|-------|------------|------------|-------------------|-------|
| 1 | `onChartReady` | ✅ Yes | ❌ No | ❌ No | Callback never fired |
| 2 | `onSymbolChanged` | ✅ Yes | ❌ No | ❌ No | Callback never fired |
| 3 | `onIntervalChanged` | ✅ Yes | ❌ No | ❌ No | Callback never fired |
| 4 | `onStudyAdded` | ✅ Yes | ❌ No | ❌ No | Callback never fired |
| 5 | `onAutoSaveNeeded` | ❌ Not attempted | — | — | — |
| 6 | `onMarkClick` | ❌ Not attempted | — | — | — |
| 7 | `onTimescaleMarkClick` | ❌ Not attempted | — | — | — |
| 8 | `onDrawObjectClick` | ❌ Not attempted | — | — | — |
| 9 | `onDrawObjectEdit` | ❌ Not attempted | — | — | — |
| 10 | `onDrawObjectDelete` | ❌ Not attempted | — | — | — |
| 11 | `onStudyRemoved` | ❌ Not attempted | — | — | — |
| 12 | `onContextMenu` | ❌ Not attempted | — | — | — |
| 13 | `onShortcut` | ❌ Not attempted | — | — | — |
| 14 | `onMouseDown` | ❌ Not attempted | — | — | — |
| 15 | `onMouseUp` | ❌ Not attempted | — | — | — |
| 16 | `onGrayedObjectClicked` | ❌ Not attempted | — | — | — |

## Root Cause Analysis

The test harness (`event-capture-test.html`) successfully:
1. Loaded the charting library standalone bundle
2. Created a `TradingView.widget` instance with UDF datafeed
3. Obtained a widget object reference

But the following operations failed:
- `widget.chart().scrollToPosition()` threw "is not a function"
- `widget.chart().resetDataScale()` threw "is not a function"
- `widget.subscribe()` callbacks were never triggered for any event

**Likely cause:** The UDF datafeed mock returns valid responses, but the widget's internal chart engine may not fully initialize without a proper datafeed connection. The `subscribe()` event system may require the chart engine to be fully initialized before events can propagate, and the mock datafeed may not satisfy this requirement.
