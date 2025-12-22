import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const QuizGame = dynamic(() => import("../../components/QuizGame"), { ssr: false });

export default function QuizPage() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return null;

  // On essaie de charger le fichier dynamiquement
  let quizData;
  try {
    if (id === "Excellence971") {
      quizData = require("../../public/reussitess971_v2/quiz_Excellence971.js").default;
    } else {
      quizData = require(`../../quiz_${id}.js`).default;
    }
  } catch (err) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white bg-slate-900">
        <h1 className="text-2xl font-bold mb-4">Quiz non trouvé</h1>
        <button onClick={() => window.location.href="/"} className="px-4 py-2 bg-blue-600 rounded">
          Retour à l'accueil
        </button>
      </div>
    );
  }

  return <QuizGame quizData={quizData} categoryId={id} />;
}
