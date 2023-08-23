
import React from 'react';
import reactPic from '../../assets/reactPic.jpg';
import Footer from '../Footer';

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
        <img src={reactPic} style={{ width: "80px", height: "80px" }} alt="cover" />
        <i className="fas fa-user-circle" style={{ fontSize: "96px" }}></i>
        </div>
        <p>
        Sachi Takaoka
        </p>
        <p>
       My name is Sachi and I am a developer with a background in education. I am a recent graduate of the Denver University Coding Bootcamp. I am passionate about creating applications that are user friendly and accessible to all. I am a team player and am excited to collaborate with others to create applications that are both functional and aesthetically pleasing. 
        </p>
        <Footer />
      </div> 
      
     
    </section>
  );
}

export default About;
