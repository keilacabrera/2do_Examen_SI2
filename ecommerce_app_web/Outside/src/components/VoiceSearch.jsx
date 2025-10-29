import React, { useEffect, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { LuMic, LuMicOff } from "react-icons/lu"; // opcional, puedes usar cualquier ícono


const VoiceSearch = ({ onSearch }) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const [debouncedTranscript, setDebouncedTranscript] = useState("");

  // 🧠 Limpieza y retardo
  useEffect(() => {
    if (transcript) {
      const cleanText = transcript.trim().replace(/[.,!?¡¿]/g, "");
      // Espera 500ms desde la última palabra antes de enviar
      const handler = setTimeout(() => {
        setDebouncedTranscript(cleanText);
      }, 500);
      return () => clearTimeout(handler);
    }
  }, [transcript]);

  // 🔁 Enviar al componente padre solo cuando cambia el texto limpio
  useEffect(() => {
    if (debouncedTranscript) {
      onSearch(debouncedTranscript);
    }
  }, [debouncedTranscript]);

  if (!browserSupportsSpeechRecognition) {
    return <p>Tu navegador no soporta reconocimiento de voz.</p>;
  }

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => {
          resetTranscript();
          SpeechRecognition.startListening({ language: "es-ES", continuous: false });
        }}
        className={`px-4 py-2 rounded-lg font-medium text-white transition-colors duration-200 ${
          listening ? "bg-green-600" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        🎤 {listening ? "Escuchando..." : "Hablar"}
      </button>

      {transcript && (
        <span className="text-sm text-gray-500 italic truncate max-w-[200px]">
          {transcript}
        </span>
      )}
    </div>
  );
};

export default VoiceSearch;


