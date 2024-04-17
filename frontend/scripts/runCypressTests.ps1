Write-Host "Cypress E2E tests specs" -ForegroundColor Yellow;

# Read the content of cypress-specs.json file
$specsContent = Get-Content -Raw -Path ./cypress/cypress-specs.json | ConvertFrom-Json;

# Construct the command string by joining the test file paths
$specPaths = $specsContent -join ","

# $command = "npx cypress run --browser chrome --record --key f381eb6d-65be-4d36-ab56-457250cfc50c --spec `"$specPaths`""
# $command = "set CYPRESS_NO_COMMAND_LOG=1 ; npx cypress run --no-runner-ui --browser chrome --spec `"$specPaths`""
$command = "npx cypress run --browser chrome --spec `"$specPaths`""
Write-Host $command -ForegroundColor Green;

# Execute the command
Write-Host "Running Tests.." -ForegroundColor Yellow
iex $command