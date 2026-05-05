# Medium-Confidence Candidates - Detailed Review

Generated: 2026-05-03T17:18:49.227Z
These modules have 40-60% pattern similarity to known modules.
Review recommended before application.

## Summary by Top Match

### watchedValue (17 candidates)

| Module ID | Score | Alternative Matches |
|-----------|-------|---------------------|
| 33718 | 55% | settingsAdapter (15%) |
| 38414 | 55% | bitmapCoordinatesPane (25%), chunkLoaderModule (25%) |
| 22613 | 50% | mainInitialization (20%) |
| 23752 | 50% | delegate (25%), mainInitialization (20%) |
| 52499 | 50% | mainInitialization (20%) |
| 54405 | 50% | series (35%), seriesBarFunction (25%) |
| 57340 | 50% | drawingToolbarState (20%), deleteLockedLineTools (20%) |
| 64876 | 50% | mainInitialization (36%) |
| 67763 | 50% | bitmapCoordinatesPane (25%), chunkLoaderModule (25%) |
| 69555 | 50% | bitmapCoordinatesPane (50%), priceDataSource (45%) |
| 55393 | 45% | lineToolUtils (30%), lineToolManager (30%) |
| 32853 | 40% | None |
| 4249 | 40% | series (35%), seriesBarFunction (25%) |
| 52945 | 40% | priceDataSource (35%), mainInitialization (20%) |
| 62802 | 40% | seriesBarFunction (40%), series (35%) |
| 87911 | 40% | None |
| 8811 | 40% | None |

### priceDataSource (5 candidates)

| Module ID | Score | Alternative Matches |
|-----------|-------|---------------------|
| 45591 | 55% | clipboardData (55%), watchedValue (50%) |
| 47432 | 55% | clipboardData (30%), lineToolUtils (30%) |
| 67777 | 55% | dataSource (55%), bitmapCoordinatesPane (20%) |
| 19136 | 50% | dataSource (50%), seriesData (40%) |
| 43046 | 45% | drawingToolbarState (45%), dataSource (25%) |

### seriesBarFunction (5 candidates)

| Module ID | Score | Alternative Matches |
|-----------|-------|---------------------|
| 60661 | 55% | priceDataSource (20%), clipboardData (20%) |
| 69866 | 45% | priceDataSource (20%), clipboardData (20%) |
| 99955 | 45% | timeInterval (15%) |
| 13173 | 40% | watchedValue (25%), bitmapCoordinatesPane (25%) |
| 28334 | 40% | series (35%), bitmapCoordinatesPane (25%) |

### timeInterval (5 candidates)

| Module ID | Score | Alternative Matches |
|-----------|-------|---------------------|
| 20512 | 50% | None |
| 59613 | 45% | dialogManager (25%), settingsAdapter (20%) |
| 81922 | 45% | settingsAdapter (20%) |
| 82087 | 45% | None |
| 38780 | 40% | None |

### dataSource (5 candidates)

| Module ID | Score | Alternative Matches |
|-----------|-------|---------------------|
| 2383 | 50% | chartDataManager (25%), seriesData (25%) |
| 41414 | 50% | priceDataSource (30%), mainInitialization (20%) |
| 7543 | 50% | priceDataSource (30%), chartDataManager (15%) |
| 79740 | 50% | watchedValue (45%), priceDataSource (30%) |
| 36281 | 45% | priceDataSource (35%), chartDataManager (20%) |

### seriesData (3 candidates)

| Module ID | Score | Alternative Matches |
|-----------|-------|---------------------|
| 29806 | 50% | series (35%), seriesBarFunction (15%) |
| 43501 | 50% | series (35%), bitmapCoordinatesPane (15%) |
| 85630 | 40% | series (35%), seriesBarFunction (25%) |

### mainInitialization (2 candidates)

| Module ID | Score | Alternative Matches |
|-----------|-------|---------------------|
| 10544 | 50% | lineToolUtils (30%), lineToolManager (30%) |
| 51101 | 50% | seriesData (40%), seriesBarFunction (35%) |

### lineToolManager (2 candidates)

| Module ID | Score | Alternative Matches |
|-----------|-------|---------------------|
| 58570 | 50% | lineToolUtils (30%), settingsAdapter (20%) |
| 99247 | 40% | watchedValue (25%), lineToolUtils (20%) |

### lineToolUtils (2 candidates)

| Module ID | Score | Alternative Matches |
|-----------|-------|---------------------|
| 12362 | 40% | chartSaver (40%), lineToolManager (40%) |
| 24437 | 40% | lineToolManager (40%), deleteLockedLineTools (40%) |

### chunkLoaderModule (1 candidates)

| Module ID | Score | Alternative Matches |
|-----------|-------|---------------------|
| 55803 | 55% | priceDataSource (30%), clipboardData (30%) |

## Detailed View - Sorted by Confidence

Top 20 candidates by confidence score:

| Module ID | Suggested | Score | Alternatives |
|-----------|-----------|-------|---------------|
| 33718 | watchedValue | 55% | settingsAdapter |
| 38414 | watchedValue | 55% | bitmapCoordinatesPane, chunkLoaderModule |
| 45591 | priceDataSource | 55% | clipboardData, watchedValue |
| 47432 | priceDataSource | 55% | clipboardData, lineToolUtils |
| 55803 | chunkLoaderModule | 55% | priceDataSource, clipboardData |
| 60661 | seriesBarFunction | 55% | priceDataSource, clipboardData |
| 67777 | priceDataSource | 55% | dataSource, bitmapCoordinatesPane |
| 10544 | mainInitialization | 50% | lineToolUtils, lineToolManager |
| 19136 | priceDataSource | 50% | dataSource, seriesData |
| 20512 | timeInterval | 50% | None |
| 22613 | watchedValue | 50% | mainInitialization |
| 23752 | watchedValue | 50% | delegate, mainInitialization |
| 2383 | dataSource | 50% | chartDataManager, seriesData |
| 29806 | seriesData | 50% | series, seriesBarFunction |
| 41414 | dataSource | 50% | priceDataSource, mainInitialization |
| 43501 | seriesData | 50% | series, bitmapCoordinatesPane |
| 51101 | mainInitialization | 50% | seriesData, seriesBarFunction |
| 52499 | watchedValue | 50% | mainInitialization |
| 54405 | watchedValue | 50% | series, seriesBarFunction |
| 57340 | watchedValue | 50% | drawingToolbarState, deleteLockedLineTools |

## Recommendation

Candidates with **50%+ confidence** (26 modules):

- **Module 33718** → `watchedValue` (55%)
- **Module 38414** → `watchedValue` (55%)
- **Module 45591** → `priceDataSource` (55%)
- **Module 47432** → `priceDataSource` (55%)
- **Module 55803** → `chunkLoaderModule` (55%)
- **Module 60661** → `seriesBarFunction` (55%)
- **Module 67777** → `priceDataSource` (55%)
- **Module 10544** → `mainInitialization` (50%)
- **Module 19136** → `priceDataSource` (50%)
- **Module 20512** → `timeInterval` (50%)
- **Module 22613** → `watchedValue` (50%)
- **Module 23752** → `watchedValue` (50%)
- **Module 2383** → `dataSource` (50%)
- **Module 29806** → `seriesData` (50%)
- **Module 41414** → `dataSource` (50%)
- **Module 43501** → `seriesData` (50%)
- **Module 51101** → `mainInitialization` (50%)
- **Module 52499** → `watchedValue` (50%)
- **Module 54405** → `watchedValue` (50%)
- **Module 57340** → `watchedValue` (50%)
- **Module 58570** → `lineToolManager` (50%)
- **Module 64876** → `watchedValue` (50%)
- **Module 67763** → `watchedValue` (50%)
- **Module 69555** → `watchedValue` (50%)
- **Module 7543** → `dataSource` (50%)
- **Module 79740** → `dataSource` (50%)

**Next Steps:**
1. Review the 50%+ candidates above
2. Compare beautified output to verify semantic match
3. Apply approved candidates using the same method as high-confidence
4. Build pattern database incrementally as new modules are identified
