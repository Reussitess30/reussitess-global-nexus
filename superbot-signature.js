// Fonction signature mondiale unique
function pronounceSuccessSignature(mode = "standard") {
  let msg = "réussitess971 excellence innovation succes a l'infini boudoume";
  if (mode === "excellence") msg += " — vers le sommet de tes ambitions !";
  else if (mode === "innovation") msg += " — ose inventer et avance sans limite !";
  else if (mode === "energy") msg += " — boost, puissance, réussite instantanée !";
  else if (mode === "chant") msg = "🎶 " + msg + " 🎶";
  const punchlines = [
    "le futur s'écrit aujourd'hui, inscris ton nom dans l'excellence !",
    "chaque instant est une opportunité de succès infini.",
    "ta réussite inspire l'innovation pour le monde.",
    "impossible n'est rien, surtout avec réussitess971 !"
  ];
  const randomPunchline = punchlines[Math.floor(Math.random() * punchlines.length)];
  msg += "\n" + randomPunchline;
  console.log(msg);
  if (typeof window !== "undefined" && window.speechSynthesis) {
    const utter = new window.SpeechSynthesisUtterance(msg);
    utter.lang = "fr-FR";
    utter.pitch = (mode === "energy") ? 1.5 : (mode === "chant") ? 1.2 : 1;
    window.speechSynthesis.speak(utter);
  }
  return msg;
}
module.exports = { pronounceSuccessSignature };
