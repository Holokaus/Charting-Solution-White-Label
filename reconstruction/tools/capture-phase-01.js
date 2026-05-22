const fs = require('fs');
const path = require('path');
const http = require('http');
const url = require('url');
const puppeteer = require('puppeteer');

const repoRoot = path.resolve(__dirname, '../..');
const fixturePage = path.join(repoRoot, 'reconstruction/phase-01-runtime-analysis/test-page.html');
const outputPath = path.join(repoRoot, 'reconstruction/phase-01-runtime-analysis/hook-logs-v2.json');

// MIME types for serving static files
const MIME = {
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.html': 'text/html',
    '.json': 'application/json',
    '.png': 'image/png',
    '.svg': 'image/svg+xml',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
};

// Start a simple HTTP server serving the repo root
function startServer(root, port) {
    return new Promise((resolve, reject) => {
        const server = http.createServer((req, res) => {
            const parsed = url.parse(req.url);
            let filePath = path.join(root, parsed.pathname);
            
            // If requesting a directory, try index.html
            if (!path.extname(filePath)) {
                filePath = path.join(filePath, 'index.html');
            }
            
            fs.readFile(filePath, (err, data) => {
                if (err) {
                    res.writeHead(404);
                    res.end('Not found: ' + filePath);
                    return;
                }
                const ext = path.extname(filePath);
                res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
                res.end(data);
            });
        });
        
        server.listen(port, () => {
            console.log(`[Server] Listening on http://localhost:${port}`);
            resolve(server);
        });
        server.on('error', reject);
    });
}

function getRandomPort() {
    return 8080 + Math.floor(Math.random() * 1000);
}

(async () => {
    // Start HTTP server
    const port = getRandomPort();
    const server = await startServer(repoRoot, port);
    
    console.log('[Capture] Launching browser...');
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    
    // Enable console logging
    page.on('console', msg => {
        const text = msg.text();
        if (text.includes('[Hook]') || text.includes('[Test Page]') || text.includes('[Capture]') || text.includes('[HookDBG]') || text.includes('[Req]')) {
            console.log('[Browser]', text);
        }
    });
    
    // Log all requests to see which chunks are loaded
    const requestedUrls = [];
    page.on('request', req => {
        const url = req.url();
        if (url.includes('bundles') || url.includes('charting_library')) {
            console.log('[Req]', url);
            requestedUrls.push(url);
        }
    });
    
    page.on('pageerror', err => {
        console.warn('[Browser Error]', err.message);
    });
    
    const pageUrl = `http://localhost:${port}/reconstruction/phase-01-runtime-analysis/feature-trigger-test.html`;
    console.log('[Capture] Opening', pageUrl);
    await page.goto(pageUrl, { waitUntil: 'networkidle2', timeout: 60000 });
    
    // Wait for widget to be initialized
    console.log('[Capture] Waiting for widget initialization...');
    try {
        await page.waitForFunction(() => window.tvWidget !== undefined, { timeout: 30000 });
        console.log('[Capture] Widget initialized');
    } catch (e) {
        console.warn('[Capture] Widget may not have fully initialized:', e.message);
    }
    
    await new Promise(r => setTimeout(r, 3000));
    
    // Click each feature button
    const buttons = [
        'Change Symbol',
        'Change Interval',
        'Change Theme',
        'Change Chart Type',
        'Time Scale Scroll',
        'Fit Content'
    ];
    
    for (const label of buttons) {
        console.log(`[Capture] Clicking "${label}"...`);
        const clicked = await page.evaluate((text) => {
            const buttons = document.querySelectorAll('button');
            for (const b of buttons) {
                if (b.textContent.includes(text)) {
                    b.click();
                    return true;
                }
            }
            return false;
        }, label);
        if (!clicked) {
            console.warn(`[Capture] Button "${label}" not found`);
        }
        await new Promise(r => setTimeout(r, 2000));
    }
    
    // Export logs
    console.log('[Capture] Triggering exportHookLogs...');
    await page.evaluate(() => {
        if (typeof window.exportHookLogs === 'function') {
            window.exportHookLogs();
        }
    });
    await new Promise(r => setTimeout(r, 1000));
    
    // Capture data from page
    console.log('[Capture] Extracting logs from page...');
    const logs = await page.evaluate(() => {
        const mainLogs = window.hookLogs || {};
        const hookLogs = window._hookLogs || {};
        return {
            ...mainLogs,
            moduleExecutions: hookLogs.moduleExecutions || []
        };
    });
    
    console.log(`[Capture] Module executions captured: ${logs.moduleExecutions ? logs.moduleExecutions.length : 0}`);
    if (logs.moduleExecutions && logs.moduleExecutions.length > 0) {
        console.log('[Capture] Sample:', JSON.stringify(logs.moduleExecutions.slice(0, 3)));
    }
    
    fs.writeFileSync(outputPath, JSON.stringify(logs, null, 2));
    console.log('[Capture] Saved to', outputPath);
    
    await browser.close();
    server.close();
})();
