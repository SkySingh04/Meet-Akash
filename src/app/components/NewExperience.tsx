import React from 'react';
import Resume from './Resume';
import WorkExperienceCard from './WorkExperienceCard';
import { workExperienceData } from '../../data';

type WorkExperience = {
  title: string;
  company: string;
  employmentType: string;
  duration: string;
  location?: string;
  description: string[];
  skills?: string[];
};

type WorkExperienceListProps = {
  experiences: WorkExperience[];
};

const WorkExperienceList: React.FC<WorkExperienceListProps> = ({ experiences }) => {
  return (
    <div className="flex flex-col items-center w-full">
      {experiences.map((experience, index) => (
        <WorkExperienceCard key={index} experience={experience} />
      ))}
    </div>
  );
};

const NewExperience = () => {
  return (
    <div
      className="page-section text-base px-5 py-2 sm:justify-center section-bg"
      id="Experience"
      data-aos="fade-up"
    >
      <div className="section-title">
        <h2 className="other-header">Work Experience</h2>
      </div>
      <WorkExperienceList experiences={workExperienceData} />
    </div>
  );
};

export default NewExperience;
