import os
from llama_cpp import Llama

# Initialisation du moteur supérieur local
llm = Llama(model_path="./model_reussitess.gguf", verbose=False)

def scanner_fichier(nom_fichier):
    if not os.path.exists(nom_fichier):
        return f"Erreur : {nom_fichier} introuvable."
    
    print(f"🔎 Les 100 IA analysent {nom_fichier}...")
    with open(nom_fichier, 'r') as f:
        contenu = f.read()

    # L'IA cherche des vulnérabilités sans API externe
    prompt = f"Analyse ce code pour trouver des failles de sécurité ou des fonctions cachées : {contenu}"
    
    analyse = llm(f"<|user|>\n{prompt}</s>\n<|assistant|>\n", max_tokens=200)
    return analyse['choices'][0]['text'].strip()

# Scan du fichier package.json pour vérifier l'intégrité de Reussitess©
rapport = scanner_fichier("package.json")
print("\n[Rapport de Sécurité Reussitess©] :")
print(rapport)
