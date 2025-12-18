import { useEffect, useState } from "react";
import { getVoiceSystem, cleanTextForSpeech } from "../lib/voiceSystem";

export default function UniversalVoiceReader() {
  const [voiceSystem, setVoiceSystem] = useState(null);
  const [voiceEnabled, setVoiceEnabled] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const vs = getVoiceSystem();
      setVoiceSystem(vs);

      window.readText = (text) => {
        if (vs && voiceEnabled) {
          const cleanText = cleanTextForSpeech(text);
          vs.speak(cleanText, { rate: 0.95, pitch: 1.1, volume: 1.0 });
        }
      };

      window.stopReading = () => {
        if (vs) vs.stop();
      };

      window.toggleVoice = () => {
        setVoiceEnabled((prev) => !prev);
        if (vs && voiceEnabled) vs.stop();
      };
    }
  }, [voiceEnabled, voiceSystem]);

  return (
    <button
      onClick={() => window.toggleVoice?.()}
      style={{
        position: "fixed",
        bottom: "30px",
        left: "30px",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        background: voiceEnabled
          ? "linear-gradient(135deg, #10b981, #059669)"
          : "linear-gradient(135deg, #ef4444, #dc2626)",
        border: "none",
        boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
        cursor: "pointer",
        fontSize: "1.5rem",
        zIndex: 998,
      }}
      title={voiceEnabled ? "Désactiver voix" : "Activer voix"}
    >
      {voiceEnabled ? "🔊" : "🔇"}
    </button>
  );
}
