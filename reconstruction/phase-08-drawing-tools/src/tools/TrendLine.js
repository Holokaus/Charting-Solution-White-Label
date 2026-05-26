export class TrendLine {
  constructor() {
    this.name = 'TrendLine';
    this.icon = '↗';
    this.cursor = 'crosshair';
    this.maxPoints = 2;
    this.points = [];
    this.style = { color: '#2196F3', width: 2, extend: false };
  }

  render(ctx, viewport, priceScale, timeScale, options = {}) {
    if (this.points.length < 2) return;
    const style = { ...this.style, ...options };
    const p1 = this._toPixel(this.points[0], viewport, priceScale, timeScale);
    const p2 = this._toPixel(this.points[1], viewport, priceScale, timeScale);
    if (p1 == null || p2 == null) return;

    ctx.strokeStyle = style.color;
    ctx.lineWidth = style.width;
    ctx.beginPath();

    if (style.extend) {
      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;
      if (dx === 0) {
        ctx.moveTo(p1.x, 0);
        ctx.lineTo(p2.x, viewport.height);
      } else {
        const slope = dy / dx;
        const yLeft = p1.y + slope * (-p1.x);
        const yRight = p1.y + slope * (viewport.width - p1.x);
        ctx.moveTo(0, yLeft);
        ctx.lineTo(viewport.width, yRight);
      }
    } else {
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
    }
    ctx.stroke();
  }

  hitTest(mouseX, mouseY, viewport, priceScale, timeScale, threshold = 5) {
    if (this.points.length < 2) return false;
    const p1 = this._toPixel(this.points[0], viewport, priceScale, timeScale);
    const p2 = this._toPixel(this.points[1], viewport, priceScale, timeScale);
    if (p1 == null || p2 == null) return false;
    return this._distToSegment(mouseX, mouseY, p1.x, p1.y, p2.x, p2.y) <= threshold;
  }

  _toPixel(pt, viewport, priceScale, timeScale) {
    if (pt.time == null || pt.price == null) return null;
    return {
      x: viewport.timeToX(pt.time),
      y: priceScale.priceToY(pt.price)
    };
  }

  _distToSegment(px, py, x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const lenSq = dx * dx + dy * dy;
    if (lenSq === 0) return Math.hypot(px - x1, py - y1);
    let t = ((px - x1) * dx + (py - y1) * dy) / lenSq;
    t = Math.max(0, Math.min(1, t));
    return Math.hypot(px - (x1 + t * dx), py - (y1 + t * dy));
  }
}
