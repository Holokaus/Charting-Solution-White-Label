# Accuracy Verification Report - Round 3 Medium Confidence

**Generated:** 2026-05-05T14:58:36.365Z
**Verification Date:** May 5, 2026
**Total Modules Verified:** 24 (spot-checked: 5)

## Executive Summary

**Spot-Check Results:**
- ✅ High Confidence Accurate: 0/5
- 🟡 Medium Confidence Likely Accurate: 0/5
- 🔴 Uncertain/Questionable: 5/5

**Overall Assessment:** 🔴 **CONCERNING - BELOW 60% PASS RATE**

## Detailed Spot-Check Results

| Module ID | Semantic | Assessment | Confidence | Keywords | Methods | Exports |
|-----------|----------|------------|------------|----------|---------|----------|
| 42516 | lineToolUtils | QUESTIONABLE_ASSIGNMENT | 10% | 0 | 1 | 0 |
| 24633 | tier3_high | QUESTIONABLE_ASSIGNMENT | 10% | 0 | 1 | 0 |
| 97725 | dialogManager | QUESTIONABLE_ASSIGNMENT | 10% | 0 | 2 | 0 |
| 36947 | lineToolManager | QUESTIONABLE_ASSIGNMENT | 10% | 0 | 1 | 0 |
| 78136 | dialogManager | QUESTIONABLE_ASSIGNMENT | 10% | 0 | 2 | 0 |

## Analysis Details

### Module 42516 - lineToolUtils

**Assessment:** QUESTIONABLE_ASSIGNMENT [10%]

**Semantic Indicators:**
- Keywords Found: None
- Methods: nextValue
- Classes: None
- Exports: None
- Patterns: complex_collections

### Module 24633 - tier3_high

**Assessment:** QUESTIONABLE_ASSIGNMENT [10%]

**Semantic Indicators:**
- Keywords Found: None
- Methods: function
- Classes: None
- Exports: None
- Patterns: complex_collections, event_handling

### Module 97725 - dialogManager

**Assessment:** QUESTIONABLE_ASSIGNMENT [10%]

**Semantic Indicators:**
- Keywords Found: None
- Methods: state, object
- Classes: None
- Exports: None
- Patterns: complex_collections

### Module 36947 - lineToolManager

**Assessment:** QUESTIONABLE_ASSIGNMENT [10%]

**Semantic Indicators:**
- Keywords Found: None
- Methods: function
- Classes: None
- Exports: None
- Patterns: complex_collections, event_handling

### Module 78136 - dialogManager

**Assessment:** QUESTIONABLE_ASSIGNMENT [10%]

**Semantic Indicators:**
- Keywords Found: None
- Methods: object, nextValue
- Classes: None
- Exports: None
- Patterns: complex_collections

## Validation Criteria Used

1. **Keyword Matching (40%):** Semantic-specific keywords present in code
2. **Method Patterns (20%):** Number of methods aligns with module type
3. **Exports (20%):** Export definitions match semantic expectations
4. **Code Complexity (10%):** Class definitions and data structures
5. **Architecture (10%):** Async/event handling patterns

## Recommendations

🛑 **STOP** - Below 60% accuracy. Investigate root causes before proceeding.
