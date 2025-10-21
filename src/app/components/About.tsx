import React from "react";
// import { Carousel } from './Carousel'
import ProfileCards from "./ProfileCards";
const About = () => {
  return (
    <section
      id="About"
      className="about text-base justify-center items-center flex page-section section-bg text-white"
      data-aos="fade-up"
    >
      <div className="container ">
        <div className="section-title">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
            <h2 className="other-header">About</h2>
            <a
              href="https://drive.google.com/file/d/1OB79ihJMqT9xPfIS0c5Tu6rQ_93hWvax/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download Resume
            </a>
          </div>
          <p>
            <i className="highlighttext">
              "It is never too late to be what you might have been"
            </i>{" "}
            - Famously said by George Eliot, I tend to wrap my personality and
            routine around those words.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center ">
          <div className="lg:col-span-1 w-full ml-[60px]">
            <ProfileCards />
          </div>
          <div className="lg:col-span-1 pt-4 lg:pt-0 content ">
            <h3 className="text-amber-500">
              Devops Engineer | Backend Developer | Infra Architect
            </h3>
            <p className="italic py-2">
              Team Leader, Public Speaker, Problem Solver
            </p>
            <div className="grid lg:grid-cols-2 grid-cols-1">
              <div>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Degree:</strong>{" "}
                    <span>Bachelor of Engineering</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>City:</strong> <span>Bengaluru, India</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Specialisation:</strong>{" "}
                    <span>Computer Science And Engineering</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Email:</strong>{" "}
                    <span className="text-center">
                      skysingh040@gmail.com
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <p>
        Throughout my academic journey, I've gained extensive experience as a  
        <i className='highlighttext'> DevOps Engineer</i> and <i className='highlighttext'>Backend Developer</i>.
        I currently handle all things related to Devops and Infra at <i className='highlighttext'>  <a href="https://finalround.ai" target="_blank" rel="noopener noreferrer">FinalroundAI</a></i>. I have previously worked as a Devops Engineer at <i className='highlighttext'>Aspora</i> and <i className='highlighttext'>Embeddings Co.</i> where I worked with AWS, Terraform and Infrastructure as Code and as a Backend Engineer at <i className='highlighttext'>CloudSek</i> with my work primarily focusing on Golang and microservices. I am active within the Open Source community and was selected for Google Summer of Code 2024 with <i className='highlighttext'>Keploy</i> and the Linux Foundation Mentorship 2025 with <i className='highlighttext'>LitmusChaos</i>. 
        <br />
        I was the team leader for <i className='highlighttext'> <a href="https://hackglobal.com/" target="_blank" rel="noopener noreferrer">Hackglobal Hackathon 2024</a></i> which happened in Singapore. I have also participated and won in 5 other hackathons, winning and getting podium finishes all through. I regularly volunteer as a mentor and judge for various hackathons as well. I also attended <i className='highlighttext'> <a href="https://winter.csa.iisc.ac.in/" target="_blank" rel="noopener noreferrer">ACM Winter School 2024</a></i> on Data Structures and Algorithms for Strings, with Applications to Search Engines and Computational Biology. 
        <br />
        I have also actively worked as a teacher and trainer both professionally at <i className='highlighttext'> <a href="https://swipegen.com/" target="_blank" rel="noopener noreferrer">SwipeGen</a></i> and <i className='highlighttext'> <a href="https://codingzen.com/" target="_blank" rel="noopener noreferrer">CodingZen</a></i> and during club meetings as the Team Lead at <i className='highlighttext'> <a href="https://www.linkedin.com/company/point-blank-d/" target="_blank" rel="noopener noreferrer">Point Blank</a></i> since I genuinely enjoy talking about tech and sharing my knowledge with peers and juniors alike. Recently I am enjoying learning and working on DevOps, Compilers and backend with languages like Golang and Rust. 
        <br />
        When I'm not tinkering with my laptop, you'll find me with a mic in my hand emceeing on stage or winning <a href="https://www.linkedin.com/posts/skysingh04_public-speaking-1st-place-winner-activity-7269031434172000256-B41v?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">Public Speaking Events across India</a>.
        </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
