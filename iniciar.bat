@echo off
title Curriculo Portfolio - Servidor Local
echo ===================================================
echo   Iniciando Portfolio & Curriculo Pessoal
echo ===================================================
echo.

set PATH=C:\Users\joao.dsilva\.gemini\antigravity\scratch\tools\node;C:\Users\joao.dsilva\.gemini\antigravity\scratch\tools\git\cmd;%PATH%
cd /d "C:\Users\joao.dsilva\.gemini\antigravity\scratch\curriculo-portfolio"

echo Abrindo o navegador em http://localhost:3000 ...
start "" http://localhost:3000

echo Servidor rodando! Para encerrar, feche esta janela ou aperte Ctrl + C.
echo.
npm run dev
