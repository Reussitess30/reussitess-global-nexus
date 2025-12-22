import { useState } from 'react'

export default function PersonalityCapture({ onComplete }) {
  const [answers, setAnswers] = useState({})
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const questions = [
    {
      id: 'innovation',
      question: '🚀 Comment abordez-vous l\'innovation ?',
      options: [
        { value: 'pioneer', label: 'Je crée des solutions jamais vues', trait: 'Pionnier' },
        { value: 'improver', label: 'J\'améliore l\'existant', trait: 'Optimiseur' },
        { value: 'connector', label: 'Je connecte des idées', trait: 'Connecteur' }
      ]
    },
    {
      id: 'learning',
      question: '🎓 Votre style d\'apprentissage ?',
      options: [
        { value: 'practice', label: 'En pratiquant directement', trait: 'Pragmatique' },
        { value: 'theory', label: 'En étudiant la théorie', trait: 'Analytique' },
        { value: 'teaching', label: 'En enseignant aux autres', trait: 'Pédagogue' }
      ]
    },
    {
      id: 'challenge',
      question: '💪 Face à un défi impossible ?',
      options: [
        { value: 'persist', label: 'Je persiste jusqu\'au bout', trait: 'Résilient' },
        { value: 'pivot', label: 'Je trouve un autre angle', trait: 'Adaptable' },
        { value: 'collaborate', label: 'Je mobilise une équipe', trait: 'Leader' }
      ]
    },
    {
      id: 'success',
      question: '🎯 Votre définition de la réussite ?',
      options: [
        { value: 'impact', label: 'L\'impact sur le monde', trait: 'Visionnaire' },
        { value: 'mastery', label: 'La maîtrise parfaite', trait: 'Expert' },
        { value: 'freedom', label: 'La liberté totale', trait: 'Entrepreneur' }
      ]
    },
    {
      id: 'contribution',
      question: '🌍 Comment aidez-vous les autres ?',
      options: [
        { value: 'mentor', label: 'En les guidant', trait: 'Mentor' },
        { value: 'innovate', label: 'En créant des outils', trait: 'Innovateur' },
        { value: 'connect', label: 'En créant des liens', trait: 'Networker' }
      ]
    }
  ]

  const handleAnswer = (questionId, option) => {
    const newAnswers = { ...answers, [questionId]: option }
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      const traits = Object.values(newAnswers).map(a => a.trait)
      onComplete({ traits, answers: newAnswers })
    }
  }

  const question = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div style={{ maxWidth: '800px', margin: '3rem auto', padding: '2rem' }}>
      <div style={{
        width: '100%',
        height: '10px',
        background: 'rgba(102, 126, 234, 0.2)',
        borderRadius: '10px',
        marginBottom: '3rem',
        overflow: 'hidden'
      }}>
        <div style={{
          width: `${progress}%`,
          height: '100%',
          background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
          transition: 'width 0.5s ease',
          borderRadius: '10px'
        }} />
      </div>

      <div style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        borderRadius: '30px',
        padding: '3rem',
        border: '3px solid rgba(102, 126, 234, 0.3)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '1rem', color: '#94a3b8', marginBottom: '1rem' }}>
            Question {currentQuestion + 1} sur {questions.length}
          </div>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '900',
            color: 'white',
            marginBottom: '3rem'
          }}>
            {question.question}
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {question.options.map((option, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(question.id, option)}
              style={{
                padding: '1.5rem',
                fontSize: '1.1rem',
                fontWeight: '600',
                background: 'rgba(102, 126, 234, 0.1)',
                color: 'white',
                border: '2px solid rgba(102, 126, 234, 0.3)',
                borderRadius: '15px',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.3s ease'
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
