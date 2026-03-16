'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faFileAlt, faMapMarkerAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

type Talk = {
  id: string;
  title: string;
  eventName: string;
  location: string;
  date: string;
  description: string;
  talkImage: string;
  links: {
    slides?: string;
    video?: string;
    eventPage?: string;
  };
  skills?: string[];
};

const TalkCard: React.FC<{ talk: Talk }> = ({ talk }) => {
  const [hovered, setHovered] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouseX(e.clientX - rect.left);
    setMouseY(e.clientY - rect.top);
  };

  return (
    <div
      className={`bg-white border-2 border-amber-600 shadow-lg rounded-lg overflow-hidden m-4 card ${hovered ? 'hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      id="talkcard"
    >
      <div className="w-full h-[180px] relative">
        <Image
          src={talk.talkImage}
          alt={talk.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <h2 className="font-bold text-amber-500 mb-1 text-sm">{talk.title}</h2>
        <p className="text-sm text-gray-200 mb-1">{talk.eventName}</p>

        <div className="flex items-center gap-2 text-xs text-gray-300 mb-1">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xs" />
          <span>{talk.location}</span>
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-300 mb-2">
          <FontAwesomeIcon icon={faCalendarAlt} className="text-xs" />
          <span>{talk.date}</span>
        </div>

        <p className="text-xs text-gray-300 mb-3 line-clamp-3">{talk.description}</p>

        {talk.skills && talk.skills.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {talk.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-700 text-gray-200 text-xs px-2 py-0.5 rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-3">
          {talk.links.slides && (
            <a
              href={talk.links.slides}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-amber-400 hover:text-amber-300 inline-flex items-center gap-1"
            >
              <FontAwesomeIcon icon={faFileAlt} /> Slides
            </a>
          )}
          {talk.links.video && (
            <a
              href={talk.links.video}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-amber-400 hover:text-amber-300 inline-flex items-center gap-1"
            >
              <FontAwesomeIcon icon={faYoutube} /> Video
            </a>
          )}
          {talk.links.eventPage && (
            <a
              href={talk.links.eventPage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-amber-400 hover:text-amber-300 inline-flex items-center gap-1"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} /> Event
            </a>
          )}
        </div>
      </div>

      <style jsx>{`
        #talkcard {
          width: 350px;
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

export default TalkCard;
