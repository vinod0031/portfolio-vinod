// src/components/Footer.js
import React from 'react';
import './index.css'
import { FaGithub ,FaLinkedin,FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='fixfooter'>
    <footer>
      
      <div>
      <a className="clolorfont" href="https://github.com/vinod0031" target='_blank'><FaGithub /></a>
      <a className="clolorfont" href="https://www.linkedin.com/in/vinod-kumar-946166311/" target='_blank'><FaLinkedin /></a>
      <a className="clolorfont" href="https://www.facebook.com/LovesVinod" target='_blank'><FaFacebookSquare  /></a>

      </div><br></br><p>&copy; 2024 vinod kumar. All rights reserved.</p>
    </footer></div>
  );
};

export default Footer;
