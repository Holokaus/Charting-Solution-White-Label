export class BarRenderer {
  render(ctx, bars, viewport, priceScale, timeScale, options = {}) {
    const spacing = viewport.barSpacing;
    const tickWidth = Math.max(1, spacing * 0.3);

    for (const bar of bars) {
      const x = viewport.timeToX(bar.time) + spacing / 2;
      if (x < -spacing || x > viewport.width + spacing) continue;

      const highY = priceScale.priceToY(bar.high);
      const lowY = priceScale.priceToY(bar.low);
      const openY = priceScale.priceToY(bar.open);
      const closeY = priceScale.priceToY(bar.close);

      const isUp = bar.close >= bar.open;
      ctx.strokeStyle = isUp ? (options.upColor || '#26A69A') : (options.downColor || '#EF5350');
      ctx.lineWidth = 1;

      ctx.beginPath();
      ctx.moveTo(x, highY);
      ctx.lineTo(x, lowY);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(x - tickWidth, openY);
      ctx.lineTo(x, openY);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(x, closeY);
      ctx.lineTo(x + tickWidth, closeY);
      ctx.stroke();
    }
  }
}
