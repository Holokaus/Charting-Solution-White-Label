export class FibonacciRetracement {
  constructor() {
    this.name = 'FibonacciRetracement';
    this.icon = 'Fib';
    this.cursor = 'crosshair';
    this.maxPoints = 2;
    this.points = [];
    this.style = { color: '#E91E63', width: 1, labelColor: '#FFFFFF', levels: [0, 23.6, 38.2, 50, 61.8, 78.6, 100] };
  }

  render(ctx, viewport, priceScale, timeScale, options = {}) {
    if (this.points.length < 2) return;
    const style = { ...this.style, ...options };
    const high = Math.max(this.points[0].price, this.points[1].price);
    const low = Math.min(this.points[0].price, this.points[1].price);
    const diff = high - low;

    if (diff === 0) return;

    for (const level of style.levels) {
      const price = high - diff * (level / 100);
      const y = priceScale.priceToY(price);
      if (y == null) continue;

      const alpha = 1 - (level / 100) * 0.6;
      ctx.strokeStyle = style.color;
      ctx.globalAlpha = alpha;
      ctx.lineWidth = style.width;
      ctx.setLineDash([2, 3]);
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(viewport.width, y);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.globalAlpha = 1;

      const label = `${level}% (${price.toFixed(2)})`;
      ctx.font = '10px sans-serif';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = style.color;
      ctx.globalAlpha = alpha;
      ctx.fillText(label, 4, y - 6);
      ctx.globalAlpha = 1;
    }
  }

  hitTest(mouseX, mouseY, viewport, priceScale, timeScale, threshold = 5) {
    if (this.points.length < 2) return false;
    const p1 = this._pixel(this.points[0], viewport, priceScale, timeScale);
    const p2 = this._pixel(this.points[1], viewport, priceScale, timeScale);
    if (p1 == null || p2 == null) return false;
    return Math.hypot(mouseX - p1.x, mouseY - p1.y) <= threshold ||
           Math.hypot(mouseX - p2.x, mouseY - p2.y) <= threshold;
  }

  _pixel(pt, viewport, priceScale, timeScale) {
    if (pt.time == null || pt.price == null) return null;
    return { x: viewport.timeToX(pt.time), y: priceScale.priceToY(pt.price) };
  }
}
