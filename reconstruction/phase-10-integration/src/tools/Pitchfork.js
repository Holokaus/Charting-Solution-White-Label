export class Pitchfork {
  constructor() {
    this.name = 'Pitchfork';
    this.icon = '⤡';
    this.cursor = 'crosshair';
    this.maxPoints = 3;
    this.points = [];
    this.style = { color: '#FF5722', width: 1 };
  }

  render(ctx, viewport, priceScale, timeScale, options = {}) {
    if (this.points.length < 3) return;
    const style = { ...this.style, ...options };
    const p1 = this._toPixel(this.points[0], viewport, priceScale, timeScale);
    const p2 = this._toPixel(this.points[1], viewport, priceScale, timeScale);
    const p3 = this._toPixel(this.points[2], viewport, priceScale, timeScale);
    if (p1 == null || p2 == null || p3 == null) return;

    const midX = (p2.x + p3.x) / 2;
    const midY = (p2.y + p3.y) / 2;

    ctx.strokeStyle = style.color;
    ctx.lineWidth = style.width;

    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y); ctx.lineTo(midX, midY);
    ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y);
    ctx.moveTo(p1.x, p1.y); ctx.lineTo(p3.x, p3.y);
    ctx.stroke();
  }

  hitTest(mouseX, mouseY, viewport, priceScale, timeScale, threshold = 5) {
    if (this.points.length < 3) return false;
    const p1 = this._toPixel(this.points[0], viewport, priceScale, timeScale);
    const p2 = this._toPixel(this.points[1], viewport, priceScale, timeScale);
    const p3 = this._toPixel(this.points[2], viewport, priceScale, timeScale);
    if (p1 == null || p2 == null || p3 == null) return false;

    const midX = (p2.x + p3.x) / 2;
    const midY = (p2.y + p3.y) / 2;

    return this._dist(mouseX, mouseY, p1.x, p1.y, midX, midY) <= threshold ||
           this._dist(mouseX, mouseY, p1.x, p1.y, p2.x, p2.y) <= threshold ||
           this._dist(mouseX, mouseY, p1.x, p1.y, p3.x, p3.y) <= threshold;
  }

  _toPixel(pt, viewport, priceScale, timeScale) {
    if (pt.time == null || pt.price == null) return null;
    return { x: viewport.timeToX(pt.time), y: priceScale.priceToY(pt.price) };
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
}
