# Chart API

The `Chart` class manages data, rendering, studies, and drawing tools.

## Constructor

```ts
constructor(container: HTMLElement, symbol: string, interval: string, datafeed: IDatafeed | null)
```

## Methods

| Method | Returns | Description |
|--------|---------|-------------|
| `setSymbol(symbol)` | `void` | Set trading symbol |
| `getSymbol()` | `string` | Get current symbol |
| `setInterval(interval)` | `void` | Set chart interval |
| `getInterval()` | `string` | Get current interval |
| `setChartStyle(style)` | `void` | Set chart rendering style |
| `setData(bars)` | `void` | Load bar data |
| `addBar(bar)` | `void` | Append a real-time bar |
| `addStudy(study)` | `void` | Add a study overlay |
| `destroy()` | `void` | Clean up resources |

## Chart Styles

| Style | Value |
|-------|-------|
| CANDLES | 0 |
| HOLLOW_CANDLES | 1 |
| HEIKIN_ASHI | 2 |
| BARS | 3 |
| LINE | 4 |
| AREA | 5 |

## Example

```ts
const chart = widget.chart();
chart.setData([
  { time: 1, open: 100, high: 105, low: 95, close: 102, volume: 1000 },
  { time: 2, open: 102, high: 108, low: 101, close: 107, volume: 1200 }
]);
chart.setChartStyle(ChartStyle.LINE);
```
