import React from 'react';
import ProjectCard from './ProjectCard'; // Import your ProjectCard component

const Projects = () => {
  return (
    <div>
      <div id="Projects" className="page-section text-base px-6 my-5 py-10 ">
        <div className="section-title">
          <h2 className="other-header">Projects</h2>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center ">
          {/* Project Card 1 */}
          <ProjectCard
            title="Shoes Project 1"
            description="Description for Project 1."
            imageUrl="/portfoilio-classsnap-1.png"
          />

          {/* Project Card 2 */}
          <ProjectCard
            title="Shoes Project 2"
            description="Description for Project 2."
            imageUrl="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          />

          {/* Project Card 3 */}
          <ProjectCard
            title="Shoes Project 3"
            description="Description for Project 3."
            imageUrl="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
