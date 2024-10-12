import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Book Vibe"
          main="Read your favourite Book"
          link="https://ass-8-five.vercel.app/" // Book Vibe live link
        />
      </div>
      <div className="mt-8">
        <a
          href="https://ass-8-five.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 hover:underline"
        >
          Visit Book Vibe
        </a>
      </div>
    </div>
  );
};

export default Projects;
