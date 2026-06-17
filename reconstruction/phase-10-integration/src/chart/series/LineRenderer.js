export class LineRenderer {
  render(ctx, bars, viewport, priceScale, timeScale, options = {}) {
    if (bars.length === 0) return;
    const smooth = options.smooth || false;
    const color = options.color || '#2196F3';
    const lineWidth = options.lineWidth || 2;

    const points = [];
    for (const bar of bars) {
      const x = viewport.timeToX(bar.time) + viewport.barSpacing / 2;
      if (x < -viewport.barSpacing || x > viewport.width + viewport.barSpacing) continue;
      const y = priceScale.priceToY(bar.close);
      points.push({ x, y });
    }

    if (points.length < 2) return;

    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.beginPath();

    if (smooth && points.length > 2) {
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length - 1; i++) {
        const xc = (points[i].x + points[i + 1].x) / 2;
        const yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
      }
      const last = points[points.length - 1];
      ctx.lineTo(last.x, last.y);
    } else {
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
    }

    ctx.stroke();
  }
}
