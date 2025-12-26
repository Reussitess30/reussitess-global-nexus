# ⏱️ Chronomètre de Diversion Reussitess©
# Mesure du temps gaspillé par les pirates

import time

def calculer_temps_perdu(nom_intrus, secondes_passees):
    minutes = secondes_passees / 60
    rapport = f"⏳ [TEMPS PERDU] L'intrus {nom_intrus} a gaspillé {minutes:.2f} minutes sur le faux serveur."
    
    with open("DOSSIER_NOIR_IA.txt", "a") as f:
        f.write(f"{rapport}\n")
    
    return rapport

if __name__ == "__main__":
    # Simulation : Un pirate reste 180 secondes (3 minutes)
    print(calculer_temps_perdu("Pirate_Nord_Coreen", 180))
