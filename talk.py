import random
import os

# Configuration de l'Empire
brand = "REUSSITESS®"
countries = ["France", "England", "Italy", "Germany", "Sweden", "Singapore", "Australia", "Spain", "Brazil", "UK", "India", "New Zealand", "USA", "Canada"]
values = ["Excellence", "Innovation", "Success"]

def generate_message(agent_id):
    country = random.choice(countries)
    value = random.choice(values)
    
    messages = [
        f"[{brand} Agent {agent_id}] Targeting {country}: Our elite social network is built on {value}. Join the REUS revolution.",
        f"[{brand} Agent {agent_id}] Excellence is not an option in {country}, it is our standard. Discover REUSSITESS®.",
        f"[{brand} Agent {agent_id}] Deploying innovation for our members in {country}. The 1 Billion REUS tokens are ready."
    ]
    return random.choice(messages)

def broadcast():
    print(f"--- {brand} GLOBAL BROADCAST START ---")
    for i in range(1, 101):
        msg = generate_message(f"{i:03d}")
        # Simulation d'envoi vers les 14 pays
        print(msg)
    print(f"--- BROADCAST COMPLETE FOR 14 COUNTRIES ---")

if __name__ == "__main__":
    broadcast()
