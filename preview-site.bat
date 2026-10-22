@echo off
setlocal EnableExtensions
set "BAT_LOG=%~dp0preview-site.bat.log"
echo [%date% %time%] started > "%BAT_LOG%"

rem ── LZCY photography site: on-demand preview ─────────────────────────
rem  Double-click this file. It builds (first run only) and opens the
rem  site in your browser. Close THIS window to stop the server.

rem Site checkout location: use the folder this bat sits in when it is
rem inside the repo, otherwise the fixed path below (edit if you move it)
set "SITE_DIR=%~dp0"
if not exist "%SITE_DIR%package.json" set "SITE_DIR=C:\Users\Administrator\multica_workspaces_desktop-api.multica.ai\lzcy-home-c657dff05cd1\lzcy-1-b3acde8d06cd\workdir\lzcy-personal-website\"

rem Node + pnpm live here on this machine
set "PATH=D:\Develop\nodejs\node_global;C:\Windows\system32;C:\Windows;%PATH%"

if not exist "%SITE_DIR%\package.json" (
  echo [ERROR] Site folder not found:
  echo   %SITE_DIR%
  echo Edit SITE_DIR inside this bat file.
  goto _wait_exit
)
echo [%date% %time%] site dir ok >> "%BAT_LOG%"

rem First run (or after pulling changes): install dependencies + build.
rem The .build-marker file is deleted by build; we recreate it after.
if not exist "%SITE_DIR%\.build-marker" (
  echo Dependencies + build needed ^(first run takes a few minutes^)...
  echo [%date% %time%] install started >> "%BAT_LOG%"
  pushd "%SITE_DIR%"
  call pnpm install --prefer-offline >nul 2>&1
  if errorlevel 1 goto _install_fail
  echo [%date% %time%] build started >> "%BAT_LOG%"
  call pnpm build >nul 2>&1
  if errorlevel 1 goto _build_fail
  popd
  type nul > "%SITE_DIR%\.build-marker"
) else (
  echo [%date% %time%] cached build found >> "%BAT_LOG%"
)
echo [%date% %time%] starting server >> "%BAT_LOG%"

echo.
echo ============================================================
echo   Preview starting... the site will open in your browser.
echo   Keep this window OPEN while you look at the site.
echo   Close this window (or press Ctrl+C) to stop the server.
echo ============================================================
echo.

start "" http://localhost:3000
pushd "%SITE_DIR%"
call pnpm start --port 3000
set "RC=%errorlevel%"
popd
echo [%date% %time%] server exited rc=%RC% >> "%BAT_LOG%"
echo.
echo Server stopped.
goto _wait_exit

:_install_fail
popd 2>nul
echo [ERROR] Installing dependencies failed. See %BAT_LOG%.
echo [%date% %time%] install FAILED >> "%BAT_LOG%"
goto _wait_exit

:_build_fail
popd 2>nul
echo [ERROR] Build failed. See %BAT_LOG%.
echo [%date% %time%] build FAILED >> "%BAT_LOG%"
goto _wait_exit

:_wait_exit
echo.
echo Press any key to close this window...
pause
endlocal
