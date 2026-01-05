import scanner_securite_reussitess as scanner
import time

def simulation_attaque():
    pirate_ip = "185.234.10.5"
    pays_pirate = "Russie"
    
    print(f"⚠️ TENTATIVE D'INTRUSION DÉTECTÉE : IP {pirate_ip} ({pays_pirate})")
    
    for i in range(1, 4):
        print(f"🛡️ Analyse des 100 IA Reussitess©... Tentative de blocage {i}/3")
        time.sleep(1)
        
    resultat = scanner.verifier_geofence(pays_pirate)
    
    if "🚨 ALERTE" in resultat:
        print("\n🔥 RÉACTION DE DÉFENSE ACTIVE :")
        print("1. IP [185.234.10.5] bannie par le pare-feu Reussitess©.")
        print("2. Accès aux 14 pays piliers verrouillé pour cette source.")
        print(f"STATUS FINAL : {resultat}")
    else:
        print("❌ ÉCHEC DU BOUCLIER - Alerte critique !")

if __name__ == "__main__":
    simulation_attaque()
