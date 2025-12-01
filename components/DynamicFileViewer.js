import { useState } from 'react';

const allowedFiles = [
  'next.config.js',
  'components/Badges.js',
  'components/QuizBank.js',
  'components/VisitorStats.js',
  'pages/analytics.js',
  'pages/affiliation.js'
];

export default function DynamicFileViewer() {
  const [filename, setFilename] = useState(allowedFiles[0]);
  const [fileContent, setFileContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const fetchFile = async () => {
    setLoading(true);
    setError('');
    setFileContent('');
    try {
      const res = await fetch(`/api/read-file?filename=${encodeURIComponent(filename)}`);
      const data = await res.json();
      if (data.content) {
        setFileContent(data.content);
      } else {
        setError(data.error || 'Erreur inconnue');
      }
    } catch (e) {
      setError('Impossible de lire le fichier.');
    }
    setLoading(false);
  };

  const handleCopy = () => {
    if (fileContent) {
      navigator.clipboard.writeText(fileContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 1300);
    }
  };

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '2em 1em' }}>
      <h2>📄 Lire dynamiquement un fichier du serveur</h2>
      <select
        value={filename}
        onChange={e => setFilename(e.target.value)}
        style={{ marginRight: '1em', padding: '6px', fontSize: '1em' }}
      >
        {allowedFiles.map(f => <option key={f} value={f}>{f}</option>)}
      </select>
      <button
        onClick={fetchFile}
        style={{
          padding: '6px 18px',
          borderRadius: "6px",
          background: "#6366f1",
          color: "white",
          border: "none",
          fontWeight: "bold"
        }}
      >
        Lire le fichier
      </button>

      {loading && <div style={{ marginTop: "1em" }}>Lecture en cours...</div>}
      {error && <div style={{ color: "#e11d48", marginTop: "1em" }}>{error}</div>}

      {fileContent && (
        <>
        <pre style={{
          background: "#181e27",
          color: "#eee",
          marginTop: "1.6em",
          padding: "1em",
          borderRadius: "9px",
          overflowX: "auto",
          minHeight: "260px"
        }}>{fileContent}</pre>
        <button
          onClick={handleCopy}
          style={{
            background: copied ? "#10b981" : "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "12px",
            padding: "8px 16px",
            fontWeight: "bold"
          }}>
          {copied ? "✔️ Copié" : "📋 Copier le contenu"}
        </button>
        </>
      )}
    </div>
  );
}
