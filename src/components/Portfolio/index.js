import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Psychic-Weather-App',
      description: 'JavaScript/HTML/CSS',
      link: "https://kaleikautakaoka.github.io/Psychic-Weather-App/",
      repo: "https://github.com/kaleikautakaoka/Psychic-Weather-App"
    },
    {
      name: 'Whiz-Quiz',
      description: 'JavaScript/HTML/CSS',
      link: "https://kaleikautakaoka.github.io/Whiz-Quiz/",
      repo: "https://github.com/kaleikautakaoka/Whiz-Quiz"
    },
    {
      name: 'run-buddy',
      description: 'HTML/CSS',
      link: "https://kaleikautakaoka.github.io/Make-My-Day/",
      repo: "https://github.com/kaleikautakaoka/Make-My-Day"
    },
    {
      name: 'Make My Day',
      description: 'Jquery/JavaScript/HTML/CSS',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'Readme Wizard',
      description: 'Node.js/JavaScript/HTML/CSS',
      link: "https://github.com/kaleikautakaoka/Readme-Wizard",
      repo: "https://github.com/kaleikautakaoka/Readme-Wizard"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
