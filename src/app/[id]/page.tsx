'use client'
import React from 'react'
import Navbar from "../components/Navbar";
import { useParams } from 'next/navigation'
import data from "../../../src/data"
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const page = () => {
    const params = useParams()
    const id:any = params.id
    const projectData = data[id as keyof typeof data]
    return (
      <div>
        <Navbar />
        <div className="project-details p-6 md:flex mt-20 items-center text-white"  data-aos="fade-up">
  <div className="md:w-1/2 md:pr-6 text-center">
    <img
      src={projectData.imgSrc}
      alt={projectData.name}
      className="w-full max-h-[100%] object-contain"
    />
    <a
      className="btn btn-ghost normal-case text-xl mt-4"
      href={projectData.githubLink}
    >
      <FontAwesomeIcon
        icon={faGithub}
        className="fas fa-check"
        style={{ color: "grey", fontSize: 50 }}
      />
    </a>
    
    <a
      className="btn btn-ghost normal-case text-xl mt-4"
      href={projectData.projectlink}
    >
      <FontAwesomeIcon
        icon={faYoutube}
        className="fas fa-check"
        style={{ color: "grey", fontSize: 50 }}
      />
    </a>
  </div>
          <div className="md:w-1/2">
          <div className="container ">
        <div className="section-title">
          <h2 className="other-header">{projectData.name}</h2>
            </div>
            </div>
            <p>{projectData.description}</p>
            <h2 className=' my-5'>Tech Stack: {projectData.techStack}</h2>
            <h2 className=' my-5'>Domain: {projectData.domain}</h2>
            <h2 className=' my-5'>Project Date: {projectData.projectdate}</h2>
          </div>
        </div>
        <Footer />
      </div>
    );
  
}

export default page