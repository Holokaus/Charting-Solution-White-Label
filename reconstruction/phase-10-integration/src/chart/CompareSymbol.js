export class CompareSymbol {
  constructor(chart, symbol, datafeed) {
    this.chart = chart;
    this.symbol = symbol;
    this.datafeed = datafeed;
    this.bars = [];
    this.color = '#FF9800';
    this._visible = true;
  }

  async load(resolution, from, to) {
    if (!this.datafeed) return;
    const bars = await new Promise((resolve, reject) => {
      this.datafeed.getBars({ name: this.symbol }, resolution, from, to, resolve, reject);
    });
    if (!bars || bars.length === 0) return;
    const basePrice = bars[0].close;
    this.bars = bars.map(b => ({
      time: b.time,
      close: b.close,
      value: ((b.close - basePrice) / basePrice) * 100
    }));
  }

  calculate(mainBars) {
    if (!this._visible || this.bars.length === 0) return [];
    const basePrice = this.bars[0].close;
    const ratioMap = {};
    for (const b of this.bars) {
      ratioMap[b.time] = ((b.close - basePrice) / basePrice) * 100;
    }
    return mainBars.map(mb => {
      const pct = ratioMap[mb.time];
      return pct != null ? { time: mb.time, value: pct } : null;
    }).filter(v => v != null);
  }

  setVisible(visible) {
    this._visible = visible;
  }

  render(ctx, viewport, priceScale, timeScale, options = {}) {
    if (!this._visible || this.bars.length === 0) return;
    const style = { color: this.color, ...options };
    const basePrice = this.bars[0].close;
    ctx.strokeStyle = style.color;
    ctx.lineWidth = style.width || 2;
    ctx.beginPath();
    let started = false;
    for (const bar of this.bars) {
      const x = viewport.timeToX(bar.time);
      const pct = ((bar.close - basePrice) / basePrice) * 100;
      const y = priceScale.priceToY(pct);
      if (x == null || y == null) continue;
      if (!started) { ctx.moveTo(x, y); started = true; } else { ctx.lineTo(x, y); }
    }
    ctx.stroke();
  }
}
