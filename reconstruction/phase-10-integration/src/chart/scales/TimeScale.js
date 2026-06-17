export class TimeScale {
  constructor(width, barSpacing = 6) {
    this._width = width;
    this._barSpacing = barSpacing;
    this._offset = 0;
    this._timezoneOffset = 0;
    this._firstVisibleTime = 0;
  }

  get width() { return this._width; }
  get barSpacing() { return this._barSpacing; }

  resize(width) {
    this._width = width;
  }

  setBarSpacing(spacing) {
    if (spacing >= 2 && spacing <= 100) {
      this._barSpacing = spacing;
    }
  }

  setTimezone(offsetMinutes) {
    this._timezoneOffset = offsetMinutes * 60 * 1000;
  }

  setFirstVisibleTime(time) {
    this._firstVisibleTime = time;
  }

  setOffset(offset) {
    this._offset = offset;
  }

  timeToX(timestamp) {
    const adjusted = timestamp + this._timezoneOffset;
    return ((adjusted - this._firstVisibleTime) / (this._barSpacing || 1)) * this._barSpacing - this._offset;
  }

  xToTime(pixelX) {
    const adjusted = this._firstVisibleTime + ((pixelX + this._offset) / this._barSpacing) * this._barSpacing;
    return Math.round(adjusted - this._timezoneOffset);
  }

  formatLabel(timestamp) {
    const d = new Date(timestamp + this._timezoneOffset);
    const diff = this._barSpacing * this._width > 100000
      ? 'yearly'
      : this._barSpacing * this._width > 50000
        ? 'monthly'
        : this._barSpacing * this._width > 10000
          ? 'daily'
          : 'intraday';

    switch (diff) {
      case 'yearly':
        return d.getFullYear().toString();
      case 'monthly': {
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        return `${months[d.getMonth()]} ${d.getFullYear()}`;
      }
      case 'daily': {
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        return `${months[d.getMonth()]} ${String(d.getDate()).padStart(2, '0')}`;
      }
      default: {
        return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
      }
    }
  }

  getTickPositions() {
    const visibleWidth = this._width + this._offset;
    const totalBars = Math.ceil(visibleWidth / this._barSpacing);
    const step = Math.max(1, Math.floor(totalBars / 10));
    const positions = [];
    for (let i = 0; i <= totalBars; i += step) {
      positions.push(i * this._barSpacing - this._offset);
    }
    return positions;
  }
}
