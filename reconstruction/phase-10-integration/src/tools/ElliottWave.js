export class ElliottWave {
  constructor() {
    this.name = 'ElliottWave';
    this.icon = '〰';
    this.cursor = 'crosshair';
    this.maxPoints = 5;
    this.points = [];
    this.style = { color: '#00BCD4', width: 1, labels: true };
  }

  render(ctx, viewport, priceScale, timeScale, options = {}) {
    if (this.points.length < 5) return;
    const style = { ...this.style, ...options };
    const pixels = this.points.map(p => this._toPixel(p, viewport, priceScale, timeScale));
    if (pixels.some(p => p == null)) return;

    ctx.strokeStyle = style.color;
    ctx.lineWidth = style.width;
    ctx.beginPath();
    ctx.moveTo(pixels[0].x, pixels[0].y);
    for (let i = 1; i < pixels.length; i++) {
      const cp1x = (pixels[i - 1].x + pixels[i].x) / 2;
      const cp1y = pixels[i - 1].y;
      const cp2x = cp1x;
      const cp2y = pixels[i].y;
      ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, pixels[i].x, pixels[i].y);
    }
    ctx.stroke();

    if (style.labels) {
      const labels = ['1', '2', '3', '4', '5'];
      ctx.font = '12px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillStyle = style.color;
      for (let i = 0; i < pixels.length; i++) {
        ctx.fillText(labels[i], pixels[i].x, pixels[i].y - 10);
      }
    }
  }

  hitTest(mouseX, mouseY, viewport, priceScale, timeScale, threshold = 5) {
    if (this.points.length < 2) return false;
    const pixels = this.points.map(p => this._toPixel(p, viewport, priceScale, timeScale));
    if (pixels.some(p => p == null)) return false;
    for (const p of pixels) {
      if (Math.hypot(mouseX - p.x, mouseY - p.y) <= threshold) return true;
    }
    return false;
  }

  _toPixel(pt, viewport, priceScale, timeScale) {
    if (pt.time == null || pt.price == null) return null;
    return { x: viewport.timeToX(pt.time), y: priceScale.priceToY(pt.price) };
  }
}
