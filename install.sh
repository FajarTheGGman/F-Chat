echo "[!] Installing Package.."
sleep 1
apt-get install nodejs -y
npm install chalk socket.io express colors boxen
node index.js
