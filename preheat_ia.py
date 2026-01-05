import requests
import time
import sys

URL = "https://www.reussitess.fr/"
HEADERS = {"Accept-Encoding": "br"}

print(f"Démarrage du Pre-heating pour Reussitess©...")
print("Objectif : Maintenir la latence sous 300ms (14 pays cibles).")

try:
    while True:
        start = time.time()
        response = requests.get(URL, headers=HEADERS, timeout=5)
        latency = (time.time() - start) * 1000
        
        # Affichage du statut en temps réel
        status = "OPTIMAL" if latency < 300 else "LATENCE"
        sys.stdout.write(f"\rIA Wake-up: {latency:.2f}ms | Statut: {status} | Code: {response.status_code}   ")
        sys.stdout.flush()
        
        # Pause de 15 secondes pour éviter de saturer le serveur
        time.sleep(15)
except KeyboardInterrupt:
    print("\nArrêt du programme de préchauffage.")
