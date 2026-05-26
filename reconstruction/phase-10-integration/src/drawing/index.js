import { ToolRegistry } from '../../../phase-08-drawing-tools/src/ToolRegistry.js';
import { TrendLine } from '../../../phase-08-drawing-tools/src/tools/TrendLine.js';
import { HorizontalLine } from '../../../phase-08-drawing-tools/src/tools/HorizontalLine.js';
import { VerticalLine } from '../../../phase-08-drawing-tools/src/tools/VerticalLine.js';
import { Rectangle } from '../../../phase-08-drawing-tools/src/tools/Rectangle.js';
import { Text } from '../../../phase-08-drawing-tools/src/tools/Text.js';
import { FibonacciRetracement } from '../../../phase-08-drawing-tools/src/tools/FibonacciRetracement.js';
import { FibonacciExtension } from '../../../phase-08-drawing-tools/src/tools/FibonacciExtension.js';
import { FibonacciFan } from '../../../phase-08-drawing-tools/src/tools/FibonacciFan.js';
import { DrawingState } from '../../../phase-08-drawing-tools/src/persistence/DrawingState.js';

const toolRegistry = new ToolRegistry();
toolRegistry.register('TrendLine', TrendLine);
toolRegistry.register('HorizontalLine', HorizontalLine);
toolRegistry.register('VerticalLine', VerticalLine);
toolRegistry.register('Rectangle', Rectangle);
toolRegistry.register('Text', Text);
toolRegistry.register('FibonacciRetracement', FibonacciRetracement);
toolRegistry.register('FibonacciExtension', FibonacciExtension);
toolRegistry.register('FibonacciFan', FibonacciFan);

const drawingState = new DrawingState(toolRegistry);

export {
  toolRegistry,
  drawingState,
  ToolRegistry,
  TrendLine,
  HorizontalLine,
  VerticalLine,
  Rectangle,
  Text,
  FibonacciRetracement,
  FibonacciExtension,
  FibonacciFan,
  DrawingState
};
