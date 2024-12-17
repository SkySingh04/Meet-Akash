import React from 'react';
import Image from 'next/image';
const Resume = () => {
  return (
    <div className="mockup-window border bg-base-300 w-full md:w-[450px] h-auto py-5 my-5 md:mx-auto">
      <div className="flex justify-center px-4 py-4 bg-base-200">
        <a href="https://drive.google.com/file/d/1ZKGTrFViNGCS5zOASQrw03QHk1BJdRJO/view?usp=sharing">
        <Image src="https://i.ibb.co/xDzjkVj/AKASH-SINGH-RESUME-17-11-24.jpg" alt="AKASH-SINGH-RESUME" width={1000} height={1000} className="w-full max-h-[100%] object-contain" />
        </a>
      </div>
    </div>
  );
};
export default Resume;
