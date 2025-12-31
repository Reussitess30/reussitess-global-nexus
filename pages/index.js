"use client";
import Layout from "../components/Layout";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const quizCategories = [
    { id: "Gastronomie", name: "Gastronomie", icon: "🍽️", color: "#ff6b6b" },
    { id: "Histoire", name: "Histoire", icon: "📚", color: "#4ecdc4" },
    { id: "Géographie", name: "Géographie", icon: "🌍", color: "#45b7d1" },
    { id: "Sciences", name: "Sciences", icon: "🔬", color: "#96ceb4" },
    { id: "Art", name: "Art", icon: "🎨", color: "#ffeaa7" },
    { id: "Musique", name: "Musique", icon: "🎵", color: "#fd79a8" },
    { id: "Cinéma", name: "Cinéma", icon: "🎬", color: "#a29bfe" },
    { id: "Sport", name: "Sport", icon: "⚽", color: "#74b9ff" },
    { id: "Tech", name: "Technologie", icon: "💻", color: "#00b894" },
    { id: "Langue", name: "Langues", icon: "🗣️", color: "#fdcb6e" },
    { id: "Maths", name: "Mathématiques", icon: "🔢", color: "#e17055" },
    { id: "Politique", name: "Politique", icon: "🏛️", color: "#636e72" },
    { id: "Philosophie", name: "Philosophie", icon: "🤔", color: "#6c5ce7" },
    { id: "Innovations", name: "Innovations", icon: "💡", color: "#f39c12" },
    { id: "Environnement", name: "Environnement", icon: "🌱", color: "#27ae60" },
    { id: "Santé", name: "Santé", icon: "⚕️", color: "#e74c3c" },
    { id: "Business", name: "Business", icon: "💼", color: "#2c3e50" },
    { id: "Monuments", name: "Monuments", icon: "🏰", color: "#95a5a6" },
    { id: "Personnalités", name: "Personnalités", icon: "👤", color: "#d63031" },
    { id: "Culture_du_Monde", name: "Culture du Monde", icon: "🌏", color: "#00cec9" },
    { id: "Découvertes", name: "Découvertes", icon: "🔭", color: "#0984e3" },
    { id: "Internet", name: "Internet", icon: "🌐", color: "#6c5ce7" },
    { id: "Positivité", name: "Positivité", icon: "😊", color: "#fdcb6e" },
    { id: "Amazon_Affiliation", name: "Amazon Affiliation", icon: "🛍️", color: "#ff9f43" },
    { id: "Boutique_Motivation", name: "Boutique Motivation", icon: "🚀", color: "#ee5a6f" },
  ];

  return (
    <Layout>
      <div style={{ minHeight: "70vh", background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", padding: "4rem 1rem" }}>
        <div style={{ textAlign: "center", color: "white", zIndex: 1, maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ fontSize: "5rem", marginBottom: "1rem" }}>🎯</div>
          <h1 style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)", fontWeight: "900", marginBottom: "1.5rem", textShadow: "0 4px 30px rgba(0,0,0,0.3)" }}>REUSSITESS®971</h1>
          
          {/* BOUTON AIRPODS (Le petit unique) */}
          <div style={{ marginBottom: "1.5rem" }}>
            <Link href="/passe-port-mondial" style={{ background: "#00ff41", color: "black", padding: "0.8rem 2rem", borderRadius: "50px", textDecoration: "none", fontSize: "1rem", fontWeight: "900", border: "2px solid #000" }}>
              🎧 ACCÈS AIRPODS PRO
            </Link>
          </div>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
            <a href="https://mlc.health/fr/byg727" target="_blank" style={{ background: "#0072ff", color: "white", padding: "1rem 2rem", borderRadius: "50px", textDecoration: "none", fontWeight: "bold" }}>🩺 MLC Health</a>
            <p style={{ fontSize: "0.8rem", color: "#00c6ff", marginTop: "-5px", marginBottom: "10px", maxWidth: "300px" }}>Diagnostic Médical par IA & Prévention Santé - Rejoignez le futur de la MedTech</p>
            <Link href="/investir-reuss" style={{ background: "linear-gradient(135deg, #ffd700 0%, #b8860b 100%)", color: "black", padding: "1rem 2rem", borderRadius: "50px", textDecoration: "none", fontWeight: "900", border: "2px solid #fff" }}>💎 INVESTIR DANS REUSSITESS©</Link>
            <p style={{ fontSize: "0.8rem", color: "#ffd700", marginTop: "-5px", marginBottom: "15px", maxWidth: "300px" }}>Propriété Fractionnée & Dividendes MedTech - L’élite financière des 14 nations.</p>
            <Link href="/champions" style={{ background: "linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #ffd700 100%)", color: "#1e293b", padding: "1rem 2rem", borderRadius: "50px", textDecoration: "none", fontWeight: "900" }}>🏆 Passeport de Réussite</Link>
            <Link href="/visa-universel" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)", color: "white", padding: "1rem 2rem", borderRadius: "50px", textDecoration: "none", fontWeight: "900" }}>🌍 VISA UNIVERSEL</Link>
            <a href="https://reussitess-global-nexus-jfgk-git-copilo-3f98a8-porinus-projects.vercel.app/" target="_blank" style={{ background: "linear-gradient(135deg, #f5576c 0%, #f093fb 100%)", color: "white", padding: "1rem 2rem", borderRadius: "50px", textDecoration: "none", fontWeight: "bold" }}>🎯 Version Alternative</a>
            <a href="https://www.amazon.fr/shop/amourguadeloupe" target="_blank" style={{ background: "linear-gradient(135deg, #10b981 0%, #059669 100%)", color: "white", padding: "1rem 2rem", borderRadius: "50px", textDecoration: "none", fontWeight: "bold" }}>🎮 🇫🇷 France Amazon Officiel</a>
            <Link href="/ia-passport" style={{ background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)', color: 'white', padding: '1rem 2rem', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold' }}>🌍 IA PASSPORT MONDIAL - Révolution 2025</Link><Link href="/neuro-x" style={{ background: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)", color: "white", padding: "1rem 2rem", borderRadius: "50px", textDecoration: "none", fontWeight: "900", border: "2px solid rgba(255,255,255,0.3)" }}>🧠 Reussitess©©NEURO-X</Link>
            <Link href="https://shop.reussitess.fr/" target="_blank" style={{ background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", color: "white", padding: "1rem 2rem", borderRadius: "50px", textDecoration: "none", fontWeight: "bold" }}>🏪 Visitez Notre Shop</Link>
          </div>
        </div>
      </div>

      <div style={{ background: "#0f172a", padding: "5rem 0" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "2rem" }}>
          {quizCategories.map((quiz, index) => (
            <Link key={index} href={`/quiz/${quiz.id}`} style={{ textDecoration: "none" }}>
              <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: "20px", padding: "2rem", textAlign: "center", borderTop: `5px solid ${quiz.color}` }}>
                <div style={{ fontSize: "3rem" }}>{quiz.icon}</div>
                <h3 style={{ color: "white" }}>{quiz.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
