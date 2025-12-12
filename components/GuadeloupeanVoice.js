// Synthèse vocale avec accent créole guadeloupéen
export const speakGuadeloupean = (text) => {
  if (!('speechSynthesis' in window)) {
    console.log('Synthèse vocale non supportée')
    return
  }

  // Adaptations phonétiques créoles
  const creolizeText = (txt) => {
    return txt
      .replace(/\bje\b/gi, 'mwen')
      .replace(/\btu\b/gi, 'ou')
      .replace(/\bil\b/gi, 'i')
      .replace(/\belle\b/gi, 'i')
      .replace(/\bnous\b/gi, 'nou')
      .replace(/\bvous\b/gi, 'zot')
      .replace(/excellent/gi, 'top top')
      .replace(/super/gi, 'bel bagay')
      .replace(/merci/gi, 'mèsi anpil')
      // Nettoyer emojis
      .replace(/[🎯🌍✨💎🔐⚡💪🚀📊🇬🇵]/g, '')
      .replace(/\*\*/g, '')
  }

  const cleanText = creolizeText(text)
  const utterance = new SpeechSynthesisUtterance(cleanText)
  
  // Paramètres voix créole
  utterance.lang = 'fr-FR'
  utterance.rate = 0.95 // Légèrement plus lent (rythme caribéen)
  utterance.pitch = 1.1 // Ton plus chaleureux
  utterance.volume = 0.9

  // Chercher voix française naturelle
  const voices = window.speechSynthesis.getVoices()
  const frVoice = voices.find(v => v.lang.startsWith('fr'))
  if (frVoice) utterance.voice = frVoice

  window.speechSynthesis.speak(utterance)
}
