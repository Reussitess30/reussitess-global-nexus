'use client';
import { useEffect, useState } from 'react';
export default function AutoUpdate() {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then(reg => {
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              setUpdateAvailable(true);
            }
          });
        });
      });
    }
  }, []);
  if (!updateAvailable) return null;
  return (
    <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-4 rounded-full shadow-2xl z-50">
      <button onClick={() => window.location.reload()} className="font-bold">
        🔄 Mise à jour disponible - Cliquez ici
      </button>
    </div>
  );
}
