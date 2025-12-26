# 📩 IA de Réponse Automatique Reussitess©
# Support client mondial 24/7

REPONSES_TYPES = {
    "Japon": "Reussitess©へお問い合わせいただきありがとうございます。担当者がすぐにご連絡いたします。",
    "Mexique": "Gracias por contactar a Reussitess©. Un asesor se pondrá en contacto con usted pronto.",
    "France": "Merci d'avoir contacté Reussitess©. Un conseiller reviendra vers vous rapidement."
}

def generer_reponse_auto(langue_detectee):
    reponse = REPONSES_TYPES.get(langue_detectee, REPONSES_TYPES["France"])
    return f"🤖 [IA REUSSITESS©] : {reponse}"

if __name__ == "__main__":
    # Test de réponse pour un client Japonais
    print(generer_reponse_auto("Japon"))
