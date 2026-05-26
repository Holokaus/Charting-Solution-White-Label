import { MovingAverage } from '../src/studies/MovingAverage.js';

function assert(condition, msg) {
  if (!condition) {
    console.error('FAIL:', msg);
    process.exitCode = 1;
  } else {
    console.log('PASS:', msg);
  }
}

function approx(a, b, tol = 0.001) {
  return Math.abs(a - b) < tol;
}

const bars = [
  { close: 10 }, { close: 12 }, { close: 11 }, { close: 13 },
  { close: 14 }, { close: 15 }, { close: 16 }, { close: 17 },
  { close: 18 }, { close: 19 }, { close: 20 }, { close: 19 },
  { close: 18 }, { close: 17 }, { close: 16 }, { close: 15 },
  { close: 14 }, { close: 13 }, { close: 12 }, { close: 11 }
];

// SMA length=3
const sma = new MovingAverage({ type: 'SMA', length: 3 });
const smaResult = sma.calculate(bars);
assert(smaResult.length === bars.length, 'SMA result length matches bars');
assert(smaResult[0] === null, 'SMA first values are null');
assert(smaResult[1] === null, 'SMA second values are null');
assert(smaResult[2] !== null, 'SMA third value is calculated');
const expectedSMA = (10 + 12 + 11) / 3;
assert(approx(smaResult[2], expectedSMA), `SMA[2] = ${expectedSMA}`);

// EMA length=3
const ema = new MovingAverage({ type: 'EMA', length: 3 });
const emaResult = ema.calculate(bars);
assert(emaResult.length === bars.length, 'EMA result length matches bars');
assert(emaResult[2] !== null, 'EMA third value is SMA seed');

// WMA length=3
const wma = new MovingAverage({ type: 'WMA', length: 3 });
const wmaResult = wma.calculate(bars);
assert(wmaResult.length === bars.length, 'WMA result length matches bars');
const expectedWMA = (11 * 1 + 12 * 2 + 10 * 3) / (1 + 2 + 3);
assert(approx(wmaResult[2], expectedWMA), `WMA[2] = ${expectedWMA}`);

// SMMA length=3
const smma = new MovingAverage({ type: 'SMMA', length: 3 });
const smmaResult = smma.calculate(bars);
assert(smmaResult.length === bars.length, 'SMMA result length matches bars');

// Source: high
const maHigh = new MovingAverage({ type: 'SMA', length: 3, source: 'high' });
bars.forEach(b => { b.high = b.close + 2; });
const highResult = maHigh.calculate(bars);
assert(highResult[2] !== null, 'SMA on high source works');

// Input/output schema
assert(MovingAverage.inputs.length === 3, 'MA has 3 inputs');
assert(MovingAverage.outputs.length === 1, 'MA has 1 output');

console.log('MovingAverage tests complete');
