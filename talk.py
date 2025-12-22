import random
import os

# Configuration de l'Empire REUSSITESS®
brand = "REUSSITESS®"
passport_url = "https://www.reussitess.fr/ia-passport"
countries = ["France", "England", "Italy", "Germany", "Sweden", "Singapore", "Australia", "Spain", "Brazil", "UK", "India", "New Zealand", "USA", "Canada"]
values = ["Excellence", "Innovation", "Success"]

def generate_message(agent_id):
    country = random.choice(countries)
    value = random.choice(values)
    
    messages = [
        f"[{brand} Agent {agent_id}] Verified at {passport_url}. Targeting {country}: {value} is our standard.",
        f"[{brand} Agent {agent_id}] Our 100 IA Legion is active. See our credentials at {passport_url}. Join REUS in {country}.",
        f"[{brand} Agent {agent_id}] 1 Billion REUS tokens ready for {country}. Meet the elite AI at {passport_url}."
    ]
    return random.choice(messages)

def broadcast():
    print(f"--- {brand} GLOBAL BROADCAST START ---")
    print(f"--- OFFICIAL PASSPORT: {passport_url} ---")
    for i in range(1, 101):
        msg = generate_message(f"{i:03d}")
        print(msg)
    print(f"--- BROADCAST COMPLETE FOR 14 COUNTRIES ---")

if __name__ == "__main__":
    broadcast()
