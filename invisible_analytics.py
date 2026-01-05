#!/usr/bin/env python3
import json
from datetime import datetime

def log_data():
    data = {"project": "REUSSITESS©", "supply": "1,000,000,000", "ping": datetime.now().isoformat()}
    with open(".analytics_data.json", "w") as f:
        json.dump(data, f, indent=2)
    print("📊 Analytics: Données sauvegardées.")

if __name__ == "__main__":
    log_data()
