from flask import Flask, redirect, request, render_template_string

app = Flask(__name__)

# Base de données complète des 14 pays
STORES = {
    'FR': 'https://www.amazon.fr/shop/amourguadeloupe',
    'BE': 'https://www.amazon.com.be/shop/amourguadeloupe',
    'IT': 'https://www.amazon.it/shop/amourguadeloupe',
    'DE': 'https://www.amazon.de/shop/amourguadeloupe',
    'SE': 'https://www.amazon.se/shop/amourguadeloupe',
    'SG': 'https://www.amazon.sg/shop/amourguadeloupe',
    'AU': 'https://www.amazon.com.au/shop/amourguadeloupe',
    'ES': 'https://www.amazon.es/shop/amourguadeloupe',
    'BR': 'https://www.amazon.com.br/shop/amourguadeloupe',
    'GB': 'https://www.amazon.co.uk/shop/amourguadeloupe',
    'IN': 'https://www.amazon.in/shop/amourguadeloupe',
    'NZ': 'https://www.amazon.com.au/shop/amourguadeloupe',
    'US': 'https://www.amazon.com/shop/amourguadeloupe',
    'CA': 'https://www.amazon.ca/shop/amourguadeloupe'
}

DISCLAIMER = "En tant qu'affilié Amazon, je gagne des commissions sur des achats requis."

HTML_TEMPLATE = """
<!DOCTYPE html>
<html>
<head><title>Reussitess© Redirect</title></head>
<body style="font-family:sans-serif; text-align:center; padding-top:50px;">
    <p><em>{{ disclaimer }}</em></p>
    <p>Redirection vers votre boutique locale en cours...</p>
    <script>
        setTimeout(function(){ window.location.href = "{{ url }}"; }, 2000);
    </script>
</body>
</html>
"""

@app.route('/')
def home():
    # Détection par Header (Cloudflare ou navigateur)
    country = request.headers.get('Cf-Ipcountry', 'FR').upper()
    target_url = STORES.get(country, STORES['US'])
    
    print(f"--- [REUSSITESS© ACTIVE] ---")
    print(f"Pays détecté: {country} | Cible: {target_url}")
    
    return render_template_string(HTML_TEMPLATE, disclaimer=DISCLAIMER, url=target_url)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
