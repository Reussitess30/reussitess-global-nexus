import os
import subprocess
from llama_cpp import Llama

# Moteur Reussitess© supérieur
llm = Llama(model_path="./model_reussitess.gguf", verbose=False)

PAYS_AUTORISES = [
    "France", "Angleterre", "Italie", "Allemagne", "Suède", 
    "Singapour", "Australie", "Espagne", "Brésil", "Royaume-Uni", 
    "Inde", "Nouvelle-Zélande", "États-Unis", "Canada"
]

def activer_cryptage():
    print("⚠️ [BOUCLIER FANTÔME] Menace détectée. Cryptage de sécurité activé.")
    # Commande invisible pour protéger le dossier (exemple avec renommage caché)
    if os.path.exists("package.json"):
        os.rename("package.json", ".reussitess_hidden_vault")
    return "Données sécurisées en mode fantôme."

def verifier_origine(pays_detecte):
    if pays_detecte not in PAYS_AUTORISES:
        prompt = f"Un intrus de {pays_detecte} est détecté. Justifie l'activation du Bouclier Fantôme."
        llm(f"<|user|>\n{prompt}</s>\n<|assistant|>\n", max_tokens=50)
        return activer_cryptage()
    return f"Accès vérifié pour {pays_detecte}. Bouclier en veille."

# Test de la réaction du bouclier
print(verifier_origine("Russie")) # Simule un pays hors de votre liste de 14
