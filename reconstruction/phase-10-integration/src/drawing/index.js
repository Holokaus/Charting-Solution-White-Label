import { ToolRegistry } from './ToolRegistry.js';
import { TrendLine } from './tools/TrendLine.js';
import { HorizontalLine } from './tools/HorizontalLine.js';
import { VerticalLine } from './tools/VerticalLine.js';
import { Rectangle } from './tools/Rectangle.js';
import { Text } from './tools/Text.js';
import { FibonacciRetracement } from './tools/FibonacciRetracement.js';
import { FibonacciExtension } from './tools/FibonacciExtension.js';
import { FibonacciFan } from './tools/FibonacciFan.js';
import { DrawingState } from './persistence/DrawingState.js';
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
