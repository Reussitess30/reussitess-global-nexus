import Layout from '../../components/Layout'
import Link from 'next/link'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function QuizPage() {
  const router = useRouter()
  const { id } = router.query
  
  const [quiz, setQuiz] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showExplanation, setShowExplanation] = useState(false)

  useEffect(() => {
    if (id) {
      import(`../../quiz_${id}.js`)
        .then(module => setQuiz(module.default))
        .catch(err => {
          console.error('Quiz non trouvé:', err)
          router.push('/')
        })
    }
  }, [id, router])

  const handleAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex)
    setShowExplanation(true)
    
    if (answerIndex === quiz.questions[currentQuestion].correct) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    setSelectedAnswer(null)
    setShowExplanation(false)
    
    if (currentQuestion + 1 < quiz.questions.length) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowResults(false)
    setSelectedAnswer(null)
    setShowExplanation(false)
  }

  if (!quiz) {
    return (
      <Layout>
        <div style={{
          minHeight: '100vh',
          background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{ color: 'white', fontSize: '2rem' }}>
            Chargement du quiz...
          </div>
        </div>
      </Layout>
    )
  }

  const quizUrl = `https://www.reussitess.fr/quiz/${id}`;

  if (showResults) {
    const percentage = Math.round((score / quiz.questions.length) * 100)
    
    return (
      <Layout>
        <Head>
          <title>{quiz.title} - Résultats | REUSSITESS®971</title>
        </Head>
        <div style={{
          minHeight: '100vh',
          background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
          padding: '4rem 2rem'
        }}>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '5rem', marginBottom: '2rem' }}>
              {percentage >= 80 ? '🏆' : percentage >= 60 ? '👍' : '📚'}
            </div>

            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', color: 'white', marginBottom: '1rem' }}>
              Quiz Terminé !
            </h1>

            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '3rem',
              marginBottom: '2rem'
            }}>
              <div style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: percentage >= 80 ? '#10b981' : percentage >= 60 ? '#f59e0b' : '#ef4444',
                marginBottom: '1rem'
              }}>
                {score} / {quiz.questions.length}
              </div>

              <div style={{ fontSize: '1.5rem', color: '#94a3b8', marginBottom: '2rem' }}>
                Score : {percentage}%
              </div>

              <div style={{ fontSize: '1.2rem', color: 'white', marginBottom: '2rem' }}>
                {percentage >= 80 ? '🌟 Excellent ! Vous maîtrisez ce sujet !' :
                 percentage >= 60 ? '👏 Bon travail ! Continuez à vous améliorer.' :
                 '💪 Ne vous découragez pas, réessayez !'}
              </div>

              {quiz.tips && quiz.tips.length > 0 && (
                <div style={{
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: '15px',
                  padding: '1.5rem',
                  marginTop: '2rem'
                }}>
                  <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#10b981', marginBottom: '1rem' }}>
                    💡 Astuces REUSSITESS®971
                  </div>
                  {quiz.tips.map((tip, i) => (
                    <div key={i} style={{ color: '#cbd5e1', fontSize: '1rem', marginBottom: '0.5rem', lineHeight: '1.6' }}>
                      • {tip}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={restartQuiz} style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', color: 'white', padding: '1rem 2.5rem', borderRadius: '50px', border: 'none', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s ease' }} className="btn-restart">
                🔄 Recommencer
              </button>
              <Link href="/" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '1rem 2.5rem', borderRadius: '50px', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 'bold', display: 'inline-block', transition: 'all 0.3s ease' }} className="btn-home">
                🏠 Retour aux Quiz
              </Link>
            </div>
          </div>
        </div>
        <style jsx>{`
          .btn-restart:hover, .btn-home:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(0,0,0,0.3); }
        `}</style>
      </Layout>
    )
  }

  const question = quiz.questions[currentQuestion]

  return (
    <Layout>
      <Head>
        <title>{quiz.title} | Quiz REUSSITESS®</title>
        <link rel="alternate" href={quizUrl} hrefLang="fr-FR" />
        <link rel="alternate" href={quizUrl} hrefLang="en-US" />
        <link rel="alternate" href={quizUrl} hrefLang="en-GB" />
        <link rel="alternate" href={quizUrl} hrefLang="en-CA" />
        <link rel="alternate" href={quizUrl} hrefLang="en-AU" />
        <link rel="alternate" href={quizUrl} hrefLang="en-NZ" />
        <link rel="alternate" href={quizUrl} hrefLang="en-IN" />
        <link rel="alternate" href={quizUrl} hrefLang="en-SG" />
        <link rel="alternate" href={quizUrl} hrefLang="it-IT" />
        <link rel="alternate" href={quizUrl} hrefLang="de-DE" />
        <link rel="alternate" href={quizUrl} hrefLang="es-ES" />
        <link rel="alternate" href={quizUrl} hrefLang="pt-BR" />
        <link rel="alternate" href={quizUrl} hrefLang="sv-SE" />
      </Head>
      <div style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: '#94a3b8' }}>
              <span>Question {currentQuestion + 1} / {quiz.questions.length}</span>
              <span>Score: {score}</span>
            </div>
            <div style={{ height: '8px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%`, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', transition: 'width 0.3s ease' }} />
            </div>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '20px', padding: '3rem', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: '700', color: 'white', marginBottom: '3rem', lineHeight: '1.4' }}>
              {question.question}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {question.answers.map((answer, index) => (
                <button key={index} onClick={() => !showExplanation && handleAnswer(index)} disabled={showExplanation} style={{ padding: '1.5rem', background: selectedAnswer === index ? (index === question.correct ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)') : 'rgba(255, 255, 255, 0.03)', border: selectedAnswer === index ? (index === question.correct ? '2px solid #10b981' : '2px solid #ef4444') : '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '15px', color: 'white', fontSize: '1.1rem', cursor: showExplanation ? 'not-allowed' : 'pointer', textAlign: 'left', transition: 'all 0.3s ease', opacity: showExplanation && index !== question.correct && index !== selectedAnswer ? 0.5 : 1 }} className="answer-btn">
                  <span style={{ marginRight: '1rem', fontWeight: 'bold' }}>{String.fromCharCode(65 + index)}.</span>
                  {answer}
                  {showExplanation && index === question.correct && <span style={{ marginLeft: '1rem' }}>✓</span>}
                </button>
              ))}
            </div>

            {showExplanation && (
              <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '15px' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#10b981', marginBottom: '0.5rem' }}>💡 Explication :</div>
                <div style={{ color: '#cbd5e1', lineHeight: '1.6' }}>{question.explanation}</div>
              </div>
            )}
          </div>

          {showExplanation && (
            <div style={{ textAlign: 'center' }}>
              <button onClick={nextQuestion} style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '1rem 3rem', borderRadius: '50px', border: 'none', fontSize: '1.2rem', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s ease' }} className="btn-next">
                {currentQuestion + 1 < quiz.questions.length ? 'Question Suivante →' : 'Voir les Résultats 🏆'}
              </button>
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        .answer-btn:hover:not(:disabled) { background: rgba(255, 255, 255, 0.08); transform: translateX(5px); }
        .btn-next:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4); }
      `}</style>
    </Layout>
  )
}
