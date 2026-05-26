export const ChartStyle = Object.freeze({
  CANDLES: 0,
  BARS: 1,
  LINE: 2,
  AREA: 3,
  BASELINE: 4
});

export const PriceScaleMode = Object.freeze({
  NORMAL: 0,
  LOG: 1,
  PERCENTAGE: 2,
  INDEXED_TO_100: 3
});

export const CrosshairMode = Object.freeze({
  NORMAL: 0,
  MAGNET: 1
});

export const TradingView = {
  widget: null,
  ChartStyle,
  PriceScaleMode,
  CrosshairMode,
  version: '30.0.0-reconstructed',
  _toolRegistry: null,
  _studyRegistry: null
};
