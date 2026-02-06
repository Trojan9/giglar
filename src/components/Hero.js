import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Protect Your Digital Assets with Security-Integrated Business Solutions
          </h1>
          <p className="hero-subtitle">
            Comprehensive cybersecurity solutions addressing threats, data security, and regulatory compliance
          </p>
          <button className="cta-button" onClick={scrollToContact}>
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
