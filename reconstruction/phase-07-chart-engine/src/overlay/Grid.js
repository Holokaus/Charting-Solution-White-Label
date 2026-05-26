export class Grid {
  constructor() {
    this._color = '#2A2E39';
    this._horizontalLines = 8;
    this._verticalLines = 10;
  }

  setColor(color) {
    this._color = color;
  }

  setHorizontalLines(count) {
    this._horizontalLines = count;
  }

  setVerticalLines(count) {
    this._verticalLines = count;
  }

  render(ctx, viewport, priceScale, timeScale, options = {}) {
    const color = options.color || this._color;
    const style = options.style || 'dotted';

    ctx.strokeStyle = color;
    ctx.lineWidth = 0.5;

    if (style === 'dotted') {
      ctx.setLineDash([2, 4]);
    } else if (style === 'dashed') {
      ctx.setLineDash([4, 4]);
    } else {
      ctx.setLineDash([]);
    }

    const hStep = viewport.height / this._horizontalLines;
    for (let i = 0; i <= this._horizontalLines; i++) {
      const y = i * hStep;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(viewport.width, y);
      ctx.stroke();
    }

    const vStep = viewport.width / this._verticalLines;
    for (let i = 0; i <= this._verticalLines; i++) {
      const x = i * vStep;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, viewport.height);
      ctx.stroke();
    }

    ctx.setLineDash([]);
  }
}
