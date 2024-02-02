'use client'
import React, { useState } from 'react';
// Import Link from Next.js
import Link from 'next/link';

interface ProjectCardProps {
  name: string;
  imgSrc: string;
  id : string;
  githubLink: string;
}

const ProjectCard = (props: ProjectCardProps) => {
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
    // Wrap the card with the Link component
    
    <Link href={`/${props.id}`}>
        <div
          className={`card ${hovered ? 'hovered' : ''}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onMouseMove={handleMouseMove}
        >
          <div className="project-card-image">
            <img src={props.imgSrc} alt={props.name} />
            
          </div>
          <div className="card-info">
            <div className="card-info-title">
              <h4 className="text-center">{props.name}</h4>
            </div>
          </div>
          <style jsx>{`
            .card {
              position: relative;
              width: fit-content;
              max-width: 450px; /* Adjust the card width as needed */
              overflow: hidden;
              border-radius: 5px;
              background-color: #040D12;
            }
            @media (min-width: 768px) {
              .card {
                margin: 1rem 1rem;
              }
            }
            
            /* Margin for smaller devices (auto margin) */
            @media (max-width: 767px) {
              .card {
                margin: 1rem auto;
              }
            }            
            .project-card-image {
              position: relative;
              width: 100%;
              height: 100%;
              overflow: hidden;
            }
            .project-card-image img {
              width: 450px;
              height: 100%;
              object-fit: contain;
              aspect-ratio: 3/2;
              display: block;
            }
            .card-info {
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              background: rgba(0, 0, 0, 0.7);
              color: #fff;
              padding: 10px;
            }
            .card-info-title {
              text-align: center;
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
        </Link>
  );
};

export default ProjectCard;
