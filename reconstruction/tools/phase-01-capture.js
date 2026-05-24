const puppeteer = require('puppeteer-core');
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8892;
const ROOT = path.resolve(__dirname, '../..');
const OUTPUT = path.resolve(__dirname, '../phase-01-runtime-analysis/captured-module-loads.json');
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

function startServer() {
    return new Promise((resolve) => {
        const server = http.createServer((req, res) => {
            const filePath = path.join(ROOT, req.url === '/' ? '/index.html' : req.url);
            const ext = path.extname(filePath);
            const mime = { '.html': 'text/html', '.js': 'application/javascript', '.json': 'application/json', '.css': 'text/css', '.png': 'image/png', '.svg': 'image/svg+xml', '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf' }[ext] || 'application/octet-stream';
            fs.readFile(filePath, (err, data) => {
                if (err) { res.writeHead(404); res.end('Not found'); }
                else { res.writeHead(200, { 'Content-Type': mime }); res.end(data); }
            });
        });
        server.listen(PORT, () => resolve(server));
    });
}

function findChartFrame(page) {
    return page.frames().find(f => f.url().startsWith('blob:'));
}

async function getChunkData(frame) {
    return await frame.evaluate(() => {
        const c = self.webpackChunktradingview;
        if (!c || !Array.isArray(c)) return { entries: [], length: 0 };
        const entries = [];
        for (let i = 0; i < c.length; i++) {
            const data = c[i];
            if (Array.isArray(data) && data.length >= 2) {
                entries.push({
                    index: i,
                    chunkIds: data[0],
                    moduleIds: Object.keys(data[1] || {}).map(Number),
                    hasCallback: typeof data[2] === 'function',
                });
            }
        }
        return { entries, length: c.length };
    });
}

async function run() {
    console.log('Phase 1 Runtime Capture (iframe-based)\n');
    const server = await startServer();

    const browser = await puppeteer.launch({
        executablePath: CHROME_PATH,
        headless: false,
        args: ['--no-sandbox'],
    });

    const page = await browser.newPage();
    page.setDefaultTimeout(60000);

    // Track network chunk file loads for reference
    const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'reconstruction/phase-00-unbundling/manifest.json'), 'utf8'));
    const fileToChunkId = {};
    for (const [cid, info] of Object.entries(manifest.chunks || {})) {
        if (info.file) fileToChunkId[info.file] = parseInt(cid);
    }
    const networkChunkIds = new Set();
    page.on('response', (res) => {
        const filename = res.url().split('/').pop();
        if (fileToChunkId[filename] !== undefined) {
            networkChunkIds.add(fileToChunkId[filename]);
        }
    });

    // ── Load page and wait for widget ──
    await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle0', timeout: 120000 });
    await page.waitForFunction(() => window.tvWidget && typeof window.tvWidget.chart === 'function', { timeout: 30000 });
    await new Promise(r => setTimeout(r, 5000));

    const chartFrame = findChartFrame(page);
    if (!chartFrame) { console.error('Chart frame not found'); process.exit(1); }
    console.log('Chart frame found:', chartFrame.url().substring(0, 60));

    // ── Snapshot initialization state ──
    const initChunkData = await getChunkData(chartFrame);
    console.log(`Init: ${initChunkData.length} chunk entries, ${new Set(initChunkData.entries.flatMap(e => e.moduleIds)).size} unique modules`);

    // Build module-to-phase mapping for init
    const modulePhases = {};
    for (const entry of initChunkData.entries) {
        for (const mid of entry.moduleIds) {
            modulePhases[mid] = 'initialization';
        }
    }

    // ── Perform actions and capture diffs ──
    const actions = [
        { name: 'change_symbol', fn: () => window.tvWidget.chart().setSymbol('MSFT', () => {}) },
        { name: 'change_interval', fn: () => window.tvWidget.chart().setResolution('1H', () => {}) },
        { name: 'change_chart_type', fn: () => window.tvWidget.chart().setChartType(1) },
        { name: 'add_study', fn: () => window.tvWidget.chart().createStudy('Relative Strength Index', false, false, [14]) },
    ];

    let prevLength = initChunkData.length;
    const phaseResults = {};

    for (const action of actions) {
        console.log(`\n--- ${action.name} ---`);
        await page.evaluate(action.fn);
        await new Promise(r => setTimeout(r, 5000));

        const current = await getChunkData(chartFrame);
        const newEntries = current.entries.filter(e => e.index >= prevLength);
        const newModules = new Set(newEntries.flatMap(e => e.moduleIds));
        
        for (const entry of newEntries) {
            for (const mid of entry.moduleIds) {
                if (!modulePhases[mid]) {
                    modulePhases[mid] = action.name;
                }
            }
        }

        console.log(`  New chunk entries: ${newEntries.length}`);
        console.log(`  New modules: ${newModules.size}`);
        console.log(`  Chunk IDs: ${[...new Set(newEntries.flatMap(e => e.chunkIds))].join(', ')}`);

        phaseResults[action.name] = {
            newChunkEntries: newEntries.length,
            newModules: newModules.size,
            chunkIds: [...new Set(newEntries.flatMap(e => e.chunkIds))],
        };

        prevLength = current.length;
    }

    // ── Build final output ──
    const finalChunkData = await getChunkData(chartFrame);
    const allModules = new Set(finalChunkData.entries.flatMap(e => e.moduleIds));
    const networkChunks = [...networkChunkIds].sort((a, b) => a - b);

    const output = {
        metadata: {
            captureTimestamp: new Date().toISOString(),
            totalChunkEntries: finalChunkData.length,
            totalUniqueModules: allModules.size,
            chartFrameUrl: chartFrame.url().substring(0, 80),
            networkChunksLoaded: networkChunks,
            phases: phaseResults,
        },
        modulePhases: modulePhases,
        allChunkEntries: finalChunkData.entries.map(e => ({
            index: e.index,
            chunkIds: e.chunkIds,
            moduleCount: e.moduleIds.length,
            moduleIdsSample: e.moduleIds.slice(0, 20),
        })),
    };

    fs.writeFileSync(OUTPUT, JSON.stringify(output, null, 2));
    console.log(`\n=== RESULTS ===`);
    console.log(`Chunk entries: ${finalChunkData.length}`);
    console.log(`Unique modules: ${allModules.size}`);
    console.log(`Saved: ${OUTPUT}`);

    await browser.close();
    server.close();
}

run().catch(err => {
    console.error('Fatal:', err);
    process.exit(1);
});
