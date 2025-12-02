const { pronounceSuccessSignature } = require('./superbot-signature');
const boutiques = require('./boutiques');
const positivite = require('./positivite');

function showMotivation() {
  const msg = positivite.messages[Math.floor(Math.random() * positivite.messages.length)];
  console.log(msg);
}

function showBoutiqueInfo() {
  console.log(boutiques.message);
  boutiques.shopLinks.forEach(link => console.log(`${link.name}: ${link.url}`));
}

function askQuiz(quizModule) {
  quizModule.questions.forEach(q => {
    console.log("Q:", q.question);
    q.answers.forEach((a, i) => console.log(`${i+1}. ${a}`));
    console.log("→ ", q.explanation);
  });
}

function runBot() {
  pronounceSuccessSignature();
  showMotivation();
  showBoutiqueInfo();
  // exemple avec quiz Histoire (charge dynamiquement quiz souhaité)
  const quiz_Histoire = require('./quiz_Histoire');
  askQuiz(quiz_Histoire);
}

runBot();
