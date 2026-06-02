'use client'
import React, { useState } from 'react';
import Image from 'next/image';

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

const Icon: React.FC<{ children: React.ReactNode; label: string }> = ({ children, label }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-label={label}
    className="w-3 h-3 inline-block"
  >
    {children}
  </svg>
);

const MapPinIcon = () => (
  <Icon label="location">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
  </Icon>
);

const CalendarIcon = () => (
  <Icon label="date">
    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
  </Icon>
);

const VideoIcon = () => (
  <Icon label="video">
    <path d="M8 5v14l11-7z" />
  </Icon>
);

const FileIcon = () => (
  <Icon label="slides">
    <path d="M6 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z" />
  </Icon>
);

const ExternalLinkIcon = () => (
  <Icon label="external link">
    <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7zM19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7z" />
  </Icon>
);

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
          <MapPinIcon />
          <span>{talk.location}</span>
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-300 mb-2">
          <CalendarIcon />
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
              <FileIcon /> Slides
            </a>
          )}
          {talk.links.video && (
            <a
              href={talk.links.video}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-amber-400 hover:text-amber-300 inline-flex items-center gap-1"
            >
              <VideoIcon /> Video
            </a>
          )}
          {talk.links.eventPage && (
            <a
              href={talk.links.eventPage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-amber-400 hover:text-amber-300 inline-flex items-center gap-1"
            >
              <ExternalLinkIcon /> Event
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
