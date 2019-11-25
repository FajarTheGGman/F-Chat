#!/usr/bin/bash

echo "[!] Installing package"
if !node then
    apt-get install nodejs -y
    npm install chalk socket.io express colors boxen
    node index.js
else
    npm install chalk socket.io express colors boxen
    node index.js