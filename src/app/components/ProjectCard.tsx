'use client'
import React, { useState } from 'react';

interface ProjectCardProps {
  name: string;
  imgSrc: string;
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
    <div
      className={`card ${hovered ? 'hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="card-image">
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
          width: 100%;
          max-width: 450px; /* Adjust the card width as needed */
          margin: 1rem auto;
          overflow: hidden;
          border-radius: 5px;
        }
        .card-image {
          width: 100%;
          height:100%;
        }
        .card-image img {
          width: 450px;
          height:100%;
          object-fit: cover;
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
  );
};

export default ProjectCard;
