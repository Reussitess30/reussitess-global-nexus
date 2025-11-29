import React, { useState, useEffect, useRef } from 'react';

/**
 * Chatbot IA Intelligent pour Reussitess® Global Nexus
 * Répond automatiquement aux questions des utilisateurs
 * @version 1.0.0
 */
const ChatbotReussitess = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll vers le dernier message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Message de bienvenue initial
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          text: "👋 Bonjour ! Bienvenue sur Reussitess® Global Nexus ! Je suis votre assistant virtuel. Comment puis-je vous aider aujourd'hui ?",
          isBot: true,
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen, messages.length]);

  // Base de connaissances du chatbot
  const getResponse = (input) => {
    const lowerInput = input.toLowerCase().trim();

    // Salutations
    if (lowerInput.match(/^(bonjour|salut|hello|hi|hey|coucou|bonsoir)$/)) {
      return "👋 Bonjour ! Bienvenue sur Reussitess® Global Nexus ! Je suis votre assistant virtuel. Vous pouvez me demander :\n\n✅ Comment ça marche ?\n✅ Quelles boutiques ?\n✅ Les commissions\n✅ C'est légal ?\n\nQue souhaitez-vous savoir ?";
    }

    // Au revoir
    if (lowerInput.match(/(au revoir|bye|à bientôt|adieu|salut|ciao)/)) {
      return "👋 Au revoir ! En achetant via Reussitess®, vous nous aidez à gagner des commissions sur les achats qualifiés Amazon, sans frais supplémentaires pour vous ! Merci de votre soutien ! 💙 À très bientôt ! 🛍️";
    }

    // Comment ça marche
    if (lowerInput.match(/(comment|marche|fonctionne|utiliser)/)) {
      return "📋 **Comment ça marche ?**\n\nC'est très simple en 3 étapes :\n\n1️⃣ **CLIQUEZ** sur une de nos boutiques Amazon (26 boutiques disponibles)\n2️⃣ **ACHETEZ** normalement vos produits sur Amazon\n3️⃣ **GAGNEZ** : Nous recevons une commission sur vos achats qualifiés\n\n💡 **Important** : Aucun frais supplémentaire pour vous ! Les prix restent identiques.\n\n✨ Vous nous soutenez simplement en passant par nos liens !";
    }

    // Liste des boutiques
    if (lowerInput.match(/(boutique|shop|magasin|pays|amazon)/)) {
      return "🛍️ **Nos 26 boutiques Amazon dans 14 pays :**\n\n🌎 **Amériques**\n• États-Unis (amazon.com)\n• Canada (amazon.ca)\n• Brésil (amazon.com.br)\n\n🇪🇺 **Europe**\n• France (amazon.fr)\n• Allemagne (amazon.de)\n• Royaume-Uni (amazon.co.uk)\n• Italie (amazon.it)\n• Espagne (amazon.es)\n• Pays-Bas (amazon.nl)\n• Suède (amazon.se)\n• Belgique (amazon.com.be)\n\n🌏 **Asie-Pacifique**\n• Inde (amazon.in)\n• Singapour (amazon.sg)\n• Australie (amazon.com.au)\n\n✨ Choisissez votre boutique préférée !";
    }

    // Commissions
    if (lowerInput.match(/(commission|gagnez|argent|revenus|combien)/)) {
      return "💰 **Les commissions Amazon expliquées :**\n\n✅ Nous sommes **partenaires officiels** du programme Amazon Associates\n\n✅ Quand vous achetez via nos liens, Amazon nous verse une **petite commission** (1-10% selon les produits)\n\n✅ **Aucun coût supplémentaire** pour vous ! Les prix sont identiques\n\n✅ C'est **100% légal** et conforme aux règles FTC/Amazon\n\n💙 En utilisant nos liens, vous nous aidez à maintenir ce service gratuit !\n\n🙏 Merci de votre soutien !";
    }

    // Légalité
    if (lowerInput.match(/(légal|legal|conforme|règles|autorisé)/)) {
      return "🛡️ **Conformité légale totale :**\n\n✅ **Programme officiel** Amazon Associates\n✅ **Conforme FTC** (Federal Trade Commission)\n✅ **Conforme RGPD** (protection des données EU)\n✅ **Disclaimer visible** sur tout le site\n✅ **Transparent** : Nous informons clairement de nos commissions\n\n📜 Tous nos liens d'affiliation sont **légaux et autorisés** par Amazon.\n\n🔐 Votre sécurité et transparence sont nos priorités !";
    }

    // Gratuit
    if (lowerInput.match(/(gratuit|prix|coût|payant|cher)/)) {
      return "💵 **C'est 100% GRATUIT pour vous !**\n\n✅ **Aucun frais supplémentaire**\n✅ **Même prix** qu'en allant directement sur Amazon\n✅ **Même offres** et promotions\n✅ **Même garantie** Amazon\n\n💡 La seule différence : Amazon nous verse une petite commission quand vous achetez.\n\n🎁 Vous nous soutenez **gratuitement** !";
    }

    // Sécurité
    if (lowerInput.match(/(sécurité|secure|safe|données|vie privée|rgpd)/)) {
      return "🔐 **Sécurité maximale :**\n\n✅ **HTTPS** sur tout le site\n✅ **Headers de sécurité** Grade A\n✅ **Protection anti-copie** activée\n✅ **Conforme RGPD** (données protégées)\n✅ **Pas de tracking** invasif\n✅ **Cookies minimaux**\n\n🛡️ Votre sécurité est notre priorité absolue !\n\n📜 Consultez notre Politique de Confidentialité pour plus de détails.";
    }

    // Merci
    if (lowerInput.match(/(merci|thanks|super|génial|parfait|cool)/)) {
      return "🙏 **Avec plaisir !**\n\n💙 N'oubliez pas d'utiliser nos liens Amazon pour nous soutenir !\n\n✨ Chaque achat via nos liens nous aide à maintenir ce service gratuit.\n\n🎁 Vous avez d'autres questions ? Je suis là pour vous aider !";
    }

    // Aide
    if (lowerInput.match(/(aide|help|\?|question)/)) {
      return "❓ **Je peux vous aider avec :**\n\n📋 Comment ça marche ?\n🛍️ Quelles boutiques Amazon ?\n💰 Les commissions\n🔐 Sécurité et conformité\n💵 Est-ce gratuit ?\n🛡️ Protection des données\n\n💬 Posez-moi votre question !";
    }

    // Contact
    if (lowerInput.match(/(contact|email|téléphone|support)/)) {
      return "📧 **Nous contacter :**\n\n✉️ Utilisez notre page **Contact** pour nous envoyer un message\n\n⚠️ Pour les questions urgentes de **sécurité**, utilisez l'objet : \"SÉCURITÉ - URGENT\"\n\n🕒 Nous répondons généralement sous **24-48h**\n\n💬 Pour les questions courantes, je suis là pour vous aider immédiatement !";
    }

    // Produits
    if (lowerInput.match(/(produit|article|acheter|vendre)/)) {
      return "🛒 **Nos produits :**\n\n✅ Nous ne vendons **aucun produit** directement\n✅ Nous vous **redirigeons** vers Amazon\n✅ **Tous les produits** Amazon sont disponibles\n✅ **Même catalogue** qu'Amazon directement\n\n🎯 Notre rôle : Vous **faciliter l'accès** aux boutiques Amazon mondiales !\n\n💡 Cliquez sur une boutique pour commencer !";
    }

    // Réponse par défaut
    return "🤔 Je ne suis pas sûr de comprendre votre question.\n\n💡 **Essayez de me demander :**\n\n• \"Comment ça marche ?\"\n• \"Quelles boutiques ?\"\n• \"Les commissions\"\n• \"C'est gratuit ?\"\n• \"Sécurité\"\n\nOu posez-moi une autre question ! 😊";
  };

  // Gérer l'envoi de message
  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Ajouter le message de l'utilisateur
    const userMessage = {
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simuler un délai de réponse (1-2 secondes)
    setTimeout(() => {
      const response = getResponse(inputValue);
      const botMessage = {
        text: response,
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  // Gérer la touche Entrée
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Bouton flottant */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 animate-pulse"
        aria-label="Ouvrir le chatbot"
      >
        {isOpen ? (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Fenêtre de chat */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border-2 border-purple-200">
          {/* En-tête */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                🤖
              </div>
              <div>
                <h3 className="font-bold">Assistant Reussitess®</h3>
                <p className="text-xs opacity-90">En ligne 24/7</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 rounded-full p-2 transition-colors"
              aria-label="Fermer le chatbot"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Zone de messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50" style={{ maxHeight: '400px' }}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.isBot
                      ? 'bg-white text-gray-800 border border-gray-200'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p className={`text-xs mt-1 ${message.isBot ? 'text-gray-500' : 'text-white/70'}`}>
                    {message.timestamp.toLocaleTimeString('fr-FR', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Zone de saisie */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Posez votre question..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Envoyer le message"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotReussitess;
