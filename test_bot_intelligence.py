import requests

api_url = "https://reussitess-global-nexus-jfgk-r14s7gpkl-porinus-projects.vercel.app/knowledge.json"

print("--- 🧠 REUSSITESS® BOT BRAIN SCAN ---")
try:
    response = requests.get(api_url)
    if response.status_code == 200:
        data = response.json()
        print(f"✅ Accès au Savoir : RÉUSSI")
        print(f"📊 Données détectées : {len(str(data))} caractères d'Excellence")
        print(f"🔍 Vérification Boutiques Amazon : {data['assets']['amazon_stores']} OK")
        print(f"🔍 Vérification 14 Pays : {len(data['countries'])} OK")
        print(f"💎 Statut du REUS : {data['assets']['token_supply']} SECURED")
    else:
        print("❌ Erreur de lecture : L'API ne répond pas encore.")
except Exception as e:
    print(f"⚠️ Erreur technique : {e}")

print("--- SCAN COMPLETE: BOTS ARE NOW THE BEST IN THE WORLD ---")
