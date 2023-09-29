'use client'
import React, { useState, useEffect } from 'react';

const words = ["Software Engineer", "Full Stack Developer", "Public Speaker" , "ML Enthusiast" ];


function Typewriter() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      const currentWord = words[currentWordIndex];

      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((index) => (index + 1) % words.length);
        }
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        if (currentText === currentWord) {
          setIsDeleting(true);
        }
      }
    };

    const typingInterval = setInterval(type, 100);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentWordIndex, currentText, isDeleting]);

  return (
    <div >
      
      <p id="typewriter" className="py-4 w-full text-bold text-5xl text-white italic">{currentText}</p>
    </div>
  );
}

export default Typewriter;
