export class GannFan {
  constructor() {
    this.name = 'GannFan';
    this.icon = '◈';
    this.cursor = 'crosshair';
    this.maxPoints = 2;
    this.points = [];
    this.style = { color: '#607D8B', width: 1 };
    this.angles = [1, 2, 3, 4, 5, 6, 7, 8];
  }

  render(ctx, viewport, priceScale, timeScale, options = {}) {
    if (this.points.length < 2) return;
    const style = { ...this.style, ...options };
    const p1 = this._toPixel(this.points[0], viewport, priceScale, timeScale);
    const p2 = this._toPixel(this.points[1], viewport, priceScale, timeScale);
    if (p1 == null || p2 == null) return;

    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    if (dx === 0) return;

    ctx.strokeStyle = style.color;
    ctx.lineWidth = style.width;

    for (const angle of this.angles) {
      const slope = (dy / dx) * (angle / 8);
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(viewport.width, p1.y + slope * (viewport.width - p1.x));
      ctx.stroke();
    }
  }

  hitTest(mouseX, mouseY, viewport, priceScale, timeScale, threshold = 5) {
    if (this.points.length < 2) return false;
    const p1 = this._toPixel(this.points[0], viewport, priceScale, timeScale);
    if (p1 == null) return false;
    return Math.hypot(mouseX - p1.x, mouseY - p1.y) <= threshold;
  }

  _toPixel(pt, viewport, priceScale, timeScale) {
    if (pt.time == null || pt.price == null) return null;
    return { x: viewport.timeToX(pt.time), y: priceScale.priceToY(pt.price) };
  }
}
