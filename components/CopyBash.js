import { useState } from "react";

export default function CopyBash({ filename, code }) {
  const [copied, setCopied] = useState(false);
  const bashCommand = 
`cat <<'EOF' > ${filename}
${code}
EOF`;

  function handleCopy() {
    navigator.clipboard.writeText(bashCommand).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    });
  }

  return (
    <div style={{ marginBottom: "2em" }}>
      <div style={{ fontWeight: "bold", marginBottom: "6px", fontSize: "1.16em" }}>{filename}</div>
      <pre style={{
        background: "#222b",
        color: "#eee",
        padding: "1em",
        borderRadius: "7px",
        fontSize: "0.96em",
        overflowX: "auto",
        marginBottom: "7px",
        maxHeight: "230px"
      }}>{bashCommand}</pre>
      <button
        onClick={handleCopy}
        style={{
          background: copied ? "#10b981" : "#6366f1",
          color: "white",
          border: "none",
          borderRadius: "6px",
          padding: "8px 12px",
          cursor: "pointer",
          fontWeight: "bold",
          transition: "all 0.2s",
          boxShadow: copied ? "0 2px 12px #10b98130" : "none"
        }}
      >
        {copied ? "✔️ Copié !" : "📋 Copier Bash"}
      </button>
    </div>
  );
}