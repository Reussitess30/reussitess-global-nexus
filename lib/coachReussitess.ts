export type CoachPlanStep = {
  id: number;
  titre: string;
  description: string;
  duree: string;
};

export type CoachPlan = {
  objectif: string;
  niveau: "debutant" | "intermediaire" | "avance";
  tempsParSemaineHeures: number;
  budget: "serre" | "confort" | "premium";
  etapes: CoachPlanStep[];
};

export function genererPlanReussitess(params: {
  objectif: string;
  niveau?: "debutant" | "intermediaire" | "avance";
  tempsParSemaineHeures?: number;
  budget?: "serre" | "confort" | "premium";
}): CoachPlan {
  const niveau = params.niveau ?? "debutant";
  const tempsParSemaineHeures = params.tempsParSemaineHeures ?? 3;
  const budget = params.budget ?? "serre";

  const base: CoachPlan = {
    objectif: params.objectif,
    niveau,
    tempsParSemaineHeures,
    budget,
    etapes: [],
  };

  base.etapes.push({
    id: 1,
    titre: "Clarifier ton objectif",
    description:
      "Définir précisément ce que tu veux obtenir, en combien de temps et pourquoi c’est important pour toi.",
    duree: "Jour 1",
  });

  base.etapes.push({
    id: 2,
    titre: "Mettre en place ton environnement",
    description:
      "Organiser ton temps hebdomadaire, préparer ton espace de travail et les outils essentiels.",
    duree: "Jour 2–3",
  });

  base.etapes.push({
    id: 3,
    titre: "Routine hebdomadaire de progression",
    description:
      "Planifier des sessions régulières pour avancer sur ton objectif, avec un point de contrôle chaque semaine.",
    duree: "Chaque semaine",
  });

  base.etapes.push({
    id: 4,
    titre: "Bilan et ajustements",
    description:
      "Analyser les résultats après 30 jours, ajuster la stratégie et renforcer ce qui fonctionne.",
    duree: "Après 30 jours",
  });

  return base;
}
