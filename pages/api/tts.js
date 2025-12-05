export default function handler(req, res) {
  const { text = "Bonjour Gwada", lang = "fr-FR" } = req.query;
  
  // 🎙️ Réponse TTS config (frontend joue audio)
  res.json({
    success: true,
    config: {
      text: decodeURIComponent(text),
      lang: lang,
      voiceFamily: "Google Français"  // Voix antillaise simulée
    },
    // 🔗 Audio Google TTS (popup intra-site)
    audioSrc: `https://translate.google.com/translate_tts?ie=UTF-8&tl=${lang.split('-')[0]}&client=tw-ob&q=${encodeURIComponent(text.substring(0,100))}`
  });
}
