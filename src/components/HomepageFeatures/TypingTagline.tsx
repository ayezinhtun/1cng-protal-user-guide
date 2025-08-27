import React, { useState, useEffect } from 'react';

const TypingTagline: React.FC = () => {
  const texts = ["Powerful.", "Scalable.", "Local."]; // rotating words
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseBeforeDelete = 1000;
  const pauseBeforeRestart = 500;

  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = texts[wordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && index < currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayText(prev => prev + currentWord[index]);
        setIndex(prev => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1));
        setIndex(prev => prev - 1);
      }, deletingSpeed);
    } else if (index === currentWord.length && !isDeleting) {
      timeout = setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
    } else if (isDeleting && index === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex(prev => (prev + 1) % texts.length);
      }, pauseBeforeRestart);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, wordIndex, texts]);

  return (
    <span className="typing-tagline">
      {displayText || "\u00A0"}
      <span className="blinking-cursor">|</span>
    </span>
  );
};

export default TypingTagline;
