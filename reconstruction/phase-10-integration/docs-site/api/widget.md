# Widget API

The `Widget` class is the main entry point for creating a chart.

## Constructor

```ts
constructor(options: WidgetOptions)
```

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `container` | `string \| HTMLElement` | required | DOM element or selector |
| `symbol` | `string` | `'AAPL'` | Default symbol |
| `interval` | `string` | `'1D'` | Default interval |
| `datafeed` | `IDatafeed` | `null` | Datafeed implementation |
| `theme` | `'light' \| 'dark' \| 'custom'` | `'dark'` | Color theme |

## Methods

| Method | Returns | Description |
|--------|---------|-------------|
| `chart()` | `Chart \| null` | Get the chart instance |
| `setSymbol(symbol, interval?)` | `void` | Change symbol |
| `setInterval(interval)` | `void` | Change interval |
| `changeTheme(theme)` | `void` | Switch theme |
| `addStudy(name, inputs?)` | `BuiltinStudy \| null` | Add a study |
| `remove()` | `void` | Destroy widget |

## Example

```ts
import { TradingView } from 'charting-solution-reconstructed';

const widget = new TradingView.widget({
  container: document.getElementById('chart'),
  symbol: 'BTCUSD',
  interval: '60',
  theme: 'light'
});

const chart = widget.chart();
console.log(chart.getSymbol()); // 'BTCUSD'
```
