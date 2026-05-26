import { StudyRegistry } from '../../../phase-09-studies-indicators/src/StudyRegistry.js';
import { MovingAverage } from '../../../phase-09-studies-indicators/src/studies/MovingAverage.js';
import { RSI } from '../../../phase-09-studies-indicators/src/studies/RSI.js';
import { MACD } from '../../../phase-09-studies-indicators/src/studies/MACD.js';
import { BollingerBands } from '../../../phase-09-studies-indicators/src/studies/BollingerBands.js';
import { Volume } from '../../../phase-09-studies-indicators/src/studies/Volume.js';
import { LineRenderer } from '../../../phase-09-studies-indicators/src/renderers/LineRenderer.js';
import { HistogramRenderer } from '../../../phase-09-studies-indicators/src/renderers/HistogramRenderer.js';
import { BandRenderer } from '../../../phase-09-studies-indicators/src/renderers/BandRenderer.js';

const studyRegistry = new StudyRegistry();
studyRegistry.register('MovingAverage', MovingAverage);
studyRegistry.register('RSI', RSI);
studyRegistry.register('MACD', MACD);
studyRegistry.register('BollingerBands', BollingerBands);
studyRegistry.register('Volume', Volume);

export {
  studyRegistry,
  StudyRegistry,
  MovingAverage,
  RSI,
  MACD,
  BollingerBands,
  Volume,
  LineRenderer,
  HistogramRenderer,
  BandRenderer
};
