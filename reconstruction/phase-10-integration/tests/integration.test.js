import { TradingView, Widget, ChartStyle, PriceScaleMode, CrosshairMode, toolRegistry, studyRegistry } from '../src/index.js';

function assert(condition, msg) {
  if (!condition) {
    console.error('FAIL:', msg);
    process.exitCode = 1;
  } else {
    console.log('PASS:', msg);
  }
}

assert(typeof TradingView === 'object', 'TradingView namespace exists');
assert(TradingView.widget === Widget, 'TradingView.widget is Widget');
assert(ChartStyle.CANDLES === 0, 'ChartStyle.CANDLES exists');
assert(ChartStyle.BARS === 1, 'ChartStyle.BARS exists');
assert(ChartStyle.LINE === 2, 'ChartStyle.LINE exists');
assert(PriceScaleMode.NORMAL === 0, 'PriceScaleMode.NORMAL exists');
assert(PriceScaleMode.LOG === 1, 'PriceScaleMode.LOG exists');
assert(CrosshairMode.NORMAL === 0, 'CrosshairMode.NORMAL exists');

assert(toolRegistry.getNames().length === 8, 'toolRegistry has 8 tools');
assert(studyRegistry.getNames().length === 5, 'studyRegistry has 5 studies');

assert(TradingView.version === '30.0.0-reconstructed', 'TradingView version is set');

// Create widget with mock container
const container = document.createElement('div');
container.style.width = '800px';
container.style.height = '600px';
document.body.appendChild(container);

let threw = false;
try {
  const widget = new Widget({ container, symbol: 'TEST', interval: '1D' });
  assert(typeof widget.chart === 'function', 'widget has chart() method');
  assert(typeof widget.setSymbol === 'function', 'widget has setSymbol()');
  assert(typeof widget.setInterval === 'function', 'widget has setInterval()');

  const chart = widget.chart();
  assert(chart !== null, 'chart() returns a chart instance');
  assert(chart.getSymbol() !== undefined, 'chart has getSymbol()');
  assert(chart.getInterval() !== undefined, 'chart has getInterval()');

  const returnedSymbol = chart.getSymbol();
  assert(returnedSymbol === 'TEST', `chart.getSymbol() returns "${returnedSymbol}"`);

  widget.remove();
  assert(widget.state === 'destroyed', 'widget state is destroyed after remove');
} catch (e) {
  threw = true;
  console.error('Widget creation threw:', e.message);
}
assert(!threw, 'Widget creation does not throw');

console.log('Integration tests complete');
