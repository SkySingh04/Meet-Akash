"use client";
import React, { useState, useEffect } from "react";

const words = [
  "Full Stack Developer",
  "Open Source Contributor",
  "Public Speaker",
  "DevOps Enthusiast",
  "Technical Trainer",
];

function Typewriter() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      const currentWord = words[currentWordIndex];

      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((index) => (index + 1) % words.length);
        }
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        if (currentText === currentWord) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1000);
        }
      }
    };

    const typingInterval = setInterval(type, 70);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentWordIndex, currentText, isDeleting]);

  return (
    <div className="inline text-center">
      <p id="typewriter" className="py-4 w-full text-bold text-5xl italic">
        {currentText}
      </p>
    </div>
  );
}

export default Typewriter;
