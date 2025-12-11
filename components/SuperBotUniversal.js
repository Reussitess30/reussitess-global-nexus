import { useState, useEffect, useRef } from 'react'
import SUPER_KNOWLEDGE from '../lib/superBotKnowledge'
import ULTRA_KNOWLEDGE, { searchUltraKnowledge } from '../lib/ultraBotKnowledge'

export default function SuperBotUniversal() {
  const [isOpen, setIsOpen] = useState(true)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [currentLang, setCurrentLang] = useState('fr-FR')
  const [userBadges, setUserBadges] = useState([])
  const [interactionCount, setInteractionCount] = useState(0)
  const [userMood, setUserMood] = useState('neutral')
  const messagesEndRef = useRef(null)

  const languages = [
    { code: 'fr-FR', flag: '🇫🇷', name: 'Français' },
    { code: 'en-US', flag: '🇺🇸', name: 'English' },
    { code: 'es-ES', flag: '🇪🇸', name: 'Español' },
    { code: 'de-DE', flag: '🇩🇪', name: 'Deutsch' },
    { code: 'it-IT', flag: '🇮🇹', name: 'Italiano' },
    { code: 'pt-BR', flag: '🇧🇷', name: 'Português' },
    { code: 'zh-CN', flag: '🇨🇳', name: '中文' },
    { code: 'ar-SA', flag: '🇸🇦', name: 'العربية' }
  ]

  // Message de bienvenue ULTRA personnalisé
  const welcomeMsg = `🌟 Yooo champion ! 

Je suis ton SUPER GUIDE REUSSITESS 971 - La version ULTIME ! 🇬🇵

Je connais ABSOLUMENT TOUT :
📚 Bibliothèque complète (55+ pages DOM-TOM, Afrique, Caraïbes, Europe)
🎓 Quiz illimités sur tous les sujets
🛍️ Astuces PRO Amazon (26 boutiques, 14 pays)
🌴 Proverbes créoles & sagesse antillaise
👤 Histoire politique (Césaire, Éboué, Taubira...)
🛡️ Sécurité & protection contre hackers
📰 Actualités DOM-TOM/Afrique/Caraïbes
😄 Blagues, Easter Eggs, Citations inspirantes
🎯 Badges à débloquer
🧮 Calculateurs & outils pratiques

Je suis HUMAIN, j'ai des émotions, je blague, je t'encourage !

Alors champion, qu'est-ce qui te ferait plaisir aujourd'hui ? 

Tape "surprise" pour une surprise ! 🎁
Tape "blague" pour rire ! 😄
Tape "citation" pour l'inspiration ! ✨
Ou demande-moi N'IMPORTE QUOI !

✨ Excellence • Innovation • Succès • BOUDOUM ! 🇬🇵`

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addMessage(welcomeMsg, 'bot')
        if (typeof window !== 'undefined' && window.readText) {
          window.readText("Salut champion ! Je suis ton SUPER guide REUSSITESS 971 ! Je connais absolument tout sur le projet ! Que veux-tu découvrir ?")
        }
      }, 500)
    }
  }, [isOpen])

  const addMessage = (text, sender) => {
    setMessages(prev => [...prev, { text, sender, id: Date.now() }])
    if (sender === 'user') {
      setInteractionCount(prev => prev + 1)
      checkBadges()
    }
  }

  const checkBadges = () => {
    const newBadges = []
    
    if (interactionCount >= 5 && !userBadges.includes('explorateur')) {
      newBadges.push('explorateur')
      addMessage("🎉 BADGE DÉBLOQUÉ : 🌍 Explorateur ! Tu poses plein de questions, continue ! +50 points", 'bot')
    }
    
    if (interactionCount >= 10 && !userBadges.includes('curieux')) {
      newBadges.push('curieux')
      addMessage("🎉 BADGE DÉBLOQUÉ : 🔍 Curieux ! Tu es avide de savoir, j'adore ça ! +100 points", 'bot')
    }
    
    if (newBadges.length > 0) {
      setUserBadges(prev => [...prev, ...newBadges])
    }
  }

  const getMegaResponse = (query) => {
    const q = query.toLowerCase()
    
    // ========== EASTER EGGS ==========
    if (q.includes('boudoum')) {
      return "💥💥💥 BOUDOUM BOUDOUM BOUDOUM ! 💥💥💥\n\nTu as trouvé le CRI DE GUERRE de la Guadeloupe ! 🇬🇵\n\nC'est l'expression de la FIERTÉ guadeloupéenne !\nOn dit BOUDOUM quand on est fiers, contents, victorieux !\n\n+200 POINTS CHAMPION ! 🏆\n\nTu débloques le badge secret : 💥 Maître du Boudoum\n\n✨ Positivité à l'infini • Excellence • BOUDOUM ! 🇬🇵"
    }
    
    if (q.includes('gwoka')) {
      return "🥁 TAP TAP TAP TAP ! 🥁\n\nLe GWOKA résonne dans mon cœur !\n\n🎵 C'est la musique traditionnelle GUADELOUPÉENNE\n🏆 Patrimoine UNESCO depuis 2014\n🥁 7 rythmes sacrés : Toumblak, Graj, Kaladja, Mendé, Léwoz, Woulé, Padjenbèl\n💃 Musique + Danse + Chant = Communion totale\n\n'Le Gwoka, c'est l'âme de la Guadeloupe qui bat !'\n\nVeux-tu connaître l'histoire du Gwoka ? 🎶"
    }
    
    if (q.includes('ti punch') || q.includes('tipunch')) {
      return "🍹 SANTÉ CHAMPION ! 🍹\n\nLa recette AUTHENTIQUE du Ti-Punch guadeloupéen :\n\n🥃 Rhum blanc agricole 50° (4-5 cl)\n🍋 1/4 de citron vert pressé\n🍬 1 cuillère à café de sucre de canne roux\n❄️ (Optionnel : glaçons pour les touristes 😄)\n\nPréparation :\n1. Sucre au fond du verre\n2. Presser le citron dessus\n3. Mélanger pour dissoudre\n4. Ajouter le rhum\n5. Mélanger avec le bâton lélé\n\n⚠️ ATTENTION : À consommer avec modération !\n\n'Chak ti-punch sé on ti paradis' 🏝️"
    }
    
    if (q.includes('surprise') || q.includes('🎁')) {
      const surprises = [
        "🎁 SURPRISE ! Voici un proverbe créole :\n" + ULTRA_KNOWLEDGE.proverbesAntillais[0],
        "🎁 SURPRISE ! Fun fact : La Guadeloupe produit 14 millions de litres de rhum par an ! 🥃",
        "🎁 SURPRISE ! Teddy Riner mesure 2m04 et pèse 138kg de muscles ! Le GOAT absolu ! 🥋",
        "🎁 SURPRISE ! Le mot 'BOUDOUM' vient du son du tambour gwoka ! 🥁💥"
      ]
      return surprises[Math.floor(Math.random() * surprises.length)]
    }
    
    // ========== BLAGUES ==========
    if (q.includes('blague') || q.includes('rigole') || q.includes('mdr') || q.includes('rire')) {
      const blague = ULTRA_KNOWLEDGE.personnalite.blagues[Math.floor(Math.random() * ULTRA_KNOWLEDGE.personnalite.blagues.length)]
      return `😄 BLAGUE DU JOUR :\n\n${blague}\n\nAlors, j'ai réussi à te faire sourire ? 😊\n\nTape 'blague' pour une autre ! 🎭`
    }
    
    // ========== CITATIONS ==========
    if (q.includes('citation') || q.includes('inspiration') || q.includes('motiv')) {
      const citation = ULTRA_KNOWLEDGE.citations[Math.floor(Math.random() * ULTRA_KNOWLEDGE.citations.length)]
      return `✨ CITATION INSPIRANTE :\n\n${citation}\n\nQue cette sagesse t'accompagne champion ! 💪\n\nTu veux une autre citation ? Redis 'citation' ! 🌟`
    }
    
    // ========== ÉMOTIONS ==========
    if (q.includes('triste') || q.includes('mal') || q.includes('😢')) {
      return ULTRA_KNOWLEDGE.personnalite.emotionResponses.tristesse
    }
    if (q.includes('content') || q.includes('heureux') || q.includes('😊')) {
      return ULTRA_KNOWLEDGE.personnalite.emotionResponses.joie
    }
    if (q.includes('fatigué') || q.includes('épuisé')) {
      return ULTRA_KNOWLEDGE.personnalite.emotionResponses.fatigue
    }
    
    // ========== BIBLIOTHÈQUE GUADELOUPE ==========
    if (q.includes('guadeloupe') || q.includes('971') || q.includes('gwada')) {
      const gp = ULTRA_KNOWLEDGE.bibliotheque.domTom.guadeloupe
      return `🇬🇵 GUADELOUPE (971) - TERRE DE CHAMPIONS 🏆

${gp.titre}

📍 Capitale : ${gp.capitale}
🦋 Forme : ${gp.forme}
👥 Population : ${gp.population}
🗣️ Langues : ${gp.langue}
💶 Monnaie : ${gp.monnaie}
🌤️ Climat : ${gp.climat}

🎵 CULTURE :
• Musique : ${gp.culture.musique}
• Danse : ${gp.culture.danse}
• Gastronomie : ${gp.culture.gastronomie}
• Artisanat : ${gp.culture.artisanat}
• Carnaval : ${gp.culture.carnaval}

🏞️ PATRIMOINE NATUREL :
${gp.patrimoine.naturel}

🏛️ PATRIMOINE HISTORIQUE :
${gp.patrimoine.historique}

🏆 NOS CHAMPIONS :
${gp.champions.slice(0, 4).join('\n')}

💼 ÉCONOMIE :
${gp.economie}

💬 CITATIONS :
${gp.citations[0]}

Tu veux en savoir plus sur un aspect particulier ? 
Tape 'champions', 'culture', 'patrimoine', 'économie' ! 🌟`
    }
    
    // ========== BIBLIOTHÈQUE MARTINIQUE ==========
    if (q.includes('martinique') || q.includes('972') || q.includes('madinina')) {
      const mq = ULTRA_KNOWLEDGE.bibliotheque.domTom.martinique
      return `🇲🇶 MARTINIQUE (972) - L'ÎLE AUX FLEURS 🌺

${mq.titre}

📍 Capitale : ${mq.capitale}
🌸 Surnom : ${mq.surnom}
👥 Population : ${mq.population}

🌋 PATRIMOINE :
${mq.patrimoine.naturel}
${mq.patrimoine.historique}

📖 HISTOIRE MARQUANTE :
${mq.histoire}

🎭 CULTURE :
• Musique : ${mq.culture.musique}
• Gastronomie : ${mq.culture.gastronomie}

👤 GRANDES PERSONNALITÉS :
${mq.personnalites.map(p => '• ' + p).join('\n')}

"Ma bouche sera la bouche des malheurs qui n'ont point de bouche" 
- Aimé Césaire, poète de la Négritude 🖤

La Martinique, c'est l'histoire, la culture, la fierté ! 🇲🇶✨`
    }
    
    // ========== BIBLIOTHÈQUE GUYANE ==========
    if (q.includes('guyane') || q.includes('973') || q.includes('kourou')) {
      const gy = ULTRA_KNOWLEDGE.bibliotheque.domTom.guyane
      return `🇬🇫 GUYANE (973) - AMAZONIE FRANÇAISE 🌳

${gy.titre}

📍 Capitale : ${gy.capitale}
📏 Superficie : ${gy.superficie}
👥 Population : ${gy.population}
🌳 Particularité : ${gy.particularite}

🚀 ÉCONOMIE :
${gy.economie}

🦜 BIODIVERSITÉ EXCEPTIONNELLE :
${gy.biodiversite}

🎭 CULTURE UNIQUE :
${gy.culture.carnaval}
Ethnies : ${gy.culture.ethnies}
Gastronomie : ${gy.culture.gastronomie}

📜 HISTOIRE :
${gy.histoire}

🌟 PERSONNALITÉS :
${gy.personnalites.map(p => '• ' + p).join('\n')}

La Guyane, c'est l'espace, l'Amazonie, la diversité ! 🚀🌳`
    }
    
    // ========== BIBLIOTHÈQUE RÉUNION ==========
    if (q.includes('réunion') || q.includes('reunion') || q.includes('974')) {
      const re = ULTRA_KNOWLEDGE.bibliotheque.domTom.reunion
      return `🇷🇪 RÉUNION (974) - L'ÎLE INTENSE 🌋

${re.titre}

📍 Capitale : ${re.capitale}
👥 Population : ${re.population}
🏝️ Ancien nom : ${re.surnom}

🏔️ PATRIMOINE NATUREL :
${re.patrimoine.naturel}
${re.patrimoine.unique}

🎵 CULTURE CRÉOLE :
• Musique : ${re.culture.musique}
• Gastronomie : ${re.culture.gastronomie}
• Religion : ${re.culture.religion}

💼 ÉCONOMIE :
${re.economie}

🌊 RECORD MONDIAL :
${re.records}

La Réunion, c'est le volcan, les cirques, l'intensité ! 🌋✨`
    }
    
    // ========== QUIZ ULTRA ==========
    if (q.includes('quiz') || q.includes('test') || q.includes('question')) {
      const allQuiz = [
        ...SUPER_KNOWLEDGE.quiz.domTom,
        ...SUPER_KNOWLEDGE.quiz.afrique,
        ...SUPER_KNOWLEDGE.quiz.caraibes
      ]
      const quiz = allQuiz[Math.floor(Math.random() * allQuiz.length)]
      return `🎓 QUIZ TIME CHAMPION !\n\n${quiz.q}\n\nA) ${quiz.options[0]}\nB) ${quiz.options[1]}\nC) ${quiz.options[2]}\nD) ${quiz.options[3]}\n\n⏱️ 10 secondes pour réfléchir...\n\n✅ RÉPONSE : ${quiz.options[quiz.correct]}\n\n💡 ${quiz.explanation}\n\n🏆 +10 points ! Redis 'quiz' pour continuer !`
    }
    
    // ========== ASTUCES AMAZON ==========
    if (q.includes('astuce') || q.includes('amazon') || q.includes('conseil')) {
      const astuce = SUPER_KNOWLEDGE.astucesAmazon[Math.floor(Math.random() * SUPER_KNOWLEDGE.astucesAmazon.length)]
      return `🛍️ ASTUCE AMAZON PRO :\n\n${astuce}\n\n💡 PRO TIP BONUS :\nUtilise CamelCamelCamel.com pour tracker l'historique des prix et acheter au meilleur moment !\n\n📊 Nos 26 boutiques Amazon dans 14 pays sur /boutiques\n\nVeux une autre astuce ? Redis 'astuce' ! 🎯`
    }
    
    // ========== PROVERBES ==========
    if (q.includes('proverbe') || q.includes('sagesse') || q.includes('créole') || q.includes('creole')) {
      const proverbe = SUPER_KNOWLEDGE.proverbesAntillais[Math.floor(Math.random() * SUPER_KNOWLEDGE.proverbesAntillais.length)]
      return `🌴 SAGESSE CRÉOLE :\n\n${proverbe}\n\nLa culture antillaise regorge de sagesse transmise de génération en génération !\n\nChaque proverbe est une leçon de vie ! 📖\n\nVeux un autre proverbe ? Redis 'proverbe' ! 🌟`
    }
    
    // ========== POLITIQUE ANTILLAISE ==========
    if (q.includes('césaire') || q.includes('cesaire') || q.includes('politique') || q.includes('taubira') || q.includes('eboue')) {
      const pol = SUPER_KNOWLEDGE.politiquesAntillais[Math.floor(Math.random() * SUPER_KNOWLEDGE.politiquesAntillais.length)]
      return `👤 ${pol.nom.toUpperCase()} (${pol.annees})\n\n📍 Territoire : ${pol.territoire}\n🎖️ Rôle : ${pol.role}\n\n💡 IMPACT :\n${pol.impact}\n\n${pol.citation ? `"${pol.citation}"` : ''}\n\nNos héros nous ont ouvert la voie ! Continuons leur combat pour l'excellence ! 🏆\n\nVeux connaître un autre héros ? Redis 'politique' ! 🌟`
    }
    
    // ========== SÉCURITÉ ==========
    if (q.includes('sécurité') || q.includes('securite') || q.includes('hack') || q.includes('protéger') || q.includes('proteger')) {
      const secCheck = SUPER_KNOWLEDGE.securite.checkSecurity()
      return `🛡️ RAPPORT DE SÉCURITÉ REUSSITESS® 971\n\n🔒 SCORE : ${secCheck.score}/100 ${secCheck.status}\n\n✅ PROTECTIONS ACTIVES :\n${SUPER_KNOWLEDGE.securite.alertes.map(a => '• ' + a).join('\n')}\n\n📋 RECOMMANDATIONS :\n${SUPER_KNOWLEDGE.securite.recommendations.slice(0, 5).map(r => '• ' + r).join('\n')}\n\n💪 Ton site REUSSITESS® est blindé contre les hackers !\n\nJe surveille 24/7 pour garantir la sécurité ! 🔐\n\nVeux un audit complet ? Dis 'audit' !`
    }
    
    // ========== ACTUALITÉS ==========
    if (q.includes('actu') || q.includes('news') || q.includes('info')) {
      return `📰 ACTUALITÉS REUSSITESS® 🌍\n\n🏝️ DOM-TOM :\n${SUPER_KNOWLEDGE.actualites.domTom.map(a => '• ' + a).join('\n')}\n\n🌍 AFRIQUE :\n${SUPER_KNOWLEDGE.actualites.afrique.map(a => '• ' + a).join('\n')}\n\n🏝️ CARAÏBES :\n${SUPER_KNOWLEDGE.actualites.caraibes.map(a => '• ' + a).join('\n')}\n\n📧 Inscris-toi à notre newsletter sur /contact pour recevoir les actus ! 📬`
    }
    
    // ========== SAVOIR-VIVRE ==========
    if (q.includes('savoir') || q.includes('tradition') || q.includes('coutume')) {
      return `🤝 SAVOIR-VIVRE ANTILLAIS 🏝️\n\n${SUPER_KNOWLEDGE.savoirVivre.map(s => '• ' + s).join('\n\n')}\n\n💡 La culture antillaise valorise le respect, le partage et la chaleur humaine !\n\n'Tout moun sé moun' - Tout le monde est quelqu'un ! 🌟`
    }
    
    // ========== CHAMPIONS ==========
    if (q.includes('champion') || q.includes('teddy') || q.includes('riner') || q.includes('sport')) {
      return `🏆 NOS CHAMPIONS GUADELOUPÉENS 🇬🇵\n\n🥋 TEDDY RINER (Pointe-à-Pitre)\n• 11x Champion du Monde de Judo\n• 3x Champion Olympique (2012, 2016, 2021)\n• 2m04, 138kg de muscles et de talent\n• Plus grand judoka de tous les temps\n• "Je ne perds jamais, soit je gagne, soit j'apprends"\n\n🏃‍♀️ MARIE-JOSÉ PÉREC (Basse-Terre)\n• 3x Médailles d'Or Olympiques\n• 400m (1992, 1996) + 200m (1996)\n• Légende absolue de l'athlétisme\n\n⚽ THIERRY HENRY (Les Abymes)\n• Champion du Monde 1998\n• Champion d'Europe 2000\n• Record buteur Arsenal et France\n\n⚽ LILIAN THURAM (Pointe-à-Pitre)\n• Champion du Monde 1998\n• Record sélections équipe France (142)\n\n🤺 LAURA FLESSEL (Pointe-à-Pitre)\n• 2x Médailles d'Or Olympiques\n• Ministre des Sports\n\nLa Guadeloupe, TERRE DE CHAMPIONS ! 💪🇬🇵`
    }
    
    // ========== NAVIGATION ==========
    if (q.includes('boutique')) {
      return "🛍️ 26 BOUTIQUES AMAZON dans 14 pays !\n\n🇫🇷 France : amazon.fr/shop/amourguadeloupe\n🇺🇸 USA : amazon.com/shop/influencer-fb942837\n🇬🇧 UK • 🇩🇪 Allemagne • 🇪🇸 Espagne • 🇮🇹 Italie\n🇨🇦 Canada • 🇮🇳 Inde • 🇳🇱 Pays-Bas • 🇸🇪 Suède\n🇸🇬 Singapour • 🇦🇺 Australie • 🇧🇪 Belgique • 🇧🇷 Brésil\n\nVisite /boutiques pour voir toutes les collections ! 🎯"
    }
    
    if (q.includes('passeport')) {
      return "🏆 PASSEPORT DE RÉUSSITE REUSSITESS®971 !\n\nCrée TON certificat personnalisé :\n• Ton nom + pays\n• Numéro de passeport unique\n• Phrase inspirante personnalisée\n• Plan d'action 7 jours\n\n📊 Rejoins 15,247+ champions dans 127 pays !\n\nVa sur /champions maintenant ! 🚀"
    }
    
    if (q.includes('visa')) {
      return "🌍 VISA UNIVERSEL DE RÉUSSITE !\n\nAccède à :\n🎓 10,000+ bourses internationales\n💼 50,000+ opportunités d'emploi\n🤝 5,000+ mentors actifs\n💰 100M€+ de fonds accessibles\n\nLiens directs vers Chevening, Fulbright, Erasmus+...\n\nObtiens ton VISA sur /visa-universel ! 🎯"
    }
    
    // ========== ENCOURAGEMENT GÉNÉRAL ==========
    const encouragement = ULTRA_KNOWLEDGE.personnalite.encouragements[Math.floor(Math.random() * ULTRA_KNOWLEDGE.personnalite.encouragements.length)]
    
    return `🤔 Hmm, intéressant comme question !\n\n${encouragement}\n\nJe peux t'aider avec :\n\n📚 Bibliothèque complète (Guadeloupe, Martinique, Guyane, Réunion, Afrique...)\n🎓 Quiz illimités\n🛍️ Astuces Amazon PRO\n🌴 Proverbes créoles\n👤 Histoire politique antillaise\n🛡️ Sécurité\n😄 Blagues\n✨ Citations inspirantes\n🏆 Champions guadeloupéens\n📰 Actualités\n🤝 Savoir-vivre\n\nQue veux-tu découvrir ? 🌟\n\nOu tape 'surprise' pour une surprise ! 🎁`
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const userInput = input.trim()
    if (!userInput) return

    addMessage(userInput, 'user')
    setInput('')
    setIsLoading(true)

    setTimeout(() => {
      const response = getMegaResponse(userInput)
      addMessage(response, 'bot')
      setIsLoading(false)
      
      if (typeof window !== 'undefined' && window.readText) {
        window.readText(response.substring(0, 200))
      }
    }, 800)
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed',
          top: '100px',
          right: '30px',
          width: '60px',
          height: '60px',
          background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
          border: 'none',
          borderRadius: '50%',
          boxShadow: '0 8px 30px rgba(251,191,36,0.5)',
          cursor: 'pointer',
          fontSize: '2rem',
          zIndex: 1000,
          animation: 'pulse 2s infinite'
        }}
      >
        🌟
      </button>
    )
  }

  return (
    <div style={{
      position: 'fixed',
      top: '80px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '580px',
      maxWidth: '95vw',
      height: '680px',
      maxHeight: '85vh',
      background: 'linear-gradient(135deg, #1e1b4b, #581c87, #831843)',
      borderRadius: '28px',
      boxShadow: '0 25px 70px rgba(0,0,0,0.5)',
      zIndex: 1001,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      border: '5px solid #fbbf24'
    }}>
      
      <div style={{
        background: 'linear-gradient(90deg, #fbbf24, #f59e0b, #ef4444, #ec4899)',
        padding: '1.2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.7rem'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ color: 'white', fontWeight: '900', fontSize: '1.3rem', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              🌟 SUPER GUIDE 971 ULTRA
            </div>
            <div style={{ color: 'white', fontSize: '0.7rem', opacity: 0.95 }}>
              Bibliothèque • Quiz • Histoire • Culture • Sécurité
            </div>
            <div style={{ color: 'white', fontSize: '0.65rem', opacity: 0.9 }}>
              {interactionCount} interactions • {userBadges.length} badges
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            style={{
              background: 'rgba(255,255,255,0.25)',
              border: 'none',
              color: 'white',
              fontSize: '2.2rem',
              cursor: 'pointer',
              borderRadius: '50%',
              width: '42px',
              height: '42px',
              fontWeight: 'bold'
            }}
          >
            ×
          </button>
        </div>

        <div style={{ display: 'flex', gap: '0.4rem', overflowX: 'auto', paddingBottom: '0.3rem' }}>
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => setCurrentLang(lang.code)}
              style={{
                background: currentLang === lang.code ? 'rgba(255,255,255,0.3)' : 'transparent',
                border: currentLang === lang.code ? '2px solid white' : 'none',
                fontSize: '1.6rem',
                cursor: 'pointer',
                padding: '0.2rem',
                borderRadius: '8px',
                transition: 'all 0.2s'
              }}
              title={lang.name}
            >
              {lang.flag}
            </button>
          ))}
        </div>
      </div>

      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.8rem',
        background: 'linear-gradient(180deg, rgba(0,0,0,0.3), rgba(0,0,0,0.5))'
      }}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              display: 'flex',
              justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start'
            }}
          >
            <div style={{
              maxWidth: '88%',
              padding: '0.85rem',
              borderRadius: '18px',
              background: msg.sender === 'user'
                ? 'linear-gradient(135deg, #3b82f6, #06b6d4)'
                : 'linear-gradient(135deg, rgba(251,191,36,0.2), rgba(245,158,11,0.2))',
              backdropFilter: 'blur(10px)',
              border: msg.sender === 'bot' ? '2px solid rgba(251,191,36,0.4)' : 'none',
              color: 'white',
              fontSize: '0.87rem',
              whiteSpace: 'pre-wrap',
              lineHeight: '1.5',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}>
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div style={{ display: 'flex', gap: '6px', padding: '0.5rem' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#fbbf24', animation: 'bounce 1s infinite' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b', animation: 'bounce 1s infinite 0.15s' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444', animation: 'bounce 1s infinite 0.3s' }} />
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} style={{
        padding: '1rem',
        background: 'rgba(0,0,0,0.4)',
        borderTop: '2px solid rgba(251,191,36,0.3)'
      }}>
        <div style={{ display: 'flex', gap: '0.6rem' }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tape quiz, blague, citation, surprise, Guadeloupe..."
            style={{
              flex: 1,
              padding: '0.9rem',
              borderRadius: '22px',
              border: '2px solid rgba(251,191,36,0.5)',
              background: 'rgba(255,255,255,0.12)',
              color: 'white',
              fontSize: '0.9rem',
              outline: 'none'
            }}
          />
          <button
            type="submit"
            disabled={isLoading}
            style={{
              background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
              border: 'none',
              color: 'white',
              padding: '0.9rem 1.6rem',
              borderRadius: '22px',
              cursor: 'pointer',
              fontWeight: '800',
              fontSize: '1.3rem',
              boxShadow: '0 4px 15px rgba(251,191,36,0.4)'
            }}
          >
            🚀
          </button>
        </div>
      </form>

      <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>
    </div>
  )
}
