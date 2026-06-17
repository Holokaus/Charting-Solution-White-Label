export class Legend {
  constructor() {
    this._symbol = '';
    this._interval = '';
    this._ohlcv = { o: null, h: null, l: null, c: null, v: null };
    this._x = 10;
    this._y = 10;
  }

  setSymbol(symbol) {
    this._symbol = symbol;
  }

  setInterval(interval) {
    this._interval = interval;
  }

  updateOHLCV(bar) {
    if (!bar) return;
    this._ohlcv = {
      o: bar.open,
      h: bar.high,
      l: bar.low,
      c: bar.close,
      v: bar.volume
    };
  }

  render(ctx, viewport, priceScale, timeScale, options = {}) {
    const lines = [];
    if (this._symbol) {
      lines.push({ text: `${this._symbol}${this._interval ? ' • ' + this._interval : ''}`, bold: true, color: options.textColor || '#D1D4DC' });
    }
    if (this._ohlcv.o !== null) {
      const isUp = this._ohlcv.c >= this._ohlcv.o;
      const priceColor = isUp ? (options.upColor || '#089981') : (options.downColor || '#F23645');
      lines.push({ text: `O: ${this._ohlcv.o.toFixed(2)}`, color: options.textColor || '#D1D4DC' });
      lines.push({ text: `H: ${this._ohlcv.h.toFixed(2)}`, color: options.textColor || '#D1D4DC' });
      lines.push({ text: `L: ${this._ohlcv.l.toFixed(2)}`, color: options.textColor || '#D1D4DC' });
      lines.push({ text: `C: ${this._ohlcv.c.toFixed(2)}`, bold: true, color: priceColor });
      if (this._ohlcv.v !== null) {
        const vol = this._ohlcv.v >= 1000000
          ? (this._ohlcv.v / 1000000).toFixed(1) + 'M'
          : this._ohlcv.v >= 1000
            ? (this._ohlcv.v / 1000).toFixed(1) + 'K'
            : this._ohlcv.v.toString();
        lines.push({ text: `V: ${vol}`, color: options.secondaryColor || '#787B86', small: true });
      }
    }

    const lineHeight = 16;
    const padding = 6;
    const maxWidth = Math.max(...lines.map(l => ctx.measureText(l.text).width)) + padding * 2;
    const totalHeight = lines.length * lineHeight + padding * 2;

    ctx.fillStyle = options.bgColor || 'rgba(30, 34, 45, 0.8)';
    ctx.fillRect(0, 0, maxWidth + padding, totalHeight);

    ctx.textBaseline = 'top';
    ctx.textAlign = 'left';
    for (let i = 0; i < lines.length; i++) {
      const l = lines[i];
      ctx.font = l.bold ? 'bold 11px sans-serif' : l.small ? '10px sans-serif' : '11px sans-serif';
      ctx.fillStyle = l.color;
      ctx.fillText(l.text, padding, padding + i * lineHeight);
    }
  }
}
