#!/data/data/com.termux/files/usr/bin/bash
clear
echo -e "\e[1;34m--- SURVEILLANCE NEURO-X ACTIVÉE (14 NATIONS) ---\e[0m"
while true; do
  # Simulation de scan de protection
  echo -n "Vérification des flux..."
  sleep 3
  
  # Aléatoire pour simuler une détection (1 chance sur 5)
  detect=$(( $RANDOM % 5 ))
  
  if [ $detect -eq 1 ]; then
    echo -e "\n\e[1;31m[!] INTRUSION BLOQUÉE PAR L'ARMÉE DES 200 IA\e[0m"
    ./riposte.sh
  else
    echo -e " \e[1;32m[SÉCURISÉ]\e[0m"
  fi
  sleep 2
done
