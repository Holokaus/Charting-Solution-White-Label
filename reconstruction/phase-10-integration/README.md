# Charting Solution Reconstructed

A clean-room reconstruction of the TradingView Charting Library public API. Provides charting capabilities including multiple chart styles, 25+ built-in studies, 18 drawing tools, Pine Script runtime, WebGL rendering, alerts, keyboard shortcuts, screenshots, and datafeed integrations.

## Installation

```bash
npm install charting-solution-reconstructed
```

## Quick Start

```js
import { TradingView } from 'charting-solution-reconstructed';

const widget = new TradingView.widget({
  container: 'chart_container',
  symbol: 'AAPL',
  interval: '1D',
  theme: 'dark'
});
```

## Features

- **Chart Types:** Candles, Hollow Candles, Heikin Ashi, Bars, Line, Area
- **25+ Studies:** Moving Average, RSI, MACD, Bollinger Bands, Stochastic, Ichimoku, ADX, and more
- **18 Drawing Tools:** Trend Line, Fibonacci Retracement/Extension/Fan, Channel, Pitchfork, Gann, Elliott Wave
- **Pine Script Runtime:** Execute custom Pine Script studies via transpiler + sandbox
- **Datafeeds:** REST, Binance, WebSocket
- **Performance:** WebGL rendering, LOD renderer, Virtual Scroll
- **Alerts:** Price, study, and drawing alerts with undo/redo
- **Export:** PNG/JPG screenshot export
- **TypeScript:** Full type definitions included

## Documentation

Full documentation is available in the `docs-site/` directory.

## API

### Widget

```ts
const widget = new TradingView.widget({
  container: string | HTMLElement,
  symbol?: string,
  interval?: string,
  datafeed?: IDatafeed,
  theme?: 'light' | 'dark'
});
```

### Chart

```ts
const chart = widget.chart();
chart.setSymbol('GOOGL');
chart.setInterval('60');
chart.setData(bars);
```

### Studies

```ts
const ma = studyRegistry.create('MovingAverage', { length: 20 });
chart.addStudy(ma);
```

### Drawing Tools

```ts
const line = toolRegistry.create('TrendLine', {
  points: [{ time: 1, price: 100 }, { time: 10, price: 110 }]
});
```

## License

MIT
