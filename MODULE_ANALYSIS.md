# TradingView Module Analysis Report

## Overview
- **Total Modules:** 465
- **Total Size:** 2.37 MB
- **Processed:** 0 top modules

## Top 10 Largest Modules

| Module ID | Size (KB) | Classes | Functions | Imports |
|-----------|-----------|---------|-----------|---------|


## Key Classes Discovered



## Key Functions Discovered



## Module Dependencies

The modules use webpack's internal require function `i(moduleId)` to import dependencies.
Each module follows the pattern: `MODULE_ID:(e,t,i)=>{...}` where:
- `e` = exports object
- `t` = module object  
- `i` = require function

## Next Steps

1. **Priority Modules to Analyze:**
   - Module 37150: Main initialization and chunk loading
   - Module 4783: Study/indicator library definitions
   - Module 2115: Series data handling
   - Module 87453: Timezone data

2. **Rename Variables:** Focus on modules with high class/function counts

3. **Map Dependencies:** Track inter-module relationships

## Files Generated

- `beautified-modules/` - Formatted versions of top 20 modules
- `MODULE_ANALYSIS.md` - This analysis report
