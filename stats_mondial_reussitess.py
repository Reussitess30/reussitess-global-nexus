# 📊 Rapport d'Expansion Mondiale Reussitess©

PAYS_PRIORITAIRES = [
    "France", "Angleterre", "Italie", "Allemagne", "Suède", 
    "Singapour", "Australie", "Espagne", "Brésil", "Royaume-Uni", 
    "Inde", "Nouvelle-Zélande", "États-Unis", "Canada"
]

def generer_rapport_visiteurs(nouveau_pays):
    if nouveau_pays not in PAYS_PRIORITAIRES:
        print(f"🌍 NOUVEAU MARCHÉ DÉTECTÉ : Un utilisateur de [{nouveau_pays}] vient de se connecter !")
        return True
    return False

if __name__ == "__main__":
    print("📈 Analyse des flux mondiaux en cours...")
    # Simulation de détection
    generer_rapport_visiteurs("Japon")
    generer_rapport_visiteurs("Mexique")
    print("\n✅ Rapport terminé. Reussitess© s'étend avec succès.")
