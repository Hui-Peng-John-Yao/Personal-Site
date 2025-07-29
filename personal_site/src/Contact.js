import React, { useState } from 'react';
import './Contact.css';
import Header from './components/Header.js';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add email functionality or form submission logic
    console.log('Form submitted:', formData);
    // For now, just show an alert
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div>
      <Header />
      <div className="contact">
        <div className="contact-description">
          <h1>Get In Touch</h1>
          <p>I'm always interested in new opportunities and collaborations. Feel free to reach out!</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <h3>Email</h3>
                <p>john.yao@example.com</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <h3>Location</h3>
                <p>Seattle, WA</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">💼</span>
              <div>
                <h3>LinkedIn</h3>
                <a href="https://linkedin.com/in/john-yao" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/john-yao
                </a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🐙</span>
              <div>
                <h3>GitHub</h3>
                <a href="https://github.com/john-yao" target="_blank" rel="noopener noreferrer">
                  github.com/john-yao
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send Me a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;