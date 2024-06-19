import React from 'react';
import "./index.css";
import { MdOutlineVerifiedUser , MdEmail,MdWork  } from "react-icons/md";
import { FaSchoolFlag,FaMapLocationDot ,FaRegCalendarDays  } from "react-icons/fa6";
import { FaGraduationCap,FaPhoneAlt ,FaBirthdayCake } from "react-icons/fa";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";


const About = () => {
  return (
    <div><h1 className='qualification'>EDUCATION</h1>
    <div className='cards-container'>
      <div className='cards'>
        
        <p><FaSchoolFlag className='iconsize'/>Gandhi Institute of Technology and Management, Visakhapatnam</p>
        <p> <FaGraduationCap className='iconsize'/>B Com (Bachelor of Commerce) </p>
        <p><MdOutlineVerifiedUser className='iconsize'/>2023</p>
      </div>
      <div className='cards'>
        
        <p><FaSchoolFlag className='iconsize'/>Smt. B. Seetha Polytechnic, Bhimavaram </p>
        <p> <FaGraduationCap className='iconsize'/>Diploma Applied Electronics & Instrumentation Engineering</p>
        <p><MdOutlineVerifiedUser className='iconsize'/>2016</p>
      </div>
      <div className='cards'>
        
        <p><FaSchoolFlag className='iconsize'/>Z P P High School, East Vipparru</p>
        <p> <FaGraduationCap className='iconsize'/>Secondary School of Certificate</p>
        <p><MdOutlineVerifiedUser className='iconsize'/>2011</p>
      </div></div>
      <h1 className='qualification'>CERTIFICATIONS</h1>
    <div className='cards-container'>
      <div className='cards'>
        
        <p><FaSchoolFlag className='iconsize'/>Nxtwave, Hyderabad</p>
        <p> <FaGraduationCap className='iconsize'/>Industry Ready Certification in Full-stack Development</p>
        <p><MdOutlineVerifiedUser className='iconsize'/>2023</p>
      </div>
      <div className='cards'>
        
        <p><FaSchoolFlag className='iconsize'/>Lampinstitute, Hyderabad</p>
        <p> <FaGraduationCap className='iconsize'/>Frontend Development Certification </p>
        <p><MdOutlineVerifiedUser className='iconsize'/>2021</p>
      </div>
      </div>

      <h1 className='qualification'>WORK EXPERIENCE</h1>
    <div className='cards-container'>
      <div className='cards'>
        
        <p><HiMiniBuildingOffice className='iconsize'/>Innoit Labs Pvt Ltd , Hyderabad</p>
        <p> <MdWork className='iconsize'/>UI Developer </p>
        <p><FaRegCalendarDays  className='iconsize'/>Mar 2022 - Sep 2023
        </p>
      </div>
      <div className='cards'>
        
        <p><HiMiniBuildingOffice className='iconsize'/>Rubia Services (OPC) Pvt. Ltd, Hyderabad</p>
        <p> <MdWork className='iconsize'/>Backend Developer</p>
        <p><FaRegCalendarDays  className='iconsize'/> Sep 2023 -Mar2024</p>
      </div>
      </div>

      <h1 className='qualification'>PERSONAL DETAILS</h1>
    <div className='cards-container'>
      <div className='cards'>
      <p><CgProfile className='iconsize'/>VINOD KUMAR KETHA</p>
        <p><FaPhoneAlt className='iconsize'/>+91 88978-25325</p>
        <p> < MdEmail  className='iconsize'/>vinodkumarketha96@gmail.com</p>
        <p><FaBirthdayCake className='iconsize'/>26-02-1996</p>
        <p><FaMapLocationDot className='iconsize'/>Alwyn colony, kukatpally, Hyderabad, Telangana, 500072</p>
        
      </div>
      
      </div>

    </div>
  );
};

export default About;