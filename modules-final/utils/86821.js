/**
 * Module 86821 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

86821: (logger_e, logger_t, logger_i) => {
    "use strict";
    const {
      clone: logger_s
    } = logger_i(87465);
    var logger_o = logger_i(9787).Version,
      logger_n = logger_i(9343).getLogger("Chart.StudyMigration");

    function logger_r(logger_e) {
      this._studyId = logger_e, this._maxToVers = logger_o.ZERO, this._maxFromVers = logger_o.ZERO, this._migrs = []
    }
    logger_r.prototype.addMigration = function(logger_e, logger_t, logger_i) {
      var logger_s = logger_o.parse(logger_e),
        logger_n = logger_o.parse(logger_t);
      logger_s.isGreater(this._maxFromVers) && (this._maxFromVers = logger_s), logger_n.isGreater(this._maxToVers) && (this._maxToVers =
        logger_n), this._migrs.push({
          fromVers: logger_s,
          toVers: logger_n,
          rules: logger_i
        })
    }, logger_r.prototype.updateInputs = function(logger_e, logger_t, logger_i) {
      if (!logger_i) return logger_i;
      for (var logger_o = logger_s(logger_i), logger_r = logger_e; logger_r.isLess(logger_t);) {
        var logger_a = this._findMigration(logger_r);
        if (null == logger_a) break;
        if (logger_n.logNormal("Migrating study inputs from " + logger_a.fromVers + " to " + logger_a.toVers + " version, studyId: " + this
            ._studyId + ", migration: " + JSON.stringify(logger_a) + ", inputs: " + JSON.stringify(logger_i)), logger_o = this
          ._applyMigration(logger_o, logger_a), !logger_r.isLess(logger_a.toVers)) throw new Error(
          "Problems in study migration process... Possible infinite cycle has been detected and stopped.");
        logger_r = logger_a.toVers
      }
      return logger_r > logger_e && logger_n.logNormal("Study inputs migration is done, studyId: " + this._studyId + ", inputs: " + JSON
        .stringify(logger_o)), logger_o
    }, logger_r.prototype._findMigration = function(logger_e) {
      for (var logger_t = -1, logger_i = this._maxFromVers, logger_s = 0; logger_s < this._migrs.length; logger_s++) {
        var logger_o = this._migrs[logger_s];
        logger_o.fromVers.isLess(logger_e) || logger_o.fromVers.isLessOrEqual(logger_i) && (logger_i = logger_o.fromVers, logger_t = logger_s)
      }
      return logger_t < 0 ? null : this._migrs[logger_t]
    }, logger_r.prototype._applyMigration = function(logger_e, logger_t) {
      for (var logger_i = logger_e, logger_s = 0; logger_s < logger_t.rules.length; logger_s++) {
        var logger_o = logger_t.rules[logger_s];
        logger_i = this._getApplyRuleFun(logger_o.type)(logger_i, logger_o)
      }
      return logger_i
    }, logger_r.prototype._getApplyRuleFun = function(logger_e) {
      if ("inputRemoved" === logger_e) return logger_r._applyInputRemovedRule;
      if ("inputChangedType" === logger_e) return logger_r._applyInputChangedTypeRule;
      if ("inputChangedMinMax" === logger_e) return logger_r._applyInputChangedMinMaxRule;
      if ("inputChangedOptions" === logger_e) return logger_r._applyInputChangedOptionsRule;
      throw new Error("Unknown migration rule type: " + logger_e)
    }, logger_r._applyInputRemovedRule = function(logger_e, logger_t) {
      if (!(logger_t.inputId in logger_e)) return logger_e;
      if ("removeVal" !== logger_t.action) throw new Error("Unexpected rule.action=" + logger_t.action + " in rule.type=" + logger_t.type);
      var logger_i = logger_e[logger_t.inputId];
      return delete logger_e[logger_t.inputId], logger_n.logNormal("Input " + logger_t.inputId + "=" + logger_i + " removed"), logger_e
    }, logger_r._applyInputChangedTypeRule = function(logger_e, logger_t) {
      var logger_i = logger_e[logger_t.inputId];
      if ("resetToDefVal" === logger_t.action) return logger_e[logger_t.inputId] = logger_t.defVal, logger_n.logNormal("Input " + logger_t.inputId + "=" + logger_i +
        " reset to default value " + logger_t.defVal), logger_e;
      if ("convertVal" === logger_t.action) {
        if (null == logger_i) return logger_e;
        if ("float" === logger_t.inputTypeFrom && "integer" === logger_t.inputType) return logger_e[logger_t.inputId] = Math.round(logger_e[logger_t.inputId]),
          logger_n.logNormal("Input " + logger_t.inputId + "=" + logger_i + " converted to value " + logger_e[logger_t.inputId]), logger_e;
        if ("integer" === logger_t.inputTypeFrom && "float" === logger_t.inputType) return logger_e;
        if ("text" === logger_t.inputTypeFrom && "source" === logger_t.inputType) return logger_r._isValidSource(logger_i, logger_t.options) || (logger_e[logger_t
          .inputId] = logger_t.defVal), logger_e;
        throw new Error("Cannot convertVal from " + logger_t.inputTypeFrom + " to " + logger_t.inputType)
      }
      throw new Error("Unknown action " + logger_t.action + " for rule with type " + logger_t.type)
    }, logger_r._isValidSource = function(logger_e, logger_t) {
      return logger_e.indexOf("$") >= 0 || logger_t.indexOf(logger_e) >= 0
    }, logger_r._applyInputChangedMinMaxRule = function(logger_e, logger_t) {
      if ("adjustValIfNeeded" !== logger_t.action) throw new Error("Unknown action " + logger_t.action + " for rule with type " + logger_t
        .type);
      var logger_i = logger_e[logger_t.inputId];
      return logger_i < logger_t.minVal ? logger_e[logger_t.inputId] = logger_t.minVal : logger_i > logger_t.maxVal && (logger_e[logger_t.inputId] = logger_t.maxVal), logger_n.logNormal(
        "Input " + logger_t.inputId + "=" + logger_i + " adjusted to value " + logger_e[logger_t.inputId]), logger_e
    }, logger_r._applyInputChangedOptionsRule = function(logger_e, logger_t) {
      if (!(["text"].indexOf(logger_t.inputType) >= 0 && "resetToDefValIfNeeded" === logger_t.action)) throw new Error(
        "Unexpected rule.inputType=" + logger_t.inputType + " in rule.action=" + logger_t.action);
      var logger_i = logger_e[logger_t.inputId];
      return logger_t.options.indexOf(logger_i) < 0 && (logger_e[logger_t.inputId] = logger_t.defVal, logger_n.logNormal("Input " + logger_t.inputId + "=" + logger_i +
        " reset to default value " + logger_t.defVal)), logger_e
    }, logger_e.exports = logger_r