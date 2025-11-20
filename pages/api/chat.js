import OpenAI from 'openai'

// Initialize OpenAI client (will use OPENAI_API_KEY from environment)
const openai = process.env.OPENAI_API_KEY 
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null

// Fallback responses when OpenAI is not configured
const getFallbackResponse = (message, locale) => {
  const lowerMessage = message.toLowerCase()
  
  const responses = {
    fr: {
      default: "Je suis l'assistant Reussitess Global Nexus. Je peux vous aider avec nos 26 boutiques Amazon dans 14 pays. Que souhaitez-vous savoir ?",
      boutiques: "Nous avons 26 boutiques Amazon réparties dans 14 pays : France 🇫🇷, Italie 🇮🇹, Allemagne 🇩🇪, Suède 🇸🇪, Singapour 🇸🇬, Australie 🇦🇺, Espagne 🇪🇸, Brésil 🇧🇷, Royaume-Uni 🇬🇧, Inde 🇮🇳, Nouvelle-Zélande 🇳🇿, États-Unis 🇺🇸, Canada 🇨🇦, et Belgique 🇧🇪.",
      affiliation: "Nos boutiques utilisent le programme d'affiliation Amazon. En achetant via nos liens, vous nous aidez à continuer notre mission globale !",
      pays: "Nous couvrons 14 pays sur 5 continents. Quelle région vous intéresse ?",
    },
    en: {
      default: "I'm the Reussitess Global Nexus assistant. I can help you with our 26 Amazon stores across 14 countries. What would you like to know?",
      boutiques: "We have 26 Amazon stores across 14 countries: France 🇫🇷, Italy 🇮🇹, Germany 🇩🇪, Sweden 🇸🇪, Singapore 🇸🇬, Australia 🇦🇺, Spain 🇪🇸, Brazil 🇧🇷, UK 🇬🇧, India 🇮🇳, New Zealand 🇳🇿, USA 🇺🇸, Canada 🇨🇦, and Belgium 🇧🇪.",
      affiliation: "Our stores use the Amazon affiliate program. By purchasing through our links, you help us continue our global mission!",
      pays: "We cover 14 countries across 5 continents. Which region interests you?",
    },
    es: {
      default: "Soy el asistente de Reussitess Global Nexus. Puedo ayudarte con nuestras 26 tiendas Amazon en 14 países. ¿Qué te gustaría saber?",
      boutiques: "Tenemos 26 tiendas Amazon en 14 países: Francia 🇫🇷, Italia 🇮🇹, Alemania 🇩🇪, Suecia 🇸🇪, Singapur 🇸🇬, Australia 🇦🇺, España 🇪🇸, Brasil 🇧🇷, Reino Unido 🇬🇧, India 🇮🇳, Nueva Zelanda 🇳🇿, EE.UU. 🇺🇸, Canadá 🇨🇦 y Bélgica 🇧🇪.",
      affiliation: "Nuestras tiendas utilizan el programa de afiliados de Amazon. ¡Al comprar a través de nuestros enlaces, nos ayudas a continuar nuestra misión global!",
      pays: "Cubrimos 14 países en 5 continentes. ¿Qué región te interesa?",
    },
    de: {
      default: "Ich bin der Reussitess Global Nexus-Assistent. Ich kann Ihnen mit unseren 26 Amazon-Shops in 14 Ländern helfen. Was möchten Sie wissen?",
      boutiques: "Wir haben 26 Amazon-Shops in 14 Ländern: Frankreich 🇫🇷, Italien 🇮🇹, Deutschland 🇩🇪, Schweden 🇸🇪, Singapur 🇸🇬, Australien 🇦🇺, Spanien 🇪🇸, Brasilien 🇧🇷, UK 🇬🇧, Indien 🇮🇳, Neuseeland 🇳🇿, USA 🇺🇸, Kanada 🇨🇦 und Belgien 🇧🇪.",
      affiliation: "Unsere Shops nutzen das Amazon-Partnerprogramm. Durch Käufe über unsere Links helfen Sie uns, unsere globale Mission fortzusetzen!",
      pays: "Wir decken 14 Länder auf 5 Kontinenten ab. Welche Region interessiert Sie?",
    },
    it: {
      default: "Sono l'assistente di Reussitess Global Nexus. Posso aiutarti con i nostri 26 negozi Amazon in 14 paesi. Cosa vorresti sapere?",
      boutiques: "Abbiamo 26 negozi Amazon in 14 paesi: Francia 🇫🇷, Italia 🇮🇹, Germania 🇩🇪, Svezia 🇸🇪, Singapore 🇸🇬, Australia 🇦🇺, Spagna 🇪🇸, Brasile 🇧🇷, UK 🇬🇧, India 🇮🇳, Nuova Zelanda 🇳🇿, USA 🇺🇸, Canada 🇨🇦 e Belgio 🇧🇪.",
      affiliation: "I nostri negozi utilizzano il programma di affiliazione Amazon. Acquistando tramite i nostri link, ci aiuti a continuare la nostra missione globale!",
      pays: "Copriamo 14 paesi su 5 continenti. Quale regione ti interessa?",
    },
    pt: {
      default: "Sou o assistente da Reussitess Global Nexus. Posso ajudá-lo com nossas 26 lojas Amazon em 14 países. O que gostaria de saber?",
      boutiques: "Temos 26 lojas Amazon em 14 países: França 🇫🇷, Itália 🇮🇹, Alemanha 🇩🇪, Suécia 🇸🇪, Singapura 🇸🇬, Austrália 🇦🇺, Espanha 🇪🇸, Brasil 🇧🇷, Reino Unido 🇬🇧, Índia 🇮🇳, Nova Zelândia 🇳🇿, EUA 🇺🇸, Canadá 🇨🇦 e Bélgica 🇧🇪.",
      affiliation: "Nossas lojas usam o programa de afiliados da Amazon. Ao comprar através de nossos links, você nos ajuda a continuar nossa missão global!",
      pays: "Cobrimos 14 países em 5 continentes. Qual região te interessa?",
    },
  }

  const localeResponses = responses[locale] || responses.fr
  
  if (lowerMessage.includes('boutique') || lowerMessage.includes('store') || 
      lowerMessage.includes('tienda') || lowerMessage.includes('shop') ||
      lowerMessage.includes('negozio') || lowerMessage.includes('loja')) {
    return localeResponses.boutiques
  }
  
  if (lowerMessage.includes('affiliation') || lowerMessage.includes('affiliate') ||
      lowerMessage.includes('afiliado') || lowerMessage.includes('affiliazione')) {
    return localeResponses.affiliation
  }
  
  if (lowerMessage.includes('pays') || lowerMessage.includes('country') || 
      lowerMessage.includes('país') || lowerMessage.includes('land') ||
      lowerMessage.includes('paese') || lowerMessage.includes('pais')) {
    return localeResponses.pays
  }
  
  return localeResponses.default
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { message, locale = 'fr' } = req.body

  if (!message) {
    return res.status(400).json({ error: 'Message is required' })
  }

  try {
    // If OpenAI is configured, use it
    if (openai) {
      const systemPrompts = {
        fr: "Tu es un assistant pour Reussitess Global Nexus, une plateforme avec 26 boutiques Amazon dans 14 pays. Réponds de manière amicale et informative en français.",
        en: "You are an assistant for Reussitess Global Nexus, a platform with 26 Amazon stores across 14 countries. Respond in a friendly and informative way in English.",
        es: "Eres un asistente para Reussitess Global Nexus, una plataforma con 26 tiendas Amazon en 14 países. Responde de manera amigable e informativa en español.",
        de: "Sie sind ein Assistent für Reussitess Global Nexus, eine Plattform mit 26 Amazon-Shops in 14 Ländern. Antworten Sie freundlich und informativ auf Deutsch.",
        it: "Sei un assistente per Reussitess Global Nexus, una piattaforma con 26 negozi Amazon in 14 paesi. Rispondi in modo amichevole e informativo in italiano.",
        pt: "Você é um assistente da Reussitess Global Nexus, uma plataforma com 26 lojas Amazon em 14 países. Responda de forma amigável e informativa em português.",
      }

      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: systemPrompts[locale] || systemPrompts.fr },
          { role: 'user', content: message }
        ],
        max_tokens: 150,
        temperature: 0.7,
      })

      const reply = completion.choices[0].message.content

      return res.status(200).json({ message: reply })
    } else {
      // Use fallback responses when OpenAI is not configured
      const reply = getFallbackResponse(message, locale)
      return res.status(200).json({ message: reply })
    }
  } catch (error) {
    console.error('Chat API error:', error)
    
    // Fallback on error
    const reply = getFallbackResponse(message, locale)
    return res.status(200).json({ message: reply })
  }
}
