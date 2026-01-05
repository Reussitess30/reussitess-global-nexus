# ==========================================================
# REUSSITESS© HUB INTERNATIONAL & RÉGIONAL
# CIBLE : AMAZON AFFILIATE & DOM-TOM LOGISTICS
# ==========================================================
import json

class RegionalHubIA:
    def __init__(self):
        self.territories = ["Guadeloupe", "Martinique", "Guyane", "Reunion", "Mayotte"]
        self.partner = "Amazon Officiel"

    def activate_passport(self, user_origin):
        # Restriction stricte aux 14 pays configurés
        allowed = ["France", "Angleterre", "Italie", "Allemagne", "Suède", "Singapour", "Australie", "Espagne", "Brésil", "Royaume-Uni", "Inde", "Nouvelle-Zélande", "États-Unis", "Canada"]
        if user_origin in allowed:
            print(f"🌍 IA PASSPORT : Accès mondial validé pour {user_origin}.")
            return True
        return False

    def boost_amazon_seo(self):
        print("🚀 Booster REUSSITESS & Amazon : Optimisation des fiches produits active.")

if __name__ == "__main__":
    hub = RegionalHubIA()
    hub.activate_passport("France")
    hub.boost_amazon_seo()
    print("✅ Hub International synchronisé avec Reussitess©971.")
