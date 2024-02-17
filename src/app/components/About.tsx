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
          <h2 className="other-header">About</h2>
          <p>
            <i className="highlighttext">
              "It is never too late to be what you might have been"
            </i>{" "}
            - Famously said by George Eliot, I tend to wrap my personality and
            routine around those words. I have a keen interest in{" "}
            <i className="highlighttext">
              Computer Science and Public Speaking.
            </i>{" "}
            I envision myself being a part of a great team, which can lift the
            company to great heights while simultaneously enhancing my personal
            growth and leading to my development as a Software Engineer. While
            Efficient Development and Problem Solving are skills that remain on
            the tip of my fingers, What sets me apart are my{" "}
            <i className="highlighttext">
              Effective Communication Skills and Team Leading Qualities.
            </i>
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center ">
          <div className="lg:col-span-1 w-full ml-[60px]">
            <ProfileCards />
          </div>
          <div className="lg:col-span-1 pt-4 lg:pt-0 content ">
            <h3 className="text-amber-500">
              Aspiring Software Engineer | Full Stack Web Developer | Student
            </h3>
            <p className="italic py-2">
              Team Leader,Public Speaker,Efficient Worker
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
                      akashsingh2210670 @gmail.com
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <p>
              Throughout my academic journey, I've gained extensive experience
              in software development as a <i className='highlighttext'>Full-Stack Developer</i>. I've also
              excelled as a <i className='highlighttext'>Technical Trainer</i>, guiding peers and seasoned
              professionals alike while also teaching coding to children ranging from <i className='highlighttext'>age 7 up to
              age 15</i>, solidifying my grasp of complex concepts through practical
              instruction. Beyond technical expertise, I've actively contributed
              to extracurricular activities like the Literary Society and Emcee
              Club, enhancing my oratory skills in front of large audiences <i className='highlighttext'>upto 2000 strong</i>.
              Leadership skills were honed leading a team of 80+ members in
              PointBlank, fostering collaboration and productivity. Furthermore,
              I'm committed to the open-source community, contributing to
              various projects and I am excited to  participate in programs like <i className='highlighttext'>Google Summer
              of Code, Hacktoberfest, and LFX</i>. Additionally, I've competed and
              in hackathons like the <i className='highlighttext'>Smart India Hackathon</i>, showcasing my
              ability to innovate under pressure. These experiences set me
              apart, positioning me as a versatile professional ready to excel
              and innovate across diverse domains.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
