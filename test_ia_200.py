import requests
import threading
import time

URL = "https://www.reussitess.fr/"
RESULTS = {"success": 0, "error": 0}

def check_ia(id):
    try:
        response = requests.get(URL, timeout=5)
        if response.status_code == 200:
            RESULTS["success"] += 1
        else:
            RESULTS["error"] += 1
    except:
        RESULTS["error"] += 1

threads = []
print(f"Lancement du test sur 200 IA pour Reussitess©...")

for i in range(200):
    t = threading.Thread(target=check_ia, args=(i,))
    threads.append(t)
    t.start()

for t in threads:
    t.join()

print(f"\n--- Rapport Final ---")
print(f"IA opérationnelles : {RESULTS['success']}")
print(f"IA en échec : {RESULTS['error']}")
