#!/bin/bash

###########################################
# Script d'automatisation Play Store
# REUSSITESS® Global Nexus
# Déploiement automatique avec Bubblewrap
###########################################

set -e

# Couleurs pour l'affichage
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
APP_NAME="REUSSITESS Global Nexus"
PACKAGE_ID="fr.reussitess.globalnexus"
VERSION_CODE=1
VERSION_NAME="1.0"
THEME_COLOR="#1814f3"
BACKGROUND_COLOR="#ffffff"
START_URL="/"
LAUNCHER_NAME="REUSSITESS®"

# Variables d'environnement (à configurer)
CLOUD_RUN_URL="${CLOUD_RUN_URL:-https://reussitess-global-nexus-xxxxx.run.app}"
KEYSTORE_PASSWORD="${KEYSTORE_PASSWORD:-}"
KEY_ALIAS="${KEY_ALIAS:-reussitess-key}"

echo -e "${BLUE}╔════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║   📱 REUSSITESS® Play Store Deploy   ║${NC}"
echo -e "${BLUE}╔════════════════════════════════════════╗${NC}"
echo ""

###########################################
# Fonction : Vérifier les prérequis
###########################################
check_prerequisites() {
    echo -e "${YELLOW}🔍 Vérification des prérequis...${NC}"
    
    # Vérifier Node.js
    if ! command -v node &> /dev/null; then
        echo -e "${RED}❌ Node.js n'est pas installé${NC}"
        echo "Installez Node.js depuis https://nodejs.org/"
        exit 1
    fi
    echo -e "${GREEN}✓ Node.js: $(node --version)${NC}"
    
    # Vérifier npm
    if ! command -v npm &> /dev/null; then
        echo -e "${RED}❌ npm n'est pas installé${NC}"
        exit 1
    fi
    echo -e "${GREEN}✓ npm: $(npm --version)${NC}"
    
    # Vérifier Java
    if ! command -v java &> /dev/null; then
        echo -e "${RED}❌ Java n'est pas installé${NC}"
        echo "Installez Java JDK 8+ depuis https://adoptium.net/"
        exit 1
    fi
    echo -e "${GREEN}✓ Java: $(java -version 2>&1 | head -n 1)${NC}"
    
    # Vérifier Bubblewrap
    if ! command -v bubblewrap &> /dev/null; then
        echo -e "${YELLOW}⚠️  Bubblewrap n'est pas installé${NC}"
        echo -e "${BLUE}📦 Installation de Bubblewrap CLI...${NC}"
        npm install -g @bubblewrap/cli
        echo -e "${GREEN}✓ Bubblewrap installé${NC}"
    else
        echo -e "${GREEN}✓ Bubblewrap: $(bubblewrap --version)${NC}"
    fi
    
    echo ""
}

###########################################
# Fonction : Configurer l'URL Cloud Run
###########################################
configure_cloud_run_url() {
    if [[ "$CLOUD_RUN_URL" == *"xxxxx"* ]]; then
        echo -e "${YELLOW}📝 Configuration de l'URL Cloud Run${NC}"
        echo -e "${BLUE}Entrez l'URL de votre PWA déployée sur Cloud Run:${NC}"
        echo -e "${BLUE}(Format: https://reussitess-global-nexus-[ID].run.app)${NC}"
        read -p "URL Cloud Run: " CLOUD_RUN_URL
        
        if [[ ! "$CLOUD_RUN_URL" =~ ^https:// ]]; then
            echo -e "${RED}❌ L'URL doit commencer par https://${NC}"
            exit 1
        fi
        
        echo -e "${GREEN}✓ URL configurée: $CLOUD_RUN_URL${NC}"
    fi
    echo ""
}

###########################################
# Fonction : Créer le dossier TWA
###########################################
create_twa_directory() {
    echo -e "${YELLOW}📁 Création du dossier TWA...${NC}"
    
    if [ -d "twa-project" ]; then
        echo -e "${YELLOW}⚠️  Le dossier twa-project existe déjà${NC}"
        read -p "Voulez-vous le supprimer et recommencer? (y/n): " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            rm -rf twa-project
            echo -e "${GREEN}✓ Dossier supprimé${NC}"
        else
            echo -e "${BLUE}→ Utilisation du dossier existant${NC}"
            cd twa-project
            return
        fi
    fi
    
    mkdir -p twa-project
    cd twa-project
    echo -e "${GREEN}✓ Dossier créé: twa-project${NC}"
    echo ""
}

###########################################
# Fonction : Initialiser le projet TWA
###########################################
initialize_twa() {
    echo -e "${YELLOW}🚀 Initialisation du projet TWA...${NC}"
    
    # Créer le fichier de configuration automatique
    cat > twa-manifest.json <<EOF
{
  "packageId": "$PACKAGE_ID",
  "host": "${CLOUD_RUN_URL#https://}",
  "name": "$APP_NAME",
  "launcherName": "$LAUNCHER_NAME",
  "display": "standalone",
  "themeColor": "$THEME_COLOR",
  "backgroundColor": "$BACKGROUND_COLOR",
  "startUrl": "$START_URL",
  "iconUrl": "$CLOUD_RUN_URL/icon-512x512.png",
  "maskableIconUrl": "$CLOUD_RUN_URL/icon-512x512.png",
  "splashScreenFadeOutDuration": 300,
  "signingKey": {
    "path": "./android.keystore",
    "alias": "$KEY_ALIAS"
  },
  "appVersionName": "$VERSION_NAME",
  "appVersionCode": $VERSION_CODE,
  "shortcuts": [],
  "generatorApp": "bubblewrap-cli",
  "webManifestUrl": "$CLOUD_RUN_URL/manifest.json",
  "fallbackType": "customtabs",
  "enableNotifications": true,
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
  }
}
EOF
    
    echo -e "${GREEN}✓ Fichier twa-manifest.json créé${NC}"
    echo ""
}

###########################################
# Fonction : Générer la clé de signature
###########################################
generate_signing_key() {
    if [ -f "android.keystore" ]; then
        echo -e "${GREEN}✓ Clé de signature existante trouvée${NC}"
        return
    fi
    
    echo -e "${YELLOW}🔑 Génération de la clé de signature...${NC}"
    
    if [ -z "$KEYSTORE_PASSWORD" ]; then
        echo -e "${BLUE}Entrez un mot de passe pour la clé (min 6 caractères):${NC}"
        read -s KEYSTORE_PASSWORD
        echo ""
    fi
    
    # Générer la clé avec keytool
    keytool -genkey -v -keystore android.keystore -alias "$KEY_ALIAS" \
        -keyalg RSA -keysize 2048 -validity 10000 \
        -storepass "$KEYSTORE_PASSWORD" -keypass "$KEYSTORE_PASSWORD" \
        -dname "CN=REUSSITESS, OU=REUSSITESS Global, O=REUSSITESS, L=Paris, ST=Ile-de-France, C=FR"
    
    echo -e "${GREEN}✓ Clé de signature générée${NC}"
    echo -e "${RED}⚠️  IMPORTANT: Sauvegardez android.keystore et le mot de passe!${NC}"
    echo ""
}

###########################################
# Fonction : Build de l'application
###########################################
build_app() {
    echo -e "${YELLOW}🏗️  Build de l'application Android...${NC}"
    
    # Initialiser le projet si nécessaire
    if [ ! -d "app" ]; then
        echo -e "${BLUE}→ Initialisation Bubblewrap...${NC}"
        bubblewrap init --manifest "$CLOUD_RUN_URL/manifest.json" --skipPwaValidation || true
    fi
    
    # Build
    echo -e "${BLUE}→ Compilation en cours (3-10 minutes)...${NC}"
    bubblewrap build --skipPwaValidation
    
    if [ -f "app-release-signed.aab" ]; then
        echo -e "${GREEN}✓ Build réussi: app-release-signed.aab${NC}"
    else
        echo -e "${RED}❌ Erreur lors du build${NC}"
        exit 1
    fi
    echo ""
}

###########################################
# Fonction : Générer assetlinks.json
###########################################
generate_assetlinks() {
    echo -e "${YELLOW}🔗 Génération du fichier assetlinks.json...${NC}"
    
    # Extraire le SHA-256 de la clé
    SHA256=$(keytool -list -v -keystore android.keystore -alias "$KEY_ALIAS" -storepass "$KEYSTORE_PASSWORD" 2>/dev/null | grep "SHA256:" | cut -d ' ' -f 3)
    
    if [ -z "$SHA256" ]; then
        echo -e "${RED}❌ Impossible d'extraire le SHA-256${NC}"
        return
    fi
    
    # Créer le dossier .well-known dans le projet
    mkdir -p ../public/.well-known
    
    # Générer assetlinks.json
    cat > ../public/.well-known/assetlinks.json <<EOF
[{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target": {
    "namespace": "android_app",
    "package_name": "$PACKAGE_ID",
    "sha256_cert_fingerprints": ["$SHA256"]
  }
}]
EOF
    
    echo -e "${GREEN}✓ Fichier assetlinks.json créé${NC}"
    echo -e "${BLUE}SHA-256: $SHA256${NC}"
    echo -e "${YELLOW}⚠️  Déployez ce fichier sur: $CLOUD_RUN_URL/.well-known/assetlinks.json${NC}"
    echo ""
}

###########################################
# Fonction : Afficher les instructions finales
###########################################
show_final_instructions() {
    echo -e "${GREEN}╔════════════════════════════════════════╗${NC}"
    echo -e "${GREEN}║         ✅ BUILD TERMINÉ !            ║${NC}"
    echo -e "${GREEN}╔════════════════════════════════════════╗${NC}"
    echo ""
    
    echo -e "${BLUE}📦 Fichier généré:${NC}"
    echo -e "   ${GREEN}twa-project/app-release-signed.aab${NC}"
    echo ""
    
    echo -e "${BLUE}📋 Prochaines étapes:${NC}"
    echo ""
    echo -e "${YELLOW}1. Déployez assetlinks.json${NC}"
    echo -e "   Copiez ${GREEN}public/.well-known/assetlinks.json${NC}"
    echo -e "   Accessible sur: ${BLUE}$CLOUD_RUN_URL/.well-known/assetlinks.json${NC}"
    echo ""
    
    echo -e "${YELLOW}2. Connectez-vous à Play Console${NC}"
    echo -e "   ${BLUE}https://play.google.com/console${NC}"
    echo ""
    
    echo -e "${YELLOW}3. Créez une nouvelle application${NC}"
    echo -e "   Nom: ${GREEN}$APP_NAME${NC}"
    echo -e "   Package: ${GREEN}$PACKAGE_ID${NC}"
    echo ""
    
    echo -e "${YELLOW}4. Uploadez l'AAB${NC}"
    echo -e "   Production → Nouvelle version → Upload AAB"
    echo -e "   Fichier: ${GREEN}$(pwd)/app-release-signed.aab${NC}"
    echo ""
    
    echo -e "${YELLOW}5. Remplissez les informations${NC}"
    echo -e "   - Description (français)"
    echo -e "   - Screenshots (2 minimum)"
    echo -e "   - Icône 512x512"
    echo -e "   - Image de présentation 1024x500"
    echo ""
    
    echo -e "${YELLOW}6. Soumettez pour révision${NC}"
    echo -e "   Délai: ${BLUE}2-7 jours${NC}"
    echo ""
    
    echo -e "${RED}⚠️  IMPORTANT - Sauvegardez:${NC}"
    echo -e "   - ${GREEN}android.keystore${NC} (clé de signature)"
    echo -e "   - Mot de passe de la clé"
    echo -e "   - Ces fichiers sont nécessaires pour les mises à jour"
    echo ""
    
    echo -e "${BLUE}📊 Infos application:${NC}"
    echo -e "   URL PWA: ${GREEN}$CLOUD_RUN_URL${NC}"
    echo -e "   Package ID: ${GREEN}$PACKAGE_ID${NC}"
    echo -e "   Version: ${GREEN}$VERSION_NAME ($VERSION_CODE)${NC}"
    echo ""
    
    echo -e "${GREEN}🎉 Prêt pour le Play Store !${NC}"
    echo ""
}

###########################################
# Fonction : Menu interactif
###########################################
interactive_menu() {
    echo -e "${BLUE}Mode: Interactif${NC}"
    echo ""
    
    PS3="Sélectionnez une option: "
    options=("Build complet (automatique)" "Build manuel étape par étape" "Générer uniquement assetlinks.json" "Quitter")
    
    select opt in "${options[@]}"
    do
        case $opt in
            "Build complet (automatique)")
                return 0
                ;;
            "Build manuel étape par étape")
                return 1
                ;;
            "Générer uniquement assetlinks.json")
                cd twa-project 2>/dev/null || create_twa_directory
                generate_assetlinks
                exit 0
                ;;
            "Quitter")
                exit 0
                ;;
            *) echo "Option invalide";;
        esac
    done
}

###########################################
# SCRIPT PRINCIPAL
###########################################
main() {
    # Vérifier les prérequis
    check_prerequisites
    
    # Configurer l'URL Cloud Run
    configure_cloud_run_url
    
    # Menu interactif ou automatique
    if [ "$1" != "--auto" ]; then
        if ! interactive_menu; then
            echo -e "${BLUE}Mode manuel activé${NC}"
            create_twa_directory
            initialize_twa
            
            echo -e "${YELLOW}Voulez-vous générer une nouvelle clé? (y/n)${NC}"
            read -p "> " -n 1 -r
            echo
            if [[ $REPLY =~ ^[Yy]$ ]]; then
                generate_signing_key
            fi
            
            echo -e "${YELLOW}Lancer le build? (y/n)${NC}"
            read -p "> " -n 1 -r
            echo
            if [[ $REPLY =~ ^[Yy]$ ]]; then
                build_app
            fi
            
            echo -e "${YELLOW}Générer assetlinks.json? (y/n)${NC}"
            read -p "> " -n 1 -r
            echo
            if [[ $REPLY =~ ^[Yy]$ ]]; then
                generate_assetlinks
            fi
            
            show_final_instructions
            return
        fi
    fi
    
    # Mode automatique
    echo -e "${GREEN}→ Mode automatique${NC}"
    create_twa_directory
    initialize_twa
    generate_signing_key
    build_app
    generate_assetlinks
    show_final_instructions
}

# Exécution
main "$@"
