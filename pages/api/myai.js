export default function handler(req, res) {
  const { action, platform, goal } = req.body || {};
  
  const responses = {
    social: {
      tiktok: "🎥 **TikTok Growth**
✅ 3 vidéos/jour
✅ #Reussitess #Guadeloupe
✅ CTA Amazon bio",
      instagram: "📸 **Insta Reels**
✅ Quiz challenges
✅ Stories quotidiennes
✅ Collabs locaux"
    },
    prospects: "🔥 **500 leads/mois**
✅ TikTok Ads €5/jour
✅ Quiz viral email
✅ DM auto prospects",
    clients: "💰 **15% conversion**
✅ Lead froid → Quiz
✅ Chaud → Offre 10%
✅ VIP → €97 coaching"
  };
  
  const response = responses[action]?.[platform] || responses[goal] || 
    "🚀 myAI: Réseaux → Prospects → Clients
👆 /api/myai {action:'social', platform:'tiktok'}";
  
  res.json({ ai: "myAI", response, timestamp: new Date().toISOString() });
}
