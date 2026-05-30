export class Channel {
  constructor() {
    this.name = 'Channel';
    this.icon = '∥';
    this.cursor = 'crosshair';
    this.maxPoints = 3;
    this.points = [];
    this.style = { color: '#4CAF50', width: 1, fill: false, fillColor: 'rgba(76, 175, 80, 0.1)' };
  }

  render(ctx, viewport, priceScale, timeScale, options = {}) {
    if (this.points.length < 3) return;
    const style = { ...this.style, ...options };
    const p1 = this._toPixel(this.points[0], viewport, priceScale, timeScale);
    const p2 = this._toPixel(this.points[1], viewport, priceScale, timeScale);
    const p3 = this._toPixel(this.points[2], viewport, priceScale, timeScale);
    if (p1 == null || p2 == null || p3 == null) return;

    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const offsetX = p3.x - p1.x;
    const offsetY = p3.y - p1.y;

    const x3 = p1.x + dx;
    const y3 = p1.y + dy;
    const x4 = p1.x + dx + offsetX;
    const y4 = p1.y + dy + offsetY;

    ctx.strokeStyle = style.color;
    ctx.lineWidth = style.width;
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y); ctx.lineTo(x3, y3);
    ctx.moveTo(p3.x, p3.y); ctx.lineTo(x4, y4);
    ctx.stroke();

    if (style.fill) {
      ctx.fillStyle = style.fillColor;
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y); ctx.lineTo(x3, y3); ctx.lineTo(x4, y4); ctx.lineTo(p3.x, p3.y);
      ctx.closePath();
      ctx.fill();
    }
  }

  hitTest(mouseX, mouseY, viewport, priceScale, timeScale, threshold = 5) {
    if (this.points.length < 3) return false;
    const p1 = this._toPixel(this.points[0], viewport, priceScale, timeScale);
    const p2 = this._toPixel(this.points[1], viewport, priceScale, timeScale);
    const p3 = this._toPixel(this.points[2], viewport, priceScale, timeScale);
    if (p1 == null || p2 == null || p3 == null) return false;

    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const x3 = p1.x + dx;
    const y3 = p1.y + dy;
    const x4 = p3.x + dx;
    const y4 = p3.y + dy;

    return this._distToSegment(mouseX, mouseY, p1.x, p1.y, x3, y3) <= threshold ||
           this._distToSegment(mouseX, mouseY, p3.x, p3.y, x4, y4) <= threshold;
  }

  _toPixel(pt, viewport, priceScale, timeScale) {
    if (pt.time == null || pt.price == null) return null;
    return { x: viewport.timeToX(pt.time), y: priceScale.priceToY(pt.price) };
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
