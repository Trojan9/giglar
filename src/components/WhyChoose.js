import React from 'react';
import './WhyChoose.css';

const WhyChoose = () => {
  const features = [
    {
      title: 'Expertise',
      description: 'Industry-leading cybersecurity professionals with decades of combined experience protecting organizations worldwide.'
    },
    {
      title: 'AI-Driven',
      description: 'Advanced AI and machine learning technologies for proactive threat detection and automated response capabilities.'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock monitoring and support ensuring your organization is protected at all times.'
    },
    {
      title: 'Compliance Ready',
      description: 'Stay compliant with industry regulations and standards with our comprehensive compliance management solutions.'
    }
  ];

  return (
    <section className="why-choose">
      <div className="container">
        <h2 className="section-title">Why Choose GiglarConcept</h2>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
