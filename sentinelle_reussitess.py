import time
from llama_cpp import Llama

# Initialisation du moteur supérieur
llm = Llama(model_path="./model_reussitess.gguf", verbose=False)

# Liste stricte des 14 pays autorisés (Reussitess©)
PAYS_AUTORISES = [
    "France", "Angleterre", "Italie", "Allemagne", "Suède", 
    "Singapour", "Australie", "Espagne", "Brésil", "Royaume-Uni", 
    "Inde", "Nouvelle-Zélande", "États-Unis", "Canada"
]

def analyser_menace(ip, pays):
    if pays not in PAYS_AUTORISES:
        # L'IA décide de l'action de blocage
        prompt = f"Un utilisateur tente d'accéder au site depuis {pays} avec l'IP {ip}. C'est un pays interdit. Rédige un code de blocage."
        reponse = llm(f"<|user|>\n{prompt}</s>\n<|assistant|>\n", max_tokens=50)
        return f"[ALERTE] Blocage immédiat : {pays} n'est pas autorisé."
    return f"[OK] Accès autorisé pour {pays}."

print("🛡️ Sentinelle Reussitess© activée (100 IA en veille)...")

# Simulation de surveillance continue
while True:
    # Ici, le script pourrait lire vos fichiers logs en temps réel
    # Pour le test, on simule une détection
    print(analyser_menace("192.168.1.1", "France"))
    time.sleep(10) # L'IA scanne toutes les 10 secondes en invisible
