#!/data/data/com.termux/files/usr/bin/bash
export PATH=$PATH:/data/data/com.termux/files/usr/bin
# Charger .env si présent
if [ -f "$HOME/public/reussitess971/.env" ]; then
  export $(grep -v '^#' "$HOME/public/reussitess971/.env" | xargs)
fi
# Restaurer les processus pm2 sauvegardés
pm2 resurrect || true
# Si pm2 resurrect ne suffit pas, démarrer explicitement
pm2 start node --name reussitess971 -- $HOME/public/reussitess971/global-nexus-bot.js --update-env || true
