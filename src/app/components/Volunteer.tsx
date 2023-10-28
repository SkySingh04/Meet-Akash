'use client';
import React from 'react';

interface VolunteerProps {
  avatarSrc: string;
  clubName: string;
  clubLink?: string;
  description: string;
  imageUrl?: string;
}

const Volunteer = (props: VolunteerProps) => {
  return (
    <div className="volunteer-container grid grid-cols-1 md:grid-cols-2 gap-4 py-5" data-aos="fade-up">
      {/* Left Column (Avatar) */}
      <div className="text-center md:text-left">
        {/* <div className="section-title">
          <h2 className="club-heading other-header">{props.clubName}</h2>
        </div> */}
        {/* Image */}
        <div className="image-container relative w-full mx-auto md:mx-0 justify-center flex ">
          <img
            src={props.imageUrl}
            alt={props.clubName}
            className="w-5/6 rounded-lg hover:scale-105 transform transition-transform duration-300"
          />
        </div>
        {/* Description */}
        
        
      
      </div>
      
      {/* Right Column (Volunteer Details) */}
      <div className="text-center  ">
        <a href={props.clubLink}>
          <div className="avatar">
            <div className="w-[200px] rounded-full ring ring-blue-900 ring-offset-base-100 ring-offset-2 mx-auto md:mx-0 flex align-center ">
              <img src={props.avatarSrc} alt="Avatar" className='  flex align-center' />
            </div>
          </div>
        </a>
        <p className="description mt-4">{props.description}</p>
      </div>
      
    </div>
  );
};

export default Volunteer;
