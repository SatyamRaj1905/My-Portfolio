import React from "react";

export default function SpeechBubble({ text }) {
  return (
    <div className="bubble" role="note" aria-label="Greeting">
      <div className="bubble__inner">{text}</div>
      <div className="bubble__tail" aria-hidden="true" />
    </div>
  );
}
