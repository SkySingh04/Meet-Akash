import React from 'react';
import Volunteer from './Volunteer';

const Volunteering = () => {
  return (
    <div id="Volunteering" className="page-section text-base px-5">
      <div className="section-title">
        <h2 className="other-header">Volunteering</h2>
      </div>
      <div className="flex flex-col items-center">
        {/* First Volunteer Experience */}
        <div className="volunteer-container mb-8">
          <Volunteer
            avatarSrc="/LITSOC.png"
            clubName="LITSOC"
            description="Active member of the Literary Society at Dayananda Sagar College of Engineering, where I am actively participating in numerous public speaking engagements, debates, literary contests, and attending team practice sessions while also competing in various competitive events."
            clubLink='https://www.linkedin.com/company/litsoc-dsi/'
            imageUrl='/20.jpg'
          />
        </div>
        <hr className="border-t border-blue-400 my-4 mx-auto w-[50%] " />
        {/* Second Volunteer Experience */}
        <div className="volunteer-container mb-8">
          <Volunteer
            avatarSrc="/PointBlank.png"
            clubName="PointBlank"
            description="Member of an elite multidisciplinary team of programmers who focus on various competitions such as the ACM ICPC, CodeChef Snackdown, GSoC and Smart India Hackathon. Also contributed in multiple team projects, contributed to the social media team and attended weekly competitive programming contests."
            clubLink='https://www.linkedin.com/company/point-blank-d/'
            imageUrl='/20.jpg'
          />
        </div>
        
        <hr className="border-t border-blue-400 my-4 mx-auto w-[50%] " />
        {/* Third Volunteer Experience */}
        <div className="volunteer-container mb-8">
          <Volunteer
            avatarSrc="/PsychMic.png"
            clubName="PsychMic"
            description="An inspiring emcee team dedicated to moving crowds where I contributed my passion for hosting and organizing inter and intra college events and fests. Collaborating with this dynamic group allowed me to refine my communication and event management skills, while also fostering a sense of creativity and teamwork while elevating my love for public speaking."
            clubLink='https://www.linkedin.com/company/psychmic/'
            imageUrl='/20.jpg'
          />
        </div>
        
        <hr className="border-t border-blue-400 my-4 mx-auto w-[50%] " />
      </div>
    </div>
  );
};

export default Volunteering;
