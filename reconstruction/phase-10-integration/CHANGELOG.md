# Changelog

## 1.0.0 (2026-06-17)

### Features
- Widget with configurable container, symbol, interval, theme, datafeed
- Chart with multiple styles: Candles, Hollow Candles, Heikin Ashi, Bars, Line, Area
- 25 built-in studies: MovingAverage, RSI, MACD, BollingerBands, Volume, Stochastic, CCI, ATR, OBV, VWAP, PivotPoints, ParabolicSAR, Ichimoku, ADX, Momentum, WilliamsR, UltimateOscillator, MFI, ChaikinOsc, KeltnerChannels, DonchianChannels, SuperTrend, ZigZag, LinearRegression, Correlation
- 18 drawing tools: TrendLine, HorizontalLine, VerticalLine, Rectangle, Text, FibonacciRetracement, FibonacciExtension, FibonacciFan, Channel, Pitchfork, GannFan, GannBox, ElliottWave, Brush, Arrow, Measure, DateRange, PriceRange
- Pine Script runtime (Parser, Transpiler, Runtime, CustomStudy)
- Datafeeds: RESTDatafeed, BinanceDatafeed, WebSocketDatafeed
- Performance: WebGLRenderer, LODRenderer, VirtualScroll
- Alerts: AlertSystem with price, study, and drawing alerts
- CommandHistory with undo/redo
- KeyboardShortcuts with zoom, pan, undo/redo, delete
- Screenshot & ScreenshotExport (PNG/JPG)
- CompareSymbol and SessionBreaks
- Full TypeScript definitions
- VitePress documentation site

### Infrastructure
- Vite-based build (ESM + UMD bundles)
- Vitest test suite with 236+ tests
- Code coverage reporting
- TypeScript type checking
