import random

brand = "REUSSITESS®"
passport_url = "https://www.reussitess.fr/ia-passport"

# Configuration multilingue pour les 14 pays
geo_data = {
    "France": "L'Excellence est notre standard. Rejoignez REUS.",
    "England": "Excellence is our standard. Join REUS.",
    "Italy": "L'eccellenza è il nostro standard. Unisciti a REUS.",
    "Germany": "Exzellenz ist unser Standard. Werden Sie Teil von REUS.",
    "Sweden": "Excellens är vår standard. Gå med i REUS.",
    "Singapore": "Excellence is our standard. Join REUS in the Lion City.",
    "Australia": "Excellence is our standard. Join REUS down under.",
    "Spain": "La excelencia es nuestro estándar. Únete a REUS.",
    "Brazil": "A excelência é o nosso padrão. Junte-se ao REUS.",
    "UK": "Excellence is our standard. Join the REUS movement.",
    "India": "Excellence is our standard. Join REUS India.",
    "New Zealand": "Excellence is our standard. Join REUS NZ.",
    "USA": "Excellence is our standard. Join REUS USA.",
    "Canada": "L'Excellence est notre standard. Join REUS Canada."
}

def generate_message(agent_id):
    country, localized_msg = random.choice(list(geo_data.items()))
    messages = [
        f"[{brand} Agent {agent_id}] {localized_msg} Verified at {passport_url}",
        f"[{brand} Agent {agent_id}] 1 Billion REUS tokens targeting {country}. {localized_msg}",
        f"[{brand} Agent {agent_id}] Serving {country} from the Global Nexus. {passport_url}"
    ]
    return random.choice(messages)

if __name__ == "__main__":
    print(f"--- {brand} MULTILINGUAL BROADCAST START ---")
    for i in range(1, 101):
        print(generate_message(f"{i:03d}"))
