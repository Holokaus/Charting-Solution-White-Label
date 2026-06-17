export class LODRenderer {
  constructor(canvasRenderer, webglRenderer) {
    this.canvasRenderer = canvasRenderer;
    this.webglRenderer = webglRenderer;
    this._mode = 'auto';
    this._dataPointCount = 0;
    this._viewportWidth = 0;
    this._lodLevel = 0;
    this._fallbackThreshold = 5000;
  }

  setMode(mode) {
    if (!['auto', 'canvas', 'webgl'].includes(mode)) return;
    this._mode = mode;
  }

  getMode() { return this._mode; }

  updateMetrics(dataPointCount, viewportWidth) {
    this._dataPointCount = dataPointCount;
    this._viewportWidth = viewportWidth;
    this._lodLevel = this._computeLOD();
  }

  _computeLOD() {
    if (this._dataPointCount <= 0 || this._viewportWidth <= 0) return 0;
    const dpp = this._dataPointCount / this._viewportWidth;
    if (dpp <= 1) return 0;
    if (dpp <= 3) return 1;
    if (dpp <= 10) return 2;
    return 3;
  }

  getLOD() { return this._lodLevel; }

  render() {
    if (this._mode === 'webgl' && this.webglRenderer && this.webglRenderer.isSupported()) {
      if (this._dataPointCount > this._fallbackThreshold) {
        return this._renderWebGL();
      }
    }
    return this._renderCanvas();
  }

  _renderWebGL() {
    this.webglRenderer.init();
    this.webglRenderer.clear(0, 0, 0, 0);
    return true;
  }

  _renderCanvas() {
    return false;
  }

  simplify(data, threshold = null) {
    if (!data || data.length < 3) return data || [];
    if (threshold === null) threshold = this._lodLevel * 2;
    if (threshold <= 0) return data;

    const result = [data[0]];
    let prev = data[0];

    for (let i = 1; i < data.length - 1; i++) {
      const dx = data[i].x - prev.x;
      const dy = Math.abs(data[i].y - prev.y);
      if (dy > threshold || dx > threshold * 2) {
        result.push(data[i]);
        prev = data[i];
      }
    }
    result.push(data[data.length - 1]);
    return result;
  }

  destroy() {
    if (this.webglRenderer) this.webglRenderer.destroy();
  }
}
