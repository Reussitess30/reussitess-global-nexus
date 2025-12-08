import { useEffect, useState } from 'react';

const CACHE_KEY = 'full_knowledge_v1';
const STATIC_PATH = '/data/full_knowledge.json';
const API_PATH = '/api/full-knowledge';

export default function useFullKnowledge(initial = null) {
  const [fullKnowledge, setFullKnowledge] = useState(initial || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (fullKnowledge) {
      if (typeof window !== 'undefined') window.__FULL_KNOWLEDGE__ = fullKnowledge;
      return;
    }

    if (typeof window !== 'undefined') {
      if (window.__FULL_KNOWLEDGE__) {
        setFullKnowledge(window.__FULL_KNOWLEDGE__);
        return;
      }
      try {
        const cached = sessionStorage.getItem(CACHE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached);
          setFullKnowledge(parsed);
          window.__FULL_KNOWLEDGE__ = parsed;
          return;
        }
      } catch (e) { /* ignore */ }

      let cancelled = false;
      (async () => {
        setLoading(true);
        setError(null);
        const tryUrls = [STATIC_PATH, API_PATH];
        for (const url of tryUrls) {
          try {
            const res = await fetch(url, { cache: 'no-cache' });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();
            if (cancelled) return;
            setFullKnowledge(data);
            try { sessionStorage.setItem(CACHE_KEY, JSON.stringify(data)); } catch (e) {}
            window.__FULL_KNOWLEDGE__ = data;
            setLoading(false);
            return;
          } catch (err) {
            // try next URL
          }
        }
        setError('Impossible de charger FULL_KNOWLEDGE');
        setLoading(false);
      })();
      return () => { cancelled = true; };
    }

    try {
      const mod = null;
      if (mod) {
        const candidate = mod.FULL_KNOWLEDGE || (mod.default && mod.default.FULL_KNOWLEDGE) || mod.default || null;
        if (candidate) setFullKnowledge(candidate);
      }
    } catch (e) {
      // ignore
    }
  }, [fullKnowledge]);

  return { fullKnowledge, loading, error };
}
