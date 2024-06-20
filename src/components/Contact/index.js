import React, { useState } from 'react';
import './index.css';
import contact from '../../assets/Images/contact.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    emails: '',
    message: '',
  });
  const [loading, setLoading] = useState(false); // State for loading indicator

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when form is submitted
    try {
      const response = await fetch('https://portfolio-backend-tgdg.onrender.com/send', {
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
    } finally {
      setLoading(false); // Reset loading to false when request completes
    }
  };

  return (
    <div className='contact-container'>
      <div>
        <img src={contact} alt="Contact"/>
      </div>
      <div className='contact-input'>
        <h1>Contact Me</h1><br/>
        <form onSubmit={handleSubmit}>
          <input className="input-space"  type="text" name="name" value={formData.name} onChange={handleChange} required placeholder='Name'/><br/>
          <input className="input-space"  type="email" name="emails" value={formData.emails} onChange={handleChange} required placeholder='Email'/><br/>
          <textarea className="input-space"  name="message" value={formData.message} onChange={handleChange} required placeholder='Message'></textarea><br/>
          {loading ? (
            <button className='button-send' type="button" disabled>
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              Sending...
            </button>
          ) : (
            <button className='button-send' type="submit">Send</button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
