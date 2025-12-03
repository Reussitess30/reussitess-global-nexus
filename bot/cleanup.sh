#!/data/data/com.termux/files/usr/bin/bash
echo "🧹 Nettoyage..."
pkill -f "http-server"
for port in 8080 8081 8082 3000; do
    kill -9 $(lsof -ti:$port 2>/dev/null) 2>/dev/null
done
echo "✅ Terminé"
