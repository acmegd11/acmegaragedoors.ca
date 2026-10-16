# Self-contained PowerShell Static Web Server for Acme Garage Doors
# Runs on Windows without requiring Node.js, Python or external dependencies.
param(
    [int]$Port = 8080
)

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptDir

$listener = New-Object System.Net.HttpListener
$prefix = "http://localhost:$Port/"
$listener.Prefixes.Add($prefix)

try {
    $listener.Start()
    Write-Host "==========================================================" -ForegroundColor Green
    Write-Host " Acme Garage Doors Website & SEO Suite Running!" -ForegroundColor Yellow
    Write-Host " Open your browser at: $prefix" -ForegroundColor Cyan
    Write-Host " Press Ctrl+C in this terminal window to stop the server." -ForegroundColor Gray
    Write-Host "==========================================================" -ForegroundColor Green

    # Attempt to open default browser
    Start-Process $prefix

    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $path = $request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrWhiteSpace($path) -or $path -eq "/") {
            $path = "index.html"
        }
        
        # If no extension is provided, check for .html
        if (-not [System.IO.Path]::HasExtension($path)) {
            if (Test-Path (Join-Path $scriptDir "$path.html")) {
                $path = "$path.html"
            }
        }

        $filePath = Join-Path $scriptDir $path

        if (Test-Path $filePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = switch ($ext) {
                ".html" { "text/html; charset=utf-8" }
                ".css"  { "text/css; charset=utf-8" }
                ".js"   { "application/javascript; charset=utf-8" }
                ".json" { "application/json; charset=utf-8" }
                ".xml"  { "application/xml; charset=utf-8" }
                ".txt"  { "text/plain; charset=utf-8" }
                ".jpg"  { "image/jpeg" }
                ".png"  { "image/png" }
                ".svg"  { "image/svg+xml" }
                default { "application/octet-stream" }
            }

            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentType = $contentType
            $response.ContentLength64 = $bytes.Length
            $response.StatusCode = 200
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $path")
            $response.OutputStream.Write($msg, 0, $msg.Length)
        }

        $response.OutputStream.Close()
    }
} catch {
    Write-Error $_.Exception.Message
} finally {
    if ($listener.IsListening) {
        $listener.Stop()
    }
    $listener.Close()
}
