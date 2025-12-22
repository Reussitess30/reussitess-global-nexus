import re

file_path = 'pages/index.js'
with open(file_path, 'r') as f:
    content = f.read()

# 1. On restaure le bloc Tech proprement
# 2. On ajoute le bouton Spécial REUSSITESS 971 juste après
replacement = '{ id: "Tech", title: "Tech", color: "from-blue-500 to-cyan-400" },\n    { id: "Excellence971", title: "🌴 REUSSITESS® 971", color: "from-orange-500 via-red-600 to-yellow-400" }'

# On remplace l'ancien bloc (même s'il est cassé) par le nouveau duo
content = re.sub(r'\{\s*id:\s*"Tech".*?\}', replacement, content)

with open(file_path, 'w') as f:
    f.write(content)
print("Index mis à jour avec le bouton REUSSITESS® 971")
