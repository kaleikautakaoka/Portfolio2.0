import React from 'react';

function Resume() {
  return (
    <section className="my-5">
       <h1 id="resume">Resume</h1>
      <div className="my-2">
      <p>
      <a href="https://www.linkedin.com/in/sachi-undefined-06a01b243/" target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
        <h3>Front-end Proficiencies</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>Tailwind</li>
          <li>Handlebars</li>
          <li>Heroku</li>
        </ul>
        <h3>Back-end Proficiencies</h3>
        <ul className="skills">
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
          <li>GIT</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
