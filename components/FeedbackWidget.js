import { useState } from 'react'

export default function FeedbackWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    rating: 5
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, this would send data to a backend
    console.log('Feedback submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setIsOpen(false)
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '', rating: 5 })
    }, 2000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <>
      {/* Floating Feedback Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="feedback-button"
        aria-label="Ouvrir le formulaire de feedback"
      >
        💬 Feedback
      </button>

      {/* Feedback Modal */}
      {isOpen && (
        <div className="feedback-modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="feedback-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              className="feedback-close"
              onClick={() => setIsOpen(false)}
              aria-label="Fermer"
            >
              ✕
            </button>

            {submitted ? (
              <div className="feedback-success">
                <div className="success-icon">✓</div>
                <h3>Merci pour votre feedback !</h3>
                <p>Nous apprécions votre retour et nous nous efforçons de nous améliorer continuellement.</p>
              </div>
            ) : (
              <>
                <h2 className="feedback-title">Votre Avis Compte !</h2>
                <p className="feedback-subtitle">Aidez-nous à améliorer votre expérience</p>

                <form onSubmit={handleSubmit} className="feedback-form">
                  <div className="form-group">
                    <label htmlFor="name">Nom (optionnel)</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email (optionnel)</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="rating">Note</label>
                    <div className="rating-stars">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          className={`star ${formData.rating >= star ? 'active' : ''}`}
                          onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                          aria-label={`${star} étoile${star > 1 ? 's' : ''}`}
                        >
                          ★
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Partagez votre expérience, suggestions ou questions..."
                      className="form-textarea"
                      required
                      rows="4"
                    />
                  </div>

                  <button type="submit" className="submit-button">
                    Envoyer le Feedback
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        .feedback-button {
          position: fixed;
          bottom: 30px;
          right: 30px;
          background: linear-gradient(135deg, #f59e0b, #e11d48);
          color: white;
          border: none;
          padding: 1rem 1.5rem;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(225, 29, 72, 0.4);
          transition: all 0.3s ease;
          z-index: 999;
        }

        .feedback-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(225, 29, 72, 0.6);
        }

        .feedback-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(5px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
        }

        .feedback-modal {
          background: rgba(30, 30, 30, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2.5rem;
          max-width: 500px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }

        .feedback-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: white;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          font-size: 1.5rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .feedback-close:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: rotate(90deg);
        }

        .feedback-title {
          font-size: 2rem;
          font-weight: 800;
          background: linear-gradient(135deg, #f59e0b, #e11d48);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }

        .feedback-subtitle {
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 2rem;
        }

        .feedback-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          color: rgba(255, 255, 255, 0.9);
          font-weight: 600;
          font-size: 0.9rem;
        }

        .form-input,
        .form-textarea {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 0.875rem 1rem;
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #f59e0b;
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .rating-stars {
          display: flex;
          gap: 0.5rem;
        }

        .star {
          background: none;
          border: none;
          font-size: 2rem;
          cursor: pointer;
          color: rgba(255, 255, 255, 0.2);
          transition: all 0.2s ease;
          padding: 0;
        }

        .star.active {
          color: #fbbf24;
        }

        .star:hover {
          transform: scale(1.2);
        }

        .submit-button {
          background: linear-gradient(135deg, #10b981, #3b82f6);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 1rem;
        }

        .submit-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(16, 185, 129, 0.4);
        }

        .feedback-success {
          text-align: center;
          padding: 2rem 0;
        }

        .success-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #10b981, #3b82f6);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          color: white;
          margin: 0 auto 1.5rem;
          animation: scaleIn 0.5s ease;
        }

        .feedback-success h3 {
          color: white;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .feedback-success p {
          color: rgba(255, 255, 255, 0.7);
        }

        @keyframes scaleIn {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }

        @media (max-width: 768px) {
          .feedback-button {
            bottom: 20px;
            right: 20px;
            padding: 0.875rem 1.25rem;
            font-size: 0.9rem;
          }

          .feedback-modal {
            padding: 2rem 1.5rem;
          }

          .feedback-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  )
}
