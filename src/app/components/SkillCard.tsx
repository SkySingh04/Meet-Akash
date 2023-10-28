'use client'
import React, { useState } from 'react';

interface SkillCardProps {
  name: string;
  img_src: string;
}

const SkillCard = (props: SkillCardProps) => {
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
      
      <div className="card-content  flex justify-center">
        <div className="card-image ">
          {/* <i className={props.icon}></i> */}
          <img src={props.img_src } className='w-4/6' />
        </div>
        <div className="card-info-wrapper ">
          <div className="card-info ">
            <div className="card-info-title">
              <h4 className='text-center'>{props.name}</h4>
            </div>
          </div>
        </div>
      </div>
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

export default SkillCard;
