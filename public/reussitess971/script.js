// Quiz enrichi
const quizQuestions = [
  {question: "Paris est la capitale de quel pays ?", answers: ["France", "Italie", "Canada"], correct: 0, explanation: "Bravo, c'est la France !"},
  {question: "Quel est le fleuve le plus long du monde ?", answers: ["Nil", "Amazon", "Yangtsé"], correct: 1, explanation: "L'Amazone est le plus long !"},
  {question: "En quelle année a débuté la Première Guerre mondiale ?", answers: ["1914", "1939", "1815"], correct: 0, explanation: "La guerre a commencé en 1914."},
  {question: "Quelle est la capitale du Canada ?", answers: ["Toronto", "Vancouver", "Ottawa"], correct: 2, explanation: "Ottawa est la capitale du Canada !"},
  {question: "Qui a peint la Joconde ?", answers: ["Leonardo da Vinci", "Picasso", "Monet"], correct: 0, explanation: "C'est Léonard de Vinci !"}
];

let qIndex = 0;
function showQuiz() {
  const d = document.getElementById('quizContainer');
  d.innerHTML = '';
  if (qIndex < quizQuestions.length) {
    const q = quizQuestions[qIndex];
    d.innerHTML = `<div><b>${q.question}</b></div>`;
    q.answers.forEach((a,i) => {
      const btn = document.createElement('button');
      btn.textContent = a;
      btn.onclick = () => {
        d.innerHTML += i===q.correct ? `<p>${q.explanation}</p>` : `<p>Essaie encore !</p>`;
        qIndex++;
        setTimeout(showQuiz, 1500);
      };
      d.appendChild(btn);
    });
  } else {
    d.innerHTML = "<b>Fin du quiz !</b>";
    qIndex = 0;
  }
}
showQuiz();

// Boutiques Amazon officielles (14 pays)
const shops = [
  {flag:"🇬🇧", name:"Royaume-Uni", url:"https://www.amazon.co.uk/shop/amourguadeloupe"},
  {flag:"🇩🇪", name:"Allemagne", url:"https://www.amazon.de/shop/amourguadeloupe"},
  {flag:"🇪🇸", name:"Espagne", url:"https://www.amazon.es/shop/amourguadeloupe"},
  {flag:"🇮🇹", name:"Italie", url:"https://www.amazon.it/shop/amourguadeloupe"},
  {flag:"🇨🇦", name:"Canada", url:"https://www.amazon.ca/shop/amourguadeloupe"},
  {flag:"🇳🇱", name:"Pays-Bas", url:"https://www.amazon.nl/shop/amourguadeloupe"},
  {flag:"🇸🇪", name:"Suède", url:"https://www.amazon.se/shop/amourguadeloupe"},
  {flag:"🇸🇬", name:"Singapour", url:"https://www.amazon.sg/shop/amourguadeloupe"},
  {flag:"🇦🇺", name:"Australie", url:"https://www.amazon.com.au/shop/amourguadeloupe"},
  {flag:"🇧🇪", name:"Belgique", url:"https://www.amazon.com.be/shop/amourguadeloupe"},
  {flag:"🇮🇳", name:"Inde", url:"https://www.amazon.in/shop/amourguadeloupe"},
  {flag:"🇫🇷", name:"France", url:"https://www.amazon.fr/shop/amourguadeloupe"},
  {flag:"🇧🇷", name:"Brésil", url:"https://www.amazon.com.br/shop/amourguadeloupe"},
  {flag:"🇺🇸", name:"États-Unis", url:"https://www.amazon.com/shop/amourguadeloupe"}
];

const shopsContainer = document.getElementById('shopsContainer');
shopsContainer.innerHTML =
  shops.map(s=>`<a href="${s.url}" class="shop-link" target="_blank" style="margin: 6px; display: inline-block;">${s.flag} ${s.name}</a>`).join(" ");

// Plusieurs messages de positivité
const motivMessages = [
  "Positivité à l’infini boudoume !",
  "Tu es sur le chemin de la réussite.",
  "Chaque jour est une opportunité.",
  "Acheter dans nos boutiques, c'est soutenir le projet réussitess971 !",
  "Le succès commence ici."
];
document.getElementById('positiviteContainer').innerHTML =
  motivMessages.map(msg => `<div>${msg}</div>`).join("");
