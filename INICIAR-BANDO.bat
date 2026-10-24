@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo BANDO necesita Node.js 20.19 o superior.
  echo Descargalo desde https://nodejs.org/ y vuelve a abrir este archivo.
  pause
  exit /b 1
)
if not exist node_modules (
  echo Instalando dependencias por primera vez. Puede tardar un minuto...
  call npm install
  if errorlevel 1 (
    echo No se pudieron instalar las dependencias. Comprueba la conexion.
    pause
    exit /b 1
  )
)
start "BANDO PWA" cmd /k "npm run dev -- --host 0.0.0.0"
timeout /t 3 >nul
start "" http://localhost:5173
