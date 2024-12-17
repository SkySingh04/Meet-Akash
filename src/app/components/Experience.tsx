import React from 'react';
import Resume from './Resume';
import WorkExperience from './WorkExperience';

const Page = () => {
  const workExperienceImages1 = ['/Vance.png', '/Cloudsek.png' , '/Angelhack.png' , '/Gsoc.png'];
  const workExperienceImages2 = ['/Swipegen.png', '/Bolesale.png' , '/Codingzen.png'];

  return (
    <div
      className="page-section text-base px-5 sm:justify-center section-bg"
      id="Experience"
      data-aos="fade-up"
    >
      <div className="md:flex">
        {/* Left Column (Resume) */}
        <div className="md:w-1/3 p-4 my-4">
          <div className="section-title">
            <h2 className="other-header">Resume</h2>
          </div>
          <Resume />
        </div>

        {/* Middle Column (Work Experience 1) */}
        <div className="hidden md:block border-l border-blue-400 mx-4 my-4"></div>
        <div className="md:w-1/3 p-4 my-4">
          <div className="section-title">
            <h2 className="other-header">Work Experience</h2>
          </div>
          <WorkExperience images={workExperienceImages1} />
        </div>

        {/* Divider */}
        <div className="hidden md:block border-l border-blue-400 mx-4 my-4"></div>

        {/* Right Column (Work Experience 2) */}
        <div className="md:w-1/3 p-4 my-4">
          <div className="section-title">
            <h2 className="other-header">Work Experience</h2>
          </div>
          <WorkExperience images={workExperienceImages2} />
        </div>
      </div>
    </div>
  );
};

export default Page;
