import { useRef } from "react";
import type { NextPage } from "next";

const HomePage: NextPage = () => {
  const superBotRef = useRef<HTMLDivElement | null>(null);

  const handleOpenCoach = () => {
    if (superBotRef.current) {
      superBotRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (typeof window !== "undefined") {
      // Point d'accroche pour ton widget SuperBot si tu en as un en global
      // ;(window as any).SuperBot?.openCoach?.()
    }
  };

  return (
    <>
      <main>
        {/* SECTION HERO COACH REUSSITESS */}
        <section className="py-16 bg-emerald-900 text-white text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            Crée ton plan de réussite personnalisé
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            Réponds à quelques questions et laisse le SuperBot Reussitess
            construire un plan d&apos;action adapté à ta vie en Guadeloupe et
            dans toute la francophonie.
          </p>
          <button
            onClick={handleOpenCoach}
            className="mt-8 px-8 py-3 rounded-full bg-amber-400 text-emerald-950 text-lg font-semibold shadow-lg hover:bg-amber-300 transition"
          >
            Créer mon plan de réussite
          </button>
        </section>

        {/* ANCRAGE POUR TON SUPERBOT EXISTANT */}
        <section ref={superBotRef} className="py-8">
          {/* Remplace ce commentaire par ton composant de bot existant
              exemple : <SuperBot /> ou <ChatBotReussitess /> */}
        </section>
      </main>
    </>
  );
};

export default HomePage;
