# Basic Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>Charting Demo</title>
</head>
<body>
  <div id="chart" style="width: 100%; height: 600px;"></div>
  <script type="module">
import { TradingView } from 'charting-solution-reconstructed';
import { BinanceDatafeed } from 'charting-solution-reconstructed';

const datafeed = new BinanceDatafeed();

const widget = new TradingView.widget({
  container: 'chart',
  symbol: 'BTCUSDT',
  interval: '60',
  datafeed,
  theme: 'dark'
});
  </script>
</body>
</html>
```
