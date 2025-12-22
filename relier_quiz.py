import os

file_path = 'pages/quiz/[id].js'
if os.path.exists(file_path):
    with open(file_path, 'r') as f:
        lines = f.readlines()

    new_lines = []
    import_added = False
    
    for line in lines:
        # 1. On ajoute l'importation au début du fichier
        if 'import' in line and not import_added:
            new_lines.append('import Excellence971 from "../../public/reussitess971_v2/quiz_Excellence971.js";\n')
            import_added = True
        
        # 2. On lie l'ID au fichier dans l'objet quizData
        if 'const quizData = {' in line:
            new_lines.append(line)
            new_lines.append('  Excellence971: Excellence971,\n')
            continue
        
        new_lines.append(line)

    with open(file_path, 'w') as f:
        f.writelines(new_lines)
    print("Liaison réussie : Le bouton est maintenant relié au dossier v2.")
else:
    print("Erreur : Fichier [id].js non trouvé.")
