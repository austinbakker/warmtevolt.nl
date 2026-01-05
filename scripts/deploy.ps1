# Deploy script for voordeligste-warmtepomp.nl
# Run with: .\scripts\deploy.ps1

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Deploying voordeligste-warmtepomp.nl" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Link to the correct project
Write-Host "[1/3] Linking to Vercel project..." -ForegroundColor Yellow
npx vercel link --project voordeligste-warmtepomp-nl --yes

if ($LASTEXITCODE -ne 0) {
    Write-Host "Error linking to project. Exiting." -ForegroundColor Red
    exit 1
}

# Step 2: Check environment variables
Write-Host ""
Write-Host "[2/3] Checking environment variables..." -ForegroundColor Yellow
npx vercel env ls

# Step 3: Deploy to production
Write-Host ""
Write-Host "[3/3] Deploying to production..." -ForegroundColor Yellow
npx vercel --prod

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "  Deployment successful!" -ForegroundColor Green
    Write-Host "  URL: https://www.voordeligste-warmtepomp.nl" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "Deployment failed. Check the logs above." -ForegroundColor Red
    exit 1
}

