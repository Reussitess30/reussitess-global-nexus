import sys, io, os
p = 'pages/_app.js'
if not os.path.isfile(p):
    print("ERREUR: pages/_app.js introuvable. Vérifie le chemin et relance.")
    sys.exit(2)

bak = p + '.bak'
if not os.path.exists(bak):
    import shutil
    shutil.copy2(p, bak)
    print(f"Sauvegarde créée: {bak}")
else:
    print(f"Sauvegarde déjà présente: {bak}")

s = open(p, 'r', encoding='utf-8').read()

changed = False

# 1) Ajout de l'import StructuredData si absent
import_line = "import StructuredData from '../components/StructuredData'"
if "StructuredData" not in s:
    # Try to insert after the styles import or after the last import
    if "import '../styles/globals.css'" in s:
        s = s.replace("import '../styles/globals.css'", "import '../styles/globals.css'\\n" + import_line)
        changed = True
        print("Import injecté après import styles.")
    else:
        # fallback: inject at top after first import occurrence
        parts = s.splitlines()
        insert_at = 0
        for i,l in enumerate(parts):
            if l.strip().startswith("import "):
                insert_at = i+1
        parts.insert(insert_at, import_line)
        s = "\n".join(parts)
        changed = True
        print("Import StructuredData injecté après le premier import.")

# 2) Envelopper le rendu avec StructuredData si non présent
if "<StructuredData />" not in s:
    if "<Component {...pageProps} />" in s:
        s = s.replace("<Component {...pageProps} />", "<>\\n        <StructuredData />\\n        <Component {...pageProps} />\\n      </>")
        changed = True
        print("Rendu de la page enveloppé avec <StructuredData />.")
    else:
        print("Attention: '<Component {...pageProps} />' introuvable. Vérifie manuellement pages/_app.js.")

# 3) Eviter double-injection (détecter import mais pas variable)
# If StructuredData referenced but import missing we already injected, else nothing.

if changed:
    open(p, 'w', encoding='utf-8').write(s)
    print("Modifications appliquées à pages/_app.js")
else:
    print("Aucune modification nécessaire (StructuredData semble déjà présent).")

# Print a short preview for verification
print('\\n--- Aperçu (quelques lignes autour du rendu) ---\\n')
for i,line in enumerate(s.splitlines()):
    if 'StructuredData' in line or 'Component {...pageProps}' in line:
        start = max(0,i-3)
        end = min(len(s.splitlines()), i+4)
        for j in range(start,end):
            print(f"{j+1:04d}: {s.splitlines()[j]}")
        print('...')
