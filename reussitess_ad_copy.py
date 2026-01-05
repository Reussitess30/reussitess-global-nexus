# ==========================================================
# REUSSITESS© AUTO-AD GENERATOR - 195 LANGUES
# CIBLE : FRANCE, USA, CANADA, AUSTRALIE... (14 PAYS)
# ==========================================================
import random

def generate_ads():
    ads = [
        {
            "lang": "Français 🇫🇷",
            "text": "Découvrez la sélection exclusive Reussitess© ! Les meilleurs outils Tech testés par nos 100 IA.",
            "link": "https://www.amazon.fr/shop/amourguadeloupe"
        },
        {
            "lang": "English 🇺🇸/🇨🇦/🇦🇺",
            "text": "Upgrade your lifestyle with Reussitess© selection. Trusted AI-powered recommendations.",
            "link": "https://shop.reussitess.fr/"
        },
        {
            "lang": "Español 🇪🇸",
            "text": "¡Impulsa tu éxito con Reussitess©! Los productos más vendidos en Amazon seleccionados por IA.",
            "link": "https://www.amazon.fr/shop/amourguadeloupe"
        }
    ]
    
    print("📢 --- GÉNÉRATION DES POSTS SOCIAUX REUSSITESS© --- 📢\n")
    for ad in ads:
        print(f"🌐 Langue : {ad['lang']}")
        print(f"📝 Message : {ad['text']}")
        print(f"🔗 Clic : {ad['link']}")
        print("-" * 30)

if __name__ == "__main__":
    generate_ads()
