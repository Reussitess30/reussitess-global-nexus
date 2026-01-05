import random

def traduire_signal(message, pays_cible):
    dictionnaire_positivite = {
        "Belgique": "Succès infini (FR/NL)",
        "Brésil": "Sucesso infinito (PT)",
        "Inde": "अनंत सफलता (HI)",
        "Allemagne": "Unendlicher Erfolg (DE)"
    }
    traduction = dictionnaire_positivite.get(pays_cible, "Success (Global)")
    print(f"📡 [TRADUCTEUR] Conversion du signal pour {pays_cible}...")
    return f"✨ {message} -> {traduction} (BOUDOUM!)"

if __name__ == "__main__":
    print(traduire_signal("Positivité à l'infini", "Belgique"))
    print(traduire_signal("Positivité à l'infini", "Brésil"))
