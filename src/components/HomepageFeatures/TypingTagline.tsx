import React, { useState, useEffect } from "react";

interface TypingTaglineProps {
  text: string;
}

export default function TypingTagline({ text }: TypingTaglineProps) {
  const typingSpeed = 200;
  const deletingSpeed = 100;
  const pauseBeforeDelete = 0;
  const pauseBeforeRestart = 500;

  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && index < text.length) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (index === text.length && !isDeleting) {
      timeout = setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
    } else if (isDeleting && index === 0) {
      timeout = setTimeout(() => setIsDeleting(false), pauseBeforeRestart);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text]);

  return (
    <>
      {/* Inline CSS injected */}
      <style>{`
        @keyframes gradient-motion {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        .typing-wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
          text-align: center;
        }
        .typing-invisible {
          visibility: hidden;
          font-size: 2rem;
          font-weight: bold;
        }
        .typing-gradient {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          font-size: 2rem;
          font-weight: bold;
          background: linear-gradient(90deg, #ffffff, #8b5cf6, #ec4899);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-motion 3s linear infinite;
          white-space: nowrap;
        }
      `}</style>

      <span className="typing-wrapper">
        {/* Invisible text to keep height */}
        <span className="typing-invisible">{text}</span>

        {/* Animated gradient typing text */}
        <span className="typing-gradient">{displayText || "\u00A0"}</span>
      </span>
    </>
  );
}
