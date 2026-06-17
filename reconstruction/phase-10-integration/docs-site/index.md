# Charting Solution Reconstructed

A clean-room reconstruction of the TradingView Charting Library public API.

## Getting Started

```html
<div id="chart-container" style="width: 800px; height: 600px;"></div>
<script type="module">
import { TradingView } from 'charting-solution-reconstructed';

const widget = new TradingView.widget({
  container: 'chart-container',
  symbol: 'AAPL',
  interval: '1D',
  theme: 'dark'
});
</script>
```

## Features

- **Chart Types**: Candles, Hollow Candles, Heikin Ashi, Bars, Line, Area
- **25+ Built-in Studies**: Moving Average, RSI, MACD, Bollinger Bands, Stochastic, Ichimoku, and more
- **18 Drawing Tools**: Trend Line, Fibonacci, Channel, Pitchfork, Gann, Elliott Wave, and more
- **Pine Script Runtime**: Execute your own Pine Script studies
- **Datafeeds**: REST, Binance, WebSocket
- **Performance**: WebGL rendering, LOD, Virtual Scroll
- **Alerts**: Price, study, and drawing alerts with Command History
- **Screenshots**: PNG/JPG export
- **Keyboard Shortcuts**: Zoom, pan, undo/redo, delete
