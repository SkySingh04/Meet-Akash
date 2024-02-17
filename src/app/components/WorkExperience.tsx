import React from 'react';
import Image from 'next/image';
const WorkExperience = () => {
  return (
    <div className="mockup-window border bg-base-300 w-full md:w-[550px] h-auto py-5 md:mx-auto md:mt-[30px]">
      <div className="flex justify-center px-4 py-4 bg-base-200">
        <Image src="/WorkExperience.webp" alt="AKASH-SINGH-RESUME" width={1000} height={1000}  />
      </div>
    </div>
  );
};

export default WorkExperience;
