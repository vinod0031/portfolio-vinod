import React, { useState } from 'react';
import './index.css';
import contact from '../../assets/Images/contact.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    emails: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Message sent successfully!');
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      alert('Error: ' + error.toString());
    }
  };

  return (
    <div className='contact-container'>
      <div>
        <img src={contact} alt="image-error"/>
      </div>
      <div className='contact-input'>
      <h1>Contact Me</h1><br></br>
      <form onSubmit={handleSubmit}>
        
        <input className="input-space"  type="text" name="name" value={formData.name} onChange={handleChange} required placeholder='Name'/><br></br>
        
        <input className="input-space"  type="email" name="emails" value={formData.emails} onChange={handleChange} required placeholder='Email'/><br></br>
        
        <textarea className="input-space"  name="message" value={formData.message} onChange={handleChange} required placeholder='Message'></textarea><br></br>
        <button className='button-send' type="submit">Send</button>
      </form></div>
    </div>
  );
};

export default Contact;
