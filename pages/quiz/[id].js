import { useRouter } from "next/router";
import QuizGame from "../../components/QuizGame";

// Importations des quiz standards
import Art from "../../quiz_Art.js";
import Business from "../../quiz_Business.js";
import Cinéma from "../../quiz_Cinéma.js";
import Culture_du_Monde from "../../quiz_Culture_du_Monde.js";
import Découvertes from "../../quiz_Découvertes.js";
import Environnement from "../../quiz_Environnement.js";
import Gastronomie from "../../quiz_Gastronomie.js";
import Géographie from "../../quiz_Géographie.js";
import Histoire from "../../quiz_Histoire.js";
import Innovations from "../../quiz_Innovations.js";
import Langue from "../../quiz_Langue.js";
import Maths from "../../quiz_Maths.js";
import Monuments from "../../quiz_Monuments.js";
import Musique from "../../quiz_Musique.js";
import Personnalités from "../../quiz_Personnalités.js";
import Politique from "../../quiz_Politique.js";
import Santé from "../../quiz_Santé.js";
import Sciences from "../../quiz_Sciences.js";
import Sport from "../../quiz_Sport.js";
import Tech from "../../quiz_Tech.js";

// Importation du nouveau quiz dans le dossier V2
import Excellence971 from "../../public/reussitess971_v2/quiz_Excellence971.js";

const quizData = {
  Art, Business, Cinéma, Culture_du_Monde, Découvertes,
  Environnement, Gastronomie, Géographie, Histoire, Innovations,
  Langue, Maths, Monuments, Musique, Personnalités,
  Politique, Santé, Sciences, Sport, Tech,
  Excellence971
};

export default function QuizPage() {
  const router = useRouter();
  const { id } = router.query;
  const data = quizData[id];

  if (!data) return <div className="min-h-screen flex items-center justify-center text-white">Chargement du quiz...</div>;

  return <QuizGame quizData={data} categoryId={id} />;
}
