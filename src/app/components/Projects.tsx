import React from "react";
import ProjectCard from "./ProjectCard"; // Import your ProjectCard component

const Projects = () => {
  return (
    <div>
      <div
        id="Projects"
        className="page-section text-base px-6 my-5 py-10 section-bg"
        data-aos="fade-up"
      >
        <div className="section-title">
          <h2 className="other-header">Projects</h2>
        </div>

        <div className="flex flex-wrap justify-center">
        <ProjectCard
            name="Quiz Quest"
            imgSrc="/portfolio-quizquest-2.webp"
            id="quizquest"
            githubLink="https://github.com/Akash-Singh04/QuizQuest"
          />
        <ProjectCard
            name="EduSync"
            imgSrc="/portfolio-classsnapv2-1.webp"
            id='EduSync'
            githubLink="https://github.com/Akash-Singh04/EduSync"
          />
        <ProjectCard
            name="NoteBridge"
            imgSrc="/portfolio-notebridge-1.webp"
            id='NoteBridge'
            githubLink="https://github.com/Akash-Singh04/NoteBridge"
          />
        <ProjectCard
            name="Broucher"
            imgSrc="/portfolio-broucher-3.webp"
            id='Broucher'
            githubLink="https://github.com/Akash-Singh04/broucher"
          />
          
          <ProjectCard
            name="Motion Amplification Video"
            imgSrc="/portfolio-mav-1.webp"
            id="mav"
            githubLink="https://github.com/Akash-Singh04/Motion-Amplification-Video"
          />

          <ProjectCard
            name="ClassSnap"
            imgSrc="/portfoilio-classsnap-1.webp"
            id="classsnap"
            githubLink="https://github.com/Akash-Singh04/ClassSnap"
          />

          {/* Project Card 3 */}
          <ProjectCard
            name="SleepSense"
            imgSrc="/portfolio-sleepsense-1.webp"
            id="sleepsense"
            githubLink="https://github.com/Akash-Singh04/SleepSense"
          />

          {/* Project Card 4 */}
          <ProjectCard
            name="AI Image Generator"
            imgSrc="/portfolio-ai-image-1.webp"
            id="aiimage"
            githubLink="https://github.com/Akash-Singh04/AI-IMAGE-GENERATION-APP"
          />
          <ProjectCard
            name="Gen-Z Diaries"
            imgSrc="/portfolio-blogwebsite-1.webp"
            id="blogwebsite"
            githubLink="https://github.com/Akash-Singh04/Gen-Z-Diaries"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
