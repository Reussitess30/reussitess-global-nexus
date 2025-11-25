#!/bin/bash

################################################################################
# SCRIPT DE TEST AUTOMATIQUE - SCORE 100%
# Vérifie toutes les fonctionnalités implémentées
################################################################################

set -e

# Couleurs
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m'

PASSED=0
FAILED=0
TOTAL=0

# Fonction de test
test_check() {
    TOTAL=$((TOTAL + 1))
    if [ $1 -eq 0 ]; then
        echo -e "${GREEN}✅ PASS${NC} - $2"
        PASSED=$((PASSED + 1))
    else
        echo -e "${RED}❌ FAIL${NC} - $2"
        FAILED=$((FAILED + 1))
    fi
}

echo -e "${PURPLE}═══════════════════════════════════════════════════════════${NC}"
echo -e "${PURPLE}  TEST AUTOMATIQUE - VÉRIFICATION SCORE 100%${NC}"
echo -e "${PURPLE}═══════════════════════════════════════════════════════════${NC}\n"

# TEST 1: Vérifier la structure du projet
echo -e "${BLUE}📁 TEST 1: Structure du Projet${NC}"
test_check "$([ -f 'package.json' ] && echo 0 || echo 1)" "package.json existe"
test_check "$([ -d 'components' ] && echo 0 || echo 1)" "Répertoire components existe"
test_check "$([ -d 'pages' ] && echo 0 || echo 1)" "Répertoire pages existe"
test_check "$([ -d 'public' ] && echo 0 || echo 1)" "Répertoire public existe"
echo ""

# TEST 2: Vérifier les composants créés
echo -e "${BLUE}🤖 TEST 2: Composants React${NC}"
test_check "$([ -f 'components/ChatbotReussitess.jsx' ] && echo 0 || echo 1)" "ChatbotReussitess.jsx existe"
test_check "$([ -f 'components/AmazonDisclaimer.jsx' ] && echo 0 || echo 1)" "AmazonDisclaimer.jsx existe"
test_check "$([ -f 'components/AntiCopyProtection.js' ] && echo 0 || echo 1)" "AntiCopyProtection.js existe"

# Vérifier la taille des composants
CHATBOT_SIZE=$(wc -c < components/ChatbotReussitess.jsx 2>/dev/null || echo 0)
test_check "$([ $CHATBOT_SIZE -gt 10000 ] && echo 0 || echo 1)" "ChatbotReussitess.jsx taille > 10KB"

DISCLAIMER_SIZE=$(wc -c < components/AmazonDisclaimer.jsx 2>/dev/null || echo 0)
test_check "$([ $DISCLAIMER_SIZE -gt 1000 ] && echo 0 || echo 1)" "AmazonDisclaimer.jsx taille > 1KB"
echo ""

# TEST 3: Vérifier la configuration
echo -e "${BLUE}⚙️  TEST 3: Configuration${NC}"
test_check "$([ -f 'next.config.js' ] && echo 0 || echo 1)" "next.config.js existe"
test_check "$(grep -q 'Strict-Transport-Security' next.config.js && echo 0 || echo 1)" "HSTS configuré"
test_check "$(grep -q 'X-Frame-Options' next.config.js && echo 0 || echo 1)" "X-Frame-Options configuré"
test_check "$(grep -q 'Content-Security-Policy' next.config.js && echo 0 || echo 1)" "CSP configuré"
test_check "$(grep -q 'X-XSS-Protection' next.config.js && echo 0 || echo 1)" "XSS Protection configuré"
echo ""

# TEST 4: Vérifier robots.txt
echo -e "${BLUE}🤖 TEST 4: Robots.txt${NC}"
test_check "$([ -f 'public/robots.txt' ] && echo 0 || echo 1)" "robots.txt existe"
test_check "$(grep -q 'Googlebot' public/robots.txt && echo 0 || echo 1)" "Googlebot configuré"
test_check "$(grep -q 'AhrefsBot' public/robots.txt && echo 0 || echo 1)" "AhrefsBot bloqué"
test_check "$(grep -q 'Sitemap' public/robots.txt && echo 0 || echo 1)" "Sitemap déclaré"
echo ""

# TEST 5: Vérifier l'intégration dans _app.js
echo -e "${BLUE}🔗 TEST 5: Intégration _app.js${NC}"
test_check "$([ -f 'pages/_app.js' ] && echo 0 || echo 1)" "_app.js existe"
test_check "$(grep -q 'ChatbotReussitess' pages/_app.js && echo 0 || echo 1)" "ChatbotReussitess importé"
test_check "$(grep -q 'AmazonDisclaimer' pages/_app.js && echo 0 || echo 1)" "AmazonDisclaimer importé"
test_check "$(grep -q 'AntiCopyProtection' pages/_app.js && echo 0 || echo 1)" "AntiCopyProtection importé"
echo ""

# TEST 6: Vérifier la documentation
echo -e "${BLUE}📚 TEST 6: Documentation${NC}"
test_check "$([ -f 'GUIDE-AMELIORATION-COMPLETE.md' ] && echo 0 || echo 1)" "GUIDE-AMELIORATION-COMPLETE.md existe"
test_check "$([ -f 'AMELIORATIONS-README.md' ] && echo 0 || echo 1)" "AMELIORATIONS-README.md existe"
test_check "$([ -f 'RAPPORT-SECURITE-100.md' ] && echo 0 || echo 1)" "RAPPORT-SECURITE-100.md existe"
test_check "$([ -f 'amelioration-complete-reussitess.sh' ] && echo 0 || echo 1)" "Script d'installation existe"
echo ""

# TEST 7: Linter
echo -e "${BLUE}🔍 TEST 7: Linter ESLint${NC}"
if npm run lint > /tmp/lint-output.txt 2>&1; then
    test_check 0 "ESLint: Aucune erreur"
else
    test_check 1 "ESLint: Erreurs détectées"
fi
echo ""

# TEST 8: Build de production
echo -e "${BLUE}🏗️  TEST 8: Build de Production${NC}"
if npm run build > /tmp/build-output.txt 2>&1; then
    test_check 0 "Build production réussi"
    
    # Vérifier que les pages sont générées
    test_check "$([ -d '.next' ] && echo 0 || echo 1)" "Répertoire .next créé"
    
    # Vérifier qu'il n'y a pas d'erreurs
    if grep -q "Error:" /tmp/build-output.txt 2>/dev/null; then
        test_check 1 "Aucune erreur de build"
    else
        test_check 0 "Aucune erreur de build"
    fi
else
    test_check 1 "Build production échoué"
fi
echo ""

# TEST 9: Vérifier le contenu des composants
echo -e "${BLUE}💬 TEST 9: Contenu des Composants${NC}"
test_check "$(grep -q 'Bonjour' components/ChatbotReussitess.jsx && echo 0 || echo 1)" "Chatbot: Message 'Bonjour' présent"
test_check "$(grep -q 'Comment ça marche' components/ChatbotReussitess.jsx && echo 0 || echo 1)" "Chatbot: Question 'Comment ça marche' gérée"
test_check "$(grep -q 'boutiques' components/ChatbotReussitess.jsx && echo 0 || echo 1)" "Chatbot: Question 'boutiques' gérée"
test_check "$(grep -q 'commission' components/ChatbotReussitess.jsx && echo 0 || echo 1)" "Chatbot: Question 'commission' gérée"
test_check "$(grep -q 'Avertissement' components/AmazonDisclaimer.jsx && echo 0 || echo 1)" "Disclaimer: Message d'avertissement présent"
echo ""

# TEST 10: Vérifier les headers dans next.config.js
echo -e "${BLUE}🔒 TEST 10: Headers de Sécurité${NC}"
HEADERS_COUNT=$(grep -c "key:" next.config.js 2>/dev/null || echo 0)
test_check "$([ $HEADERS_COUNT -ge 8 ] && echo 0 || echo 1)" "Au moins 8 headers de sécurité configurés"
test_check "$(grep -q 'max-age=63072000' next.config.js && echo 0 || echo 1)" "HSTS avec max-age correct"
test_check "$(grep -q 'SAMEORIGIN' next.config.js && echo 0 || echo 1)" "X-Frame-Options SAMEORIGIN"
test_check "$(grep -q 'nosniff' next.config.js && echo 0 || echo 1)" "X-Content-Type-Options nosniff"
echo ""

# RÉSULTATS FINAUX
echo -e "${PURPLE}═══════════════════════════════════════════════════════════${NC}"
echo -e "${PURPLE}  RÉSULTATS DES TESTS${NC}"
echo -e "${PURPLE}═══════════════════════════════════════════════════════════${NC}\n"

echo -e "Total de tests : ${BLUE}$TOTAL${NC}"
echo -e "Tests réussis  : ${GREEN}$PASSED${NC}"
echo -e "Tests échoués  : ${RED}$FAILED${NC}"

PERCENTAGE=$((PASSED * 100 / TOTAL))
echo -e "\nScore : ${PURPLE}$PERCENTAGE%${NC}"

if [ $FAILED -eq 0 ]; then
    echo -e "\n${GREEN}╔══════════════════════════════════════╗${NC}"
    echo -e "${GREEN}║                                      ║${NC}"
    echo -e "${GREEN}║         🎉 SCORE 100% ! 🎉          ║${NC}"
    echo -e "${GREEN}║                                      ║${NC}"
    echo -e "${GREEN}║     TOUS LES TESTS SONT PASSÉS !     ║${NC}"
    echo -e "${GREEN}║                                      ║${NC}"
    echo -e "${GREEN}╚══════════════════════════════════════╝${NC}\n"
    exit 0
else
    echo -e "\n${YELLOW}╔══════════════════════════════════════╗${NC}"
    echo -e "${YELLOW}║                                      ║${NC}"
    echo -e "${YELLOW}║     ⚠️  QUELQUES TESTS ÉCHOUÉS      ║${NC}"
    echo -e "${YELLOW}║                                      ║${NC}"
    echo -e "${YELLOW}║   Vérifiez les erreurs ci-dessus    ║${NC}"
    echo -e "${YELLOW}║                                      ║${NC}"
    echo -e "${YELLOW}╚══════════════════════════════════════╝${NC}\n"
    exit 1
fi
