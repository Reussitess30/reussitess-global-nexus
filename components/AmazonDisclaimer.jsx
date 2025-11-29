import React, { useState } from 'react';

/**
 * Disclaimer Amazon conforme FTC
 * Bandeau d'avertissement visible sur toutes les pages
 */
const AmazonDisclaimer = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-yellow-400 border-b-2 border-yellow-600 py-3 px-4 relative z-40">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="flex-1 flex items-center gap-3">
          <div className="flex-shrink-0">
            <svg className="w-6 h-6 text-yellow-900" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-sm md:text-base text-gray-900 font-medium">
            ⚠️ <strong>Avertissement :</strong> En achetant via <strong>Reussitess®</strong>, vous nous aidez à gagner des <strong>commissions sur les achats qualifiés</strong> Amazon, sans frais supplémentaires pour vous ! 💙 
            <span className="hidden md:inline"> Merci de votre soutien !</span>
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="flex-shrink-0 text-gray-900 hover:bg-yellow-500 rounded-full p-1 transition-colors"
          aria-label="Fermer le bandeau"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AmazonDisclaimer;
