# 🌑 Archiveur de Menaces Reussitess©
import os

def enregistrer_dans_dossier_noir(rapport):
    with open("DOSSIER_NOIR_IA.txt", "a") as f:
        f.write(f"\n--- FICHE INDIVIDU CIBLÉ ---\n{rapport}\n")
    print("📁 Données de l'intrus archivées dans le DOSSIER NOIR.")

if __name__ == "__main__":
    # Test d'archivage
    enregistrer_dans_dossier_noir("IP: 185.234.10.5 | Origine: Russie | Matériel: Linux/x86_64")
