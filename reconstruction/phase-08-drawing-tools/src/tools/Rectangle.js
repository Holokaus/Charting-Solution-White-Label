export class Rectangle {
  constructor() {
    this.name = 'Rectangle';
    this.icon = '▭';
    this.cursor = 'crosshair';
    this.maxPoints = 2;
    this.points = [];
    this.style = { color: '#9C27B0', width: 1, fill: false, fillColor: 'rgba(156, 39, 176, 0.15)' };
  }

  render(ctx, viewport, priceScale, timeScale, options = {}) {
    if (this.points.length < 2) return;
    const style = { ...this.style, ...options };
    const p1 = this._toPixel(this.points[0], viewport, priceScale, timeScale);
    const p2 = this._toPixel(this.points[1], viewport, priceScale, timeScale);
    if (p1 == null || p2 == null) return;

    const x = Math.min(p1.x, p2.x);
    const y = Math.min(p1.y, p2.y);
    const w = Math.abs(p2.x - p1.x);
    const h = Math.abs(p2.y - p1.y);

    if (style.fill) {
      ctx.fillStyle = style.fillColor;
      ctx.fillRect(x, y, w, h);
    }

    ctx.strokeStyle = style.color;
    ctx.lineWidth = style.width;
    ctx.strokeRect(x, y, w, h);
  }

  hitTest(mouseX, mouseY, viewport, priceScale, timeScale, threshold = 5) {
    if (this.points.length < 2) return false;
    const p1 = this._toPixel(this.points[0], viewport, priceScale, timeScale);
    const p2 = this._toPixel(this.points[1], viewport, priceScale, timeScale);
    if (p1 == null || p2 == null) return false;

    const x = Math.min(p1.x, p2.x);
    const y = Math.min(p1.y, p2.y);
    const w = Math.abs(p2.x - p1.x);
    const h = Math.abs(p2.y - p1.y);

    if (mouseX >= x - threshold && mouseX <= x + w + threshold &&
        mouseY >= y - threshold && mouseY <= y + h + threshold) {
      const onEdge = mouseX < x + threshold || mouseX > x + w - threshold ||
                     mouseY < y + threshold || mouseY > y + h - threshold;
      return onEdge || true;
    }
    return false;
  }

  _toPixel(pt, viewport, priceScale, timeScale) {
    if (pt.time == null || pt.price == null) return null;
    return {
      x: viewport.timeToX(pt.time),
      y: priceScale.priceToY(pt.price)
    };
  }
}
