export const PriceMode = Object.freeze({
  LINEAR: 0,
  LOG: 1,
  PERCENTAGE: 2,
  INDEXED_TO_100: 3
});

export class PriceScale {
  constructor(height, mode = PriceMode.LINEAR) {
    this._height = height;
    this._mode = mode;
    this._min = 0;
    this._max = 100;
    this._padding = 0.05;
    this._basePrice = null;
    this._marginTop = 8;
    this._marginBottom = 8;
  }

  get mode() { return this._mode; }

  setMode(mode) {
    if (Object.values(PriceMode).includes(mode)) {
      this._mode = mode;
    }
  }

  resize(height) {
    this._height = height;
  }

  autoScale(bars) {
    if (!bars || bars.length === 0) return;
    let min = Infinity;
    let max = -Infinity;
    for (const bar of bars) {
      if (bar.low < min) min = bar.low;
      if (bar.high > max) max = bar.high;
    }
    if (this._mode === PriceMode.PERCENTAGE || this._mode === PriceMode.INDEXED_TO_100) {
      this._basePrice = bars[0].close;
    }
    const range = max - min || 1;
    this._min = min - range * this._padding;
    this._max = max + range * this._padding;
  }

  setRange(min, max) {
    this._min = min;
    this._max = max;
  }

  priceToY(price) {
    const usable = this._height - this._marginTop - this._marginBottom;
    let normalized;
    switch (this._mode) {
      case PriceMode.LOG: {
        const p = Math.max(price, 0.0001);
        const min = Math.max(this._min, 0.0001);
        const max = Math.max(this._max, 0.0001);
        normalized = (Math.log(p) - Math.log(min)) / (Math.log(max) - Math.log(min));
        break;
      }
      case PriceMode.PERCENTAGE: {
        const base = this._basePrice || this._min;
        const pct = ((price - base) / base) * 100;
        const minPct = ((this._min - base) / base) * 100;
        const maxPct = ((this._max - base) / base) * 100;
        const range = maxPct - minPct || 1;
        normalized = (pct - minPct) / range;
        break;
      }
      case PriceMode.INDEXED_TO_100: {
        const base = this._basePrice || this._min;
        const idx = (price / base) * 100;
        const minIdx = (this._min / base) * 100;
        const maxIdx = (this._max / base) * 100;
        const range = maxIdx - minIdx || 1;
        normalized = (idx - minIdx) / range;
        break;
      }
      default: {
        const range = this._max - this._min || 1;
        normalized = (price - this._min) / range;
      }
    }
    return this._marginTop + usable * (1 - normalized);
  }

  yToPrice(pixelY) {
    const usable = this._height - this._marginTop - this._marginBottom;
    const normalized = 1 - (pixelY - this._marginTop) / usable;
    switch (this._mode) {
      case PriceMode.LOG: {
        const min = Math.max(this._min, 0.0001);
        const max = Math.max(this._max, 0.0001);
        return Math.exp(Math.log(min) + normalized * (Math.log(max) - Math.log(min)));
      }
      case PriceMode.PERCENTAGE: {
        const base = this._basePrice || this._min;
        const minPct = ((this._min - base) / base) * 100;
        const maxPct = ((this._max - base) / base) * 100;
        const pct = minPct + normalized * (maxPct - minPct);
        return base * (1 + pct / 100);
      }
      case PriceMode.INDEXED_TO_100: {
        const base = this._basePrice || this._min;
        const minIdx = (this._min / base) * 100;
        const maxIdx = (this._max / base) * 100;
        const idx = minIdx + normalized * (maxIdx - minIdx);
        return (idx / 100) * base;
      }
      default: {
        return this._min + normalized * (this._max - this._min);
      }
    }
  }

  get min() { return this._min; }
  get max() { return this._max; }
  get basePrice() { return this._basePrice; }
}
