# Widget Events Reference

## Complete Event System Documentation

The TradingView widget emits events that allow you to react to user interactions, data changes, and chart state transitions. Subscribe to events using the `subscribe()` method.

---

## Chart Lifecycle Events

### onChartReady
When the chart is fully loaded and ready for user interaction.

```javascript
widget.subscribe("onChartReady", () => {
  console.log("Chart initialized and ready");
  // Safe to call chart APIs now
});
```

**Payload:** None (no data parameter passed to callback)  
**Trigger Timing:** Once per widget instance after initialization  
**Use Cases:** Initialize dependent UI, apply custom settings, trigger initial data loads

---

## Symbol & Resolution Events

### onSymbolChanged
When the chart symbol changes (user selects symbol or API call).

```javascript
widget.subscribe("onSymbolChanged", (data) => {
  console.log("Symbol:", data.symbol);
  console.log("Interval:", data.interval);
  console.log("Previous symbol:", data.prev_symbol);
  console.log("Previous interval:", data.prev_interval);
});
```

**Payload Sample:**
```json
{
  "symbol": "MSFT",
  "interval": "1D",
  "prev_symbol": "AAPL",
  "prev_interval": "1D"
}
```

**Trigger:** `setSymbol()` call or user selects symbol via UI  
**Use Cases:** Update related UI (company info, analysis tools), sync multiple widgets

---

### onIntervalChanged
When the chart resolution/interval changes.

```javascript
widget.subscribe("onIntervalChanged", (data) => {
  console.log("New interval:", data.interval);
  console.log("Previous interval:", data.prev_interval);
  console.log("Timeframe:", data.timeframe);
});
```

**Payload Sample:**
```json
{
  "interval": "1H",
  "prev_interval": "1D",
  "timeframe": "relative"
}
```

**Trigger:** User selects time interval, `setTimeFrame()` call  
**Use Cases:** Update interval-dependent UI, adjust study parameters

---

## Data & State Events

### onAutoSaveNeeded
When the chart state requires saving (throttled by `auto_save_delay`).

```javascript
widget.subscribe("onAutoSaveNeeded", (data) => {
  const state = data.state;
  // Save to database/localStorage
  localStorage.setItem("chart_state", JSON.stringify(state));
});
```

**Payload Sample:**
```json
{
  "state": {
    "symbol": "AAPL",
    "interval": "1D",
    "studies": [...],
    "drawings": [...],
    "layout": {...},
    "properties": {...}
  }
}
```

**Trigger:** User adds/removes studies, draws objects, changes settings  
**Throttling:** Controlled by `auto_save_delay` option (default 5 seconds)  
**Use Cases:** Auto-save charts, sync state to server, update UI

---

## Mouse Events

### onMouseDown
When user presses mouse button on chart.

```javascript
widget.subscribe("onMouseDown", (data) => {
  if (!data) {
    console.log("Mouse down on empty area");
    return;
  }
  console.log("Mouse down at price:", data.price);
  console.log("Time:", new Date(data.time * 1000));
  console.log("Coordinates:", { x: data.x, y: data.y });
});
```

**Payload Sample:**
```json
{
  "price": 175.34,
  "time": 1684520400,
  "x": 450,
  "y": 320
}
```

**Trigger:** User presses mouse button on chart canvas  
**Payload:** Null if not on a data point  
**Use Cases:** Implement custom drawing, validate tool activation

---

### onMouseUp
When user releases mouse button.

```javascript
widget.subscribe("onMouseUp", (data) => {
  console.log("Mouse released");
  if (data && data.price) {
    console.log("Released at price:", data.price);
  }
});
```

**Payload Sample:** Similar to `onMouseDown`, or null if not on data point  
**Trigger:** User releases mouse button on chart  
**Use Cases:** Complete custom operations, finalize drawings

---

### onMouseMove
When user moves mouse on chart.

```javascript
widget.subscribe("onMouseMove", (data) => {
  if (!data) return;
  console.log("Current price under cursor:", data.price);
  console.log("Current time under cursor:", new Date(data.time * 1000));
  // Update live price display
});
```

**Payload Sample:**
```json
{
  "price": 175.42,
  "time": 1684520400,
  "x": 480,
  "y": 310
}
```

**Trigger:** User moves mouse on chart (fires frequently)  
**Payload:** Null if off chart or not on a valid data point  
**Performance Note:** High frequency event; use throttling if doing heavy updates  
**Use Cases:** Live crosshair pricing, tooltip updates

---

## Drawing & Object Events

### onDrawObjectClick
When user clicks on a drawing.

```javascript
widget.subscribe("onDrawObjectClick", (data) => {
  console.log("Drawing ID:", data.drawingId);
  console.log("Drawing data:", data.drawingData);
  console.log("Drawing type:", data.type);
  console.log("Clicked point:", {
    price: data.price,
    time: data.time
  });
});
```

**Payload Sample:**
```json
{
  "drawingId": "drawing_1234",
  "type": "LineToolTrendline",
  "drawingData": {
    "points": [
      { x1: 100, y1: 175 },
      { x2: 200, y2: 180 }
    ],
    "color": "#FF0000",
    "linewidth": 2,
    "linestyle": 0
  },
  "price": 177.50,
  "time": 1684520400
}
```

**Trigger:** User left-clicks on a drawing object  
**Use Cases:** Show drawing editor, apply custom styling, log drawing interactions

---

### onDrawObjectEdit
When user edits a drawing (moves, resizes, or changes properties).

```javascript
widget.subscribe("onDrawObjectEdit", (data) => {
  console.log("Edited drawing:", data.drawingId);
  const drawing = data.drawingData;
  console.log("New color:", drawing.color);
  console.log("New line width:", drawing.linewidth);
  console.log("New points:", drawing.points);
  
  // Broadcast to other users
  sendDrawingUpdate(data);
});
```

**Payload Sample:**
```json
{
  "drawingId": "drawing_1234",
  "type": "LineToolTrendline",
  "drawingData": {
    "points": [
      { x1: 110, y1: 174 },
      { x2: 210, y2: 181 }
    ],
    "color": "#00FF00",
    "linewidth": 3,
    "linestyle": 0,
    "text": "Support line"
  }
}
```

**Trigger:** User finishes dragging/resizing a drawing  
**Use Cases:** Sync drawings in collaborative mode, save drawing updates, update drawing list

---

### onDrawObjectDelete
When user deletes a drawing.

```javascript
widget.subscribe("onDrawObjectDelete", (data) => {
  console.log("Deleted drawing ID:", data.drawingId);
  console.log("Drawing type was:", data.type);
  
  // Update backend
  deleteDrawingFromServer(data.drawingId);
});
```

**Payload Sample:**
```json
{
  "drawingId": "drawing_1234",
  "type": "LineToolTrendline"
}
```

**Trigger:** User presses Delete key or uses context menu  
**Use Cases:** Update server state, sync multi-user environments, audit trail

---

### onMarkClick
When user clicks on a timescale mark.

```javascript
widget.subscribe("onMarkClick", (data) => {
  console.log("Clicked mark:", data);
  // Mark can be event marker, news event, earnings, etc.
  if (data && data.time) {
    console.log("Mark time:", new Date(data.time * 1000));
  }
});
```

**Payload Sample:**
```json
{
  "time": 1684520400,
  "label": "Earnings",
  "color": "red",
  "shape": "circle"
}
```

**Trigger:** User left-clicks on a mark/flag on timescale  
**Use Cases:** Show mark details, navigate to event, filter by mark type

---

### onTimescaleMarkClick
When user clicks on timescale (alternative event).

```javascript
widget.subscribe("onTimescaleMarkClick", (data) => {
  const time = data.time;
  console.log("Clicked timescale at:", new Date(time * 1000));
  
  // Jump to this time if in intraday
  widget.setTimeFrame({
    from: time - (24 * 60 * 60),
    to: time + (24 * 60 * 60)
  });
});
```

**Payload Sample:**
```json
{
  "time": 1684520400
}
```

**Trigger:** User clicks on time axis  
**Use Cases:** Navigate to time period, set alerts, jump to events

---

## Study Events

### onStudyAdded
When a study is added to the chart.

```javascript
widget.subscribe("onStudyAdded", (data) => {
  console.log("Study added:", data.name);
  console.log("Study ID:", data.id);
  console.log("Pane:", data.pane);
  
  // Customize study immediately
  const chartApi = widget.chart();
  const study = chartApi.getStudyById(data.id);
  study.applyOverrides({
    "plot.color": "#FF00FF"
  });
});
```

**Payload Sample:**
```json
{
  "id": "study_5678",
  "name": "Bollinger Bands",
  "pane": 0,
  "inputs": {
    "length": 20,
    "offsetPercent": 2
  }
}
```

**Trigger:** User adds study from Studies panel or API call  
**Use Cases:** Track study count, auto-apply custom styles, log analysis activities

---

### onStudyRemoved
When a study is deleted from the chart.

```javascript
widget.subscribe("onStudyRemoved", (data) => {
  console.log("Study removed, ID:", data.id);
  console.log("Study was:", data.name);
  
  // Update study counter
  updateStudyCount();
});
```

**Payload Sample:**
```json
{
  "id": "study_5678",
  "name": "RSI"
}
```

**Trigger:** User removes study from chart  
**Use Cases:** Clean up related state, update UI, audit trail

---

### onStudyInputChanged
When user changes study input parameters.

```javascript
widget.subscribe("onStudyInputChanged", (data) => {
  console.log("Study input changed:", data);
  console.log("Study ID:", data.studyId);
  console.log("New inputs:", data.inputs);
});
```

**Payload Sample:**
```json
{
  "studyId": "study_5678",
  "inputs": {
    "length": 30
  }
}
```

**Trigger:** User edits study inputs in properties panel  
**Use Cases:** Store custom study configurations, track parameter changes

---

## Order & Position Events (Trading Terminal)

### onActiveOrderRequest
When user or system initiates an order placement.

```javascript
widget.subscribe("onActiveOrderRequest", (data) => {
  console.log("Order requested:", data);
  console.log("Symbol:", data.symbol);
  console.log("Side:", data.side);  // "buy" or "sell"
  console.log("Quantity:", data.quantity);
  console.log("Type:", data.type);  // "market", "limit", "stop", etc.
  
  // Validate order
  if (data.quantity > MAX_POSITION_SIZE) {
    console.warn("Order exceeds max position size");
  }
});
```

**Payload Sample:**
```json
{
  "symbol": "AAPL",
  "side": "buy",
  "quantity": 100,
  "type": "limit",
  "limitPrice": 175.50,
  "stopPrice": null
}
```

**Trigger:** User clicks Buy/Sell button on chart  
**Use Cases:** Validate orders, apply risk checks, log trade activity

---

## Context & Shortcut Events

### onContextMenu
When user right-clicks on chart.

```javascript
widget.subscribe("onContextMenu", (data) => {
  console.log("Context menu at:", {
    x: data.clientX,
    y: data.clientY
  });
  console.log("Price:", data.price);
  console.log("Time:", new Date(data.time * 1000));
});
```

**Payload Sample:**
```json
{
  "clientX": 450,
  "clientY": 320,
  "price": 175.34,
  "time": 1684520400
}
```

**Trigger:** User right-clicks on chart  
**Use Cases:** Show custom context menu, implement right-click actions

---

### onShortcut
When user presses a keyboard shortcut.

```javascript
widget.subscribe("onShortcut", (data) => {
  console.log("Shortcut pressed:", data.key);
  console.log("Modifier keys:", data.modifier);  // shift, ctrl, alt, etc.
  
  // Custom shortcut handling
  if (data.key === "d" && data.modifier === "ctrl") {
    enableDarkMode();
  }
});
```

**Payload Sample:**
```json
{
  "key": "s",
  "modifier": "ctrl"
}
```

**Trigger:** User presses keyboard shortcut  
**Use Cases:** Custom keyboard controls, accessibility features

---

### onGrayedObjectClicked
When user clicks on disabled/grayed UI element.

```javascript
widget.subscribe("onGrayedObjectClicked", (data) => {
  console.log("User clicked disabled element");
  console.log("Element type:", data.type);
  
  // Show tooltip explaining why disabled
  showTooltip("This feature requires higher permissions");
});
```

**Payload Sample:**
```json
{
  "type": "study",
  "toolName": "Fibonacci Retracement"
}
```

**Trigger:** User left-clicks on grayed/disabled button or tool  
**Use Cases:** Show permission messages, logging, UX improvements

---

## Complete Example: Multi-Event Subscription

```javascript
// Initialize widget
const widget = new TradingView.widget(options);

// Chart lifecycle
widget.subscribe("onChartReady", () => {
  console.log("✓ Chart ready");
  loadSavedAnalysis();
});

// Symbol tracking
widget.subscribe("onSymbolChanged", (data) => {
  console.log(`✓ Symbol: ${data.prev_symbol} → ${data.symbol}`);
  updateCompanyInfo(data.symbol);
  updateWatchlist(data.symbol);
});

widget.subscribe("onIntervalChanged", (data) => {
  console.log(`✓ Interval: ${data.prev_interval} → ${data.interval}`);
  updateStudyParameters(data.interval);
});

// Data changes
widget.subscribe("onAutoSaveNeeded", (data) => {
  saveChartState(data.state);
});

// User drawings
widget.subscribe("onDrawObjectClick", (data) => {
  showDrawingProperties(data.drawingId);
});

widget.subscribe("onDrawObjectEdit", (data) => {
  syncDrawingToServer(data);
});

widget.subscribe("onDrawObjectDelete", (data) => {
  deleteDrawingFromServer(data.drawingId);
});

// Studies
widget.subscribe("onStudyAdded", (data) => {
  analytics.track("study_added", { study: data.name });
});

// Mouse interaction
widget.subscribe("onMouseMove", (data) => {
  if (data) {
    updateCrosshairDisplay(data.price, data.time);
  }
});

// Trading (if applicable)
widget.subscribe("onActiveOrderRequest", (data) => {
  validateAndPlaceOrder(data);
});

// User actions
widget.subscribe("onShortcut", (data) => {
  handleCustomShortcut(data);
});
```

---

## Event Subscription Best Practices

### Memory Management
```javascript
// Store unsubscribe functions
const unsubscribers = [];

unsubscribers.push(
  widget.subscribe("onSymbolChanged", callback)
);

// Later, clean up
unsubscribers.forEach(fn => {
  if (typeof fn === 'function') fn();  // unsubscribe
});
```

### Error Handling
```javascript
widget.subscribe("onChartReady", () => {
  try {
    // Access chart API
    const chart = widget.chart();
    chart.createStudy("Moving Average");
  } catch (error) {
    console.error("Chart operation failed:", error);
  }
});
```

### Debouncing High-Frequency Events
```javascript
let lastMouseMoveTime = 0;
widget.subscribe("onMouseMove", (data) => {
  const now = Date.now();
  if (now - lastMouseMoveTime > 100) {  // Throttle to 100ms
    updateDisplay(data);
    lastMouseMoveTime = now;
  }
});
```

---

## Event Availability by Widget Type

| Event | Charting Library | Trading Terminal |
|-------|------------------|------------------|
| onChartReady | ✓ | ✓ |
| onSymbolChanged | ✓ | ✓ |
| onIntervalChanged | ✓ | ✓ |
| onAutoSaveNeeded | ✓ | ✓ |
| onMouseDown/Up/Move | ✓ | ✓ |
| onDrawObjectClick/Edit/Delete | ✓ | ✓ |
| onMarkClick | ✓ | ✓ |
| onStudyAdded/Removed | ✓ | ✓ |
| onActiveOrderRequest | ✗ | ✓ |
| onContextMenu | ✓ | ✓ |
| onShortcut | ✓ | ✓ |

---

## Notes

- Events are case-sensitive (use exact names)
- Most events include complete data; check payload structure before accessing properties
- Some events are high-frequency (onMouseMove); consider throttling for performance
- All timestamps are UNIX milliseconds
- Payload structure may vary between widget versions; implement defensive checks
- Not all events may fire in all configurations (some require features to be enabled)

