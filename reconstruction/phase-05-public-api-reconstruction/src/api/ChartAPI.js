import { EventEmitter } from '../utils/EventEmitter.js';

export class ChartAPI {
  constructor(index, widget) {
    this._index = index;
    this._widget = widget;
    this._eventEmitter = new EventEmitter();
    this._symbol = widget ? widget.symbolInterval().symbol : 'AAPL';
    this._interval = widget ? widget.symbolInterval().interval : '1D';
  }

  symbol() { return this._symbol; }
  interval() { return this._interval; }
  resolution() { return this._interval; }

  setSymbol(symbol, callback) {
    this._symbol = symbol;
    this._eventEmitter.emit('symbolChanged', { symbol });
    if (callback) callback();
  }

  setResolution(resolution, callback) {
    this._interval = resolution;
    this._eventEmitter.emit('resolutionChanged', { resolution });
    if (callback) callback();
  }

  setInterval(interval, callback) {
    return this.setResolution(interval, callback);
  }

  createStudy(studyName, forceOverlay, lock, callback) {
    const studyId = `study_${Date.now()}`;
    this._eventEmitter.emit('studyCreated', { id: studyId, name: studyName });
    if (callback) callback(studyId);
    return studyId;
  }

  getStudies() { return []; }
  getAllStudies() { return []; }

  removeStudy(studyId) {
    this._eventEmitter.emit('studyRemoved', { id: studyId });
  }

  removeAllStudies() {}

  getStudyById(studyId) { return null; }

  getChartType() { return 0; }
  setChartType(type) {
    this._eventEmitter.emit('chartTypeChanged', { type });
  }

  getTimeframes() { return []; }
  setTimeframe(timeframe) {}

  data() {
    return { bars: [], isEmpty: () => true, count: () => 0 };
  }

  getAllDrawings() { return []; }
  getDrawingById(drawingId) { return null; }
  removeDrawing(drawingId) {}
  removeAllDrawings() {}

  onSymbolChanged(callback) { return this._eventEmitter.on('symbolChanged', callback); }
  onResolutionChanged(callback) { return this._eventEmitter.on('resolutionChanged', callback); }
  onStudyCreated(callback) { return this._eventEmitter.on('studyCreated', callback); }
  onStudyRemoved(callback) { return this._eventEmitter.on('studyRemoved', callback); }
}
