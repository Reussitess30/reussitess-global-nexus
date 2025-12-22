import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const QuizGame = dynamic(() => import("../../components/QuizGame"), { ssr: false });

export default function QuizPage() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return null;

  let quizData;
  try {
    // Tous les quiz sont maintenant au même niveau (racine)
    quizData = require(`../../quiz_${id}.js`).default;
  } catch (err) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-slate-900">
        <p>Quiz "{id}" non trouvé</p>
      </div>
    );
  }

  return <QuizGame quizData={quizData} categoryId={id} />;
}
