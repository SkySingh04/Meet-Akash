import React from 'react';
import ProjectCard from './ProjectCard'; // Import your ProjectCard component

const Projects = () => {
  return (
    <div>
      <div id="Projects" className="page-section text-base px-6 my-5 py-10 section-bg" data-aos="fade-up">
        <div className="section-title">
          <h2 className="other-header">Projects</h2>
        </div>
        
        <div className="flex flex-wrap justify-center">
          {/* Project Card 1 */}
          <ProjectCard
            name="Quiz Quest"
            imgSrc="/portfolio-quizquest-2.png"
            id="quizquest"
            githubLink='https://github.com/Akash-Singh04/QuizQuest'
          />


          <ProjectCard
            name="Motion Amplification Video"
            imgSrc="/portfolio-mav-1.png"
            id='mav'
            githubLink="https://github.com/Akash-Singh04/Motion-Amplification-Video"
          />

          {/* Project Card 2 */}
          <ProjectCard
            name="ClassSnap"
            imgSrc="/portfoilio-classsnap-1.png"
            id="classsnap"
            githubLink='https://github.com/Akash-Singh04/ClassSnap'
          />

          {/* Project Card 3 */}
          <ProjectCard
            name="SleepSense"
            imgSrc="/portfolio-sleepsense-1.png"
            id="sleepsense"
            githubLink='https://github.com/Akash-Singh04/SleepSense'
          />

          {/* Project Card 4 */}
          <ProjectCard
            name="AI Image Generator"
            imgSrc="/portfolio-ai-image-1.png"
            id="aiimage"
            githubLink='https://github.com/Akash-Singh04/AI-IMAGE-GENERATION-APP'
/>
          <ProjectCard
            name="Gen-Z Diaries"
            imgSrc="/portfolio-blogwebsite-1.png"
            id="blogwebsite"
            githubLink='https://github.com/Akash-Singh04/Gen-Z-Diaries'
          />
          {/* <ProjectCard
            name="Lofi Song Player"
            imgSrc="/portfolio-lofisongplayer-2.png"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
