/**
 * Module 22455 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 */

22455: (exports, module, require) => {
    "use strict";

    function utils(exports) {
      return exports?.symbolSource && exports.symbolSource() === exports || void 0 !== exports?.isActingAsSymbolSource
    }

    function hasVolume(exports) {
      return utils(exports) && "quotesProvider" in exports
    }

    function priceDataSource_n(exports) {
      return utils(exports) && exports.isActingAsSymbolSource().value()
    }
    require.priceDataSource_d(module, {
      isActingAsSymbolSource: () => priceDataSource_n,
      isSymbolSource: () => utils,
      isSymbolSourceWithQuotesProvider: () => hasVolume
    })