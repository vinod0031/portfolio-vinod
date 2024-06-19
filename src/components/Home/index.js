import React from 'react';
import vinodImage from '../../assets/Images/vinod_new.png';
import './index.css'
const Home = () => {
return (
    <div className='Home-container'>
<div>
    <img className='vinod-image' src={vinodImage} alt='image-error'/>
</div>
<div className='page'>
    <h1 className='hi'>Hi,I'm <span className='vinod'>Vinod Kumar,</span></h1><br>
    </br><h1 className='heading-fulstack'>Full Stack Web Developer !</h1><br></br>
    <br></br>
    <p className='pera'>I am a passionate and skilled Full-Stack Developer with a solid foundation in both front-end and back-end technologies. With proven experience in developing responsive and user-friendly web applications using React.js, Node.js, and various database systems, I excel in collaborating with cross-functional teams to deliver high-quality software solutions. I am committed to continuous learning and staying updated with the latest industry trends.</p>
    <br></br><a href='https://drive.google.com/file/d/1Dxrme2__c73K_r9O1ek-DqAeODH-WJt3/view?usp=drive_link' target='_blank'><button className="button" >Download Resume</button></a>
</div>
    
</div>
);
};

export default Home;