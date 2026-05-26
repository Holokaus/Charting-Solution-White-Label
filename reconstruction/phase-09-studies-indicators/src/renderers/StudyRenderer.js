export class StudyRenderer {
  constructor(options = {}) {
    this._pane = options.pane || 'overlay';
    this._options = options;
  }

  get pane() { return this._pane; }

  render(ctx, studyData, viewport, priceScale, options = {}) {
    throw new Error('StudyRenderer subclasses must implement render()');
  }
}
