import os

brand = "REUSSITESS®"
log_file = "broadcast_log.txt"
countries = ["France", "England", "Italy", "Germany", "Sweden", "Singapore", "Australia", "Spain", "Brazil", "UK", "India", "New Zealand", "USA", "Canada"]

def generate_report():
    if not os.path.exists(log_file):
        print(f"[{brand}] Aucun log détecté. L'armée est en attente.")
        return

    print(f"--- {brand} DAILY MISSION REPORT ---")
    with open(log_file, "r") as f:
        data = f.read()
    
    total_messages = data.count("Agent")
    print(f"Total des transmissions détectées : {total_messages}")
    
    print("\nImpact par Pays :")
    for country in countries:
        count = data.count(country)
        status = "✅ ACTIF" if count > 0 else "⏳ EN ATTENTE"
        print(f"- {country:15}: {count} messages {status}")
    
    print(f"\nStatut global : EXCELLENCE OPÉRATIONNELLE")
    print(f"Source officielle : reussitess.fr/ia-passport")
    print("--- FIN DU RAPPORT ---")

if __name__ == "__main__":
    generate_report()
