import requests

# Lien direct vers votre fichier statique sur Vercel
api_url = "https://reussitess-global-nexus-jfgk-r14s7gpkl-porinus-projects.vercel.app/knowledge.json"

print("--- 🧠 REUSSITESS® DISCRETE KNOWLEDGE SCAN ---")
try:
    response = requests.get(api_url)
    if response.status_code == 200:
        data = response.json()
        print(f"✅ Accès Discret : RÉUSSI")
        print(f"💎 Coffre-fort : {data['vault']}")
        print(f"🌍 Réseau : {data['network']}")
        print(f"🛡️ Signature : {data['auth']}")
    else:
        print(f"❌ Statut : {response.status_code} - En attente de propagation...")
except Exception as e:
    print(f"⚠️ Erreur technique : {e}")

print("--- SCAN COMPLETE ---")
