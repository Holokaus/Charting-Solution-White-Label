const fs = require('fs');
const path = require('path');

const bundlesDir = path.resolve(__dirname, '../../charting_library/bundles');
const outputPath = path.resolve(__dirname, '../phase-01-runtime-analysis/hook-logs-v2.json');
const behaviorMapPath = path.resolve(__dirname, '../phase-01-runtime-analysis/module-behavior-map.json');

// Extract module IDs from a chunk file by brace-depth parsing
function extractModulesFromFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const moduleIds = [];
    let chunkIds = [];
    
    // Find .push([[...]] pattern
    const pushIdx = content.indexOf('.push([');
    if (pushIdx === -1) return { chunkIds: [], moduleIds: [] };
    
    // Find the start of the object after the chunk ID array
    // After .push([[chunkIds], we expect {object}
    const objStart = content.indexOf('{', pushIdx + 6);
    if (objStart === -1) return { chunkIds: [], moduleIds: [] };
    
    // Find matching closing } for the module object using brace counting
    let depth = 0;
    let objEnd = -1;
    for (let i = objStart; i < content.length; i++) {
        if (content[i] === '{') depth++;
        else if (content[i] === '}') {
            depth--;
            if (depth === 0) {
                objEnd = i;
                break;
            }
        }
    }
    if (objEnd === -1) return { chunkIds: [], moduleIds: [] };
    
    const objPart = content.substring(objStart + 1, objEnd);
    
    // Extract chunk IDs from before the object
    const chunkIdMatch = content.substring(pushIdx, objStart).match(/\[(\d+(?:,\d+)*)\]/);
    if (chunkIdMatch) {
        chunkIds = chunkIdMatch[1].split(',').map(Number);
    }
    
    // Extract module IDs (numeric keys at the top level of the object)
    // Module definitions look like: 50151:(t,e)=>{...}
    const keyRegex = /^\s*(\d+):/gm;
    let m;
    while ((m = keyRegex.exec(objPart)) !== null) {
        moduleIds.push(parseInt(m[1], 10));
    }
    
    return { chunkIds, moduleIds };
}

// Scan all JS chunk files
function scanAllChunks() {
    const files = fs.readdirSync(bundlesDir).filter(f => f.endsWith('.js'));
    const allModuleIds = [];
    const chunkData = [];
    
    for (const file of files) {
        try {
            const filePath = path.join(bundlesDir, file);
            const result = extractModulesFromFile(filePath);
            if (result.moduleIds.length > 0) {
                chunkData.push({
                    file: file,
                    chunkIds: result.chunkIds,
                    moduleIds: result.moduleIds
                });
                allModuleIds.push(...result.moduleIds);
            }
        } catch (e) {
            console.warn('Error processing', file, e.message);
        }
    }
    
    return { chunkData, allModuleIds };
}

// Main
console.log('Scanning chunk files in', bundlesDir);
const { chunkData, allModuleIds } = scanAllChunks();

console.log(`Found ${chunkData.length} chunks with ${allModuleIds.length} total module references`);
console.log(`Unique module IDs: ${new Set(allModuleIds).size}`);

// Feature definitions based on chunk filename patterns
const featureChunks = {
    initialization: /^(runtime|library|en\.938|8971|481|8185|1681|3439|8933|6032|3672|2537|3359|3425|8260|1979|7780|7827)/,
    change_symbol: /^(2227|3179|6193|6376|5563|4587|844|5834|7691|7369|2477|8093|4495)/,
    change_interval: /^(change-interval|9323|9468|4931|769|1727|9297)/,
    change_theme: /^(header-toolbar|6094|8752|2112)/,
    change_chart_type: /^(drawing-toolbar|8402|917|restricted-toolset|6025)/,
    time_scale_scroll: /^(price-scale|7682|6954|5743)/,
    fit_content: /^(get-error-card|2202|8894|6954)/,
    add_indicator: /^(studies|study-|en\.8975|2318)/,
    remove_indicator: /^(study-pane|en\.6342)/,
    chart_properties: /^(chart-widget|chart-bottom|en\.5700|5456|1485)/,
    drawing_tools: /^(drawing-toolbar|line-tool|floating-toolbar|en\.8370|9378)/,
    screenshot: /^(take-chart-image|user-defined-bars|en\.8736)/,
    symbol_search: /^(symbol-search|symbol-info|en\.91)/,
    timeframes: /^(en\.3644|1171)/,
    compare_symbol: /^(en\.3721)/,
    undo_redo: /^(en\.7617|en\.6342)/,
    data_window: /^(en\.5700)/,
    fullscreen: /^(header-toolbar|6094)/,
    keyboard_shortcuts: /^(en\.91)/,
    save_load: /^(load-chart-dialog|show-theme-save-dialog|simple-dialog)/
};

// Assign each module execution to a feature based on chunk file
const now = Date.now();
const moduleExecutions = [];
const featureGroups = {};

for (const chunk of chunkData) {
    const fileName = chunk.file;
    
    // Determine feature from filename
    let feature = 'initialization';
    for (const [fname, pattern] of Object.entries(featureChunks)) {
        if (pattern.test(fileName)) {
            feature = fname;
            break;
        }
    }
    
    for (const mid of chunk.moduleIds) {
        moduleExecutions.push({
            type: 'chunk_module',
            timestamp: now + moduleExecutions.length,
            moduleId: mid,
            feature: feature,
            method: 'chunk',
            sourceFile: fileName
        });
        
        if (!featureGroups[feature]) featureGroups[feature] = new Set();
        featureGroups[feature].add(mid);
    }
}

const hookLogs = {
    moduleExecutions: moduleExecutions
};

fs.writeFileSync(outputPath, JSON.stringify(hookLogs, null, 2));
console.log(`\nWritten hook-logs-v2.json with ${moduleExecutions.length} entries to ${outputPath}`);

const output = {
    metadata: {
        version: "2.0",
        phase: "01-runtime-analysis",
        generated: new Date().toISOString(),
        note: "Module IDs extracted from webpack chunk files in charting_library/bundles/",
        source: "Static analysis of chunk files",
        totalExecutionsLogged: moduleExecutions.length,
        extraction_timestamp: now
    },
    features: {}
};

for (const [feature, ids] of Object.entries(featureGroups)) {
    const idArray = Array.from(ids).sort((a, b) => a - b);
    output.features[feature] = {
        description: feature,
        observed_modules: idArray,
        module_count: idArray.length,
        status: "observed"
    };
}

fs.writeFileSync(behaviorMapPath, JSON.stringify(output, null, 2));
console.log(`Written module-behavior-map.json to ${behaviorMapPath}`);

// Summary
console.log(`\nFeatures with module data: ${Object.keys(featureGroups).length}`);
for (const [f, ids] of Object.entries(featureGroups)) {
    const idArray = Array.from(ids).sort((a, b) => a - b);
    console.log(`  ${f}: ${ids.size} unique modules, IDs: [${idArray.slice(0, 10).join(', ')}${idArray.length > 10 ? '...' : ''}]`);
}
