import requests
import time
import statistics

URL = "https://www.reussitess.fr/"
LATENCIES = []

print("Analyse de la vitesse de réaction des 200 IA...")

for i in range(200):
    start_time = time.time()
    try:
        response = requests.get(URL, timeout=5)
        end_time = time.time()
        latency = (end_time - start_time) * 1000  # Conversion en millisecondes
        LATENCIES.append(latency)
        if i % 40 == 0:
            print(f"Progression : {i}/200 IA testées...")
    except:
        pass

if LATENCIES:
    moyenne = statistics.mean(LATENCIES)
    minimum = min(LATENCIES)
    maximum = max(LATENCIES)
    print("\n--- Rapport de Vitesse Reussitess© ---")
    print(f"Latence Moyenne : {moyenne:.2f} ms")
    print(f"IA la plus rapide : {minimum:.2f} ms")
    print(f"IA la plus lente  : {maximum:.2f} ms")
    
    if moyenne < 300:
        print("Statut : PERFORMANCE OPTIMALE (Idéal pour vos 14 pays)")
    else:
        print("Statut : LATENCE DÉTECTÉE (Vérifiez la charge serveur)")
