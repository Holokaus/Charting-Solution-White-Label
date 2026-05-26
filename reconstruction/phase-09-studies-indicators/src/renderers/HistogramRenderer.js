import { StudyRenderer } from './StudyRenderer.js';

export class HistogramRenderer extends StudyRenderer {
  constructor(options = {}) {
    super({ pane: options.pane || 'separate', ...options });
  }

  render(ctx, studyData, viewport, priceScale, options = {}) {
    const spacing = viewport.barSpacing;
    const halfWidth = Math.max(1, (spacing - 2) / 2);
    const zeroY = priceScale.priceToY(0);
    const posColor = options.posColor || '#26A69A';
    const negColor = options.negColor || '#EF5350';
    const valueKey = options.valueKey || 'value';
    const bars = options.bars || [];

    for (let i = 0; i < studyData.length; i++) {
      const datum = studyData[i];
      const value = typeof datum === 'number' ? datum : datum[valueKey];
      if (value == null) continue;

      const t = bars[i] ? bars[i].time : i;
      const x = viewport.timeToX(t);
      if (x < -spacing || x > viewport.width + spacing) continue;

      const y = priceScale.priceToY(value);
      const barHeight = zeroY - y;
      const isUp = value >= 0;

      ctx.fillStyle = isUp ? posColor : negColor;
      ctx.fillRect(x - halfWidth, Math.min(y, zeroY), halfWidth * 2, Math.abs(barHeight));
    }
  }
}
