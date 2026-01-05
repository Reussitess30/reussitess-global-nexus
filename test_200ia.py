import subprocess
import json

def test_all_ia():
    # Liste des IA critiques à tester
    ia_list = [f for f in os.listdir('.') if f.endswith('.py') and 'ia_' in f]
    results = {}
    for ia in ia_list:
        try:
            # Test basique d'import
            result = subprocess.run(['python3', '-c', f'import {ia[:-3]}'], 
                                   capture_output=True, timeout=5)
            results[ia] = "✓" if result.returncode == 0 else "✗"
        except:
            results[ia] = "✗"
    return results

print(json.dumps(test_all_ia(), indent=2))
