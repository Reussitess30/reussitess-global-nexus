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

  if (!quiz) return <Layout><div style={{color:'white', textAlign:'center', padding:'5rem'}}>Chargement...</div></Layout>

  const quizUrl = `https://www.reussitess.fr/quiz/${id}`;

  if (showResults) {
    const percentage = Math.round((score / quiz.questions.length) * 100)
    return (
      <Layout>
        <Head><title>{quiz.title} - Résultats</title></Head>
        <div style={{minHeight:'100vh', background:'#0f172a', color:'white', padding:'4rem 2rem', textAlign:'center'}}>
          <h1>Score : {score} / {quiz.questions.length} ({percentage}%)</h1>
          <Link href="/" style={{color:'#f093fb', fontWeight:'bold'}}>🏠 Retour</Link>
        </div>
      </Layout>
    )
  }

  const question = quiz.questions[currentQuestion]

  return (
    <Layout>
      <Head>
        <title>{quiz.title} | REUSSITESS®</title>
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
      <div style={{background:'#0f172a', minHeight:'100vh', padding:'2rem', color:'white'}}>
        <h2>{question.question}</h2>
        {/* Le reste de votre logique de quiz reste inchangée */}
        <button onClick={() => setShowResults(true)}>Terminer</button>
      </div>
    </Layout>
  )
}
