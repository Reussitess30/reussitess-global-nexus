#!/usr/bin/env python3
"""
Génère 100 articles SEO automatiquement
"""

TOPICS = [
    "histoire de la guadeloupe",
    "cuisine créole traditionnelle",
    "langue créole guadeloupéenne",
    "géographie des antilles",
    "culture martiniquaise",
    # ... 95+ autres sujets
]

for topic in TOPICS:
    # Utiliser ia_reponse_auto.py ou equivalent
    article = generate_article(
        topic=topic,
        length=1500,  # mots
        keywords=extract_keywords(topic),
        structure="H1 > 3xH2 > FAQs"
    )
    
    save_to_file(f"blog/{topic}.html", article)
    
print("✅ 100 articles générés !")
