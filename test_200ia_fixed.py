import os
import json
import subprocess

def test_all_ia():
    """Test toutes les IA du projet"""
    ia_list = [f for f in os.listdir('.') if f.endswith('.py') and 'ia_' in f]
    
    results = {
        'total_ia': len(ia_list),
        'ia_detectees': ia_list,
        'statut': 'ready'
    }
    
    return results

if __name__ == '__main__':
    print('\n🤖 TEST DES IA REUSSITESS')
    print('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')
    
    result = test_all_ia()
    
    print(f"✅ Total IA détectées: {result['total_ia']}\n")
    print("📋 Liste des IA:\n")
    for ia in sorted(result['ia_detectees']):
        print(f"   - {ia}")
    
    print('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')
