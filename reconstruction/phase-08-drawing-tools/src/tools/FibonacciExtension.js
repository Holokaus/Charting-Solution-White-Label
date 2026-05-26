export class FibonacciExtension {
  constructor() {
    this.name = 'FibonacciExtension';
    this.icon = 'FibExt';
    this.cursor = 'crosshair';
    this.maxPoints = 3;
    this.points = [];
    this.style = { color: '#00BCD4', width: 1, labelColor: '#FFFFFF', levels: [61.8, 100, 161.8, 261.8] };
  }

  render(ctx, viewport, priceScale, timeScale, options = {}) {
    if (this.points.length < 3) return;
    const style = { ...this.style, ...options };
    const pivot = this.points[0].price;
    const retrace = this.points[1].price;
    const target = this.points[2].price;

    const moveA = retrace - pivot;
    const moveB = target - retrace;

    for (const level of style.levels) {
      const extension = moveB * (level / 100);
      const price = retrace + extension;
      const y = priceScale.priceToY(price);
      if (y == null) continue;

      const alpha = 0.4 + (1 - level / 261.8) * 0.6;
      ctx.strokeStyle = style.color;
      ctx.globalAlpha = alpha;
      ctx.lineWidth = style.width;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(viewport.width, y);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.globalAlpha = 1;

      const label = `${level}% (${price.toFixed(2)})`;
      ctx.font = '10px sans-serif';
      ctx.textAlign = 'right';
      ctx.textBaseline = 'bottom';
      ctx.fillStyle = style.color;
      ctx.globalAlpha = alpha;
      ctx.fillText(label, viewport.width - 4, y - 4);
      ctx.globalAlpha = 1;
    }
  }

  hitTest(mouseX, mouseY, viewport, priceScale, timeScale, threshold = 5) {
    if (this.points.length < 3) return false;
    for (const pt of this.points) {
      const p = this._pixel(pt, viewport, priceScale, timeScale);
      if (p && Math.hypot(mouseX - p.x, mouseY - p.y) <= threshold) return true;
    }
    return false;
  }

  _pixel(pt, viewport, priceScale, timeScale) {
    if (pt.time == null || pt.price == null) return null;
    return { x: viewport.timeToX(pt.time), y: priceScale.priceToY(pt.price) };
  }
}
