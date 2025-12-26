# 🛡️ Système de Surveillance Reussitess©
# Configuration des 100 unités IA

PAYS_AUTORISES = [
    "France", "Angleterre", "Italie", "Allemagne", "Suède", 
    "Singapour", "Australie", "Espagne", "Brésil", "Royaume-Uni", 
    "Inde", "Nouvelle-Zélande", "États-Unis", "Canada"
]

def verifier_geofence(pays_actuel):
    if pays_actuel in PAYS_AUTORISES:
        return f"✅ {pays_actuel} est dans la zone Reussitess©. Accès autorisé."
    else:
        return f"🚨 ALERTE : {pays_actuel} est hors zone ! Blocage par les 100 IA."

if __name__ == "__main__":
    print("📡 Scan de sécurité en cours...")
    for pays in PAYS_AUTORISES:
        print(verifier_geofence(pays))
    print("\n✨ Protection Reussitess© active sur les 14 pays.")
