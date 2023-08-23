import React, { useState } from 'react';
// import BlogSpot from '../../assets/images/BlogSpot.png';
// import updatespir from '../../assets/images/updatespir.png';
// import mysqldb from '../../assets/images/mysqldb.png';
// import mysvg from '../../assets/images/mysvg.png';
// import readmewiz from '../../assets/images/readmewiz.png';
// import makemyday from '../../assets/images/makemyday.png';
// import whizQscreens from '../../assets/images/whicQscreens.png';
// import Project from "../../Project";
// import pinkPic from '../../assets/pinkPic.jpg';
import Projects from '../Project';

function Portfolio() {
    const [projects] = useState([

    {
      name: 'BlogSpot',
      description: 'Blog app that allows users to create, update, and delete blog posts. Created using Node.js, Express.js, Handlebars, Bcrypt, MySQL, and Sequelize. Deployed using Heroku.',
      link: 'https://blogspot123-a0dddad8d899.herokuapp.com/',
      image: 'BlogSpot'
  },
  {
      name: 'updatespir',
      description: 'A ecommerce backend that allows users to view, add, update, and delete products, categories, and tags. Created using Node.js, Express.js, MySQL, and Sequelize.',
      link: 'https://github.com/kaleikautakaoka/Spirit-Commerce',
      image: 'updatespir'
  },
  {
      name: 'mysqldb',
      description: 'Employee tracking database that allows users to view, add, and update employee information. Created using Node.js, Inquirer, and MySQL2.',
      link: 'https://github.com/kaleikautakaoka/Organization-Management',
      image: 'mysqldb'
  },
  {
      name: 'mysvg',
      description: 'SVG generator that allows users to create SVGs using the command line. Created using Node.js, Inquirer, and Javascript.',
      link: 'https://github.com/kaleikautakaoka/MY-SVG', 
      image: 'mysvg'
  },
  {
      name: 'readmewiz',
      description: 'A readme generator that allows users to create a readme file using the command line. Created using Node.js, Inquirer, and Javascript.',
      link: 'https://github.com/kaleikautakaoka/Readme-Wizard',
        image: 'readmewiz'
  },
  {
      name: 'makemyday',
      description: 'Calendar app that allows users to create a schedule and add events to their calendar. Created using HTML, CSS, Javascript, JQuery, and Moment.js.',
      link: 'https://kaleikautakaoka.github.io/Make-My-Day/',
        image: 'makemyday'
  },
  {
      name: 'whizQscreens',
      description: 'A quiz app that allows users to test their knowledge of Javascript. Created using HTML, CSS, Javascript, and JQuery.',
      link: 'https://kaleikautakaoka.github.io/Whiz-Quiz/',
        image: 'whizQscreens'
  },
  

]);

return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Projects
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
