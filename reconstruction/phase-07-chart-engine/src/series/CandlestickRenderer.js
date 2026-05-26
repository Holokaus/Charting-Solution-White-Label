export class CandlestickRenderer {
  render(ctx, bars, viewport, priceScale, timeScale, options = {}) {
    const spacing = viewport.barSpacing;
    const halfWidth = Math.max(1, (spacing - 2) / 2);
    const hollow = options.hollow || false;

    for (const bar of bars) {
      const x = viewport.timeToX(bar.time) + spacing / 2;
      if (x < -spacing || x > viewport.width + spacing) continue;

      const highY = priceScale.priceToY(bar.high);
      const lowY = priceScale.priceToY(bar.low);
      const openY = priceScale.priceToY(bar.open);
      const closeY = priceScale.priceToY(bar.close);

      const isUp = bar.close >= bar.open;
      const bodyTop = Math.min(openY, closeY);
      const bodyBottom = Math.max(openY, closeY);
      const bodyHeight = Math.max(1, bodyBottom - bodyTop);

      ctx.beginPath();
      ctx.moveTo(x, highY);
      ctx.lineTo(x, lowY);
      ctx.strokeStyle = isUp ? (options.upColor || '#26A69A') : (options.downColor || '#EF5350');
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.fillStyle = isUp
        ? (hollow ? '#FFFFFF' : options.upColor || '#26A69A')
        : (options.downColor || '#EF5350');
      ctx.fillRect(x - halfWidth, bodyTop, halfWidth * 2, bodyHeight);

      if (hollow && isUp) {
        ctx.strokeStyle = options.upColor || '#26A69A';
        ctx.lineWidth = 1;
        ctx.strokeRect(x - halfWidth, bodyTop, halfWidth * 2, bodyHeight);
      }
    }
  }
}
