import React from "react";
import SkillCard from "./SkillCard";
const Skills = () => {
  return (
    <div
      id="Skills"
      className="page-section text-base px-5 m-5"
      data-aos="fade-up"
    >
      <div className="section-title">
        <h2 className="other-header">Skills</h2>
      </div>
      <div className="flex justify-center  " data-aos="fade-up">
        <div id="cards">
          <SkillCard
            name="TypeScript"
            img_src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          />
          <SkillCard
            name="Next.js"
            img_src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
          />
          <SkillCard
            name="React"
            img_src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />
          <SkillCard
            name="Firebase"
            img_src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
          />
          <SkillCard
            name="Redux"
            img_src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
          />
          <SkillCard
            name="Golang"
            img_src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg"
          />
          <SkillCard
            name="Python"
            img_src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          />
          <SkillCard
            name="JavaScript"
            img_src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />
          <SkillCard
            name="Java"
            img_src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
          />
          <SkillCard
            name="C"
            img_src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
          />

          <SkillCard
            name="Bash"
            img_src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"
          />
          <SkillCard
            name="Node.js"
            img_src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          />
          <SkillCard
            name="Express"
            img_src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
          />
          <SkillCard
            name="Flask"
            img_src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
          />
          <SkillCard
            name="SqLite"
            img_src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-plain-wordmark.svg "
          />
          <SkillCard
            name="PostgreSQL"
            img_src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
          />
          <SkillCard
            name="MongoDB"
            img_src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
          />

          <SkillCard
            name="Docker"
            img_src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
          />
          <SkillCard
            name="Git"
            img_src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          />
          <SkillCard
            name="GitHub"
            img_src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          />
          <SkillCard
          name="Github Actions"
          img_src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg"/>
          <SkillCard
          name="AWS"
          img_src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
          />
          <SkillCard
            name="HTML5"
            img_src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          />
          <SkillCard
            name="CSS3"
            img_src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          />
          <SkillCard
            name="Bootstrap"
            img_src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" 
          />
          <SkillCard
            name="Tailwind CSS"
            img_src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg"
          />
          <SkillCard
            name="Php"
            img_src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
