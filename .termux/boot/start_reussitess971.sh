#!/data/data/com.termux/files/usr/bin/bash
export PATH=$PATH:/data/data/com.termux/files/usr/bin
# Load .env if present (safer method)
if [ -f "$HOME/public/reussitess971/.env" ]; then
  set -a
  source "$HOME/public/reussitess971/.env"
  set +a
fi
# Restore saved pm2 processes
pm2 resurrect || true
# If pm2 resurrect is not sufficient, start explicitly
pm2 start node --name reussitess971 -- $HOME/public/reussitess971/global-nexus-bot.js --update-env || true
