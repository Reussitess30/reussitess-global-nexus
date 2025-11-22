'use client'
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
        onClick={() => setIsOpen(!isOpen)}
        className="feedback-button"
        aria-label="Feedback"
      >
        💬
      </button>

      {/* Feedback Modal */}
      {isOpen && (
        <div className="feedback-modal">
          <div className="feedback-content">
            <button
              onClick={() => setIsOpen(false)}
              className="feedback-close"
              aria-label="Close feedback"
            >
              ✕
            </button>
            
            {!submitted ? (
              <>
                <h3>Votre Avis</h3>
                <p>Aidez-nous à améliorer votre expérience</p>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Votre email"
                    required
                  />
                  <div className="rating-container">
                    <label>Note :</label>
                    <select
                      name="rating"
                      value={formData.rating}
                      onChange={handleChange}
                    >
                      <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
                      <option value="4">⭐⭐⭐⭐ Très bien</option>
                      <option value="3">⭐⭐⭐ Bien</option>
                      <option value="2">⭐⭐ Moyen</option>
                      <option value="1">⭐ Faible</option>
                    </select>
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Votre message..."
                    required
                    rows="4"
                  />
                  <button type="submit" className="feedback-submit">
                    Envoyer
                  </button>
                </form>
              </>
            ) : (
              <div className="feedback-success">
                <div className="success-icon">✓</div>
                <p>Merci pour votre retour !</p>
              </div>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        .feedback-button {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border: none;
          color: white;
          font-size: 28px;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
          transition: all 0.3s ease;
          z-index: 999;
        }

        .feedback-button:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 16px rgba(59, 130, 246, 0.6);
        }

        .feedback-modal {
          position: fixed;
          bottom: 90px;
          right: 20px;
          width: 360px;
          max-height: 80vh;
          overflow-y: auto;
          background: white;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          z-index: 1000;
          animation: slideUp 0.3s ease;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .feedback-content {
          padding: 24px;
          position: relative;
        }

        .feedback-close {
          position: absolute;
          top: 12px;
          right: 12px;
          background: none;
          border: none;
          font-size: 24px;
          color: #6b7280;
          cursor: pointer;
          line-height: 1;
          padding: 4px;
        }

        .feedback-close:hover {
          color: #374151;
        }

        .feedback-content h3 {
          margin: 0 0 8px 0;
          color: #1f2937;
          font-size: 20px;
          font-weight: 700;
        }

        .feedback-content p {
          margin: 0 0 16px 0;
          color: #6b7280;
          font-size: 14px;
        }

        .feedback-content form {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .feedback-content input,
        .feedback-content textarea,
        .feedback-content select {
          width: 100%;
          padding: 12px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-family: inherit;
          font-size: 14px;
          transition: border-color 0.2s;
        }

        .feedback-content textarea {
          resize: vertical;
        }

        .feedback-content input:focus,
        .feedback-content textarea:focus,
        .feedback-content select:focus {
          outline: none;
          border-color: #3b82f6;
        }

        .rating-container {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .rating-container label {
          font-size: 14px;
          font-weight: 600;
          color: #374151;
        }

        .feedback-submit {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .feedback-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .feedback-success {
          text-align: center;
          padding: 20px 0;
        }

        .success-icon {
          width: 60px;
          height: 60px;
          margin: 0 auto 16px;
          background: linear-gradient(135deg, #10b981, #059669);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          color: white;
          animation: scaleIn 0.3s ease;
        }

        @keyframes scaleIn {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }

        .feedback-success p {
          color: #1f2937;
          font-weight: 600;
          margin: 0;
        }

        @media (max-width: 768px) {
          .feedback-modal {
            width: calc(100vw - 40px);
            right: 20px;
          }

          .feedback-button {
            bottom: 16px;
            right: 16px;
            width: 56px;
            height: 56px;
            font-size: 24px;
          }
        }
      `}</style>
    </>
  )
}
