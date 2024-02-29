import React from 'react';
import Image from 'next/image';
const Resume = () => {
  return (
    <div className="mockup-window border bg-base-300 w-full md:w-[450px] h-auto py-5 my-5 md:mx-auto">
      <div className="flex justify-center px-4 py-4 bg-base-200">
        <a href="https://drive.google.com/file/d/1ZG1RmP3bmdwX1DcUPe54GE6u38vScmfs/view?usp=sharing">
        <Image src="https://i.ibb.co/MMd0LPZ/AKASH-SINGH-RESUME-01-03-24.jpg" alt="AKASH-SINGH-RESUME-24-12-23" width={1000} height={1000} className="w-full max-h-[100%] object-contain" />
        </a>
      </div>
    </div>
  );
};
export default Resume;
