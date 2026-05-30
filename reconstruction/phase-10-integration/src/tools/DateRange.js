export class DateRange {
  constructor() {
    this.name = 'DateRange';
    this.icon = '📅';
    this.cursor = 'crosshair';
    this.maxPoints = 2;
    this.points = [];
    this.style = { color: '#9E9E9E', width: 1, fill: true, fillColor: 'rgba(158, 158, 158, 0.1)' };
  }

  render(ctx, viewport, priceScale, timeScale, options = {}) {
    if (this.points.length < 2) return;
    const style = { ...this.style, ...options };
    const p1 = this._toPixel(this.points[0], viewport, priceScale, timeScale);
    const p2 = this._toPixel(this.points[1], viewport, priceScale, timeScale);
    if (p1 == null || p2 == null) return;

    const x1 = Math.min(p1.x, p2.x);
    const x2 = Math.max(p1.x, p2.x);

    if (style.fill) {
      ctx.fillStyle = style.fillColor;
      ctx.fillRect(x1, 0, x2 - x1, viewport.height);
    }

    ctx.strokeStyle = style.color;
    ctx.lineWidth = style.width;
    ctx.beginPath();
    ctx.moveTo(x1, 0); ctx.lineTo(x1, viewport.height);
    ctx.moveTo(x2, 0); ctx.lineTo(x2, viewport.height);
    ctx.stroke();

    const startDate = new Date(this.points[0].time * 1000).toLocaleDateString();
    const endDate = new Date(this.points[1].time * 1000).toLocaleDateString();
    ctx.font = '11px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillStyle = style.color;
    ctx.fillText(`${startDate} — ${endDate}`, (x1 + x2) / 2, 20);
  }

  hitTest(mouseX, mouseY, viewport, priceScale, timeScale, threshold = 5) {
    if (this.points.length < 2) return false;
    const p1 = this._toPixel(this.points[0], viewport, priceScale, timeScale);
    const p2 = this._toPixel(this.points[1], viewport, priceScale, timeScale);
    if (p1 == null || p2 == null) return false;

    const x1 = Math.min(p1.x, p2.x);
    const x2 = Math.max(p1.x, p2.x);
    return mouseX >= x1 - threshold && mouseX <= x2 + threshold;
  }

  _toPixel(pt, viewport, priceScale, timeScale) {
    if (pt.time == null || pt.price == null) return null;
    return { x: viewport.timeToX(pt.time), y: priceScale.priceToY(pt.price) };
  }
}
