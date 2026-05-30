export class Measure {
  constructor() {
    this.name = 'Measure';
    this.icon = '📏';
    this.cursor = 'crosshair';
    this.maxPoints = 2;
    this.points = [];
    this.style = { color: '#FFFFFF', width: 1, showDistance: true };
  }

  render(ctx, viewport, priceScale, timeScale, options = {}) {
    if (this.points.length < 2) return;
    const style = { ...this.style, ...options };
    const p1 = this._toPixel(this.points[0], viewport, priceScale, timeScale);
    const p2 = this._toPixel(this.points[1], viewport, priceScale, timeScale);
    if (p1 == null || p2 == null) return;

    ctx.strokeStyle = style.color;
    ctx.lineWidth = style.width;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
    ctx.setLineDash([]);

    const priceDiff = Math.abs(this.points[1].price - this.points[0].price);
    const timeDiff = Math.abs(this.points[1].time - this.points[0].time);

    if (style.showDistance) {
      const midX = (p1.x + p2.x) / 2;
      const midY = (p1.y + p2.y) / 2;
      const label = `ΔP: ${priceDiff.toFixed(2)}  ΔT: ${timeDiff}s`;
      ctx.font = '11px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillStyle = style.color;
      ctx.fillText(label, midX, midY - 8);
    }
  }

  hitTest(mouseX, mouseY, viewport, priceScale, timeScale, threshold = 5) {
    if (this.points.length < 2) return false;
    const p1 = this._toPixel(this.points[0], viewport, priceScale, timeScale);
    const p2 = this._toPixel(this.points[1], viewport, priceScale, timeScale);
    if (p1 == null || p2 == null) return false;
    return this._dist(mouseX, mouseY, p1.x, p1.y, p2.x, p2.y) <= threshold;
  }

  _dist(px, py, x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const lenSq = dx * dx + dy * dy;
    if (lenSq === 0) return Math.hypot(px - x1, py - y1);
    let t = ((px - x1) * dx + (py - y1) * dy) / lenSq;
    t = Math.max(0, Math.min(1, t));
    return Math.hypot(px - (x1 + t * dx), py - (y1 + t * dy));
  }

  _toPixel(pt, viewport, priceScale, timeScale) {
    if (pt.time == null || pt.price == null) return null;
    return { x: viewport.timeToX(pt.time), y: priceScale.priceToY(pt.price) };
  }
}
