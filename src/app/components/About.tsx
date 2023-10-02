import React from 'react'
// import { Carousel } from './Carousel'
import ProfileCards from './ProfileCards'
const About = () => {
  return (
    <section id="About" className="about text-base justify-center items-center flex page-section">
      <div className="container ">
        <div className="section-title">
          <h2 className="other-header">About</h2>
          <p>
            "It is never too late to be what you might have been." - Famously said by George Eliot, I tend to wrap my personality and routine around those words.<br />
            While Efficient Development and Problem Solving are skills that remain on the tip of my fingers, What sets me apart are my Effective Communication Skills and Team Leading Qualities.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center">
          <div className="lg:col-span-1 w-full ml-20"  data-aos="fade-right">
            {/* <Carousel /> */}
            <ProfileCards />
          </div>
          <div className="lg:col-span-1 pt-4 lg:pt-0 content" data-aos="fade-left">
            <h3>Aspiring Software Engineer | Full Stack Web Developer | Student</h3>
            <p className="italic py-2">
              Team Leader,Public Speaker,Efficient Worker
            </p>
            <div className="grid grid-cols-2">
              <div>
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>19</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Bengaluru, India</span></li>
                </ul>
              </div>
              <div>
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>B.E In CSE</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>akashsingh2210670@gmail.com</span></li>
                </ul>
              </div>
            </div>
            <p>
              I have a keen interest in computer science and public speaking. I envision myself being a part of a great team, which can lift the company to great heights while simultaneously enhancing my personal growth and leading to my development as a Software Engineer.
            </p>
            <br></br>
            <p>
              Coming to Bangalore about 2000km away from my hometown wasn't the easiest route, but it is the route I chose. I'm here to put myself out there for every opportunity up for grasp. I am also a natural team leader and efficient problem solver. I enjoy socializing and building connections with people in my free time. I'm also interested in web development and data science, while also learning new technologies every day. When I'm not tinkering with my laptop, I enjoy participating in debates, hackathons, and other social events that further help me build my personality and improve my network.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

