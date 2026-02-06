import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      number: '01',
      title: 'Security Assessment & Audits',
      description: 'Comprehensive security assessments, penetration testing, and compliance audits to identify vulnerabilities and strengthen your security posture.'
    },
    {
      number: '02',
      title: 'Security Operations Center (SOC)',
      description: '24/7/365 monitoring and incident response services with expert security analysts protecting your infrastructure around the clock.'
    },
    {
      number: '03',
      title: 'Compliance & Risk Management',
      description: 'Navigate complex regulatory requirements including GDPR, HIPAA, PCI-DSS, and ISO 27001 with our compliance expertise.'
    },
    {
      number: '04',
      title: 'Security Consulting',
      description: 'Strategic security consulting to develop and implement comprehensive cybersecurity strategies aligned with your business objectives.'
    },
    {
      number: '05',
      title: 'Incident Response & Forensics',
      description: 'Rapid incident response and digital forensics services to minimize damage and recover quickly from security incidents.'
    },
    {
      number: '06',
      title: 'Security Training & Awareness',
      description: 'Build a security-aware culture through comprehensive training programs and awareness campaigns for your employees.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>

        <div className="services-list">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-number">{service.number}</div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
