'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

type Certification = {
  title: string;
  organization: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  expiryDate?: string;
  skills?: string[];
};

const CertificationCard: React.FC<{ certification: Certification }> = ({ certification }) => {
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
      className={`bg-white border-2 border-amber-600 shadow-lg rounded-lg py-2 px-4 m-4 card  ${hovered ? 'hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      id="certificationcard"
    >
        <h2 className="font-bold text-amber-500 mb-2">{certification.title}</h2>
      <p className="text-sm text-gray-200 mb-2">{certification.organization}</p>
      <p className="text-xs text-gray-200 mb-2">{certification.date}</p>

      {certification.expiryDate && (
        <p className="text-xs text-gray-300 mb-2">Expires: {certification.expiryDate}</p>
      )}


      {certification.credentialUrl && (
        <a
          href={certification.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-amber-400 hover:text-amber-300 inline-flex items-center gap-1"
        >
          View Credential <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
        </a>
      )}

      <style jsx>{`
        #certificationcard {
          width: 200px;
          height: auto;
          min-height: 200px;
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

export default CertificationCard;
