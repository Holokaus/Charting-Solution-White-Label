export class HorizontalLine {
  constructor() {
    this.name = 'HorizontalLine';
    this.icon = '—';
    this.cursor = 'crosshair';
    this.maxPoints = 1;
    this.points = [];
    this.style = { color: '#FF9800', width: 1, labelColor: '#FFFFFF' };
  }

  render(ctx, viewport, priceScale, timeScale, options = {}) {
    if (this.points.length < 1) return;
    const style = { ...this.style, ...options };
    const y = priceScale.priceToY(this.points[0].price);
    if (y == null) return;

    ctx.strokeStyle = style.color;
    ctx.lineWidth = style.width;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(viewport.width, y);
    ctx.stroke();
    ctx.setLineDash([]);

    const label = this.points[0].price.toFixed(2);
    ctx.font = '11px sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';

    const textWidth = ctx.measureText(label).width;
    const px = viewport.width - textWidth - 12;
    const py = Math.max(10, Math.min(viewport.height - 10, y));

    ctx.fillStyle = style.color;
    ctx.fillRect(px - 4, py - 8, textWidth + 12, 16);
    ctx.fillStyle = style.labelColor;
    ctx.fillText(label, px + 2, py);
  }

  hitTest(mouseX, mouseY, viewport, priceScale, timeScale, threshold = 5) {
    if (this.points.length < 1) return false;
    const y = priceScale.priceToY(this.points[0].price);
    return y != null && Math.abs(mouseY - y) <= threshold;
  }
}
