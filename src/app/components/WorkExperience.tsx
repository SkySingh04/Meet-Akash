import React from 'react';
import Image from 'next/image';

interface WorkExperienceProps {
  images: string[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ images }) => {
  return (
    <div className="mockup-window border bg-base-300 w-full md:w-[400px] h-auto py-5 md:mx-auto md:mt-[30px]">
      {images.map((image, index) => (
        <div key={index} className="flex justify-center px-4 bg-base-200">
          <Image
            src={image}
            alt={`Work Experience Image ${index + 1}`}
            width={1000}
            height={1000}
            priority
          />
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
