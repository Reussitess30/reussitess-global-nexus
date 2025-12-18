# Superbot Supreme (passive install)

Ce script installe les fichiers du superviseur en mode PASSIF. Il n'active pas le superviseur automatiquement.

- Vérifier modules détectés: node list_modules.js
- Démarrer le superviseur manuellement (quand TU veux):
  node bot-supervisor.js
  ou en background via PM2:
  pm2 start bot-supervisor.js --name superbot-supreme
