export class PriceRange {
  constructor() {
    this.name = 'PriceRange';
    this.icon = '↕';
    this.cursor = 'crosshair';
    this.maxPoints = 2;
    this.points = [];
    this.style = { color: '#FF9800', width: 1, fill: true, fillColor: 'rgba(255, 152, 0, 0.1)' };
  }

  render(ctx, viewport, priceScale, timeScale, options = {}) {
    if (this.points.length < 2) return;
    const style = { ...this.style, ...options };
    const p1 = this._toPixel(this.points[0], viewport, priceScale, timeScale);
    const p2 = this._toPixel(this.points[1], viewport, priceScale, timeScale);
    if (p1 == null || p2 == null) return;

    const y1 = Math.min(p1.y, p2.y);
    const y2 = Math.max(p1.y, p2.y);

    if (style.fill) {
      ctx.fillStyle = style.fillColor;
      ctx.fillRect(0, y1, viewport.width, y2 - y1);
    }

    ctx.strokeStyle = style.color;
    ctx.lineWidth = style.width;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(0, y1); ctx.lineTo(viewport.width, y1);
    ctx.moveTo(0, y2); ctx.lineTo(viewport.width, y2);
    ctx.stroke();
    ctx.setLineDash([]);

    const priceLow = this.points[0].price < this.points[1].price ? this.points[0].price : this.points[1].price;
    const priceHigh = this.points[0].price > this.points[1].price ? this.points[0].price : this.points[1].price;
    const diff = priceHigh - priceLow;

    ctx.font = '11px sans-serif';
    ctx.textAlign = 'right';
    ctx.fillStyle = style.color;
    ctx.fillText(`Low: ${priceLow.toFixed(2)}`, viewport.width - 4, y1 + 14);
    ctx.fillText(`High: ${priceHigh.toFixed(2)}`, viewport.width - 4, y2 - 4);
    ctx.fillText(`Diff: ${diff.toFixed(2)}`, viewport.width - 4, (y1 + y2) / 2);
  }

  hitTest(mouseX, mouseY, viewport, priceScale, timeScale, threshold = 5) {
    if (this.points.length < 2) return false;
    const p1 = this._toPixel(this.points[0], viewport, priceScale, timeScale);
    const p2 = this._toPixel(this.points[1], viewport, priceScale, timeScale);
    if (p1 == null || p2 == null) return false;

    const y1 = Math.min(p1.y, p2.y);
    const y2 = Math.max(p1.y, p2.y);
    return mouseY >= y1 - threshold && mouseY <= y2 + threshold;
  }

  _toPixel(pt, viewport, priceScale, timeScale) {
    if (pt.time == null || pt.price == null) return null;
    return { x: viewport.timeToX(pt.time), y: priceScale.priceToY(pt.price) };
  }
}
