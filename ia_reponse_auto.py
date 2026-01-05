import random

def reponse_automatique(pays_emetteur):
    print(f"📩 [IA-REPONSE] Requête entrante détectée depuis : {pays_emetteur}")
    
    # Signature Maître Reussitess©
    MASTER_ADDRESS = "0xB37531727fC07c6EED4f97F852A115B428046EB2"
    
    reponses = {
        "France": "Connexion établie. Positivité à l'infini activée. BOUDOUM !",
        "Belgique": "Succès Reussitess© confirmé. Bienvenue dans l'écosystème.",
        "Brésil": "Sucesso total. Reussitess© operando com força.",
        "Singapour": "Global Nexus Active. Security Protocol 0xB375 Verified.",
        "Canada": "Protocole Nord-Américain validé. Progrès en cours."
    }
    
    # Réponse par défaut pour les autres pays autorisés
    message = reponses.get(pays_emetteur, "Signal Reussitess© reçu. Autorisation Maître OK.")
    
    print(f"✍️ Signature : {MASTER_ADDRESS}")
    print(f"📢 Message envoyé : {message}")
    print("🏁 Statut : RÉPONDU (BOUDOUM)")

if __name__ == "__main__":
    # Test sur votre nouvelle zone : la Belgique
    reponse_automatique("Belgique")
