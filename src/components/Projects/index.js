// src/components/Projects.js
import React from 'react';
import './index.css'

const Projects = () => {
  return (
    <div>
      <div className='project-container'>
      <div >
        <a href='https://vinodnextwatch.ccbp.tech' target='_blank'>
        <img className='image-size' src={`${process.env.PUBLIC_URL}/images/nxtwatch.png`} alt="image-error"/></a>
      </div>
      <div className='description-container'>
        <h1 className='heading'>Nxt Watch</h1>
        <a className="linkpro" href='https://vinodnextwatch.ccbp.tech' target='_blank' >vinodnextwatch.ccbp.tech</a>
        
        <p className='pera'>Developed a YouTube-inspired platform allowing users to access video categories like Trending,
Gaming, and Saved videos, with search functionality and theme customization.<br></br>
• Crafted a responsive UI with React components for Login, Home, Trending, Gaming, and
Saved videos.<br></br>
• Established user authentication using JWT tokens and local storage.<br></br>
• Enabled secure navigation using React Router for protected routes.<br></br>
❖ Technologies used: React JS, JavaScript, CSS, Bootstrap, Routing, REST API Calls, Local
Storage, JWT Token, Authorization, Authentication.</p>
      </div>
      </div>
      <div className='project-container'>
      <div >
        <a href='https://vinodnxtcart.ccbp.tech' target='_blank'>
        <img className='image-size' src={`${process.env.PUBLIC_URL}/images/nxtcart.png`} alt="image-error"/></a>
      </div>
      <div className='description-container'>
        <h1 className='heading'>E Commerce Website</h1>
        <a className="linkpro" href='https://vinodnxtcart.ccbp.tech' target='_blank' >vinodnxtcart.ccbp.tech</a>
        
        <p className='pera'>A responsive website for browsing an extensive range of products.<br></br>
• Developed the frontend using React.js and JavaScript.<br></br>
• Integrated routing for smooth navigation between pages.<br></br>
• Utilized REST API calls for fetching and displaying product data.<br></br>
• Employed Local Storage and JWT tokens for user authentication and authorization.<br></br>
❖ Technologies used: HTML, React JS, JavaScript, CSS, Bootstrap, Routing, REST API Calls, Local
Storage, JWT Token, Authorization, Authentication.<br></br></p>
      </div>
      </div>
    </div>
  );
};

export default Projects;
