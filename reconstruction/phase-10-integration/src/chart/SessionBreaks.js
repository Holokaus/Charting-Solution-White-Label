export class SessionBreaks {
  constructor(options = {}) {
    this.options = { color: 'rgba(255,255,255,0.05)', weekendColor: 'rgba(255,255,255,0.08)', gapThreshold: 4 * 3600, ...options };
  }

  detect(bars) {
    if (!bars || bars.length < 2) return [];
    const breaks = [];
    for (let i = 1; i < bars.length; i++) {
      const gap = bars[i].time - bars[i - 1].time;
      if (gap > this.options.gapThreshold) {
        breaks.push({ start: bars[i - 1].time, end: bars[i].time, isWeekend: this._isWeekend(bars[i - 1].time) });
      }
    }
    return breaks;
  }

  _isWeekend(timestamp) {
    const d = new Date(timestamp * 1000);
    return d.getDay() === 6 || d.getDay() === 0;
  }

  render(ctx, viewport, priceScale, timeScale, options = {}) {
    const style = { ...this.options, ...options };
    const bars = this._bars || [];
    const breaks = this.detect(bars);
    for (const br of breaks) {
      const x1 = viewport.timeToX(br.start);
      const x2 = viewport.timeToX(br.end);
      if (x1 == null || x2 == null) continue;
      ctx.fillStyle = br.isWeekend ? style.weekendColor : style.color;
      ctx.fillRect(x1, 0, Math.max(x2 - x1, 2), viewport.height);
    }
  }

  setBars(bars) {
    this._bars = bars;
  }
}
