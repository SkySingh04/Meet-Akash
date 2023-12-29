'use client'
import React, { useState } from 'react';

type Achievement = {
  title: string;
  organization: string;
  date: string;
};

const AchievementCard: React.FC<{ achievement: Achievement }> = ({ achievement }) => {
  const [hovered, setHovered] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMouseX(x);
    setMouseY(y);
  };

  return (
    <div 
      className={`bg-white shadow-lg rounded-lg py-2 px-4 m-4 card  ${hovered ? 'hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      id="acheivementcard"
    >
      <h2 className="font-bold mb-2">{achievement.title}</h2>
      <p className="text-sm text-gray-400 mb-2">{achievement.organization}</p>
      <p className="text-xs text-gray-400 mb-4">{achievement.date}</p>
      <style jsx>{`
        .card.hovered::before {
          background: radial-gradient(
            800px circle at ${mouseX}px ${mouseY}px,
            rgba(255, 255, 255, 0.06),
            transparent 40%
          );
        }
        .card.hovered::after {
          background: radial-gradient(
            600px circle at ${mouseX}px ${mouseY}px,
            rgba(255, 255, 255, 0.4),
            transparent 40%
          );
        }
      `}</style>
    </div>
  );
};

export default AchievementCard;
