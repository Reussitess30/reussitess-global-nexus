# 📱 Guide de Publication Play Store - REUSSITESS®

## Option 2 : Déploiement avec Bubblewrap CLI

### 📋 Prérequis

1. **Node.js et npm** installés
2. **Java JDK 8+** installé
3. **Compte Google Play Developer** (25$ une fois)
4. **URL de production** de votre PWA (après déploiement Cloud Run)

### 🚀 Étape 1 : Installation de Bubblewrap

```bash
npm install -g @bubblewrap/cli
```

Vérifiez l'installation :
```bash
bubblewrap --version
```

### 🔧 Étape 2 : Initialisation du projet TWA

Une fois votre PWA déployée sur Cloud Run, exécutez :

```bash
bubblewrap init --manifest https://reussitess-global-nexus-[VOTRE-ID].run.app/manifest.json
```

**Répondez aux questions :**

- **Application ID** : `fr.reussitess.globalnexus`
- **Application Name** : `REUSSITESS Global Nexus`
- **Version Code** : `1`
- **Version Name** : `1.0`
- **Host** : `reussitess-global-nexus-[VOTRE-ID].run.app`
- **Start URL** : `/`
- **Theme Color** : `#1814f3`
- **Background Color** : `#ffffff`
- **Icon URL** : Utilisez l'icône générée automatiquement
- **Maskable Icon** : Oui
- **Signing Key** : Générer une nouvelle clé

### 🔑 Étape 3 : Génération de la clé de signature

Bubblewrap vous demandera de créer une clé de signature :

```
Key Alias: reussitess-key
Key Password: [Créez un mot de passe sécurisé]
Store Password: [Même mot de passe ou différent]
First and Last Name: Votre Nom
Organizational Unit: REUSSITESS
Organization: REUSSITESS Global Nexus
City/Locality: Votre Ville
State/Province: Votre Région
Country Code: FR
```

**⚠️ IMPORTANT** : Sauvegardez précieusement :
- Le fichier `.keystore` généré
- Le mot de passe de la clé
- Ces informations sont nécessaires pour TOUTES les futures mises à jour

### 🏗️ Étape 4 : Configuration du projet

Le fichier `twa-manifest.json` sera créé. Vérifiez les paramètres :

```json
{
  "packageId": "fr.reussitess.globalnexus",
  "host": "reussitess-global-nexus-[VOTRE-ID].run.app",
  "name": "REUSSITESS Global Nexus",
  "launcherName": "REUSSITESS®",
  "display": "standalone",
  "themeColor": "#1814f3",
  "backgroundColor": "#ffffff",
  "startUrl": "/",
  "iconUrl": "https://reussitess-global-nexus-[VOTRE-ID].run.app/icon-512x512.png",
  "maskableIconUrl": "https://reussitess-global-nexus-[VOTRE-ID].run.app/icon-512x512.png",
  "splashScreenFadeOutDuration": 300,
  "signingKey": {
    "path": "./android.keystore",
    "alias": "reussitess-key"
  },
  "appVersionName": "1.0",
  "appVersionCode": 1,
  "shortcuts": [],
  "generatorApp": "bubblewrap-cli",
  "webManifestUrl": "https://reussitess-global-nexus-[VOTRE-ID].run.app/manifest.json",
  "fallbackType": "customtabs",
  "features": {
    "locationDelegation": {
      "enabled": false
    },
    "playBilling": {
      "enabled": false
    }
  },
  "alphaDependencies": {
    "enabled": false
  },
  "enableNotifications": true
}
```

### 📦 Étape 5 : Build de l'application

```bash
bubblewrap build
```

Cette commande va :
1. Télécharger les dépendances Android nécessaires
2. Générer le projet Android
3. Compiler l'application
4. Signer l'APK/AAB avec votre clé
5. Générer `app-release-signed.aab`

**Durée** : 3-10 minutes selon votre machine

### 🔍 Étape 6 : Vérification de l'assetlinks.json

Bubblewrap génère automatiquement le SHA-256 de votre clé. Vous devez ajouter ce fichier à votre domaine :

**Créez** `/home/runner/work/reussitess-global-nexus/reussitess-global-nexus/public/.well-known/assetlinks.json` :

```json
[{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target": {
    "namespace": "android_app",
    "package_name": "fr.reussitess.globalnexus",
    "sha256_cert_fingerprints": ["VOTRE_SHA256_ICI"]
  }
}]
```

Le SHA-256 sera affiché dans le terminal après le build. Il ressemble à :
```
XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX
```

**Déployez ce fichier** pour que votre PWA soit accessible via :
```
https://reussitess-global-nexus-[VOTRE-ID].run.app/.well-known/assetlinks.json
```

### 📤 Étape 7 : Publication sur Google Play Console

1. **Connectez-vous** : https://play.google.com/console
2. **Créez une application** :
   - Nom : `REUSSITESS Global Nexus`
   - Langue par défaut : Français
   - App ou Jeu : Application
   - Gratuite ou Payante : Gratuite

3. **Téléchargez l'AAB** :
   - Production → Créer une version
   - Uploadez `app-release-signed.aab`

4. **Remplissez les informations** :
   - Description courte (80 caractères max)
   - Description complète (4000 caractères max)
   - Screenshots (minimum 2) :
     - Téléphone : 1080x1920 ou 1080x2340
     - Tablette 7" : 1024x600
     - Tablette 10" : 1280x800
   - Icône haute résolution : 512x512 PNG
   - Image de présentation : 1024x500

5. **Catégories** :
   - Catégorie : Commerce
   - Tags : E-commerce, Shopping, Amazon, Multilingue

6. **Coordonnées** :
   - Email : influenceur@reussitess.fr
   - Site web : https://reussitess-global-nexus-[VOTRE-ID].run.app
   - Politique de confidentialité : https://reussitess-global-nexus-[VOTRE-ID].run.app/mentions-legales

7. **Questionnaire de contenu** :
   - Répondez aux questions sur le contenu de l'app
   - Pas de contenu sensible
   - Pas d'achat in-app
   - Ads : Non (sauf si affiliations Amazon comptent)

8. **Classification du contenu** :
   - Tout public
   - Pas de violence, sexe, drogue, etc.

9. **Tarification et distribution** :
   - Gratuit
   - Pays : Tous (ou sélectionnez 14 pays Amazon)
   - Consentement programme famille : Non (e-commerce)

10. **Soumettez pour révision** :
    - Vérifiez tous les points verts
    - Cliquez "Envoyer pour révision"

### ⏱️ Étape 8 : Attente de validation

- **Durée** : 2-7 jours
- **Statut** : Consultable dans Play Console
- **Notifications** : Par email

### 🔄 Mises à jour futures

Pour publier une mise à jour :

1. **Modifiez** `twa-manifest.json` :
   ```json
   "appVersionCode": 2,
   "appVersionName": "1.1"
   ```

2. **Rebuild** :
   ```bash
   bubblewrap build
   ```

3. **Uploadez** le nouveau AAB sur Play Console

### 📊 Après publication

- **URL Play Store** : `https://play.google.com/store/apps/details?id=fr.reussitess.globalnexus`
- **Tracking** : Utilisez Google Play Console pour les statistiques
- **Avis** : Répondez aux commentaires utilisateurs

### 🆘 Dépannage

**Erreur "assetlinks.json not found"** :
- Vérifiez que le fichier est bien accessible publiquement
- URL correcte : `https://[VOTRE-DOMAINE]/.well-known/assetlinks.json`

**Erreur de signature** :
- Utilisez toujours la même clé .keystore
- Vérifiez les mots de passe

**Build échoue** :
- Vérifiez Java JDK 8+
- Essayez : `bubblewrap doctor`

**PWA non chargée** :
- Vérifiez que HTTPS fonctionne
- Service Worker doit être actif
- Manifest.json accessible

### 📞 Support

- **Bubblewrap** : https://github.com/GoogleChromeLabs/bubblewrap
- **Play Console** : https://support.google.com/googleplay/android-developer
- **REUSSITESS** : influenceur@reussitess.fr

---

## ✅ Checklist finale

- [ ] PWA déployée sur Cloud Run avec HTTPS
- [ ] Bubblewrap installé
- [ ] Projet TWA initialisé
- [ ] Clé de signature créée et sauvegardée
- [ ] AAB généré avec succès
- [ ] assetlinks.json déployé
- [ ] Compte Google Play Developer actif
- [ ] Screenshots préparés (2+ images)
- [ ] Descriptions rédigées
- [ ] Politique de confidentialité accessible
- [ ] AAB uploadé sur Play Console
- [ ] Tous les champs Play Console remplis
- [ ] Soumis pour révision

**🎉 Félicitations ! Votre PWA sera bientôt sur le Play Store !**
