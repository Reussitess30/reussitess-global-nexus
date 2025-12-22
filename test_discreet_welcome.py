import requests

api_url = "https://reussitess-global-nexus-jfgk-r14s7gpkl-porinus-projects.vercel.app/api/messages.json"

print("--- 🤫 REUSSITESS® DISCREET PROTOCOL ---")
try:
    # On simule un bot qui pioche un message au hasard pour un pays
    response = requests.get(api_url)
    if response.status_code == 200:
        msg = response.json()['data']['Singapore']
        print(f"✅ Protocole discret validé pour Singapour :")
        print(f"🎙️ Bot : \"{msg}\"")
    else:
        print("❌ Murmure non détecté (Déploiement en cours)")
except:
    print("⚠️ Connexion sécurisée en attente.")
