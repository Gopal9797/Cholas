$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
Set-Location (Join-Path $root "web")
npm run build
Copy-Item -Force "dist\index.html" (Join-Path $root "index.html")
Copy-Item -Force "dist\404.html" (Join-Path $root "404.html")
Copy-Item -Force "dist\favicon.svg" (Join-Path $root "favicon.svg")
New-Item -ItemType File -Force -Path (Join-Path $root ".nojekyll") | Out-Null
$assets = Join-Path $root "assets"
if (Test-Path $assets) { Remove-Item -Recurse -Force $assets }
Copy-Item -Recurse -Force "dist\assets" $assets
$docs = Join-Path $root "docs"
if (Test-Path $docs) { Remove-Item -Recurse -Force $docs }
New-Item -ItemType Directory -Force -Path $docs | Out-Null
Copy-Item -Recurse -Force "dist\*" $docs
New-Item -ItemType File -Force -Path (Join-Path $docs ".nojekyll") | Out-Null
Write-Host "Published build to repo root and docs/. Commit and push to update GitHub Pages."
