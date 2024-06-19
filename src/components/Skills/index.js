// src/components/Contact.js
import React from 'react';
import { FaHtml5,FaBootstrap ,FaReact ,FaPython  } from "react-icons/fa";
import { IoLogoCss3,IoLogoJavascript ,IoLogoNodejs } from "react-icons/io5";
import { SiExpress,SiMongodb ,SiSqlite  } from "react-icons/si";
import './index.css'

const Skills = () => {
  return (
    <div className='cards-container'>
      <div className='card-container'>
        <FaHtml5 className='icons-size'/>
        <h1 className='Font-st'>HTML</h1>
        <p className='card-pera'>HTML is used to structure and present content on the web. It defines elements like headings, paragraphs, links, images, and other types of media to create webpages.</p>
      </div>
      <div className='card-container'>
        <IoLogoCss3 className='icons-size'/>
        <h1 className='Font-st'>CSS</h1>
        <p className='card-pera'>CSS is used to style and layout web pages, allowing you to control the appearance of elements, including colors, fonts, spacing, and positioning, ensuring a visually appealing and responsive design.</p></div>
      <div className='card-container'>
        <FaBootstrap className='icons-size'/>
        <h1 className='Font-st'>Boot Strap</h1>
        <p className='card-pera'>Bootstrap is used to quickly design responsive and mobile-first websites with its pre-built CSS and JavaScript components, ensuring a consistent and modern look across all devices.</p>
      </div>
      <div className='card-container'>
        <IoLogoJavascript  className='icons-size'/>
        <h1 className='Font-st'>Java Script</h1>
        <p className='card-pera'>JavaScript is used to add interactivity and dynamic functionality to websites, allowing for actions like form validation, animations, and updating content without reloading the page, enhancing user experience and engagement.</p>
      </div>
      <div className='card-container'>
        <FaReact  className='icons-size'/>
        <h1 className='Font-st'>React Js</h1>
        <p className='card-pera'>React.js is used to build interactive user interfaces for web applications efficiently, with its component-based architecture, virtual DOM, and state management, facilitating code reusability, performance optimization, and easier maintenance of complex applications.</p>
      </div>
      <div className='card-container'>
        <FaPython  className='icons-size'/>
        <h1 className='Font-st'>Python</h1>
        <p className='card-pera'>Python is used for web development due to its simplicity, versatility, and robust ecosystem of libraries and frameworks, enabling rapid development of scalable web applications.</p>
      </div>
      <div className='card-container'>
        <IoLogoNodejs className='icons-size'/>
        <h1 className='Font-st'>Node Js</h1>
        <p className='card-pera'>Node.js is used for web development because of its event-driven architecture, which allows for non-blocking, asynchronous I/O operations, making it ideal for building scalable, real-time web applications.</p>
      </div>
      <div className='card-container'>
        <SiExpress className='icons-size'/>
        <h1 className='Font-st'>Express Js</h1>
        <p className='card-pera'>xpress.js is used for web development due to its minimalist and flexible framework, providing a robust set of features for building web applications and APIs with Node.js, allowing for rapid development and customization.</p>
      </div>
      <div className='card-container'>
        <SiMongodb  ml5 className='icons-size'/>
        <h1 className='Font-st'>Mongo DB</h1>
        <p className='card-pera'>MongoDB is used for web development because of its flexible document-oriented data model, scalability, and ease of use, enabling developers to store and manage diverse types of data efficiently for web applications.</p>
      </div>
      <div className='card-container'>
        <SiSqlite  className='icons-size'/>
        <h1 className='Font-st'>SQLite</h1>
        <p className='card-pera'>SQLite is used for web development due to its lightweight and serverless nature, making it easy to integrate into applications and ideal for smaller-scale projects or scenarios where a full-fledged database server is not needed.</p>
      </div>
      
    </div>
  );
};

export default Skills;
