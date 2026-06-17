import { StudyRegistry } from './StudyRegistry.js';
import { LineRenderer } from './renderers/LineRenderer.js';
import { HistogramRenderer } from './renderers/HistogramRenderer.js';
import { BandRenderer } from './renderers/BandRenderer.js';

import { MovingAverage } from './MovingAverage.js';
import { RSI } from './RSI.js';
import { MACD } from './MACD.js';
import { BollingerBands } from './BollingerBands.js';
import { Volume } from './Volume.js';
import { Stochastic } from './Stochastic.js';
import { CCI } from './CCI.js';
import { ATR } from './ATR.js';
import { OBV } from './OBV.js';
import { VWAP } from './VWAP.js';
import { PivotPoints } from './PivotPoints.js';
import { ParabolicSAR } from './ParabolicSAR.js';
import { Ichimoku } from './Ichimoku.js';
import { ADX } from './ADX.js';
import { Momentum } from './Momentum.js';
import { WilliamsR } from './WilliamsR.js';
import { UltimateOscillator } from './UltimateOscillator.js';
import { MFI } from './MFI.js';
import { ChaikinOsc } from './ChaikinOsc.js';
import { KeltnerChannels } from './KeltnerChannels.js';
import { DonchianChannels } from './DonchianChannels.js';
import { SuperTrend } from './SuperTrend.js';
import { ZigZag } from './ZigZag.js';
import { LinearRegression } from './LinearRegression.js';
import { Correlation } from './Correlation.js';

const studyRegistry = new StudyRegistry();
studyRegistry.register('MovingAverage', MovingAverage);
studyRegistry.register('RSI', RSI);
studyRegistry.register('MACD', MACD);
studyRegistry.register('BollingerBands', BollingerBands);
studyRegistry.register('Volume', Volume);
studyRegistry.register('Stochastic', Stochastic);
studyRegistry.register('CCI', CCI);
studyRegistry.register('ATR', ATR);
studyRegistry.register('OBV', OBV);
studyRegistry.register('VWAP', VWAP);
studyRegistry.register('PivotPoints', PivotPoints);
studyRegistry.register('ParabolicSAR', ParabolicSAR);
studyRegistry.register('Ichimoku', Ichimoku);
studyRegistry.register('ADX', ADX);
studyRegistry.register('Momentum', Momentum);
studyRegistry.register('WilliamsR', WilliamsR);
studyRegistry.register('UltimateOscillator', UltimateOscillator);
studyRegistry.register('MFI', MFI);
studyRegistry.register('ChaikinOsc', ChaikinOsc);
studyRegistry.register('KeltnerChannels', KeltnerChannels);
studyRegistry.register('DonchianChannels', DonchianChannels);
studyRegistry.register('SuperTrend', SuperTrend);
studyRegistry.register('ZigZag', ZigZag);
studyRegistry.register('LinearRegression', LinearRegression);
studyRegistry.register('Correlation', Correlation);

export {
  studyRegistry,
  StudyRegistry,
  MovingAverage,
  RSI,
  MACD,
  BollingerBands,
  Volume,
  Stochastic,
  CCI,
  ATR,
  OBV,
  VWAP,
  PivotPoints,
  ParabolicSAR,
  Ichimoku,
  ADX,
  Momentum,
  WilliamsR,
  UltimateOscillator,
  MFI,
  ChaikinOsc,
  KeltnerChannels,
  DonchianChannels,
  SuperTrend,
  ZigZag,
  LinearRegression,
  Correlation,
  LineRenderer,
  HistogramRenderer,
  BandRenderer
};
