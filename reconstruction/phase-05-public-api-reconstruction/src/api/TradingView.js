import { Widget } from './Widget.js';
import { ChartAPI } from './ChartAPI.js';

export const version = () => '30.0.0-reconstructed';

export const ChartStyle = Object.freeze({
  CANDLES: 0,
  BARS: 1,
  LINE: 2,
  AREA: 3,
  BASELINE: 4,
  HILO: 5,
  HOLLOW_CANDLES: 6,
  HEIKIN_ASHI: 8,
  HOLLOW_CANDLES: 9,
  LINE_BREAK: 10,
  KAGI: 11,
  POINT_AND_FIGURE: 12,
  RENKO: 13,
  RANGE: 14,
  PNF: 15,
});

export const CrosshairMode = Object.freeze({
  NORMAL: 0,
  MAGNET: 1,
  HIDDEN: 2,
});

export const PriceScaleMode = Object.freeze({
  NORMAL: 0,
  LOG: 1,
  PERCENTAGE: 2,
  INDEX: 3,
});

export const LineStyle = Object.freeze({
  SOLID: 0,
  DOTTED: 1,
  DASHED: 2,
  LARGE_DASHED: 3,
  SPARSE_DOTTED: 4,
});

export const LineStudyPlotStyle = Object.freeze({
  LINE: 0,
  HISTOGRAM: 1,
  CROSS: 2,
  AREA: 3,
  COLUMN: 4,
  CIRCLES: 5,
});

export const StudyPlotType = Object.freeze({
  LINE: 0,
  HISTOGRAM: 1,
  CROSS: 2,
  AREA: 3,
  COLUMN: 4,
  CIRCLES: 5,
  SHAPE: 6,
});

export const ActionId = Object.freeze({
  CHART_PROPERTIES: 'ChartProperties',
  DRAWING_TOOLBAR: 'DrawingToolbar',
  HEADER_CHART_TYPE: 'HeaderChartType',
  HEADER_INTERVAL: 'HeaderInterval',
  HEADER_SCREENSHOT: 'HeaderScreenshot',
  HEADER_SYMBOL_SEARCH: 'HeaderSymbolSearch',
  HEADER_UNDO: 'HeaderUndo',
  HEADER_REDO: 'HeaderRedo',
  OBJECT_TREE: 'ObjectTree',
  FULLSCREEN: 'Fullscreen',
});

export const TimeFrameType = Object.freeze({
  DAY: 'day',
  MONTH: 'month',
  YEAR: 'year',
  CUSTOM: 'custom',
});

export const MarketStatus = Object.freeze({
  OPEN: 'open',
  CLOSED: 'closed',
  PRE: 'pre',
  POST: 'post',
});

export const MenuItemType = Object.freeze({
  SEPARATOR: 'separator',
  ACTION: 'action',
  SUBMENU: 'submenu',
});

export const ClearMarksMode = Object.freeze({
  ALL: 0,
  ONLY_LOADED: 1,
  ONLY_UNLOADED: 2,
});

export const OrderStatus = Object.freeze({
  WORKING: 0,
  REJECTED: 1,
  FILLED: 2,
  CANCELLED: 3,
});

export const OrderType = Object.freeze({
  LIMIT: 0,
  MARKET: 1,
  STOP: 2,
  STOP_LIMIT: 3,
});

export const Side = Object.freeze({
  BUY: 0,
  SELL: 1,
});

export const Resolution = Object.freeze({
  SECOND: '1S',
  MINUTE: '1',
  MINUTE_5: '5',
  MINUTE_15: '15',
  MINUTE_30: '30',
  HOUR: '60',
  HOUR_2: '120',
  HOUR_4: '240',
  DAY: '1D',
  WEEK: '1W',
  MONTH: '1M',
});

const TradingView = {
  version,
  ChartStyle,
  CrosshairMode,
  PriceScaleMode,
  LineStyle,
  LineStudyPlotStyle,
  StudyPlotType,
  ActionId,
  TimeFrameType,
  MarketStatus,
  MenuItemType,
  ClearMarksMode,
  OrderStatus,
  OrderType,
  Side,
  Resolution,
  widget: Widget,
};

export default TradingView;
