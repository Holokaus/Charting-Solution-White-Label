# Simple local HTTP server for Phase 1 testing (PowerShell version)
# Usage: powershell -ExecutionPolicy Bypass -File start-server.ps1
# Then open: http://localhost:8080/reconstruction/phase-01-runtime-analysis/feature-trigger-test.html

$PORT = 8080
$ROOT_DIR = $PSScriptRoot

# MIME type map
$MIME_TYPES = @{
    '.html' = 'text/html'
    '.js' = 'application/javascript'
    '.css' = 'text/css'
    '.json' = 'application/json'
    '.png' = 'image/png'
    '.jpg' = 'image/jpeg'
    '.gif' = 'image/gif'
    '.svg' = 'image/svg+xml'
    '.woff' = 'font/woff'
    '.woff2' = 'font/woff2'
    '.ttf' = 'font/ttf'
}

# Create HTTP listener
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://+:$PORT/")

try {
    $listener.Start()
    Write-Host @"
╔══════════════════════════════════════════════════════════════╗
║          Phase 1 Test Server Running (PowerShell)           ║
╠══════════════════════════════════════════════════════════════╣
║  Server: http://localhost:$PORT                               
║  
║  Test Page: 
║  http://localhost:$PORT/reconstruction/phase-01-runtime-analysis/feature-trigger-test.html
║
║  Steps:
║  1. Open the Test Page URL in your browser
║  2. Wait for the chart to initialize (may take a few seconds)
║  3. Click buttons to trigger features
║  4. Click "Export Logs" to download hook-logs.json
║  5. Click "Export Module Map" to download module-behavior-map.json
║
║  Press Ctrl+C to stop the server
╚══════════════════════════════════════════════════════════════╝
"@

    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $pathname = $request.Url.LocalPath
        if ($pathname -eq "/") {
            $pathname = "/index.html"
        }

        $filePath = Join-Path $ROOT_DIR $pathname.TrimStart("/").Replace("/", "\")
        
        if ((Test-Path $filePath -PathType Leaf) -and $filePath.StartsWith($ROOT_DIR)) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $mimeType = $MIME_TYPES[$ext]
            if (-not $mimeType) { $mimeType = 'application/octet-stream' }

            $response.StatusCode = 200
            $response.ContentType = $mimeType
            $response.AddHeader("Access-Control-Allow-Origin", "*")
            $response.AddHeader("Cache-Control", "no-cache")

            $fileBytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.OutputStream.Write($fileBytes, 0, $fileBytes.Length)
            
            Write-Host "[200] $pathname"
        } else {
            $response.StatusCode = 404
            $response.ContentType = "text/plain"
            $outputBuffer = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $pathname")
            $response.OutputStream.Write($outputBuffer, 0, $outputBuffer.Length)
            
            Write-Host "[404] $pathname"
        }

        $response.Close()
    }
} finally {
    $listener.Stop()
    Write-Host "Server stopped."
}
