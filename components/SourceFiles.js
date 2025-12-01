export const sources = {
  analytics: `
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// ... (tout le code de analytics.js ici en texte)
`.trim(),
  affiliation: `
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// ... (tout le code de affiliation.js ici en texte)
`.trim(),
  badges: `
export default [
  { id: 'globetrotter', label: 'Globetrotter', emoji: '🌍', condition: 'A posé 10 questions' },
  { id: 'culture-star', label: 'Culture Star', emoji: '🏆', condition: 'A réussi un quiz' },
  { id: 'amazon-master', label: 'Amazon Master', emoji: '🛍️', condition: 'A demandé 5 fois sur les boutiques' }
];
`.trim(),
  quizbank: `
export default [
  {
    question: "Quel pays détient le plus de sites UNESCO au monde ?",
    options: ["France", "Italie", "Brésil"],
    answer: "Italie"
  },
  {
    question: "Quel est le surnom de la Guadeloupe ?",
    options: ["Terre de Champions", "Amazon Paradise", "Culture Queen"],
    answer: "Terre de Champions"
  }
];
`.trim(),
  visitorstats: `
import { useEffect, useState } from "react";
export default function VisitorStats() {
  // ...
}
`.trim()
  // Tu peux continuer pour index, config, etc.
};