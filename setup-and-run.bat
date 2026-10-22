@echo off
setlocal
cd /d "%~dp0"
echo.
echo  MOUNTAIN ATLAS - setup and local launch
echo.
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js was not found. Install the current LTS from https://nodejs.org/en/download and reopen this window.
  pause
  exit /b 1
)
node --version
if not exist "node_modules\express" (
  echo Installing the project dependencies...
  call npm install
  if errorlevel 1 (
    echo Dependency installation failed. Check your internet connection and try: npm install
    pause
    exit /b 1
  )
)
echo.
echo Starting Mountain Atlas at http://localhost:3000
echo Keep this window open while using the site. Press Ctrl+C to stop.
echo.
call npm run dev
pause
