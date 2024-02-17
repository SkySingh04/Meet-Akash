'use client'
import React, { useState } from "react";
import ProjectCard from "./ProjectCard"; // Import your ProjectCard component
import { projectDataSet } from "@/data"; // Importing projectDataSet from your data file

const Projects = () => {
  const [selectedKeywords, setSelectedKeywords] = useState<any>([]); // State to hold selected keywords

  // Extract unique keywords from projectDataSet
  const allKeywords = Array.from(
    new Set(Object.values(projectDataSet).flatMap((project) => project.keywords))
  );

  // Function to handle keyword selection
  const toggleKeyword = (keyword: string) => {
    if (selectedKeywords.includes(keyword)) {
      setSelectedKeywords(selectedKeywords.filter((kw: string) => kw !== keyword));
    } else {
      setSelectedKeywords([...selectedKeywords, keyword]);
    }
  };

  // Filter projects based on selected keywords
  const filteredProjects = Object.values(projectDataSet).filter((project) =>
    selectedKeywords.every((keyword:string) => project.keywords.includes(keyword))
  );

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

        {/* Filter keywords */}
        <div className="flex flex-wrap mb-4 justify-center ">
          {allKeywords.map((keyword) => (
            <span
              key={keyword}
              onClick={() => toggleKeyword(keyword)}
              className={`cursor-pointer px-3 py-1 rounded-[10px] mr-2 mb-2 text-bold ${
                selectedKeywords.includes(keyword)
                  ? "bg-amber-500 text-black"
                  : "bg-gray-700 text-gray-200"
              }`}
            >
              {keyword}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap justify-center">
          {/* Map through filtered projects */}
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              imgSrc={project.imgSrc}
              id={project.name}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
