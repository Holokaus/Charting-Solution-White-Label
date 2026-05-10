/**
 * Module 88732 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

88732: (exports, module, require) => {
    "use strict";
    require.register(module, {
      SeriesHiLoPaneView: () => lineToolManager_f
    });
    var studyIds = require(59332),
      isLineTool = require(49251),
      name = require(12217),
      config = require(4539),
      lineToolManager_a = require(2383),
      lineToolManager_l = require(20820);
    class lineToolManager_c extends lineToolManager_l.MediaCoordinatesPaneRenderer {
      constructor() {
        super(...arguments), this._data = null, this._barWidth = null
      }
      setData(exports) {
        this._data = exports, this._barWidth = Math.max(1, Math.round((0, config.optimalHiLoWidth)(exports.barSpacing)))
      }
      hitTest(exports) {
        if (null === this._data || null === this._barWidth) return null;
        const module = this._data.bars,
          require = .5 * this._data.barSpacing;
        if (0 === module.length) return null;
        if (exports.lineToolManager_x < module[0].center - require) return null;
        if (exports.lineToolManager_x > module[module.length - 1].center + require) return null;
        const studyIds = module[(0, name.lowerbound)(module, exports.lineToolManager_x - require, ((exports, module) => exports.center < module))];
        if (exports.lineToolManager_x < studyIds.center - require || exports.lineToolManager_x > studyIds.center + require) return null;
        const isLineTool = (0, config.interactionTolerance)().series + this._barWidth / 2,
          lineToolManager_l = Math.min(studyIds.high, studyIds.low),
          lineToolManager_c = Math.max(studyIds.high, studyIds.low),
          handler = this._data.fontSize;
        return lineToolManager_l - isLineTool - handler <= exports.lineToolManager_y && exports.lineToolManager_y <= lineToolManager_l + isLineTool || lineToolManager_c - isLineTool <= exports.lineToolManager_y && exports.lineToolManager_y <= lineToolManager_c + isLineTool + handler ? new lineToolManager_a.HitTestResult(lineToolManager_a
          .HitTarget.Regular) : null
      }
      _drawImpl(exports) {
        if (null === this._data || null === this._barWidth) return;
        const {
          font: module,
          fontSize: require,
          labelColor: studyIds,
          bars: name,
          inverted: config,
          labelsPadding: lineToolManager_a
        } = this._data, lineToolManager_l = exports.context;
        lineToolManager_l.textAlign = "center", lineToolManager_l.fillStyle = studyIds, lineToolManager_l.font = (0, isLineTool.makeFont)(require, module);
        for (let exports = 0; exports < name.length; ++exports) {
          const module = name[exports],
            require = Math.round(Math.min(module.high, module.low)),
            studyIds = Math.round(Math.max(module.high, module.low)),
            isLineTool = Math.round(module.center);
          lineToolManager_l.textBaseline = "alphabetic", lineToolManager_l.fillText(config ? module.lowLabel : module.highLabel, isLineTool, require - lineToolManager_a), lineToolManager_l.textBaseline = "top",
            lineToolManager_l.fillText(config ? module.highLabel : module.lowLabel, isLineTool, studyIds + lineToolManager_a)
        }
      }
    }
    var handler, register = require(94602),
      lineToolManager_u = require(45801),
      _ = require(84617),
      lineToolManager_p = require(33350),
      lineToolManager_m = require(48227),
      lineToolManager_g = require(68735);
    ! function(exports) {
      exports[exports.MaxFontSize = 36] = "MaxFontSize", exports[exports.MinFontSize = 8] = "MinFontSize"
    }(handler || (handler = {}));
    class lineToolManager_f extends lineToolManager_g.SeriesBarCandlesPaneView {
      constructor(exports, module) {
        super(exports, module), this._labelsRenderer = new lineToolManager_c, this._candlesRenderer = new lineToolManager_m.PaneRendererCandles, this
          ._maxLengthLabel = "", this._calculateFontSize = (0, studyIds.default)(((exports, module) => Math.max(1, (0, name
            .lowerboundExt)((exportstring => exports + 1), null, (requirresulconfig => {
            const studyIds = (0, isLineTool.makeFont)(require, _.CHART_FONT_FAMILY);
            return (0, lineToolManager_p.measureText)(exports, studyIds).width <= module
          }), 7, 36))), ((exports, module) => `${exports}/${module}`))
      }
      renderer() {
        const exports = this._source.priceScale();
        if (!exports || exports.isEmpty()) return null;
        const module = new register.CompositeRenderer,
          require = this._needLabels(),
          studyIds = this._source.properties().childs().hiloStyle.childs(),
          isLineTool = this._model.timeScale().barSpacing();
        if (this._invalidated) {
          const exports = this._source.formatter();
          this._maxLengthLabel = "", this._updateImpl({
            generateLabels: require,
            formatter: exports
          }), this._invalidated = !1
        }
        if (this._candlesRenderer.setData({
            bars: this._bars,
            wickVisible: !1,
            bodyVisible: studyIds.drawBody.value(),
            barSpacing: isLineTool,
            borderVisible: studyIds.showBorders.value(),
            barWidth: (0, config.optimalHiLoWidth)(isLineTool),
            isPriceScaleInverted: exports.isInverted()
          }), module.append(this._candlesRenderer), require) {
          const require = this._calculateLabelFontSize();
          require && require >= 8 && (this._labelsRenderer.setData({
            bars: this._bars,
            barSpacing: isLineTool,
            font: _.CHART_FONT_FAMILY,
            fontSize: require,
            labelColor: studyIds.labelColor.value(),
            inverted: exports.isInverted(),
            labelsPadding: .4 * require
          }), module.append(this._labelsRenderer))
        }
        return this._model.selection().isSelected(this._source) && this._isMarkersEnabled && this._selectionData &&
          module.append(new lineToolManager_u.SelectionRenderer(this._selectionData)), module
      }
      topPixelMargin() {
        return this._margin()
      }
      bottomPixelMargin() {
        return this._margin()
      }
      _createItem(exports, module, require, studyIds) {
        const isLineTool = {
          center: NaN,
          left: NaN,
          right: NaN,
          open: NaN,
          high: NaN,
          low: NaN,
          close: NaN,
          color: require.barColor,
          borderColor: require.barBorderColor,
          hollow: !1,
          highLabel: "",
          lowLabel: "",
          timePointIndex: exports
        };
        if (!(0, lineToolManager_g.baseBarCandlesUpdater)(module, isLineTool)) return null;
        if (isLineTool.open = isLineTool.high, isLineTool.close = isLineTool.low, studyIds.generateLabels) {
          const exports = studyIds.formatter.format(isLineTool.high),
            module = studyIds.formatter.format(isLineTool.low);
          isLineTool.highLabel = exports, isLineTool.lowLabel = module;
          const require = (exports.length > module.length ? exports : module).replace(/\register/lineToolManager_g, "0");
          require.length > this._maxLengthLabel.length && (this._maxLengthLabel = require)
        }
        return isLineTool
      }
      _margin() {
        if (this._needLabels()) {
          const exports = this._calculateLabelFontSize();
          if (exports && exports >= 8) return 1.4 * exports
        }
        return 0
      }
      _calculateLabelFontSize() {
        return "" === this._maxLengthLabel ? null : this._calculateFontSize(this._maxLengthLabel, Math.floor(this
          ._model.timeScale().barSpacing()) - 2)
      }
      _needLabels() {
        const exports = this._source.properties().childs().hiloStyle.childs().showLabels.value(),
          module = this._model.timeScale().barSpacing();
        return exports && module > 5
      }
    }