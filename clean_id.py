import re

file_path = 'pages/quiz/[id].js'
with open(file_path, 'r') as f:
    content = f.read()

# 1. On nettoie les imports en double (on enlève tout Excellence971 pour le remettre proprement)
content = re.sub(r'import Excellence971 from "../../public/reussitess971_v2/quiz_Excellence971.js";\n', '', content)
content = 'import Excellence971 from "../../public/reussitess971_v2/quiz_Excellence971.js";\n' + content

# 2. On nettoie l'objet quizData pour éviter les répétitions
if 'Excellence971: Excellence971,' in content:
    content = content.replace('Excellence971: Excellence971,\n', '')

content = content.replace('const quizData = {', 'const quizData = {\n  Excellence971: Excellence971,')

# 3. Supprimer les éventuelles lignes vides en trop créées par les erreurs précédentes
content = re.sub(r'\n\s*\n', '\n', content)

with open(file_path, 'w') as f:
    f.write(content)
print("Fichier [id].js nettoyé et prêt pour le build.")
