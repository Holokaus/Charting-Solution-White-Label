export class Viewport {
  constructor(width, height) {
    this._width = width || 800;
    this._height = height || 600;
    this._barSpacing = 6;
    this._offset = 0;
    this._visibleRange = { from: 0, to: 0 };
    this._dataRange = { min: 0, max: 0 };
  }

  get width() { return this._width; }
  get height() { return this._height; }
  get barSpacing() { return this._barSpacing; }
  get offset() { return this._offset; }
  get visibleRange() { return this._visibleRange; }

  setBarSpacing(spacing) {
    if (spacing >= 2 && spacing <= 100) {
      this._barSpacing = spacing;
    }
  }

  resize(width, height) {
    this._width = width;
    this._height = height;
  }

  pan(deltaPixels) {
    this._offset += deltaPixels;
    this._clampOffset();
    this._recalcVisibleRange();
  }

  zoom(factor, centerPixel) {
    const centerTime = this.xToTime(centerPixel);
    const newSpacing = Math.max(2, Math.min(100, this._barSpacing * factor));
    this._barSpacing = newSpacing;
    this._clampOffset();
    this._recalcVisibleRange();
  }

  fit(data) {
    if (!data || data.length === 0) return;
    this._dataRange.min = data[0].time;
    this._dataRange.max = data[data.length - 1].time;
    this._offset = 0;
    this._barSpacing = Math.max(2, this._width / data.length);
    this._recalcVisibleRange();
  }

  timeToX(timestamp) {
    const barIndex = (timestamp - this._visibleRange.from) / (this._barSpacing || 1);
    return barIndex * this._barSpacing - this._offset;
  }

  xToTime(pixelX) {
    const barIndex = (pixelX + this._offset) / this._barSpacing;
    return Math.round(this._visibleRange.from + barIndex * this._barSpacing);
  }

  getVisibleBars(data) {
    if (!data) return [];
    return data.filter(bar =>
      bar.time >= this._visibleRange.from && bar.time <= this._visibleRange.to
    );
  }

  _clampOffset() {
    if (this._offset < 0) this._offset = 0;
  }

  _recalcVisibleRange() {
    const totalBars = Math.ceil(this._width / this._barSpacing) + 2;
    const startBar = Math.floor(this._offset / this._barSpacing);
    this._visibleRange.from = this._dataRange.min + startBar * (this._barSpacing || 1);
    this._visibleRange.to = this._visibleRange.from + totalBars * (this._barSpacing || 1);
  }
}
