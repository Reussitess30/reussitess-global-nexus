#!/bin/bash
cd ~/reussitess-global-nexus
# Backup de l'ancien fichier
cp pages/index.js pages/index.js.backup
# Télécharger le fichier corrigé
# (vous devrez d'abord télécharger index.jsx depuis le lien que j'ai fourni)
cp ~/storage/downloads/index.jsx pages/index.js
echo "✅ Fichier remplacé avec succès!"
