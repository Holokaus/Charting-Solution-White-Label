export class CompareSymbol {
  constructor(symbol, bars, options = {}) {
    this.symbol = symbol;
    this.bars = bars || [];
    this.options = { color: '#FF9800', width: 2, ...options };
    this.basePrice = bars.length > 0 ? bars[0].close : 100;
    this._visible = true;
  }

  setBars(bars) {
    this.bars = bars || [];
    this.basePrice = bars.length > 0 ? bars[0].close : 100;
  }

  setVisible(visible) {
    this._visible = visible;
  }

  calculate(mainBars) {
    if (!this._visible || this.bars.length === 0) return [];
    const ratioMap = {};
    for (const b of this.bars) {
      ratioMap[b.time] = ((b.close - this.basePrice) / this.basePrice) * 100;
    }
    return mainBars.map(mb => {
      const pct = ratioMap[mb.time];
      return pct != null ? { time: mb.time, value: pct } : null;
    }).filter(v => v != null);
  }

  render(ctx, viewport, priceScale, timeScale, options = {}) {
    if (!this._visible || this.bars.length === 0) return;
    const style = { ...this.options, ...options };
    ctx.strokeStyle = style.color;
    ctx.lineWidth = style.width;
    ctx.beginPath();
    let started = false;
    for (const bar of this.bars) {
      const x = viewport.timeToX(bar.time);
      const pct = ((bar.close - this.basePrice) / this.basePrice) * 100;
      const y = priceScale.priceToY(pct);
      if (x == null || y == null) continue;
      if (!started) { ctx.moveTo(x, y); started = true; } else { ctx.lineTo(x, y); }
    }
    ctx.stroke();
  }
}
