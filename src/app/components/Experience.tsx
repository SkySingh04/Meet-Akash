import React from 'react';
import Resume from './Resume';
import WorkExperience from './WorkExperience';

const Page = () => {
  return (
    <div className='page-section text-base px-5 sm:justify-center' id="Experience">
      
      <div className="md:flex">
        {/* Left Column (Resume) */}
        <div className="md:w-1/2 p-4 my-4">
        <div className="section-title ">
        <h2 className="other-header ">Resume</h2>
      </div>
          <Resume />
        </div>

        {/* Divider (Visible on Large Screens) */}
        <div className="hidden md:block border-l border-blue-400 mx-4 my-4"></div>

        {/* Right Column (WorkExperience) */}
        <div className="md:w-1/2 p-4 my-4 ">
          <div className="section-title">
            <h2 className="other-header">Work Experience</h2>
          </div>
          <WorkExperience />
        </div>
      </div>
    </div>
  );
};

export default Page;
