/**
 * Module 32399 - Series Line Pane View
 * Renders line-based series (regular lines, step lines, TPO) with optional markers
 */

// Import dependencies
var HitTestResult = i(2383).HitTestResult;
var HitTarget = i(2383).HitTarget;
var CompositeRenderer = i(94602).CompositeRenderer;
var PaneRendererLine = i(79268).PaneRendererLine;
var SelectionRenderer = i(45801).SelectionRenderer;
var PaneRendererStepLine = i(60876).PaneRendererStepLine;
var ColorType = i(93201).ColorType;
var SeriesSingleLinePaneView = i(73773).SeriesSingleLinePaneView;
var enabled = i(37103).enabled;
var SelectionIndexes = i(13173).SelectionIndexes;

/**
 * SeriesLinePaneView - Renders line series with various styles
 * Supports: Regular line, Line with markers, Stepline, TPO
 */
class SeriesLinePaneView extends SeriesSingleLinePaneView {
    constructor(source, model) {
        super(source, model);
        this._isMarkersEnabled = enabled("source_selection_markers");
        this._selectionData = null;
        this._selectionIndexer = new SelectionIndexes(model.timeScale());
    }

    /** Get the renderer for this pane view */
    renderer() {
        if (this._invalidated) {
            this._updateImpl();
            this._invalidated = false;
        }

        const props = this._source.properties().childs();
        const styleType = props.style.value();

        let lineStyleProps;
        let withMarkers = false;

        // Determine which style configuration to use based on series type
        if (styleType === 2) {
            // Regular line
            lineStyleProps = props.lineStyle.childs();
        } else if (styleType === 14) {
            // Line with markers
            lineStyleProps = props.lineWithMarkersStyle.childs();
            withMarkers = true;
        } else if (styleType === 15) {
            // Stepline
            lineStyleProps = props.steplineStyle.childs();
        } else if (styleType === 18) {
            // TPO (Time Price Opportunity)
            lineStyleProps = props.tpoStyle.childs();
        }

        const barSpacing = this._model.timeScale().barSpacing();

        // Build line color configuration
        let lineColor;
        if (lineStyleProps.colorType?.value() !== ColorType.Gradient) {
            lineColor = {
                type: ColorType.Solid,
                color: lineStyleProps.color.value()
            };
        } else {
            lineColor = {
                type: ColorType.Gradient,
                startColor: lineStyleProps.gradientStartColor.value(),
                endColor: lineStyleProps.gradientEndColor.value()
            };
        }

        // Build renderer data
        const rendererData = {
            barSpacing: barSpacing,
            items: this._items,
            lineColor: lineColor,
            lineStyle: lineStyleProps.linestyle.value(),
            withMarkers: withMarkers,
            lineWidth: lineStyleProps.linewidth.value(),
            simpleMode: true,
            hitTestResult: HitTarget.Regular,
            skipHoles: true
        };

        // Create appropriate renderer based on series type
        let mainRenderer;
        if (styleType === 15) {
            // Stepline uses special renderer
            mainRenderer = new PaneRendererStepLine(rendererData);
        } else {
            // All other line types use standard line renderer
            mainRenderer = new PaneRendererLine(rendererData);
        }

        // Add selection overlay if source is selected
        let finalRenderer = mainRenderer;
        if (this._model.selection().isSelected(this._source) && 
            this._isMarkersEnabled && 
            this._selectionData) {
            
            const compositeRenderer = new CompositeRenderer();
            compositeRenderer.append(mainRenderer);
            compositeRenderer.append(new SelectionRenderer(this._selectionData));
            finalRenderer = compositeRenderer;
        }

        return finalRenderer;
    }
}

// Export public API
i.d(t, {
    SeriesLinePaneView: () => SeriesLinePaneView
});
