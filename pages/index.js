"use client";

import Layout from "../components/Layout";
import Link from "next/link";
import { useState } from "react";
import BotAssistant from "../components/BotAssistant";

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
    { id: "Tech" }, { id: "Excellence971", title: "🌴 Excellence 971", color: "from-yellow-500 to-red-600", name: "Technologie", icon: "💻", color: "#00b894" },
    { id: "Langue", name: "Langues", icon: "🗣️", color: "#fdcb6e" },
    { id: "Maths", name: "Mathématiques", icon: "🔢", color: "#e17055" },
    { id: "Politique", name: "Politique", icon: "🏛️", color: "#636e72" },
    { id: "Philosophie", name: "Philosophie", icon: "🤔", color: "#6c5ce7" },
    { id: "Innovations", name: "Innovations", icon: "💡", color: "#f39c12" },
    {
      id: "Environnement",
      name: "Environnement",
      icon: "🌱",
      color: "#27ae60",
    },
    { id: "Santé", name: "Santé", icon: "⚕️", color: "#e74c3c" },
    { id: "Business", name: "Business", icon: "💼", color: "#2c3e50" },
    { id: "Monuments", name: "Monuments", icon: "🏰", color: "#95a5a6" },
    {
      id: "Personnalités",
      name: "Personnalités",
      icon: "👤",
      color: "#d63031",
    },
    {
      id: "Culture_du_Monde",
      name: "Culture du Monde",
      icon: "🌏",
      color: "#00cec9",
    },
    { id: "Découvertes", name: "Découvertes", icon: "🔭", color: "#0984e3" },
    { id: "Internet", name: "Internet", icon: "🌐", color: "#6c5ce7" },
    { id: "Positivité", name: "Positivité", icon: "😊", color: "#fdcb6e" },
    {
      id: "Amazon_Affiliation",
      name: "Amazon Affiliation",
      icon: "🛍️",
      color: "#ff9f43",
    },
    {
      id: "Boutique_Motivation",
      name: "Boutique Motivation",
      icon: "🚀",
      color: "#ee5a6f",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div
        style={{
          minHeight: "70vh",
          background:
            "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          padding: "4rem 1rem",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "10%",
            width: "300px",
            height: "300px",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "50%",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "10%",
            width: "250px",
            height: "250px",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "50%",
            filter: "blur(60px)",
          }}
        />

        <div
          style={{
            textAlign: "center",
            color: "white",
            zIndex: 1,
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              fontSize: "5rem",
              marginBottom: "1rem",
              animation: "float 3s ease-in-out infinite",
            }}
          >
            🎯
          </div>

          <h1
            style={{
              fontSize: "clamp(2.5rem, 8vw, 5rem)",
              fontWeight: "900",
              marginBottom: "1.5rem",
              textShadow: "0 4px 30px rgba(0,0,0,0.3)",
              letterSpacing: "-1px",
            }}
          >
            REUSSITESS®971
          </h1>

          <p
            style={{
              fontSize: "clamp(1.2rem, 3vw, 2rem)",
              marginBottom: "2rem",
              opacity: 0.95,
              fontWeight: "600",
            }}
          >
            25 Quiz Thématiques - Testez vos connaissances !
          </p>

          <div
            style={{
              display: "flex",
              gap: "3rem",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "1rem",
            }}
          >
            {[
              { num: "25", label: "Quiz", icon: "📝" },
              { num: "5", label: "Questions / Quiz", icon: "❓" },
              { num: "∞", label: "Astuces", icon: "💡" },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(15px)",
                  padding: "1.5rem 2rem",
                  borderRadius: "20px",
                  border: "2px solid rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                }}
              >
                <span style={{ fontSize: "2rem", marginRight: "0.5rem" }}>
                  {stat.icon}
                </span>
                <span style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
                  {stat.num}
                </span>
                <div
                  style={{
                    fontSize: "1rem",
                    marginTop: "0.5rem",
                    opacity: 0.9,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Bouton Passeport de Réussite */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
              marginBottom: "2rem",
            }}
          >
            <Link
              href="/champions"
              style={{
                background:
                  "linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #ffd700 100%)",
                color: "#1e293b",
                padding: "1.5rem 3rem",
                borderRadius: "50px",
                textDecoration: "none",
                fontSize: "1.3rem",
                fontWeight: "900",
                boxShadow:
                  "0 10px 40px rgba(255, 215, 0, 0.5), 0 0 20px rgba(255, 215, 0, 0.3)",
                transition: "all 0.3s ease",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                border: "3px solid rgba(255, 255, 255, 0.3)",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
              className="btn-passeport"
            >
              🏆 Passeport de Réussite REUSSITESS®971
            </Link>
          </div>

          {/* Bouton VISA UNIVERSEL */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "2rem",
            }}
          >
            <Link
              href="/visa-universel"
              style={{
                background:
                  "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
                color: "white",
                padding: "1.5rem 3rem",
                borderRadius: "50px",
                textDecoration: "none",
                fontSize: "1.3rem",
                fontWeight: "900",
                boxShadow:
                  "0 10px 40px rgba(102, 126, 234, 0.6), 0 0 20px rgba(118, 75, 162, 0.3)",
                transition: "all 0.3s ease",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                border: "3px solid rgba(255, 255, 255, 0.3)",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
              className="btn-visa"
            >
              🌍 VISA UNIVERSEL DE RÉUSSITE
            </Link>
          </div>

          {/* Boutons Version Alternative et Version 2 */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "1rem",
            }}
          >
            <a
              href="https://reussitess-global-nexus-jfgk-git-copilo-3f98a8-porinus-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "linear-gradient(135deg, #f5576c 0%, #f093fb 100%)",
                color: "white",
                padding: "1rem 2.5rem",
                borderRadius: "50px",
                textDecoration: "none",
                fontSize: "1.1rem",
                fontWeight: "bold",
                boxShadow: "0 8px 25px rgba(245, 87, 108, 0.4)",
                transition: "all 0.3s ease",
                display: "inline-block",
              }}
              className="btn-alternative"
            >
              🎯 Version Alternative
            </a>

            <a
              href="https://www.amazon.fr/shop/amourguadeloupe"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                color: "white",
                padding: "1rem 2.5rem",
                borderRadius: "50px",
                textDecoration: "none",
                fontSize: "1.1rem",
                fontWeight: "bold",
                boxShadow: "0 8px 25px rgba(16, 185, 129, 0.4)",
                transition: "all 0.3s ease",
                display: "inline-block",
              }}
              className="btn-version2"
            >
              🎮 🇫🇷 France Amazon Officiel
            </a>

            <Link 
              href="/ia-passport"
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
                color: 'white',
                padding: '1rem 2.5rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                boxShadow: '0 8px 25px rgba(16, 185, 129, 0.4)',
                transition: 'all 0.3s ease',
                display: 'inline-block'
              }}
              className="btn-ia-passport">
              🌍 IA PASSPORT MONDIAL - Révolution 2025
            </Link>
            <Link
              href="https://shop.reussitess.fr/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "1.2rem 3rem",
                background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                color: "white",
                borderRadius: "50px",
                textDecoration: "none",
                fontSize: "1.2rem",
                fontWeight: "bold",
                boxShadow: "0 10px 30px rgba(245, 87, 108, 0.4)",
                transition: "all 0.3s ease",
                marginTop: "1.5rem"
              }}
              className="btn-shop"
            >
              🏪 Visitez Notre Shop
            </Link>


          </div>
        </div>
      </div>

      {/* Section Quiz */}
      <div
        style={{
          background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)",
          padding: "5rem 0",
          minHeight: "100vh",
        }}
      >
        <div
          style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem" }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: "800",
              marginBottom: "1rem",
              background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            🎓 Choisissez votre Quiz
          </h2>

          <p
            style={{
              textAlign: "center",
              color: "#94a3b8",
              fontSize: "1.2rem",
              marginBottom: "4rem",
              maxWidth: "700px",
              margin: "0 auto 4rem",
            }}
          >
            Découvrez nos 25 quiz thématiques et testez vos connaissances dans
            tous les domaines !
          </p>

          {/* Grille de Quiz */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            {quizCategories.map((quiz, index) => (
              <Link
                key={index}
                href={`/quiz/${quiz.id}`}
                style={{
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.03)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "20px",
                    padding: "2rem",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  className="quiz-card"
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "5px",
                      background: quiz.color,
                    }}
                  />

                  <div
                    style={{
                      fontSize: "4rem",
                      marginBottom: "1rem",
                      filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))",
                    }}
                  >
                    {quiz.icon}
                  </div>

                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "700",
                      color: "white",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {quiz.name}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#94a3b8",
                      marginBottom: "1.5rem",
                    }}
                  >
                    5 questions • 1 astuce
                  </p>

                  <div
                    style={{
                      display: "inline-block",
                      padding: "0.75rem 1.5rem",
                      background: quiz.color,
                      color: "white",
                      borderRadius: "50px",
                      fontWeight: "600",
                      fontSize: "0.9rem",
                      transition: "all 0.3s ease",
                    }}
                    className="quiz-btn"
                  >
                    Commencer →
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Section Boutiques */}
          <div
            style={{
              marginTop: "5rem",
              textAlign: "center",
            }}
          >
            <Link
              href="/boutiques"
              style={{
                display: "inline-block",
                padding: "1.2rem 3rem",
                background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                color: "white",
                borderRadius: "50px",
                textDecoration: "none",
                fontSize: "1.2rem",
                fontWeight: "bold",
                boxShadow: "0 10px 30px rgba(245, 87, 108, 0.4)",
                transition: "all 0.3s ease",
              }}
              className="boutique-link"
            >
              🛍️ Voir les 26 Boutiques Amazon
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .quiz-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
          background: rgba(255, 255, 255, 0.05);
        }

        .quiz-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        .boutique-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(245, 87, 108, 0.5);
        }

        .btn-alternative:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(245, 87, 108, 0.5);
        }

        
        .btn-ia-passport:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(16, 185, 129, 0.5);
        }

        .btn-version2:hover {
          .btn-passeport:hover {
            .btn-visa:hover {
              transform: translateY(-5px) scale(1.05);
              box-shadow:
                0 15px 50px rgba(102, 126, 234, 0.8),
                0 0 30px rgba(118, 75, 162, 0.6);
              background: linear-gradient(
                135deg,
                #764ba2 0%,
                #667eea 50%,
                #f093fb 100%
              );
            }
            transform: translateY(-5px) scale(1.05);
            box-shadow:
              0 15px 50px rgba(255, 215, 0, 0.7),
              0 0 30px rgba(255, 215, 0, 0.5);
            background: linear-gradient(
              135deg,
              #ffed4e 0%,
              #ffd700 50%,
              #ffed4e 100%
            );
          }
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(16, 185, 129, 0.5);
        }
      `}</style>
    </Layout>
  );
}
