import { PriceScale, PriceMode } from '../src/scales/PriceScale.js';

function assert(condition, msg) {
  if (!condition) {
    console.error('FAIL:', msg);
    process.exitCode = 1;
  } else {
    console.log('PASS:', msg);
  }
}

const scale = new PriceScale(600, PriceMode.LINEAR);
scale.setRange(100, 200);

// Linear scale: basic priceToY
const y100 = scale.priceToY(100);
const y200 = scale.priceToY(200);
assert(y200 < y100, 'higher price → lower y (inverted)');
assert(Math.abs(y100 - y200 - 584) < 5, 'price range maps to height minus margins');

// Linear scale: yToPrice roundtrip
const y = scale.priceToY(150);
const price = scale.yToPrice(y);
assert(Math.abs(price - 150) < 0.01, 'priceToY/yToPrice roundtrip');

// Log scale
const logScale = new PriceScale(600, PriceMode.LOG);
logScale.setRange(10, 1000);
const yLow = logScale.priceToY(10);
const yHigh = logScale.priceToY(1000);
assert(yHigh < yLow, 'log: higher price → lower y');

// Percentage scale
const pctScale = new PriceScale(600, PriceMode.PERCENTAGE);
pctScale.autoScale([
  { low: 90, high: 110, open: 95, close: 105 },
  { low: 95, high: 105, open: 100, close: 102 }
]);
assert(pctScale.basePrice === 95, 'percentage: basePrice is first bar close');

// Indexed-to-100 scale
const idxScale = new PriceScale(600, PriceMode.INDEXED_TO_100);
idxScale.autoScale([
  { low: 95, high: 105, open: 100, close: 100 }
]);
assert(idxScale.basePrice === 100, 'indexed-to-100: basePrice is first bar close');

// Mode constants
assert(PriceMode.LINEAR === 0, 'PriceMode.LINEAR === 0');
assert(PriceMode.LOG === 1, 'PriceMode.LOG === 1');
assert(PriceMode.PERCENTAGE === 2, 'PriceMode.PERCENTAGE === 2');
assert(PriceMode.INDEXED_TO_100 === 3, 'PriceMode.INDEXED_TO_100 === 3');

// setMode
const s = new PriceScale(600, PriceMode.LINEAR);
s.setMode(PriceMode.LOG);
assert(s.mode === PriceMode.LOG, 'setMode changes mode');

console.log('PriceScale tests complete');
