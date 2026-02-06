import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('Sending message...');
    setIsError(false);

    try {
      const response = await fetch('https://geynius-ai-h43u4.ondigitalocean.app/api/v1/email/send-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsError(false);
        setFormStatus('Message sent successfully! We will get back to you soon.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          message: ''
        });

        // Clear success message after 5 seconds
        setTimeout(() => {
          setFormStatus('');
        }, 5000);
      } else {
        setIsError(true);
        setFormStatus(data.error?.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setIsError(true);
      setFormStatus('Unable to send message. Please make sure the server is running or contact us directly at info@giglarconcept.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Ready to secure your digital infrastructure? Contact us today.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="info-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <span>info@giglarconcept.com</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
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
              <label htmlFor="email">Email</label>
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
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">Service Interested In</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                <option value="Security Managed Services">Security Managed Services</option>
                <option value="Security Transformation">Security Transformation</option>
                <option value="Threat Exposure Management">Threat Exposure Management</option>
                <option value="Identity & Access Management">Identity & Access Management</option>
                <option value="Secure Network Access">Secure Network Access</option>
                <option value="Managed Detection & Response">Managed Detection & Response</option>
                <option value="Cyber Recovery">Cyber Recovery</option>
                <option value="Cloud Security">Cloud Security</option>
                <option value="General Consultation">General Consultation</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {formStatus && <div className={`form-message ${isError ? 'error' : 'success'}`}>{formStatus}</div>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
