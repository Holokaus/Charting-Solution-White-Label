import { CandlestickRenderer } from '../src/series/CandlestickRenderer.js';
import { PriceScale } from '../src/scales/PriceScale.js';
import { TimeScale } from '../src/scales/TimeScale.js';

function assert(condition, msg) {
  if (!condition) {
    console.error('FAIL:', msg);
    process.exitCode = 1;
  } else {
    console.log('PASS:', msg);
  }
}

// Create a mock viewport
const viewport = {
  width: 800,
  height: 600,
  barSpacing: 6,
  timeToX(time) {
    return (time - 1000) * 6;
  }
};

const priceScale = new PriceScale(600, 0);
priceScale.setRange(90, 110);

const timeScale = new TimeScale(800, 6);

const renderer = new CandlestickRenderer();

// Render should not throw with valid bars
const bars = [
  { time: 1000, open: 100, high: 105, low: 95, close: 102 },
  { time: 1001, open: 102, high: 108, low: 98, close: 99 }
];

let threw = false;
try {
  renderer.render({}, bars, viewport, priceScale, timeScale, {});
} catch (e) {
  threw = true;
}
assert(!threw, 'CandlestickRenderer.render() does not throw');

// Render with empty bars
threw = false;
try {
  renderer.render({}, [], viewport, priceScale, timeScale, {});
} catch (e) {
  threw = true;
}
assert(!threw, 'CandlestickRenderer.render() handles empty bars');

// Hollow option
threw = false;
try {
  renderer.render({}, bars, viewport, priceScale, timeScale, { hollow: true });
} catch (e) {
  threw = true;
}
assert(!threw, 'CandlestickRenderer.render() with hollow option');

// Custom colors
threw = false;
try {
  renderer.render({}, bars, viewport, priceScale, timeScale, {
    upColor: '#FF0000',
    downColor: '#00FF00'
  });
} catch (e) {
  threw = true;
}
assert(!threw, 'CandlestickRenderer.render() with custom colors');

console.log('Candlestick tests complete');
