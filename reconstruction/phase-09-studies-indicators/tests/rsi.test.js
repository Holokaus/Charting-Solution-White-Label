import { RSI } from '../src/studies/RSI.js';

function assert(condition, msg) {
  if (!condition) {
    console.error('FAIL:', msg);
    process.exitCode = 1;
  } else {
    console.log('PASS:', msg);
  }
}

function approx(a, b, tol = 0.5) {
  return Math.abs(a - b) < tol;
}

const bars = [];
for (let i = 0; i < 50; i++) {
  bars.push({ close: 100 + Math.sin(i * 0.5) * 20 });
}

const rsi = new RSI({ length: 14 });
const result = rsi.calculate(bars);
assert(result.length === bars.length, 'RSI result length matches bars');

// First `length` values are null
for (let i = 0; i <= 14; i++) {
  assert(result[i] === null, `RSI[${i}] is null`);
}

// Later values are between 0 and 100
let validCount = 0;
for (let i = 15; i < result.length; i++) {
  if (result[i] !== null) {
    validCount++;
    assert(result[i] >= 0, `RSI[${i}] >= 0: ${result[i]}`);
    assert(result[i] <= 100, `RSI[${i}] <= 100: ${result[i]}`);
  }
}
assert(validCount > 0, 'RSI has valid values after warmup');

// Uptrend should give RSI > 50
const upBars = [];
for (let i = 0; i < 30; i++) {
  upBars.push({ close: 100 + i });
}
const upResult = new RSI({ length: 5 }).calculate(upBars);
const lastUp = upResult[upResult.length - 1];
assert(lastUp !== null && lastUp > 50, `Uptrend RSI > 50: ${lastUp}`);

// Input/output schema
assert(RSI.inputs.length === 1, 'RSI has 1 input');
assert(RSI.outputs.length === 1, 'RSI has 1 output');

console.log('RSI tests complete');
