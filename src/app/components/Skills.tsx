import React from 'react'
import SkillCard from './SkillCard'
const Skills = () => {
  return (
    <div id="Skills" className='page-section text-base px-5 mb-5' data-aos="fade-up">
    <div className="section-title">
          <h2 className="other-header">Skills</h2>
          </div>
    <div className='flex justify-center  ' data-aos="fade-up" >
      <div id='cards'>
      
      <SkillCard
        name='Python'
      img_src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
      />
      <SkillCard
        name='JavaScript'
        img_src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
      />
      <SkillCard
        name='TypeScript'
        img_src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
      />
      <SkillCard
      name='Java'
      img_src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
    />
    <SkillCard
    name='C'
    img_src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg'
  />
  <SkillCard 
  name='React'
  img_src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'/>
  <SkillCard
  name='Next.js'
  img_src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'/> 
 <SkillCard
  name='Node.js'
  img_src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'/> 
  <SkillCard  
  name='Express'  
  img_src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'/> 
  <SkillCard
  name="Flask"
  img_src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg'/>
  <SkillCard
  name='SqLite'
  img_src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-plain-wordmark.svg '/>
  <SkillCard
  name='SQLAlchemy'
  img_src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original-wordmark.svg'/>
  <SkillCard    
  name='MongoDB'  
  img_src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'/> 
  <SkillCard
  name='Bootstrap'
  img_src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg'/>
  <SkillCard
  name='Tailwind CSS'
  img_src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'/>
  <SkillCard
  name='Docker'
  img_src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'/>
  <SkillCard
  name='Git'
  img_src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'/>
  <SkillCard
  name='GitHub'
  img_src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'/>
  <SkillCard
  name='HTML5'  
  img_src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'/>
  <SkillCard
  name='CSS3'
  img_src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'/>
  </div>
      </div>
      </div>
  )
}

export default Skills