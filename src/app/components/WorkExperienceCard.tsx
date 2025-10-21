'use client'
import React, { useState } from 'react';

type WorkExperience = {
  title: string;
  company: string;
  employmentType: string;
  duration: string;
  location?: string;
  description: string[];
  skills?: string[];
};

const WorkExperienceCard: React.FC<{ experience: WorkExperience }> = ({ experience }) => {
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
      className={`bg-white border-2 border-amber-600 shadow-lg rounded-lg py-4 px-6 m-4 card ${hovered ? 'hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      id="workexperiencecard"
    >
      <h2 className="font-bold text-amber-500 text-xl mb-1">{experience.title}</h2>
      <h3 className="text-lg text-gray-200 mb-1">{experience.company} · {experience.employmentType}</h3>
      <p className="text-sm text-gray-300 mb-1">{experience.duration}</p>
      {experience.location && (
        <p className="text-sm text-gray-300 mb-3">{experience.location}</p>
      )}

      <ul className="list-disc list-inside mb-3 space-y-1">
        {experience.description.map((item, index) => (
          <li key={index} className="text-sm text-gray-200">{item}</li>
        ))}
      </ul>

      {experience.skills && experience.skills.length > 0 && (
        <div className="mt-3">
          <p className="text-xs text-gray-300 mb-2">Skills:</p>
          <div className="flex flex-wrap gap-1">
            {experience.skills.map((skill, index) => (
              <span
                key={index}
                className="text-xs bg-amber-900 text-amber-200 px-2 py-1 rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        #workexperiencecard {
          width: 100%;
          max-width: 800px;
          height: auto;
        }
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

export default WorkExperienceCard;
