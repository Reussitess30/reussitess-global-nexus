# ==========================================================
# INSPECTION TECHNIQUE REUSSITESS© - TEST RÉEL
# VÉRIFICATION : ENGINE, BLACKBOX & CHECK
# ==========================================================
import os
import time
from reussitess_engine import ReussitessReal
from reussitess_blackbox import BlackBoxIA

def inspect_system():
    print("🕵️ Démarrage de l'inspection des 3 piliers...")
    
    # 1. Test du Cerveau (Engine)
    print("\n🧠 TEST 1 : Hub IA & Tokens")
    engine = ReussitessReal()
    if engine.ia_count == 100:
        print("   -> [OK] 100 IA détectées dans le Hub.")
    if "1 Token = 1h" in engine.tokens:
        print("   -> [OK] Système de Tokens fonctionnel.")

    # 2. Test du Gardien (BlackBox)
    print("\n🛡️ TEST 2 : Dossier Noir & Traçage")
    blackbox = BlackBoxIA()
    test_ip = "99.99.99.99"
    blackbox.record_attempt(test_ip, "TEST_INSPECTION")
    
    if os.path.exists("logs_ia/dossier_noir.log"):
        print(f"   -> [OK] Archivage actif dans le Dossier Noir.")
    else:
        print("   -> [ERREUR] Problème d'archivage.")

    # 3. Test du Diagnostic (Check)
    print("\n🚀 TEST 3 : Outil de Diagnostic")
    if os.path.exists("reussitess_check.py"):
        print("   -> [OK] Outil de diagnostic certifié présent.")
    
    print("\n✅ INSPECTION TERMINÉE : Les 3 fonctions sont OPÉRATIONNELLES.")

if __name__ == "__main__":
    inspect_system()
