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
            description="As an active member of the Literary Society at Dayananda Sagar College of Engineering, I have immersed myself in a vibrant environment of public speaking engagements, debates, literary contests, and event organization. I not only honed my oratory and critical thinking skills but also actively contributed to team practice sessions and event coordination. Additionally, I represented my college by competing in diverse competitive events and festivals across Bangalore, solidifying my passion for literature and communication in an academic setting."
            clubLink='https://www.linkedin.com/company/litsoc-dsi/'
            imageUrl='/LITSOCImg.jpg'
          />
        </div>
        <hr className="border-t border-blue-400 my-4 mx-auto w-[50%] " />
        {/* Second Volunteer Experience */}
        <div className="volunteer-container mb-8">
          <Volunteer
            avatarSrc="/PointBlank.png"
            clubName="PointBlank"
            description="As a volunteer member at PointBlank, I was an integral part of a dynamic, multidisciplinary team focused on competitive programming and innovation. Our team focused on renowned programming competitions like ACM ICPC and CodeChef Snackdown, honing my problem-solving abilities and algorithmic thinking. Our dedication and interest in Google Summer of Code underscored my commitment to open source and innovation, while my teamwork and communication skills were showcased through collaboration on team projects and contributions to the club's social media efforts.Our club worked towards submitting projects for Smart India Hackathon, which helped me and my team fine tune our project implementation. This experience not only enriched my technical skills but also instilled in me a passion for continuous learning and leadership in the ever-evolving tech landscape."
            clubLink='https://www.linkedin.com/company/point-blank-d/'
            imageUrl='/PointBlankImg.jpg'
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
            imageUrl='/PyschMicImg.jpg'
          />
        </div>
        
        <hr className="border-t border-blue-400 my-4 mx-auto w-[50%] " />
      </div>
    </div>
  );
};

export default Volunteering;
