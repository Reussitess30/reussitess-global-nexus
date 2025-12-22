import requests
import time
import os

# Configuration de l'Empire
API_URL = "https://reussitess-global-nexus-jfgk-r14s7gpkl-porinus-projects.vercel.app/api/track"
SOVEREIGN_COUNTRIES = ["FR", "GB", "IT", "DE", "SE", "SG", "AU", "ES", "BR", "IN", "NZ", "US", "CA"]
BRAND = "REUSSITESS®"

def check_patrol():
    print(f"--- 🛰️ {BRAND} RADAR DE CONQUÊTE ACTIF ---")
    last_detected = ""
    
    while True:
        try:
            response = requests.get(API_URL)
            if response.status_code == 200:
                data = response.json()
                country = data.get('origin', 'Unknown')
                
                if country in SOVEREIGN_COUNTRIES and country != last_detected:
                    print(f"\n🔥 [ALERTE EMPIRE] Connexion détectée depuis : {country}")
                    print(f"🎯 Statut : Conquête en cours...")
                    # Son du BOUDOUM (si supporté par le terminal)
                    os.system("termux-toast -c '#0000FF' 'BOUDOUM ! Nouvelle connexion : ' " + country)
                    print(f"🚀 BOUDOUM ! Votre milliard de REUS rayonne sur {country}.")
                    last_detected = country
            
            time.sleep(10) # Patrouille toutes les 10 secondes
        except Exception as e:
            print(f"⚠️ Radar en mode furtif... (Erreur : {e})")
            time.sleep(30)

if __name__ == "__main__":
    check_patrol()
