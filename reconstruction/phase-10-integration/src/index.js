import { TradingView, ChartStyle, PriceScaleMode, CrosshairMode } from './api/TradingView.js';
import { Widget } from './widget/Widget.js';
import { toolRegistry } from './drawing/index.js';
import { studyRegistry } from './studies/index.js';

TradingView.widget = Widget;
TradingView._toolRegistry = toolRegistry;
TradingView._studyRegistry = studyRegistry;

export default TradingView;
export {
  TradingView,
  Widget,
  ChartStyle,
  PriceScaleMode,
  CrosshairMode,
  toolRegistry,
  studyRegistry
};
