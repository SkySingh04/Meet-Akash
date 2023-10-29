import React from 'react';
type Project = {
    name: string;
    imgSrc?: string; // URL to the project image
    description?: string;
    techStack?: string; // List of technologies used in the project
    githubLink: string; // URL to the project's GitHub repository
  };
// Import necessary libraries and components

interface ProjectDetailsProps {
    onClose: () => void;
    project: Project; // Define a type for your project data
  }
  
  const ProjectDetailsDialog: React.FC<ProjectDetailsProps> = ({ onClose, project }) => {
    return (
        <div className="project-dialog">
          <div className="dialog-content">
            <h3>{project.name}</h3>
            <img src={project.imgSrc} alt={project.name} />
            {/* Add project details, tech stack, etc. */}
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      );
  };
  
  export default ProjectDetailsDialog;
  