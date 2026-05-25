# Phase 4 Confidence Statistics

## Coverage
- Total modules in graph: 4,413
- Modules analyzed: 210
- Specs written: 210
- Unknown (attempted but failed): 80
- Unanalyzed (not attempted): 4,203

## Confidence Distribution
| Level | Count | Percentage |
|-------|-------|------------|
| [CERTAIN] | 52 | 24.8% |
| [LIKELY] | 67 | 31.9% |
| [UNCERTAIN] | 11 | 5.2% |
| [UNKNOWN] | 80 | 38.1% |

## High-Value Modules by Confidence

### [CERTAIN] Modules (most reliable for reconstruction)
- Module 37150: Chart Engine / Widget Coordinator (1.1MB, main implementation)
- Module 38881: ChunkLoader (async chunk loading base class)
- Module 92024: Restricted Toolset (feature gating)
- Module 1006: CalloutDefinitionsViewModel (drawing tool property definitions)
- Module 917: CSS Module styles
- Module 1140: CSS Module styles
- Module 14472: LineDataSourceDefinitions (drawing tool base class)
- Module 69558: Line style constants (LINESTYLE_SOLID, etc.)
- Module 78176: Reactive property system
- Module 11098: [CSS Module] chart styles

### [LIKELY] Modules (reasonable basis for specs)
- Module 50151: Core coordinate math / utilities
- Module 11542: Price scale calculations
- Module 22613: WatchedValue reactive state
- Module 2383: Hit testing utilities
- Module 94602: Formatting / display utilities
- Module 37103: Feature enable/disable
- Module 84617: Font/chart font family
- Module 9343: Logger utility
- Module 65045: Pane view rendering
- Module 41414: Core rendering infrastructure

### [UNCERTAIN] Modules (require manual verification)
- Module 4753: Property system helpers
- Module 80819: Data transform
- Module 43337: Cross-cutting utility
- Module 91682: String/formatting utilities
- Module 54707: Study rendering overlay
- Module 25672: Constants/enums
- Module 52859: Translation/i18n helpers
- Module 50605: Array/collection utilities
- Module 24640: DOM measurement utilities
- Module 49483: Array/collection utilities
- Module 9745: Base/exports module

## Gaps Requiring Human/Runtime Analysis
1. **WebSocket reconnection logic** — The real-time update protocol between datafeed and chart engine is inferred from API documentation but not verified in minified code
2. **Bar cache eviction policy** — How the in-memory bar cache manages memory limits is unknown
3. **Pine Script compilation** — If studies are compiled from Pine Script, the compilation target format is entirely opaque
4. **IFrame protocol messages** — The postMessage protocol between the widget iframe and host page is undocumented
5. **Undo/redo state serialization** — The exact format of state snapshots for undo/redo is not extracted
6. **Chart layout serialization** — The `save()` output format (JSON structure) is not fully confirmed
7. **Drawing tool serialization** — Individual drawing tool state objects are not extracted
8. **CSS-in-JS vs static CSS** — The styling system architecture (inline styles vs CSS modules) is ambiguous
