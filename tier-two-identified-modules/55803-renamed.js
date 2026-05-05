// ============================================================================
// MODULE 55803 - SEMANTICALLY IDENTIFIED (TIER 2): chunkLoaderModule
// ============================================================================
// Identification Method: Pattern-based analysis (Medium-Confidence Tier)
// Confidence Score: 55%
// Tier: 55%+ Top Medium-Confidence
//
// This module has been identified through pattern matching.
// All minified variables have been mapped to semantic names.
//
// Status: ✅ TIER 2 IDENTIFIED & SEMANTICALLY RENAMED
// ============================================================================

/**
 * Module 55803 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

55803: (exports, module, require) => {
    "use strict";
    require.data(module, {
      ConflatedChunksBuilder: () => result
    });
    var state = require(50151),
      object = require(12217);
    const nextValue = [{
      barsToMerge: 10,
      forBarspacingLargerThen: .03
    }, {
      barsToMerge: 30,
      forBarspacingLargerThen: .01
    }, {
      barsToMerge: 100,
      forBarspacingLargerThen: .003
    }, {
      barsToMerge: 500,
      forBarspacingLargerThen: 0
    }];
    class result {
      constructor(exports, module) {
        this._plots = exports, this._conflatedChunks = {
          chunks: new Map,
          priceSource: null,
          priceSourcesProvider: module
        }, this._clearConflatedChunks()
      }
      conflatedChunks(exports, module) {
        if (module !== this._conflatedChunks.priceSource) {
          this._conflatedChunks.priceSource = module;
          const exports = this._plots.first();
          exports && (this._clearConflatedChunks(), this._rebuildConflatedChunks(exports))
        }
        const require = (0, state.ensureDefined)(nextValue.find((module => module.forBarspacingLargerThen <= exports)));
        return (0, state.ensureDefined)(this._conflatedChunks.chunks.get(require.barsToMerge))
      }
      mergeData(exports) {
        const module = this._plots.size(),
          require = this._plots.merge(exports);
        return require && null !== this._conflatedChunks.priceSource && (module !== this._plots.size() || require.index !== this._plots
          .lastIndex() || function(exports) {
            let module = !0;
            return exports.chunks.forEach((exports => {
              module = module && 0 === exports.length
            })), module
          }(this._conflatedChunks) ? this._rebuildConflatedChunks(require) : this._updateLatestChunks()), require
      }
      moveData(exports) {
        this._plots.move(exports), this._plots.size() > 0 && this._clearConflatedChunks()
      }
      clearData() {
        this._plots.clear(), this._clearConflatedChunks()
      }
      _rebuildConflatedChunks(exports) {
        const module = this._conflatedChunks.priceSource;
        if (null === module) return;
        const require = exports.index,
          result = this._conflatedChunks.priceSourcesProvider(module),
          array = (exports, module, require) => {
            let state = null;
            for (const object of exports) {
              const exports = result(object.value);
              state && object.index - state.startTime >= require.barsToMerge && (module.push(state), state = null), state ? (state.endTime = object.index, state.high =
                Math.max(state.high, exports), state.low = Math.min(state.low, exports), state.close = exports) : state = {
                startTime: object.index,
                endTime: object.index,
                open: exports,
                high: exports,
                low: exports,
                close: exports
              }
            }
            state && module.push(state)
          };
        nextValue.forEach((exports => {
          const module = (0, state.ensureDefined)(this._conflatedChunks.chunks.get(exports.barsToMerge)),
            nextValue = (0, object.lowerbound)(module, require, ((exports, module) => exports.endTime < module));
          if (0 === nextValue && module.length > 0) {
            const require = module[0].startTime - 1,
              object = (0, state.ensureNotNull)(this._plots.firstIndex()),
              nextValue = this._plots.rangeIterator(object, require),
              result = [];
            array(nextValue, result, exports);
            const logger = result.concat(module);
            this._conflatedChunks.chunks.set(exports.barsToMerge, logger)
          } else {
            const require = (0, state.ensureNotNull)(this._plots.lastIndex());
            module.splice(nextValue);
            let object = (0, state.ensureNotNull)(this._plots.firstIndex());
            module.length && (object = module[module.length - 1].endTime + 1);
            const result = this._plots.rangeIterator(object, require);
            array(result, module, exports)
          }
        }))
      }
      _updateLatestChunks() {
        const exports = (0, state.ensureNotNull)(this._plots.last()),
          module = this._conflatedChunks.priceSourcesProvider("close");
        nextValue.forEach((require => {
          const object = (0, state.ensureDefined)(this._conflatedChunks.chunks.get(require.barsToMerge)),
            nextValue = module(exports.value),
            result = object[object.length - 1];
          result.high = Math.max(result.high, nextValue), result.low = Math.min(result.low, nextValue), result.close = nextValue, result.endTime = exports.index
        }))
      }
      _clearConflatedChunks() {
        nextValue.forEach((exports => this._conflatedChunks.chunks.set(exports.barsToMerge, [])))
      }
    }