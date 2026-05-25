# Module 37150: Chunk Loader

## Confidence: [CERTAIN]

## Source Evidence
- **File:** `phase-00-unbundling/modules/37150.js`
- **Lines:** 376
- **Size:** 1139317 bytes
- **Requires:** 602 modules (81251, 20057, 50151, 52959, 11542, 18092, 32517, 5992, 87457, 34907, 37103, 94078, 60973, 48480, 1765, ...)
- **Required by:** 0 modules ()

## Behavioral Spec

### Input
- Receives: exports object, require function, module object (standard webpack factory signature)
- Requires modules: 81251, 20057, 50151, 52959, 11542, 18092, 32517, 5992, 87457, 34907 and 592 more

### Process
- String literals found: use strict, use_localstorage_for_settings, ),s=document.createElement(, ,e.Right=, ,e.Bottom=, ,e.Left=, }(v||(v={})),function(e){e.TopLeft=, ,e.TopRight=, ,e.BottomLeft=, ,e.BottomRight=
- Code patterns: canvas, 2d-context, rect-rendering, path-rendering, canvas-sizing, price, time, ohlc, candlestick, volume, series-data, bar, study, indicator, indicator-name, overlay, drawing, line-tool, shape, mouse-event, click-event, keyboard-event, event-system, datafeed, symbol, resolution, subscribe, websocket, dialog, menu, toolbar, button, tooltip, dom-manipulation, formatting, locale, date-formatting, number-formatting, math, statistics, chunk-loader, css-styles, css-module, string:chart, string:chart, string:chart, string:error, string:time, string:error, string:time, string:error, string:error, string:chart, string:chart, string:error, string:error, string:line, string:time, string:line, string:error, string:error, string:time, string:error, string:price, string:price, string:price, string:price, string:price, string:price, string:price, string:price, string:price, string:chart, string:chart, string:price, string:price, string:price, string:price, string:price, string:price, string:price, string:price, string:price, string:price, string:price, string:price, string:price, string:price, string:price, string:price, string:time, string:price, string:price, string:chart, string:chart, string:price, string:price, string:price, string:chart, string:chart, string:time, string:time, string:time, string:chart, string:chart, string:time, string:time, string:time, string:time, string:time, string:time, string:time, string:study, string:study, string:price, string:price, string:price, string:price, string:price, string:price, string:price, string:price, string:price, string:price, string:price, string:price, string:price, string:price, string:error, string:error, string:price, string:price, string:time, string:study, string:study, string:error, string:study, string:candlestick, string:line, string:line, string:error, string:time, string:time, string:price, string:price, string:price, string:price, string:chart, string:hex-color, string:hex-color, string:time, string:price, string:study, string:time, string:time, string:line, string:price, string:price, string:price, string:price, string:study, string:time, string:time, string:time, string:time, string:time, string:time, string:time, string:time, string:chart, string:price, string:time, string:time, string:chart, string:chart, string:time, string:study, string:price, string:chart, string:chart, string:chart, string:chart, string:line, string:error, string:error, string:study, string:chart, string:chart, string:chart, string:price, string:chart, string:time, string:line, string:price, string:study, string:study, string:price, string:price, string:price, string:study, string:study, string:study, string:study, string:study, string:study, string:study, string:time, string:chart, string:price, string:price, string:error, string:price, string:price, string:price, string:chart, string:price, string:time, string:time, string:chart, string:price, string:time, string:time, string:time, string:study, string:time, string:study, string:price, string:warning, string:error, string:chart, string:study, string:chart, string:chart, string:chart, string:chart, string:chart, string:chart, string:chart, string:chart, string:mouse-event, string:mouse-event, string:study, string:study, string:chart, string:mouse-event, string:mouse-event, string:mouse-event, string:mouse-event, string:time, string:chart, string:price, string:chart, string:study, string:time, string:time, string:time, string:chart, string:chart, string:chart, string:chart, string:line, string:line, string:study, string:study, string:error, string:price, string:price, string:line, string:line, string:line, string:time, string:time, string:time, string:price, string:price, string:line, string:time, string:study, string:study, string:study, string:price, string:study, string:study, string:price, string:time, string:time, string:line, string:price, string:price, string:price, string:candlestick, string:line, string:line, string:candlestick, string:line, string:candlestick, string:price, string:time, string:chart, string:study, string:study, string:error, string:error, string:time, string:price, string:price, string:price, string:price, string:time, string:time, string:chart, string:chart, string:time, string:chart, string:chart, string:price, string:time, string:error, string:error, string:error, string:error, string:time, string:study, string:line, string:line, string:study, string:price, string:time, string:time, string:time, string:warning, string:time, string:warning, string:error, string:error, string:time, string:time, string:time, string:time, string:error, string:error, string:study, string:study, string:error, string:time, string:time, string:time, string:time, string:error, string:chart, string:error, string:error, string:error, string:time, string:study, string:time, string:time, string:chart, string:chart, string:price, string:time, string:time, string:study, string:time, string:study, string:error, string:error, string:chart, string:chart, string:error, string:time, string:time, string:price, string:error, string:warning, string:chart, string:time, string:time, string:price, string:time, string:time, string:price, string:study, string:time, string:chart, string:time, string:chart, string:time, string:error, string:error, string:time
- Uses Canvas 2D API for rendering
- Manipulates DOM elements
- Performs mathematical calculations
- Implements event subscription/dispatch

### Output
- Exports: default export
- To: no other modules (entry point or unused)
- Side effects: DOM manipulation

## Gaps / Unknowns
- Cannot determine: exact internal implementation details due to minification/obfuscation
- Why: module uses minified variable names and webpack factory pattern

