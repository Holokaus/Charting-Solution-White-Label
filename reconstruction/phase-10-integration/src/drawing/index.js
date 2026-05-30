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
import { Channel } from '../tools/Channel.js';
import { Pitchfork } from '../tools/Pitchfork.js';
import { GannFan } from '../tools/GannFan.js';
import { GannBox } from '../tools/GannBox.js';
import { ElliottWave } from '../tools/ElliottWave.js';
import { Brush } from '../tools/Brush.js';
import { Arrow } from '../tools/Arrow.js';
import { Measure } from '../tools/Measure.js';
import { DateRange } from '../tools/DateRange.js';
import { PriceRange } from '../tools/PriceRange.js';

const toolRegistry = new ToolRegistry();
toolRegistry.register('TrendLine', TrendLine);
toolRegistry.register('HorizontalLine', HorizontalLine);
toolRegistry.register('VerticalLine', VerticalLine);
toolRegistry.register('Rectangle', Rectangle);
toolRegistry.register('Text', Text);
toolRegistry.register('FibonacciRetracement', FibonacciRetracement);
toolRegistry.register('FibonacciExtension', FibonacciExtension);
toolRegistry.register('FibonacciFan', FibonacciFan);
toolRegistry.register('Channel', Channel);
toolRegistry.register('Pitchfork', Pitchfork);
toolRegistry.register('GannFan', GannFan);
toolRegistry.register('GannBox', GannBox);
toolRegistry.register('ElliottWave', ElliottWave);
toolRegistry.register('Brush', Brush);
toolRegistry.register('Arrow', Arrow);
toolRegistry.register('Measure', Measure);
toolRegistry.register('DateRange', DateRange);
toolRegistry.register('PriceRange', PriceRange);

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
  Channel,
  Pitchfork,
  GannFan,
  GannBox,
  ElliottWave,
  Brush,
  Arrow,
  Measure,
  DateRange,
  PriceRange,
  DrawingState
};
