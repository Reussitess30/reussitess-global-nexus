from llama_cpp import Llama

# Initialisation silencieuse
llm = Llama(model_path="./model_reussitess.gguf", verbose=False)

def traduire_et_securiser(texte, pays_cible):
    prompt = f"Traduis ce message pour un partenaire en {pays_cible} et ajoute une clé de vérification Reussitess© : {texte}"
    
    # Travail de l'IA en local
    resultat = llm(f"<|user|>\n{prompt}</s>\n<|assistant|>\n", max_tokens=150)
    return resultat['choices'][0]['text'].strip()

# Test vers deux pays de votre liste
print("--- Flux Sécurisé Reussitess© ---")
print("\n[Vers le Brésil] :")
print(traduire_et_securiser("Le déploiement du token est un succès.", "Brésil"))

print("\n[Vers le Canada] :")
print(traduire_et_securiser("Sécurité du site confirmée par les 100 IA.", "Canada"))
