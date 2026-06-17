import { TradingView, studyRegistry, toolRegistry } from '../src/index.js';
import { LineRenderer } from '../src/studies/renderers/LineRenderer.js';
import { BinanceDatafeed } from '../src/datafeed/BinanceDatafeed.js';

const datafeed = new BinanceDatafeed();
const container = document.getElementById('chart-container');

const widget = new TradingView.widget({ container, symbol: 'AAPL', interval: '1D', theme: 'dark', datafeed, studyRegistry });
const chart = widget.chart();

chart.setData(datafeed.generateBars('AAPL', '1D'));

document.getElementById('btn-change-symbol').addEventListener('click', () => {
  const symbols = ['AAPL', 'GOOGL', 'TSLA', 'MSFT'];
  const next = symbols[Math.floor(Math.random() * symbols.length)];
  chart.setSymbol(next);
  chart.setData(datafeed.generateBars(next, chart.getInterval()));
});

document.getElementById('btn-change-interval').addEventListener('click', () => {
  const intervals = ['1', '5', '15', '60', '1D', '1W'];
  const next = intervals[Math.floor(Math.random() * intervals.length)];
  chart.setInterval(next);
  chart.setData(datafeed.generateBars(chart.getSymbol(), next));
});

document.getElementById('btn-toggle-theme').addEventListener('click', () => {
  const next = chart._options.theme === 'dark' ? 'light' : 'dark';
  widget.changeTheme(next);
});

document.getElementById('btn-add-ma').addEventListener('click', () => {
  const ma = studyRegistry.create('MovingAverage', { type: 'SMA', length: 14 });
  ma._renderer = new LineRenderer({ pane: 'overlay' });
  ma._renderOptions = { series: [{ key: 'MA', color: '#FF9800', width: 2 }], bars: chart._bars };
  chart.addStudy(ma);
});

document.getElementById('btn-add-rsi').addEventListener('click', () => {
  const rsi = studyRegistry.create('RSI', { length: 14 });
  rsi._renderer = new LineRenderer({ pane: 'overlay' });
  rsi._renderOptions = { series: [{ key: 'RSI', color: '#E91E63', width: 2 }], bars: chart._bars };
  chart.addStudy(rsi);
});

document.getElementById('btn-draw-trendline').addEventListener('click', () => {
  if (!chart._bars || chart._bars.length < 2) return;
  const trend = toolRegistry.create('TrendLine', {
    points: [{ time: chart._bars[10].time, price: chart._bars[10].close },
             { time: chart._bars[chart._bars.length - 1].time, price: chart._bars[chart._bars.length - 1].close }],
    style: { color: '#FF5722', width: 2, extend: true }
  });
  chart._activeTools = chart._activeTools || [];
  chart._activeTools.push(trend);
});
