import { ToolRegistry } from '../src/ToolRegistry.js';
import { TrendLine } from '../src/tools/TrendLine.js';
import { HorizontalLine } from '../src/tools/HorizontalLine.js';
import { VerticalLine } from '../src/tools/VerticalLine.js';
import { Rectangle } from '../src/tools/Rectangle.js';
import { Text } from '../src/tools/Text.js';
import { FibonacciRetracement } from '../src/tools/FibonacciRetracement.js';
import { FibonacciExtension } from '../src/tools/FibonacciExtension.js';
import { FibonacciFan } from '../src/tools/FibonacciFan.js';
import { DrawingState } from '../src/persistence/DrawingState.js';

function assert(condition, msg) {
  if (!condition) {
    console.error('FAIL:', msg);
    process.exitCode = 1;
  } else {
    console.log('PASS:', msg);
  }
}

const registry = new ToolRegistry();

// Register all tools
registry.register('TrendLine', TrendLine);
registry.register('HorizontalLine', HorizontalLine);
registry.register('VerticalLine', VerticalLine);
registry.register('Rectangle', Rectangle);
registry.register('Text', Text);
registry.register('FibonacciRetracement', FibonacciRetracement);
registry.register('FibonacciExtension', FibonacciExtension);
registry.register('FibonacciFan', FibonacciFan);

const names = registry.getNames();
assert(names.length === 8, '8 tools registered');
assert(names.includes('TrendLine'), 'TrendLine registered');
assert(names.includes('HorizontalLine'), 'HorizontalLine registered');
assert(names.includes('VerticalLine'), 'VerticalLine registered');
assert(names.includes('Rectangle'), 'Rectangle registered');
assert(names.includes('Text'), 'Text registered');
assert(names.includes('FibonacciRetracement'), 'FibonacciRetracement registered');
assert(names.includes('FibonacciExtension'), 'FibonacciExtension registered');
assert(names.includes('FibonacciFan'), 'FibonacciFan registered');

// getClass
assert(registry.getClass('TrendLine') === TrendLine, 'getClass returns correct class');
assert(registry.getClass('Unknown') === null, 'getClass returns null for unknown');

// create tool instances
const trend = registry.create('TrendLine', {
  points: [{ time: 100, price: 50 }, { time: 200, price: 60 }],
  style: { color: '#FF0000' }
});
assert(trend instanceof TrendLine, 'create returns TrendLine instance');
assert(trend.points.length === 2, 'trend has 2 points');
assert(trend.style.color === '#FF0000', 'trend style color applied');

const hline = registry.create('HorizontalLine', {
  points: [{ time: 100, price: 55 }]
});
assert(hline instanceof HorizontalLine, 'create returns HorizontalLine instance');
assert(hline.points.length === 1, 'horizontal line has 1 point');

const rect = registry.create('Rectangle', {
  points: [{ time: 100, price: 50 }, { time: 200, price: 40 }],
  style: { fill: true }
});
assert(rect instanceof Rectangle, 'create returns Rectangle instance');
assert(rect.style.fill === true, 'rectangle style fill applied');

// DrawingState serialization
const state = new DrawingState(registry);
const tools = [trend, hline];
const serialized = state.serialize(tools);
assert(serialized.length === 2, 'serialize returns 2 items');
assert(serialized[0].type === 'TrendLine', 'serialized type is TrendLine');
assert(serialized[1].type === 'HorizontalLine', 'serialized type is HorizontalLine');

// DrawingState deserialization
const deserialized = state.deserialize(serialized);
assert(deserialized.length === 2, 'deserialize returns 2 items');
assert(deserialized[0] instanceof TrendLine, 'deserialized item is TrendLine');

// JSON roundtrip
const json = state.exportToJSON(tools);
const imported = state.importFromJSON(json);
assert(imported.length === 2, 'JSON roundtrip preserves count');

// register duplicate throws
let threw = false;
try {
  registry.register('TrendLine', TrendLine);
} catch (e) {
  threw = true;
}
assert(threw, 'register duplicate throws');

// create unknown throws
threw = false;
try {
  registry.create('NonExistent');
} catch (e) {
  threw = true;
}
assert(threw, 'create unknown throws');

console.log('ToolRegistry tests complete');
