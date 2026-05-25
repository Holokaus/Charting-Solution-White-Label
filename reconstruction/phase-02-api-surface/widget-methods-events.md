
---
⚠️ DATA QUALITY WARNING: No widget methods were successfully called at runtime.
The test harness initialized the widget object but chart engine methods threw errors.
All method signatures are from TypeScript definitions (IChartingLibraryWidget interface).
Every method in this document is marked [NOT VERIFIED] unless explicitly noted.
---

# Widget Instance Methods & Events


## Overview

This document lists all public methods and events available on the widget instance returned by `new TradingView.widget(options)`.

**⚠️ NOT RUNTIME-VERIFIED: All method behaviors and event payloads in this document are based on TradingView's TypeScript type definitions (`IChartingLibraryWidget` interface), NOT from actual runtime method calls. Methods marked with `[NOT VERIFIED]` were never called at runtime.**

The widget instance implements the `IChartingLibraryWidget` interface with 101+ public methods and supports subscription to 20+ events.

---

## Core Chart Control Methods

### save(callback?, options?) `[NOT VERIFIED]`
- **Arguments:** Optional callback function, optional options object
- **Returns:** object (chart state serialized)
- **Side effects:** Serializes all chart configuration, studies, drawings, layout
- **Async:** No (but can optionally use callback)
- **Example:**
  ```javascript
  const state = widget.save();
  // State contains: chart properties, symbol, interval, studies, drawings, layout
  ```

### load(state, options?, callback?) `[NOT VERIFIED]`
- **Arguments:** Saved chart state object, optional options, optional callback
- **Returns:** undefined
- **Side effects:** Loads all chart configuration from saved state
- **Async:** Yes (network request to load data)
- **Example:**
  ```javascript
  widget.load(savedState, {}, () => {
    console.log('Chart loaded');
  });
  ```

### setSymbol(symbol, interval, onChartReady?) `[NOT VERIFIED]`
- **Arguments:** 
  - symbol: string (e.g., "AAPL")
  - interval: string (e.g., "1D")
  - onChartReady: optional callback function
- **Returns:** undefined
- **Side effects:** Changes symbol, fetches new data, updates chart
- **Async:** Yes (triggers datafeed.getBars request)
- **Example:**
  ```javascript
  widget.setSymbol("MSFT", "1H", () => {
    console.log('MSFT data loaded');
  });
  ```

### chart(index?) `[NOT VERIFIED]`
- **Arguments:** Optional chart index (for multi-chart layouts, defaults to 0)
- **Returns:** IChartWidgetApi (advanced chart API)
- **Side effects:** None
- **Async:** No
- **Example:**
  ```javascript
  const chartApi = widget.chart();
  ```

### remove() `[NOT VERIFIED]`
- **Arguments:** None
- **Returns:** undefined
- **Side effects:** Destroys widget, removes DOM elements, cleans up resources
- **Async:** No
- **Example:**
  ```javascript
  widget.remove();  // Widget fully destroyed
  ```

---

## Symbol & Resolution Methods

### symbolInterval() `[NOT VERIFIED]`
- **Arguments:** None
- **Returns:** object { symbol: string, interval: string }
- **Side effects:** None
- **Async:** No
- **Example:**
  ```javascript
  const current = widget.symbolInterval();
  // Returns: { symbol: "AAPL", interval: "1D" }

  // ---
  // [NOT VERIFIED] Payloads below are inferred from TypeScript definitions, not captured at runtime:
  // Symbol change: { "action": "changeSymbol", "from": "AAPL", "to": "MSFT" }
  // Interval change: { "action": "changeInterval", "from": "1D", "to": "1H" }
  // Study added: { "action": "addStudy", "study": "Relative Strength Index" }
  ```

### getIntervals() `[NOT VERIFIED]`
- **Arguments:** None
- **Returns:** string array of supported intervals
- **Side effects:** None
- **Async:** No
- **Example:**
  ```javascript
  const intervals = widget.getIntervals();
  // Returns: ["1", "5", "15", "30", "60", "240", "1D", "1W", "1M"]
  ```

### setTimeFrame(timeframe) `[NOT VERIFIED]`
- **Arguments:** TimeframeOption (e.g., "3M", "1D" or {from: timestamp, to: timestamp})
- **Returns:** undefined
- **Side effects:** Changes visible time range on chart
- **Async:** Yes (fetches data for new range)
- **Example:**
  ```javascript
  widget.setTimeFrame('3M');  // Last 3 months
  widget.setTimeFrame({ from: 1640995200, to: 1643673600 });
  ```

---

## Study & Indicator Methods

### getStudiesList() `[NOT VERIFIED]`
- **Arguments:** None
- **Returns:** string array of study names (107 built-in studies)
- **Side effects:** None
- **Async:** No
- **Example:**
  ```javascript
  const studies = widget.getStudiesList();
  // Contains: "Bollinger Bands", "MACD", "RSI", "Stochastic", etc.
  ```

### getStudyInputs(studyName) `[NOT VERIFIED]`
- **Arguments:** studyName: string (e.g., "Bollinger Bands")
- **Returns:** array of input definitions with type, default, min, max, etc.
- **Side effects:** None
- **Async:** No
- **Example:**
  ```javascript
  const inputs = widget.getStudyInputs("Bollinger Bands");
  // Returns array: [{ name: "length", type: "integer", min: 1, max: 100 }, ...]
  ```

### getStudyStyles(studyName) `[NOT VERIFIED]`
- **Arguments:** studyName: string
- **Returns:** array of style definitions (colors, line widths, etc.)
- **Side effects:** None
- **Async:** No
- **Example:**
  ```javascript
  const styles = widget.getStudyStyles("Moving Average");
  ```

### addCustomCSSFile(filePath) `[NOT VERIFIED]`
- **Arguments:** filePath: string (URL to CSS file)
- **Returns:** undefined
- **Side effects:** Injects custom CSS into chart
- **Async:** No
- **Example:**
  ```javascript
  widget.addCustomCSSFile("custom.css");
  ```

---

## Layout & Theme Methods

### layout() `[NOT VERIFIED]`
- **Arguments:** None
- **Returns:** string (current layout ID/name)
- **Side effects:** None
- **Async:** No
- **Example:**
  ```javascript
  const layout = widget.layout();  // e.g., "layout_1"
  ```

### setLayout(id) `[NOT VERIFIED]`
- **Arguments:** id: string (layout ID)
- **Returns:** undefined
- **Side effects:** Changes chart layout
- **Async:** No
- **Example:**
  ```javascript
  widget.setLayout("layout_1");
  ```

### layoutName() `[NOT VERIFIED]`
- **Arguments:** None
- **Returns:** string (human-readable layout name)
- **Side effects:** None
- **Async:** No
- **Example:**
  ```javascript
  const name = widget.layoutName();
  ```

### resetLayoutSizes(paneIndex) `[NOT VERIFIED]`
- **Arguments:** paneIndex: number
- **Returns:** undefined
- **Side effects:** Resets pane sizes to defaults
- **Async:** No
- **Example:**
  ```javascript
  widget.resetLayoutSizes(0);
  ```

### setLayoutSizes(sizes) `[NOT VERIFIED]`
- **Arguments:** sizes: object with pane dimensions
- **Returns:** undefined
- **Side effects:** Resizes chart panes
- **Async:** No
- **Example:**
  ```javascript
  widget.setLayoutSizes({ mainPane: 700, studyPane: 200 });
  ```

### changeTheme(theme, disableUndo?) `[NOT VERIFIED]`
- **Arguments:** theme: "light" | "dark", disableUndo: optional boolean
- **Returns:** undefined
- **Side effects:** Changes chart theme immediately
- **Async:** No
- **Example:**
  ```javascript
  widget.changeTheme("dark");
  ```

### getTheme() `[NOT VERIFIED]`
- **Arguments:** None
- **Returns:** string ("light" | "dark")
- **Side effects:** None
- **Async:** No
- **Example:**
  ```javascript
  const current = widget.getTheme();  // "light"
  ```

---

## Multi-Chart Methods

### activeChart() `[NOT VERIFIED]`
- **Arguments:** None
- **Returns:** IChartWidgetApi for active (focused) chart
- **Side effects:** None
- **Async:** No
- **Example:**
  ```javascript
  const active = widget.activeChart();
  ```

### activeChartIndex() `[NOT VERIFIED]`
- **Arguments:** None
- **Returns:** number (0-based index)
- **Side effects:** None
- **Async:** No
- **Example:**
  ```javascript
  const index = widget.activeChartIndex();
  ```

### chartsCount() `[NOT VERIFIED]`
- **Arguments:** None
- **Returns:** number of charts in layout
- **Side effects:** None
- **Async:** No
- **Example:**
  ```javascript
  const count = widget.chartsCount();
  ```

### setActiveChart(index) `[NOT VERIFIED]`
- **Arguments:** index: number (0-based)
- **Returns:** undefined
- **Side effects:** Focuses specified chart
- **Async:** No
- **Example:**
  ```javascript
  widget.setActiveChart(1);  // Focus second chart
  ```

### unloadUnusedCharts() `[NOT VERIFIED]`
- **Arguments:** None
- **Returns:** undefined
- **Side effects:** Unloads charts not currently visible
- **Async:** No
- **Example:**
  ```javascript
  widget.unloadUnusedCharts();
  ```

---

## Drawing Tool Methods

### selectLineTool(toolName, skipIfSameToolSelected?) `[NOT VERIFIED]`
- **Arguments:** toolName: string, optional skipIfSameToolSelected: boolean
- **Returns:** undefined
- **Side effects:** Activates drawing tool
- **Async:** No
- **Example:**
  ```javascript
  widget.selectLineTool("LineToolTrendline");
  ```

### selectedLineTool() `[NOT VERIFIED]`
- **Arguments:** None
- **Returns:** string (name of active drawing tool)
- **Side effects:** None
- **Async:** No
- **Example:**
  ```javascript
  const tool = widget.selectedLineTool();  // "LineToolTrendline"
  ```

### hideAllDrawingTools() `[NOT VERIFIED]`
- **Arguments:** None
- **Returns:** undefined
- **Side effects:** Hides all drawing toolbar buttons
- **Async:** No
- **Example:**
  ```javascript
  widget.hideAllDrawingTools();
  ```

### lockAllDrawingTools() `[NOT VERIFIED]`
- **Arguments:** None
- **Returns:** undefined
- **Side effects:** Disables all drawing tools (grayed out)
- **Async:** No
- **Example:**
  ```javascript
  widget.lockAllDrawingTools();
  ```

### drawOnAllCharts(enabled) `[NOT VERIFIED]`
- **Arguments:** enabled: boolean
- **Returns:** undefined
- **Side effects:** Enables/disables drawing on all charts in layout
- **Async:** No
- **Example:**
  ```javascript
  widget.drawOnAllCharts(true);
  ```

### drawOnAllChartsEnabled() `[NOT VERIFIED]`
- **Arguments:** None
- **Returns:** boolean
- **Side effects:** None
- **Async:** No
- **Example:**
  ```javascript
  const enabled = widget.drawOnAllChartsEnabled();
  ```

---

## Undo/Redo Methods

### undo() `[NOT VERIFIED]`
- **Arguments:** None
- **Returns:** undefined
- **Side effects:** Reverts last action
- **Async:** No
- **Example:**
  ```javascript
  widget.undo();
  ```

### redo() `[NOT VERIFIED]`
- **Arguments:** None
- **Returns:** undefined
- **Side effects:** Repeats last undone action
- **Async:** No
- **Example:**
  ```javascript
  widget.redo();
  ```

### clearUndoHistory() `[NOT VERIFIED]`
- **Arguments:** None
- **Returns:** undefined
- **Side effects:** Clears undo/redo history
- **Async:** No
- **Example:**
  ```javascript
  widget.clearUndoHistory();
  ```

### undoRedoState() `[NOT VERIFIED]`
- **Arguments:** None
- **Returns:** object { undo: boolean, redo: boolean }
- **Side effects:** None
- **Async:** No
- **Example:**
  ```javascript
  const state = widget.undoRedoState();
  // { undo: true, redo: false }
  ```

---

## Toolbar & UI Methods

### createButton(options) `[NOT VERIFIED]`
- **Arguments:** options: object { title, class, onclick }
- **Returns:** button object
- **Side effects:** Adds custom button to toolbar
- **Async:** No
- **Example:**
  ```javascript
  widget.createButton({
    title: "My Button",
    onclick: () => alert("Clicked!")
  });
  ```

### createDropdown(options) `[NOT VERIFIED]`
- **Arguments:** options: object with items array
- **Returns:** dropdown object
- **Side effects:** Adds custom dropdown to toolbar
- **Async:** No
- **Example:**
  ```javascript
  widget.createDropdown({
    items: ["Option 1", "Option 2"],
    onchange: (item) => console.log(item)
  });
  ```

### removeButton(buttonId) `[NOT VERIFIED]`
- **Arguments:** buttonId: string
- **Returns:** undefined
- **Side effects:** Removes custom button from toolbar
- **Async:** No
- **Example:**
  ```javascript
  widget.removeButton(buttonId);
  ```

### navigationButtonsVisibility() `[NOT VERIFIED]`
- **Arguments:** None
- **Returns:** object { back: boolean, forward: boolean }
- **Side effects:** None
- **Async:** No
- **Example:**
  ```javascript
  const nav = widget.navigationButtonsVisibility();
  ```

### paneButtonsVisibility() `[NOT VERIFIED]`
- **Arguments:** None
- **Returns:** object { indicators: boolean, ...}
- **Side effects:** None
- **Async:** No
- **Example:**
  ```javascript
  const paneButtons = widget.paneButtonsVisibility();
  ```

---

## Dialog Methods

### showLoadChartDialog() `[NOT VERIFIED]`
- **Arguments:** None
- **Returns:** undefined
- **Side effects:** Opens Load Chart dialog
- **Async:** No
- **Example:**
  ```javascript
  widget.showLoadChartDialog();
  ```

### showSaveAsChartDialog() `[NOT VERIFIED]`
- **Arguments:** None
- **Returns:** undefined
- **Side effects:** Opens Save As Chart dialog
- **Async:** No
- **Example:**
  ```javascript
  widget.showSaveAsChartDialog();
  ```

### showNoticeDialog(options) `[NOT VERIFIED]`
- **Arguments:** options: object { title, body, callback }
- **Returns:** undefined
- **Side effects:** Shows notice/info dialog
- **Async:** No
- **Example:**
  ```javascript
  widget.showNoticeDialog({
    title: "Notice",
    body: "This is a notice"
  });
  ```

### showConfirmDialog(options) `[NOT VERIFIED]`
- **Arguments:** options: object { title, body, onConfirm, onCancel }
- **Returns:** undefined
- **Side effects:** Shows confirmation dialog
- **Async:** No
- **Example:**
  ```javascript
  widget.showConfirmDialog({
    title: "Confirm",
    body: "Are you sure?",
    onConfirm: () => console.log("Confirmed")
  });
  ```

### closePopupsAndDialogs() `[NOT VERIFIED]`
- **Arguments:** None
- **Returns:** undefined
- **Side effects:** Closes all open popups and dialogs
- **Async:** No
- **Example:**
  ```javascript
  widget.closePopupsAndDialogs();
  ```

---

## Screenshots & Export

### takeScreenshot() `[NOT VERIFIED]`
- **Arguments:** None
- **Returns:** undefined
- **Side effects:** Opens screenshot dialog (if snapshot_url configured, saves to server)
- **Async:** No
- **Example:**
  ```javascript
  widget.takeScreenshot();
  ```

### takeClientScreenshot(callback) `[NOT VERIFIED]`
- **Arguments:** callback: function(canvas)
- **Returns:** undefined
- **Side effects:** Renders chart to canvas
- **Async:** No
- **Example:**
  ```javascript
  widget.takeClientScreenshot((canvas) => {
    // canvas is an HTMLCanvasElement
  });
  ```

---

## Sync Methods

### symbolSync() `[NOT VERIFIED]`
- **Arguments:** None
- **Returns:** object with sync config
- **Side effects:** None
- **Async:** No
- **Example:**
  ```javascript
  const syncConfig = widget.symbolSync();
  ```

### intervalSync() `[NOT VERIFIED]`
- **Arguments:** None
- **Returns:** object with sync config
- **Side effects:** None
- **Async:** No
- **Example:**
  ```javascript
  const syncConfig = widget.intervalSync();
  ```

### timeSync() `[NOT VERIFIED]`
- **Arguments:** None
- **Returns:** object with sync config
- **Side effects:** None
- **Async:** No
- **Example:**
  ```javascript
  const syncConfig = widget.timeSync();
  ```

### crosshairSync() `[NOT VERIFIED]`
- **Arguments:** None
- **Returns:** object with sync config
- **Side effects:** None
- **Async:** No
- **Example:**
  ```javascript
  const syncConfig = widget.crosshairSync();
  ```

### dateRangeSync() `[NOT VERIFIED]`
- **Arguments:** None
- **Returns:** object with sync config
- **Side effects:** None
- **Async:** No
- **Example:**
  ```javascript
  const syncConfig = widget.dateRangeSync();
  ```

### setIntervalLinkingEnabled(enabled) `[NOT VERIFIED]`
- **Arguments:** enabled: boolean
- **Returns:** undefined
- **Side effects:** Enables/disables interval syncing between charts
- **Async:** No
- **Example:**
  ```javascript
  widget.setIntervalLinkingEnabled(true);
  ```

### setDateRangeLinkingEnabled(enabled) `[NOT VERIFIED]`
- **Arguments:** enabled: boolean
- **Returns:** undefined
- **Side effects:** Enables/disables date range syncing between charts
- **Async:** No
- **Example:**
  ```javascript
  widget.setDateRangeLinkingEnabled(true);
  ```

---

## Formatting Methods

### mainSeriesPriceFormatter() `[NOT VERIFIED]`
- **Arguments:** None
- **Returns:** ISymbolValueFormatter object
- **Side effects:** None
- **Async:** No
- **Example:**
  ```javascript
  const formatter = widget.mainSeriesPriceFormatter();
  ```

### dateFormat() `[NOT VERIFIED]`
- **Arguments:** None
- **Returns:** object with format settings
- **Side effects:** None
- **Async:** No
- **Example:**
  ```javascript
  const format = widget.dateFormat();
  ```

### timeHoursFormat() `[NOT VERIFIED]`
- **Arguments:** None
- **Returns:** object with time format settings
- **Side effects:** None
- **Async:** No
- **Example:**
  ```javascript
  const format = widget.timeHoursFormat();
  ```

### currencyAndUnitVisibility() `[NOT VERIFIED]`
- **Arguments:** None
- **Returns:** object { currency: boolean, unit: boolean }
- **Side effects:** None
- **Async:** No
- **Example:**
  ```javascript
  const visibility = widget.currencyAndUnitVisibility();
  ```

---

## Server-Based Chart Methods

### getSavedCharts(callback) `[NOT VERIFIED]`
- **Arguments:** callback: function(charts: ChartMetaInfo[])
- **Returns:** undefined
- **Side effects:** Fetches list of saved charts from server
- **Async:** Yes
- **Example:**
  ```javascript
  widget.getSavedCharts((charts) => {
    console.log("Available charts:", charts);
  });
  ```

### loadChartFromServer(id) `[NOT VERIFIED]`
- **Arguments:** id: string or number (chart ID)
- **Returns:** undefined
- **Side effects:** Loads chart from server
- **Async:** Yes
- **Example:**
  ```javascript
  widget.loadChartFromServer(123);
  ```

### saveChartToServer(showDialog?, onSuccess?, onFail?) `[NOT VERIFIED]`
- **Arguments:** showDialog: boolean, success/fail callbacks
- **Returns:** undefined
- **Side effects:** Saves current chart to server
- **Async:** Yes
- **Example:**
  ```javascript
  widget.saveChartToServer(true, () => {
    console.log("Saved!");
  });
  ```

### removeChartFromServer(id, onSuccess?) `[NOT VERIFIED]`
- **Arguments:** id: string or number, optional success callback
- **Returns:** undefined
- **Side effects:** Deletes chart from server
- **Async:** Yes
- **Example:**
  ```javascript
  widget.removeChartFromServer(123, () => {
    console.log("Deleted!");
  });
  ```

---

## Additional UI Methods

### getLanguage() `[NOT VERIFIED]`
- **Arguments:** None
- **Returns:** string (language code, e.g., "en")
- **Side effects:** None
- **Async:** No
- **Example:**
  ```javascript
  const lang = widget.getLanguage();  // "en"
  ```

### watchList() `[NOT VERIFIED]`
- **Arguments:** None
- **Returns:** IWatchListApi object
- **Side effects:** None
- **Async:** No
- **Example:**
  ```javascript
  const watchList = widget.watchList();
  ```

### news() `[NOT VERIFIED]`
- **Arguments:** None
- **Returns:** INewsApi object (if enabled)
- **Side effects:** None
- **Async:** No
- **Example:**
  ```javascript
  const news = widget.news();
  ```

### widgetbar() `[NOT VERIFIED]`
- **Arguments:** None
- **Returns:** IWidgetbarApi object
- **Side effects:** None
- **Async:** No
- **Example:**
  ```javascript
  const widgetbar = widget.widgetbar();
  ```

### setDebugMode(enabled) `[NOT VERIFIED]`
- **Arguments:** enabled: boolean
- **Returns:** undefined
- **Side effects:** Enables/disables detailed console logging
- **Async:** No
- **Example:**
  ```javascript
  widget.setDebugMode(true);
  ```

### onChartReady(callback) `[NOT VERIFIED]`
- **Arguments:** callback: function()
- **Returns:** undefined
- **Side effects:** Executes callback when chart initialization is complete
- **Async:** No
- **Example:**
  ```javascript
  widget.onChartReady(() => {
    console.log("Chart is ready!");
  });
  ```

### headerReady() `[NOT VERIFIED]`
- **Arguments:** None
- **Returns:** Promise that resolves when header is ready
- **Side effects:** None
- **Async:** Yes
- **Example:**
  ```javascript
  widget.headerReady().then(() => {
    console.log("Header ready");
  });
  ```

---

## Event System

### subscribe(eventName, callback) `[NOT VERIFIED]`
- **Arguments:** eventName: string, callback: function(data)
- **Returns:** unsubscribe function or void
- **Side effects:** Registers event listener
- **Async:** No
- **Example:**
  ```javascript
  widget.subscribe("onSymbolChanged", (data) => {
    console.log("Symbol changed to:", data.symbol);
  });
  ```

### unsubscribe(eventName, callback) `[NOT VERIFIED]`
- **Arguments:** eventName: string, callback: function
- **Returns:** undefined
- **Side effects:** Removes event listener
- **Async:** No
- **Example:**
  ```javascript
  widget.unsubscribe("onSymbolChanged", myCallback);
  ```

---

## Supported Events

The widget emits the following events (via subscribe):

### onSymbolChanged `[NOT VERIFIED]`
- **Trigger:** User or API changes symbol via setSymbol()
- **Payload:** { symbol: string, interval: string }
- **Example:**
  ```javascript
  widget.subscribe("onSymbolChanged", (data) => {
    console.log(`Symbol: ${data.symbol}, Interval: ${data.interval}`);
  });
  ```

### onIntervalChanged `[NOT VERIFIED]`
- **Trigger:** User or API changes interval
- **Payload:** { interval: string }
- **Example:**
  ```javascript
  widget.subscribe("onIntervalChanged", (data) => {
    console.log(`New interval: ${data.interval}`);
  });
  ```

### onChartReady `[NOT VERIFIED]`
- **Trigger:** Chart data and UI fully loaded
- **Payload:** (no data parameter)
- **Example:**
  ```javascript
  widget.subscribe("onChartReady", () => {
    console.log("Chart ready");
  });
  ```

### onAutoSaveNeeded `[NOT VERIFIED]`
- **Trigger:** User makes changes to chart (auto-save throttled by auto_save_delay)
- **Payload:** { state: object }
- **Example:**
  ```javascript
  widget.subscribe("onAutoSaveNeeded", (data) => {
    console.log("Should save:", data.state);
  });
  ```

### onMarkClick `[NOT VERIFIED]`
- **Trigger:** User clicks on a mark on time scale
- **Payload:** { clickedObject: object }
- **Example:**
  ```javascript
  widget.subscribe("onMarkClick", (data) => {
    console.log("Clicked mark:", data.clickedObject);
  });
  ```

### onTimescaleMarkClick `[NOT VERIFIED]`
- **Trigger:** User clicks on timescale mark
- **Payload:** { time: number }
- **Example:**
  ```javascript
  widget.subscribe("onTimescaleMarkClick", (data) => {
    console.log("Time: ", new Date(data.time * 1000));
  });
  ```

### onDrawObjectClick `[NOT VERIFIED]`
- **Trigger:** User clicks on a drawing
- **Payload:** { drawingId: string }
- **Example:**
  ```javascript
  widget.subscribe("onDrawObjectClick", (data) => {
    console.log("Drawing clicked:", data.drawingId);
  });
  ```

### onDrawObjectEdit `[NOT VERIFIED]`
- **Trigger:** User edits a drawing
- **Payload:** { drawingId: string, drawingData: object }
- **Example:**
  ```javascript
  widget.subscribe("onDrawObjectEdit", (data) => {
    console.log("Drawing edited:", data.drawingId);
  });
  ```

### onDrawObjectDelete `[NOT VERIFIED]`
- **Trigger:** User deletes a drawing
- **Payload:** { drawingId: string }
- **Example:**
  ```javascript
  widget.subscribe("onDrawObjectDelete", (data) => {
    console.log("Drawing deleted:", data.drawingId);
  });
  ```

### onMouseDown `[NOT VERIFIED]`
- **Trigger:** User mouse down on chart
- **Payload:** { timeframe: TimeframeOption }
- **Example:**
  ```javascript
  widget.subscribe("onMouseDown", (data) => {
    // Handle mouse down
  });
  ```

### onMouseUp `[NOT VERIFIED]`
- **Trigger:** User mouse up on chart
- **Payload:** (varies based on context)
- **Example:**
  ```javascript
  widget.subscribe("onMouseUp", (data) => {
    // Handle mouse up
  });
  ```

### onMouseMove `[NOT VERIFIED]`
- **Trigger:** User moves mouse on chart
- **Payload:** { price: number, time: number }
- **Example:**
  ```javascript
  widget.subscribe("onMouseMove", (data) => {
    if (data) console.log("Price:", data.price);
  });
  ```

### onActiveOrderRequest `[NOT VERIFIED]`
- **Trigger:** Trading order placement request
- **Payload:** { order: Order }
- **Example:**
  ```javascript
  widget.subscribe("onActiveOrderRequest", (data) => {
    console.log("Order:", data.order);
  });
  ```

### onStudyAdded `[NOT VERIFIED]`
- **Trigger:** User or API adds a study
- **Payload:** { id: string, studyName: string }
- **Example:**
  ```javascript
  widget.subscribe("onStudyAdded", (data) => {
    console.log("Study added:", data.studyName);
  });
  ```

### onStudyRemoved `[NOT VERIFIED]`
- **Trigger:** User removes a study
- **Payload:** { id: string }
- **Example:**
  ```javascript
  widget.subscribe("onStudyRemoved", (data) => {
    console.log("Study removed:", data.id);
  });
  ```

### onContextMenu `[NOT VERIFIED]`
- **Trigger:** User right-clicks on chart
- **Payload:** { clientX: number, clientY: number }
- **Example:**
  ```javascript
  widget.subscribe("onContextMenu", (data) => {
    console.log("Right-click at:", data.clientX, data.clientY);
  });
  ```

### onShortcut `[NOT VERIFIED]`
- **Trigger:** User presses keyboard shortcut
- **Payload:** { key: string, modifier: string }
- **Example:**
  ```javascript
  widget.subscribe("onShortcut", (data) => {
    console.log("Shortcut:", data.key);
  });
  ```

### onGrayedObjectClicked `[NOT VERIFIED]`
- **Trigger:** User clicks on disabled/grayed object
- **Payload:** (varies)
- **Example:**
  ```javascript
  widget.subscribe("onGrayedObjectClicked", () => {
    console.log("Clicked disabled object");
  });
  ```

---

## Notes

- All timestamps are UNIX milliseconds unless otherwise specified
- Callbacks are synchronous unless marked as Async
- Many methods only work after chart is fully initialized (use `onChartReady`)
- Event callbacks receive data object as parameter (except where noted)
- Some methods are Trading Terminal specific (positions, orders, etc.)
- Method names match TypeScript definitions for IChartingLibraryWidget interface

