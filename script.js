/**
 * REUSSITESS® 971 - Script JavaScript
 * Excellence • Innovation • Succès à l'infini boudoume!
 */

// ==================== DONNÉES ====================

// Catégories de Quiz avec icônes
const quizCategories = [
  { id: 'Art', name: 'Art', icon: '🎨' },
  { id: 'Business', name: 'Business', icon: '💼' },
  { id: 'Cinema', name: 'Cinéma', icon: '🎬' },
  { id: 'Culture', name: 'Culture du Monde', icon: '🌍' },
  { id: 'Decouvertes', name: 'Découvertes', icon: '🔍' },
  { id: 'Environnement', name: 'Environnement', icon: '🌱' },
  { id: 'Gastronomie', name: 'Gastronomie', icon: '🍽️' },
  { id: 'Geographie', name: 'Géographie', icon: '🗺️' },
  { id: 'Histoire', name: 'Histoire', icon: '📜' },
  { id: 'Innovations', name: 'Innovations', icon: '💡' },
  { id: 'Langue', name: 'Langue', icon: '📝' },
  { id: 'Maths', name: 'Maths', icon: '🔢' },
  { id: 'Monuments', name: 'Monuments', icon: '🏛️' },
  { id: 'Musique', name: 'Musique', icon: '🎵' },
  { id: 'Personnalites', name: 'Personnalités', icon: '👤' },
  { id: 'Politique', name: 'Politique', icon: '🏛️' },
  { id: 'Sante', name: 'Santé', icon: '🏥' },
  { id: 'Sciences', name: 'Sciences', icon: '🔬' },
  { id: 'Sport', name: 'Sport', icon: '⚽' },
  { id: 'Tech', name: 'Tech', icon: '💻' }
];

// Questions de Quiz par catégorie
const quizData = {
  Art: [
    {
      question: "Qui a peint 'La Joconde' ?",
      answers: ["Michel-Ange", "Léonard de Vinci", "Raphaël"],
      correct: 1,
      explanation: "La Joconde est l'œuvre la plus célèbre de Léonard de Vinci. réussitess971 : positivité à l'infini boudoume!"
    },
    {
      question: "Quel mouvement artistique est associé à Pablo Picasso ?",
      answers: ["Impressionnisme", "Cubisme", "Surréalisme"],
      correct: 1,
      explanation: "Picasso est l'un des fondateurs du cubisme avec Georges Braque. réussitess971 : l'art inspire l'excellence!"
    },
    {
      question: "Dans quel musée se trouve la Vénus de Milo ?",
      answers: ["Musée du Louvre", "British Museum", "MoMA"],
      correct: 0,
      explanation: "La Vénus de Milo est exposée au Louvre depuis 1821. réussitess971 : positivité à l'infini boudoume!"
    }
  ],
  Business: [
    {
      question: "Qui a fondé Amazon ?",
      answers: ["Bill Gates", "Jeff Bezos", "Elon Musk"],
      correct: 1,
      explanation: "Jeff Bezos a fondé Amazon en 1994 depuis son garage. réussitess971 : excellence, innovation, succès!"
    },
    {
      question: "Quelle est la plus grande bourse du monde ?",
      answers: ["Londres", "Tokyo", "New York (NYSE)"],
      correct: 2,
      explanation: "La Bourse de New York (NYSE) est la plus grande du monde. réussitess971 : positivité à l'infini boudoume!"
    }
  ],
  Sciences: [
    {
      question: "Quelle est la formule chimique de l'eau ?",
      answers: ["CO2", "H2O", "NaCl"],
      correct: 1,
      explanation: "H2O représente deux atomes d'hydrogène et un d'oxygène. réussitess971 : la science mène au succès!"
    },
    {
      question: "Qui a découvert la pénicilline ?",
      answers: ["Louis Pasteur", "Alexander Fleming", "Marie Curie"],
      correct: 1,
      explanation: "Alexander Fleming a découvert la pénicilline en 1928. réussitess971 : positivité à l'infini boudoume!"
    }
  ],
  Histoire: [
    {
      question: "En quelle année a eu lieu la Révolution française ?",
      answers: ["1789", "1776", "1815"],
      correct: 0,
      explanation: "La Révolution française a commencé en 1789 avec la prise de la Bastille. réussitess971 : l'histoire forge l'avenir!"
    },
    {
      question: "Qui était le premier empereur de Rome ?",
      answers: ["Jules César", "Auguste", "Néron"],
      correct: 1,
      explanation: "Auguste (Octave) fut le premier empereur romain en 27 av. J.-C. réussitess971 : positivité à l'infini boudoume!"
    }
  ],
  Geographie: [
    {
      question: "Quel est le plus long fleuve du monde ?",
      answers: ["Amazone", "Nil", "Mississippi"],
      correct: 1,
      explanation: "Le Nil mesure environ 6 650 km de long. réussitess971 : explorez le monde avec passion!"
    },
    {
      question: "Quelle est la capitale de l'Australie ?",
      answers: ["Sydney", "Melbourne", "Canberra"],
      correct: 2,
      explanation: "Canberra est la capitale de l'Australie depuis 1913. réussitess971 : positivité à l'infini boudoume!"
    }
  ],
  Tech: [
    {
      question: "Qui a créé Facebook ?",
      answers: ["Bill Gates", "Mark Zuckerberg", "Steve Jobs"],
      correct: 1,
      explanation: "Mark Zuckerberg a créé Facebook en 2004 à Harvard. réussitess971 : l'innovation change le monde!"
    },
    {
      question: "Quel langage de programmation est le plus utilisé ?",
      answers: ["Python", "JavaScript", "Java"],
      correct: 1,
      explanation: "JavaScript domine le web depuis plus de 25 ans. réussitess971 : positivité à l'infini boudoume!"
    }
  ],
  Sport: [
    {
      question: "Combien de joueurs composent une équipe de football ?",
      answers: ["10", "11", "12"],
      correct: 1,
      explanation: "Une équipe de football compte 11 joueurs sur le terrain. réussitess971 : le sport, c'est l'excellence!"
    },
    {
      question: "Qui détient le record de médailles d'or olympiques ?",
      answers: ["Usain Bolt", "Michael Phelps", "Carl Lewis"],
      correct: 1,
      explanation: "Michael Phelps a remporté 23 médailles d'or olympiques! réussitess971 : positivité à l'infini boudoume!"
    }
  ],
  Musique: [
    {
      question: "Qui a composé la 9ème Symphonie ?",
      answers: ["Mozart", "Beethoven", "Bach"],
      correct: 1,
      explanation: "Beethoven a composé sa célèbre 9ème Symphonie en 1824. réussitess971 : la musique élève l'âme!"
    },
    {
      question: "Quel instrument a 88 touches ?",
      answers: ["Orgue", "Piano", "Accordéon"],
      correct: 1,
      explanation: "Un piano standard possède 88 touches. réussitess971 : positivité à l'infini boudoume!"
    }
  ]
};

// Boutiques Amazon - Personal (14)
const boutiquesPersonal = [
  { country: "États-Unis", flag: "🇺🇸", url: "https://www.amazon.com/shop/amourguadeloupe", cta: "Visit the Store", disclaimer: "As an affiliate, I earn commissions on certain products" },
  { country: "France", flag: "🇫🇷", url: "https://www.amazon.fr/shop/amourguadeloupe", cta: "Visiter la Boutique", disclaimer: "En tant qu'affiliée, je gagne des commissions sur certains produits" },
  { country: "Allemagne", flag: "🇩🇪", url: "https://www.amazon.de/shop/amourguadeloupe", cta: "Shop Besuchen", disclaimer: "Als Partner verdiene ich an qualifizierten Käufen" },
  { country: "Italie", flag: "🇮🇹", url: "https://www.amazon.it/shop/amourguadeloupe", cta: "Visita il Negozio", disclaimer: "Come affiliata, guadagno commissioni su alcuni prodotti" },
  { country: "Espagne", flag: "🇪🇸", url: "https://www.amazon.es/shop/amourguadeloupe", cta: "Visitar la Tienda", disclaimer: "Como afiliada, gano comisiones en ciertos productos" },
  { country: "Royaume-Uni", flag: "🇬🇧", url: "https://www.amazon.co.uk/shop/amourguadeloupe", cta: "Visit the Store", disclaimer: "As an affiliate, I earn commissions on certain products" },
  { country: "Canada", flag: "🇨🇦", url: "https://www.amazon.ca/shop/amourguadeloupe", cta: "Visit the Store", disclaimer: "As an affiliate, I earn commissions on certain products" },
  { country: "Inde", flag: "🇮🇳", url: "https://www.amazon.in/shop/amourguadeloupe", cta: "Visit the Store", disclaimer: "As an affiliate, I earn commissions on certain products" },
  { country: "Australie", flag: "🇦🇺", url: "https://www.amazon.com.au/shop/amourguadeloupe", cta: "Visit the Store", disclaimer: "As an affiliate, I earn commissions on certain products" },
  { country: "Pays-Bas", flag: "🇳🇱", url: "https://www.amazon.nl/shop/amourguadeloupe", cta: "Bezoek de Winkel", disclaimer: "Als partner verdien ik commissie op bepaalde producten" },
  { country: "Suède", flag: "🇸🇪", url: "https://www.amazon.se/shop/amourguadeloupe", cta: "Besök Butiken", disclaimer: "Som partner tjänar jag provision på vissa produkter" },
  { country: "Singapour", flag: "🇸🇬", url: "https://www.amazon.sg/shop/amourguadeloupe", cta: "Visit the Store", disclaimer: "As an affiliate, I earn commissions on certain products" },
  { country: "Belgique", flag: "🇧🇪", url: "https://www.amazon.com.be/shop/amourguadeloupe", cta: "Visiter la Boutique", disclaimer: "En tant qu'affiliée, je gagne des commissions sur certains produits" },
  { country: "Brésil", flag: "🇧🇷", url: "https://www.amazon.com.br/shop/amourguadeloupe", cta: "Visite a Loja", disclaimer: "Como afiliada, ganho comissões em certos produtos" }
];

// Boutiques Amazon - Influencer (12)
const boutiquesInfluencer = [
  { country: "États-Unis ⭐", flag: "🇺🇸", url: "https://www.amazon.com/shop/influencer-fb942837", cta: "Visit the Store", disclaimer: "As an affiliate, I earn commissions on certain products" },
  { country: "Royaume-Uni ⭐", flag: "🇬🇧", url: "https://www.amazon.co.uk/shop/influencer-fb942837", cta: "Visit the Store", disclaimer: "As an affiliate, I earn commissions on certain products" },
  { country: "Allemagne ⭐", flag: "🇩🇪", url: "https://www.amazon.de/shop/influencer-fb942837", cta: "Shop Besuchen", disclaimer: "Als Partner verdiene ich an qualifizierten Käufen" },
  { country: "Italie ⭐", flag: "🇮🇹", url: "https://www.amazon.it/shop/influencer-fb942837", cta: "Visita il Negozio", disclaimer: "Come affiliata, guadagno commissioni su alcuni prodotti" },
  { country: "Espagne ⭐", flag: "🇪🇸", url: "https://www.amazon.es/shop/influencer-fb942837", cta: "Visitar la Tienda", disclaimer: "Como afiliada, gano comisiones en ciertos productos" },
  { country: "Canada ⭐", flag: "🇨🇦", url: "https://www.amazon.ca/shop/influencer-fb942837", cta: "Visit the Store", disclaimer: "As an affiliate, I earn commissions on certain products" },
  { country: "Inde ⭐", flag: "🇮🇳", url: "https://www.amazon.in/shop/influencer-fb942837", cta: "Visit the Store", disclaimer: "As an affiliate, I earn commissions on certain products" },
  { country: "Australie ⭐", flag: "🇦🇺", url: "https://www.amazon.com.au/shop/influencer-fb942837", cta: "Visit the Store", disclaimer: "As an affiliate, I earn commissions on certain products" },
  { country: "Pays-Bas ⭐", flag: "🇳🇱", url: "https://www.amazon.nl/shop/influencer-fb942837", cta: "Bezoek de Winkel", disclaimer: "Als partner verdien ik commissie op bepaalde producten" },
  { country: "Suède ⭐", flag: "🇸🇪", url: "https://www.amazon.se/shop/influencer-fb942837", cta: "Besök Butiken", disclaimer: "Som partner tjänar jag provision på vissa produkter" },
  { country: "Singapour ⭐", flag: "🇸🇬", url: "https://www.amazon.sg/shop/influencer-fb942837", cta: "Visit the Store", disclaimer: "As an affiliate, I earn commissions on certain products" },
  { country: "Belgique ⭐", flag: "🇧🇪", url: "https://www.amazon.com.be/shop/influencer-fb942837", cta: "Visiter la Boutique", disclaimer: "En tant qu'affiliée, je gagne des commissions sur certains produits" }
];

// All boutiques combined
const boutiques = [...boutiquesPersonal, ...boutiquesInfluencer];

// Messages de positivité
const positivityMessages = [
  "Positivité à l'infini boudoume!",
  "Ta réussite fait progresser le monde.",
  "Construis l'innovation, partage l'excellence.",
  "réussitess971, le bot du succès universel!",
  "Chaque jour est une nouvelle opportunité de briller!",
  "L'excellence n'est pas un acte, c'est une habitude.",
  "Ton potentiel est illimité, crois en toi!",
  "Le succès commence par une pensée positive.",
  "Ensemble, construisons un monde meilleur!",
  "L'innovation est la clé de l'avenir."
];

// Fun Facts
const funFacts = [
  "Les leaders lisent plus de 50 livres par an.",
  "Le sourire augmente la réussite et réduit le stress.",
  "Apprendre chaque jour, c'est grandir chaque jour.",
  "Les personnes positives vivent en moyenne 7 ans de plus.",
  "L'exercice physique améliore la mémoire de 20%.",
  "Écrire ses objectifs multiplie par 10 les chances de les atteindre.",
  "Le cerveau humain génère environ 70 000 pensées par jour.",
  "La gratitude quotidienne améliore le sommeil et l'humeur."
];

// ==================== VARIABLES GLOBALES ====================

let currentQuiz = null;
let currentQuestionIndex = 0;
let score = 0;
let answered = false;

// ==================== INITIALISATION ====================

document.addEventListener('DOMContentLoaded', () => {
  renderQuizCategories();
  renderBoutiques();
  changeMessage();
  changeFunFact();
  
  // Smooth scrolling for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});

// ==================== QUIZ FUNCTIONS ====================

function renderQuizCategories() {
  const container = document.getElementById('quiz-categories');
  container.innerHTML = quizCategories.map(cat => `
    <div class="quiz-category" onclick="startQuiz('${cat.id}')">
      <span class="category-icon">${cat.icon}</span>
      <span class="category-name">${cat.name}</span>
    </div>
  `).join('');
}

function startQuiz(categoryId) {
  const questions = quizData[categoryId];
  if (!questions || questions.length === 0) {
    alert("Ce quiz sera bientôt disponible! 🚀 réussitess971 : positivité à l'infini boudoume!");
    return;
  }
  
  currentQuiz = { categoryId, questions };
  currentQuestionIndex = 0;
  score = 0;
  answered = false;
  
  document.getElementById('quiz-categories').classList.add('hidden');
  document.getElementById('quiz-container').classList.remove('hidden');
  document.getElementById('quiz-score').classList.add('hidden');
  
  renderQuestion();
}

function renderQuestion() {
  const question = currentQuiz.questions[currentQuestionIndex];
  
  document.getElementById('quiz-domain').textContent = `Quiz ${currentQuiz.categoryId}`;
  document.getElementById('quiz-progress').textContent = 
    `Question ${currentQuestionIndex + 1}/${currentQuiz.questions.length}`;
  document.getElementById('quiz-question').textContent = question.question;
  
  const answersContainer = document.getElementById('quiz-answers');
  answersContainer.innerHTML = question.answers.map((answer, index) => `
    <button class="answer-btn" onclick="selectAnswer(${index})">${answer}</button>
  `).join('');
  
  document.getElementById('quiz-explanation').classList.add('hidden');
  document.getElementById('next-btn').classList.add('hidden');
  answered = false;
}

function selectAnswer(index) {
  if (answered) return;
  answered = true;
  
  const question = currentQuiz.questions[currentQuestionIndex];
  const buttons = document.querySelectorAll('.answer-btn');
  
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === question.correct) {
      btn.classList.add('correct');
    } else if (i === index) {
      btn.classList.add('wrong');
    }
  });
  
  if (index === question.correct) {
    score++;
  }
  
  const explanation = document.getElementById('quiz-explanation');
  explanation.textContent = question.explanation;
  explanation.classList.remove('hidden');
  
  const nextBtn = document.getElementById('next-btn');
  if (currentQuestionIndex < currentQuiz.questions.length - 1) {
    nextBtn.textContent = "Question Suivante →";
    nextBtn.classList.remove('hidden');
    nextBtn.onclick = nextQuestion;
  } else {
    nextBtn.textContent = "Voir les Résultats 🎉";
    nextBtn.classList.remove('hidden');
    nextBtn.onclick = showResults;
  }
}

function nextQuestion() {
  currentQuestionIndex++;
  renderQuestion();
}

function showResults() {
  const percentage = Math.round((score / currentQuiz.questions.length) * 100);
  let message = "";
  
  if (percentage === 100) {
    message = "🏆 Parfait! Tu es un champion! Excellence à l'infini boudoume!";
  } else if (percentage >= 80) {
    message = "🌟 Excellent! Continue comme ça! réussitess971 : succès assuré!";
  } else if (percentage >= 60) {
    message = "👍 Bien joué! Tu progresses! Positivité à l'infini boudoume!";
  } else {
    message = "💪 Continue d'apprendre! Chaque jour est une nouvelle chance!";
  }
  
  document.getElementById('quiz-question').classList.add('hidden');
  document.getElementById('quiz-answers').classList.add('hidden');
  document.getElementById('quiz-explanation').classList.add('hidden');
  document.getElementById('next-btn').classList.add('hidden');
  
  const scoreDiv = document.getElementById('quiz-score');
  document.getElementById('score-text').innerHTML = `
    <p style="font-size: 3rem; margin-bottom: 1rem;">${score}/${currentQuiz.questions.length}</p>
    <p style="font-size: 1.5rem; margin-bottom: 1rem;">${percentage}%</p>
    <p>${message}</p>
  `;
  scoreDiv.classList.remove('hidden');
}

function resetQuiz() {
  document.getElementById('quiz-container').classList.add('hidden');
  document.getElementById('quiz-categories').classList.remove('hidden');
  document.getElementById('quiz-question').classList.remove('hidden');
  document.getElementById('quiz-answers').classList.remove('hidden');
  currentQuiz = null;
}

// ==================== BOUTIQUES FUNCTIONS ====================

function renderBoutiques() {
  const container = document.getElementById('boutiques-grid');
  container.innerHTML = boutiques.map(shop => `
    <div class="boutique-card">
      <div class="boutique-flag">${shop.flag}</div>
      <div class="boutique-name">${shop.country}</div>
      <a href="${shop.url}" target="_blank" rel="noopener noreferrer nofollow sponsored" class="boutique-btn">
        🛍️ ${shop.cta}
      </a>
      <div class="boutique-disclaimer">🔒 ${shop.disclaimer}</div>
    </div>
  `).join('');
}

// ==================== POSITIVITÉ FUNCTIONS ====================

function changeMessage() {
  const randomIndex = Math.floor(Math.random() * positivityMessages.length);
  document.getElementById('positivite-message').textContent = positivityMessages[randomIndex];
}

function changeFunFact() {
  const randomIndex = Math.floor(Math.random() * funFacts.length);
  document.getElementById('fun-fact-text').textContent = funFacts[randomIndex];
}

// ==================== MASCOTTE FUNCTIONS ====================

function showMotivation() {
  const messages = [
    "🌟 Tu es capable de grandes choses!",
    "💪 Continue, tu es sur la bonne voie!",
    "🚀 L'excellence t'attend!",
    "✨ Positivité à l'infini boudoume!",
    "🎯 Chaque pas compte vers le succès!",
    "🌈 Crois en toi et en tes rêves!"
  ];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  alert(randomMessage + "\n\nréussitess971 - Excellence, Innovation, Succès!");
}

// Animate mascotte on scroll
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
  const mascotte = document.getElementById('floating-mascotte');
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop) {
    mascotte.style.transform = 'scale(0.9) rotate(-10deg)';
  } else {
    mascotte.style.transform = 'scale(1.1) rotate(10deg)';
  }
  
  setTimeout(() => {
    mascotte.style.transform = 'scale(1) rotate(0deg)';
  }, 300);
  
  lastScrollTop = scrollTop;
});

// Console signature
console.log(`
🌟 REUSSITESS® 971 🌟
=====================
Excellence • Innovation • Succès

réussitess971 - positivité à l'infini boudoume!

Visitez nos 26 boutiques Amazon dans 14 pays!
`);
