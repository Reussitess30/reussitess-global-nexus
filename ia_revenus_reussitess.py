# 💰 Reussitess© : Dashboard de Revenus Mondiaux
# Analyse des profits par zone géographique

DEVISES = {
    "France": "EUR", "Canada": "CAD", "Brésil": "BRL",
    "Japon": "JPY", "Mexique": "MXN", "États-Unis": "USD"
}

def generer_rapport_financier(pays, montant_local):
    devise = DEVISES.get(pays, "USD") # USD par défaut pour l'expansion
    
    # Simulation de conversion vers l'Euro (votre base)
    taux = {"JPY": 0.0065, "MXN": 0.054, "USD": 0.91, "EUR": 1.0, "BRL": 0.19}
    montant_eur = montant_local * taux.get(devise, 1.0)
    
    rapport = f"💸 [REVENU] Pays: {pays} | Montant: {montant_local} {devise} | TOTAL: {montant_eur:.2f}€"
    
    with open("REVENUS_REUSSITESS.txt", "a") as f:
        f.write(f"{rapport}\n")
    return rapport

if __name__ == "__main__":
    # Test de vente mondiale
    print(generer_rapport_financier("France", 150))
    print(generer_rapport_financier("Japon", 50000))
    print(generer_rapport_financier("Mexique", 2500))
